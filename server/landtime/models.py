from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from django.utils.text import slugify
from django.utils import timezone

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
    rating = models.FloatField(default=0.0, validators=[
                               MinValueValidator(0.0), MaxValueValidator(5.0)])
    rating_count = models.PositiveIntegerField(default=0)
    image = models.ImageField(
        upload_to="products/%Y/%m", blank=True, null=True)
    created_at = models.DateTimeField(default=timezone.now, editable=False)
    updated_at = models.DateTimeField(auto_now=True)

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
        return super().save(*args, **kwargs)

    class Meta:
        indexes = [
            models.Index(fields=["slug"]),
            models.Index(fields=["sku"]),
            models.Index(fields=["is_active"]),
            models.Index(fields=["is_exist"]),
        ]


class ProductImage(models.Model):
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name="images")
    image = models.ImageField(upload_to="products/%Y/%m")
    alt_text = models.CharField(max_length=200, blank=True)
    is_primary = models.BooleanField(default=False)
    sort_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["sort_order", "id"]

    def __str__(self):
        return f"Image #{self.pk} for {self.product.title}"
