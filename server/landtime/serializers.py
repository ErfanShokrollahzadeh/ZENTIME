from rest_framework import serializers
from .models import Brand, Category, Product, ProductImage


class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = ["id", "name", "slug", "description", "logo"]


class CategoryMinimalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["id", "name", "slug", "parent"]


class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ["id", "image", "alt_text", "is_primary", "sort_order"]


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
                return {
                    "url": img.image.url,
                    "alt": img.alt_text or obj.title,
                }
            except ValueError:  # no file yet
                pass
        if obj.image:
            try:
                return {"url": obj.image.url, "alt": obj.title}
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
                return {
                    "url": img.image.url,
                    "alt": img.alt_text or obj.title,
                    "is_primary": True,
                }
            except ValueError:
                pass
        if obj.image:
            try:
                return {"url": obj.image.url, "alt": obj.title, "is_primary": True}
            except ValueError:
                return None
        return None

    def get_gallery(self, obj):
        # Use model helper for convenience
        return obj.gallery

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
