from rest_framework import serializers
from .models import Brand, Category, Product, ProductImage, Profile
from django.contrib.auth.models import User
from rest_framework.validators import UniqueValidator


class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = ["id", "name", "slug", "description", "logo"]


class CategoryMinimalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["id", "name", "slug", "parent"]


class ProductImageSerializer(serializers.ModelSerializer):
    url = serializers.SerializerMethodField()

    class Meta:
        model = ProductImage
        fields = ["id", "url", "alt_text", "is_primary", "sort_order"]

    def get_url(self, obj):
        request = self.context.get('request')
        if getattr(obj, 'image', None):
            try:
                url = obj.image.url
                return request.build_absolute_uri(url) if request else url
            except ValueError:
                return None
        return None


class ProductListSerializer(serializers.ModelSerializer):
    brand = BrandSerializer(read_only=True)
    discount_percent = serializers.SerializerMethodField()
    in_stock = serializers.SerializerMethodField()
    primary_image = serializers.SerializerMethodField()

    class Meta:
        model = Product
        # Keep list payload lean; gallery fetched via detail serializer
        fields = [
            "id", "title", "slug", "sku", "price", "compare_at_price", "currency",
            "discount_percent", "brand", "in_stock", "primary_image", "rating", "rating_count",
            "created_at"
        ]

    def get_discount_percent(self, obj):
        return obj.discount_percent

    def get_in_stock(self, obj):
        return obj.in_stock

    def get_primary_image(self, obj):
        img = obj.primary_image
        if img and getattr(img, "image", None):
            try:
                url = img.image.url
                req = self.context.get('request')
                return {
                    "url": req.build_absolute_uri(url) if req else url,
                    "alt": img.alt_text or obj.title,
                }
            except ValueError:  # no file yet
                pass
        if obj.image:
            try:
                url = obj.image.url
                req = self.context.get('request')
                return {"url": req.build_absolute_uri(url) if req else url, "alt": obj.title}
            except ValueError:
                return None
        return None


class ProductDetailSerializer(serializers.ModelSerializer):
    brand = BrandSerializer(read_only=True)
    categories = CategoryMinimalSerializer(many=True, read_only=True)
    images = ProductImageSerializer(many=True, read_only=True)
    discount_percent = serializers.SerializerMethodField()
    in_stock = serializers.SerializerMethodField()
    primary_image = serializers.SerializerMethodField()
    gallery = serializers.SerializerMethodField()
    url = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = [
            "id", "title", "slug", "sku", "price", "compare_at_price", "currency",
            "short_description", "description", "seo_title", "seo_description",
            "brand", "categories", "images", "gallery", "primary_image",
            "discount_percent", "in_stock", "stock_qty", "rating", "rating_count",
            "warranty_months", "weight_grams", "url", "created_at", "updated_at"
        ]
        read_only_fields = fields

    def get_discount_percent(self, obj):
        return obj.discount_percent

    def get_in_stock(self, obj):
        return obj.in_stock

    def get_primary_image(self, obj):
        img = obj.primary_image
        if img and getattr(img, "image", None):
            try:
                url = img.image.url
                req = self.context.get('request')
                return {
                    "url": req.build_absolute_uri(url) if req else url,
                    "alt": img.alt_text or obj.title,
                    "is_primary": True,
                }
            except ValueError:
                pass
        if obj.image:
            try:
                url = obj.image.url
                req = self.context.get('request')
                return {"url": req.build_absolute_uri(url) if req else url, "alt": obj.title, "is_primary": True}
            except ValueError:
                return None
        return None

    def get_gallery(self, obj):
        # Use model helper for convenience, but convert to absolute URLs
        req = self.context.get('request')
        gallery = []
        for item in obj.gallery:
            url = item.get('url')
            if url:
                gallery.append({
                    'url': req.build_absolute_uri(url) if req else url,
                    'alt': item.get('alt')
                })
        return gallery

    def get_url(self, obj):
        return obj.get_absolute_url()


# Generic serializer for create/update (admin API if needed)
class ProductWriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = [
            "title", "price", "compare_at_price", "currency", "short_description",
            "description", "brand", "categories", "is_exist", "is_active", "stock_qty",
            "image", "seo_title", "seo_description", "warranty_months", "weight_grams"
        ]

    def validate(self, attrs):
        price = attrs.get("price")
        compare_at = attrs.get("compare_at_price")
        if compare_at is not None and price is not None and compare_at <= price:
            attrs["compare_at_price"] = None  # normalize
        return attrs


class ProfileSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(source='user.email', required=False, validators=[
                                   UniqueValidator(queryset=User.objects.all())])
    first_name = serializers.CharField(
        source='user.first_name', required=False)
    last_name = serializers.CharField(source='user.last_name', required=False)

    class Meta:
        model = Profile
        fields = ['phone', 'email', 'first_name', 'last_name']

    def update(self, instance, validated_data):
        user_data = validated_data.pop('user', {})
        for attr, val in user_data.items():
            setattr(instance.user, attr, val)
        instance.user.save(update_fields=['email', 'first_name', 'last_name'])
        for attr, val in validated_data.items():
            setattr(instance, attr, val)
        instance.save(update_fields=['phone'])
        return instance
