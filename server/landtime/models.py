from django.db import models, transaction
from django.db.models import Q
from django.core.validators import MinValueValidator, MaxValueValidator
from django.utils.text import slugify
from django.utils import timezone
from django.core.exceptions import ValidationError
from django.contrib.auth.models import User
import random
import string

# Create your models here.


class Brand(models.Model):
    name = models.CharField(max_length=120, unique=True)
    slug = models.SlugField(max_length=140, unique=True, blank=True)
    description = models.TextField(blank=True)
    logo = models.ImageField(upload_to="brands/%Y/%m", blank=True, null=True)

    class Meta:
        ordering = ["name"]

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.slug:
            base = slugify(self.name) or "brand"
            slug = base
            i = 1
            while Brand.objects.filter(slug=slug).exclude(pk=self.pk).exists():
                slug = f"{base}-{i}"
                i += 1
            self.slug = slug
        return super().save(*args, **kwargs)


class Category(models.Model):
    name = models.CharField(max_length=120)
    slug = models.SlugField(max_length=140, unique=True, blank=True)
    parent = models.ForeignKey(
        "self", on_delete=models.CASCADE, related_name="children", blank=True, null=True
    )
    description = models.TextField(blank=True)

    class Meta:
        verbose_name_plural = "categories"
        ordering = ["name"]

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.slug:
            base = slugify(self.name) or "category"
            slug = base
            i = 1
            while Category.objects.filter(slug=slug).exclude(pk=self.pk).exists():
                slug = f"{base}-{i}"
                i += 1
            self.slug = slug
        return super().save(*args, **kwargs)


class Product(models.Model):
    title = models.CharField(max_length=200)
    # Use Decimal for money; keep non-negative
    price = models.DecimalField(
        max_digits=10, decimal_places=2, validators=[MinValueValidator(0)])
    compare_at_price = models.DecimalField(
        max_digits=10, decimal_places=2, validators=[MinValueValidator(0)], blank=True, null=True
    )
    currency = models.CharField(max_length=3, default="USD")
    short_description = models.TextField(max_length=500, blank=True)
    description = models.TextField(blank=True)
    sku = models.CharField(max_length=64, unique=True, blank=True, null=True)
    slug = models.SlugField(max_length=220, unique=True, blank=True, null=True)
    brand = models.ForeignKey(
        Brand, on_delete=models.PROTECT, related_name="products", null=True, blank=True)
    categories = models.ManyToManyField(
        Category, related_name="products", blank=True)
    is_exist = models.BooleanField(default=True)
    is_active = models.BooleanField(default=True)
    stock_qty = models.PositiveIntegerField(
        default=0, validators=[MinValueValidator(0)])
    reserved_qty = models.PositiveIntegerField(default=0, validators=[
                                               MinValueValidator(0)], help_text="Units reserved but not yet purchased")
    rating = models.FloatField(default=0.0, validators=[
                               MinValueValidator(0.0), MaxValueValidator(5.0)])
    rating_count = models.PositiveIntegerField(default=0)
    image = models.ImageField(
        upload_to="products/%Y/%m", blank=True, null=True)
    # Basic SEO / marketing metadata (optional)
    seo_title = models.CharField(max_length=255, blank=True)
    seo_description = models.CharField(max_length=320, blank=True)
    # Simple attributes placeholders (extend later or move to separate table if needed)
    warranty_months = models.PositiveIntegerField(
        default=24, help_text="Warranty length in months")
    weight_grams = models.PositiveIntegerField(blank=True, null=True)
    created_at = models.DateTimeField(default=timezone.now, editable=False)
    updated_at = models.DateTimeField(auto_now=True)

    # Custom queryset / manager for convenient filtering
    class ProductQuerySet(models.QuerySet):
        def active(self):
            return self.filter(is_active=True, is_exist=True)

        def available(self):
            return self.active().filter(stock_qty__gt=0)

    objects = ProductQuerySet.as_manager()

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        # Autogenerate slug from title if missing
        if not self.slug and self.title:
            base = slugify(self.title) or "product"
            slug = base
            i = 1
            while Product.objects.filter(slug=slug).exclude(pk=self.pk).exists():
                slug = f"{base}-{i}"
                i += 1
            self.slug = slug
        # Auto-generate SKU if absent
        if not self.sku:
            base = ''.join(ch for ch in (
                self.brand.name if self.brand else self.title) if ch.isalnum()).upper()[:6]
            if not base:
                base = "SKU"
            # Add random suffix to reduce collision risk

            def gen():
                suffix = ''.join(random.choices(
                    string.ascii_uppercase + string.digits, k=4))
                return f"{base}-{suffix}"
            candidate = gen()
            while Product.objects.filter(sku=candidate).exclude(pk=self.pk).exists():
                candidate = gen()
            self.sku = candidate
        # If compare_at_price is set but lower than price, swap or null it
        if self.compare_at_price is not None and self.compare_at_price <= self.price:
            # Keep logic simple: unset it rather than store invalid discount reference
            self.compare_at_price = None
        return super().save(*args, **kwargs)

    def clean(self):
        super().clean()
        if self.compare_at_price is not None and self.compare_at_price <= self.price:
            raise ValidationError({
                "compare_at_price": "Must be greater than price to represent a discount."
            })

    @property
    def discount_percent(self):
        if self.compare_at_price and self.compare_at_price > self.price and self.price > 0:
            return round(((self.compare_at_price - self.price) / self.compare_at_price) * 100, 2)
        return 0

    @property
    def in_stock(self):
        return (self.stock_qty - self.reserved_qty) > 0 and self.is_active and self.is_exist

    @property
    def available_qty(self):
        return max(0, self.stock_qty - self.reserved_qty)

    @property
    def primary_image(self):
        # Prefer explicitly marked primary; fallback to related images or legacy single image field
        img = self.images.filter(is_primary=True).first()
        return img or self.images.order_by('sort_order', 'id').first()

    @property
    def gallery(self):
        # Structured list for API serialization convenience
        images = []
        if self.image:  # legacy single image
            images.append({"url": self.image.url, "alt": self.title})
        for im in self.images.all():
            try:
                images.append(
                    {"url": im.image.url, "alt": im.alt_text or self.title})
            except ValueError:
                # image may not have a file yet
                continue
        return images

    def get_absolute_url(self):
        return f"/products/{self.slug}/"

    # Inventory helpers
    def reserve(self, qty: int):
        if qty <= 0:
            raise ValueError("qty must be > 0")
        with transaction.atomic():
            p = Product.objects.select_for_update().get(pk=self.pk)
            if p.available_qty < qty:
                raise ValueError("Not enough stock to reserve")
            p.reserved_qty += qty
            p.save(update_fields=['reserved_qty', 'updated_at'])
        return True

    def release(self, qty: int):
        if qty <= 0:
            return
        with transaction.atomic():
            p = Product.objects.select_for_update().get(pk=self.pk)
            p.reserved_qty = max(0, p.reserved_qty - qty)
            p.save(update_fields=['reserved_qty', 'updated_at'])

    def commit_sale(self, qty: int):
        if qty <= 0:
            raise ValueError("qty must be > 0")
        with transaction.atomic():
            p = Product.objects.select_for_update().get(pk=self.pk)
            if p.available_qty < qty:
                raise ValueError("Not enough stock to sell")
            p.stock_qty -= qty
            p.reserved_qty = max(0, p.reserved_qty - qty)
            p.save(update_fields=['stock_qty', 'reserved_qty', 'updated_at'])

    class Meta:
        indexes = [
            models.Index(fields=["slug"]),
            models.Index(fields=["sku"]),
            models.Index(fields=["is_active"]),
            models.Index(fields=["is_exist"]),
            models.Index(fields=["price"]),
            models.Index(fields=["created_at"]),
        ]
        ordering = ["-created_at"]


class ProductImage(models.Model):
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name="images")
    image = models.ImageField(upload_to="products/%Y/%m")
    alt_text = models.CharField(max_length=200, blank=True)
    is_primary = models.BooleanField(default=False)
    sort_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["sort_order", "id"]
        constraints = [
            models.UniqueConstraint(
                fields=["product"],
                condition=Q(is_primary=True),
                name="unique_primary_image_per_product",
            )
        ]

    def __str__(self):
        return f"Image #{self.pk} for {self.product.title}"

    def save(self, *args, **kwargs):
        # Default alt text
        if not self.alt_text:
            self.alt_text = self.product.title
        if self.is_primary:
            # Demote others first
            self.product.images.filter(is_primary=True).exclude(
                pk=self.pk).update(is_primary=False)
        super().save(*args, **kwargs)
        # Ensure at least one primary
        if not self.product.images.filter(is_primary=True).exists():
            if not self.is_primary:
                self.is_primary = True
                super().save(update_fields=['is_primary'])


class Attribute(models.Model):
    name = models.CharField(max_length=120, unique=True)
    slug = models.SlugField(max_length=140, unique=True, blank=True)

    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.slug:
            base = slugify(self.name) or 'attr'
            slug = base
            i = 1
            while Attribute.objects.filter(slug=slug).exclude(pk=self.pk).exists():
                slug = f"{base}-{i}"
                i += 1
            self.slug = slug
        return super().save(*args, **kwargs)


class AttributeValue(models.Model):
    attribute = models.ForeignKey(
        Attribute, on_delete=models.CASCADE, related_name='values')
    value = models.CharField(max_length=120)
    slug = models.SlugField(max_length=160, unique=True, blank=True)

    class Meta:
        unique_together = ('attribute', 'value')
        ordering = ['attribute__name', 'value']

    def __str__(self):
        return f"{self.attribute.name}: {self.value}"

    def save(self, *args, **kwargs):
        if not self.slug:
            base = slugify(f"{self.attribute.name}-{self.value}") or 'attr-val'
            slug = base
            i = 1
            while AttributeValue.objects.filter(slug=slug).exclude(pk=self.pk).exists():
                slug = f"{base}-{i}"
                i += 1
            self.slug = slug
        return super().save(*args, **kwargs)


class ProductVariant(models.Model):
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name='variants')
    title = models.CharField(max_length=200, blank=True)
    sku = models.CharField(max_length=64, unique=True, blank=True)
    price = models.DecimalField(
        max_digits=10, decimal_places=2, validators=[MinValueValidator(0)])
    stock_qty = models.PositiveIntegerField(default=0)
    reserved_qty = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)
    options = models.ManyToManyField(
        AttributeValue, related_name='variants', blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['product__id', 'id']
        indexes = [
            models.Index(fields=['sku']),
            models.Index(fields=['is_active']),
        ]

    def __str__(self):
        return self.title or f"Variant {self.pk} of {self.product.title}"

    @property
    def available_qty(self):
        return max(0, self.stock_qty - self.reserved_qty)

    def save(self, *args, **kwargs):
        if not self.sku:
            base = (self.product.sku or 'VAR')[:10]

            def gen():
                return f"{base}-{''.join(random.choices(string.ascii_uppercase + string.digits, k=3))}"
            candidate = gen()
            while ProductVariant.objects.filter(sku=candidate).exclude(pk=self.pk).exists():
                candidate = gen()
            self.sku = candidate
        return super().save(*args, **kwargs)

    def reserve(self, qty: int):
        if qty <= 0:
            raise ValueError('qty must be > 0')
        with transaction.atomic():
            v = ProductVariant.objects.select_for_update().get(pk=self.pk)
            if v.available_qty < qty:
                raise ValueError('Not enough variant stock')
            v.reserved_qty += qty
            v.save(update_fields=['reserved_qty', 'updated_at'])

    def release(self, qty: int):
        if qty <= 0:
            return
        with transaction.atomic():
            v = ProductVariant.objects.select_for_update().get(pk=self.pk)
            v.reserved_qty = max(0, v.reserved_qty - qty)
            v.save(update_fields=['reserved_qty', 'updated_at'])

    def commit_sale(self, qty: int):
        if qty <= 0:
            raise ValueError('qty must be > 0')
        with transaction.atomic():
            v = ProductVariant.objects.select_for_update().get(pk=self.pk)
            if v.available_qty < qty:
                raise ValueError('Not enough variant stock to sell')
            v.stock_qty -= qty
            v.reserved_qty = max(0, v.reserved_qty - qty)
            v.save(update_fields=['stock_qty', 'reserved_qty', 'updated_at'])


class PriceHistory(models.Model):
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name='price_history')
    price = models.DecimalField(max_digits=10, decimal_places=2)
    compare_at_price = models.DecimalField(
        max_digits=10, decimal_places=2, null=True, blank=True)
    recorded_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-recorded_at']
        indexes = [models.Index(fields=['product', 'recorded_at'])]

    def __str__(self):
        return f"{self.product.title} @ {self.price} ({self.recorded_at:%Y-%m-%d})"


class Profile(models.Model):
    user = models.OneToOneField(
        User, on_delete=models.CASCADE, related_name='profile')
    phone = models.CharField(max_length=20, blank=True)

    def __str__(self):
        return f"Profile for {self.user.username}"
