from django.contrib import admin
from django.utils.html import format_html
from .models import Product, Brand, Category, ProductImage


class ProductImageInline(admin.TabularInline):
    model = ProductImage
    extra = 1
    fields = ("preview", "image", "alt_text", "is_primary", "sort_order")
    readonly_fields = ("preview",)
    ordering = ("sort_order", "id")

    def preview(self, obj):  # pragma: no cover - simple HTML snippet
        if obj.image and hasattr(obj.image, 'url'):
            return format_html('<img src="{}" style="height:60px;border-radius:4px;object-fit:cover;"/>', obj.image.url)
        return "–"
    preview.short_description = "Preview"


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = (
        'title', 'brand', 'sku', 'price', 'compare_at_price', 'discount', 'stock_qty', 'is_active', 'is_exist', 'rating'
    )
    list_filter = ('is_active', 'is_exist', 'brand', 'categories')
    search_fields = ('title', 'short_description', 'sku', 'brand__name')
    ordering = ('-created_at',)
    list_editable = ('price', 'compare_at_price',
                     'is_active', 'is_exist', 'stock_qty')
    prepopulated_fields = {"slug": ("title",)}
    readonly_fields = ('created_at', 'updated_at',
                       'discount', 'primary_image_preview')
    inlines = [ProductImageInline]
    raw_id_fields = ('brand',)
    filter_horizontal = ('categories',)
    list_select_related = ('brand',)

    fieldsets = (
        (None, {
            'fields': ('title', 'slug', 'brand', 'categories', 'short_description', 'description')
        }),
        ('Pricing', {
            'fields': ('price', 'compare_at_price', 'currency', 'discount')
        }),
        ('Inventory / Status', {
            'fields': ('sku', 'stock_qty', 'is_active', 'is_exist')
        }),
        ('Meta', {
            'fields': ('seo_title', 'seo_description', 'warranty_months', 'weight_grams')
        }),
        ('Media (legacy single image)', {
            'fields': ('image', 'primary_image_preview')
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at')
        }),
    )

    @admin.display(description="Discount %")
    def discount(self, obj):
        return obj.discount_percent or ""  # show empty if no discount

    @admin.display(description="Primary image")
    def primary_image_preview(self, obj):  # pragma: no cover - admin display
        img = obj.primary_image
        if img and img.image and hasattr(img.image, 'url'):
            return format_html('<img src="{}" style="height:80px;border-radius:6px;object-fit:cover;"/>', img.image.url)
        if obj.image and hasattr(obj.image, 'url'):
            return format_html('<img src="{}" style="height:80px;border-radius:6px;object-fit:cover;"/>', obj.image.url)
        return "–"

    actions = ["mark_active", "mark_inactive"]

    def mark_active(self, request, queryset):
        updated = queryset.update(is_active=True, is_exist=True)
        self.message_user(request, f"{updated} products marked active.")
    mark_active.short_description = "Mark selected products as active"

    def mark_inactive(self, request, queryset):
        updated = queryset.update(is_active=False)
        self.message_user(request, f"{updated} products marked inactive.")
    mark_inactive.short_description = "Mark selected products as inactive"


@admin.register(Brand)
class BrandAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug')
    search_fields = ('name', 'slug')
    prepopulated_fields = {"slug": ("name",)}


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug', 'parent')
    search_fields = ('name', 'slug')
    prepopulated_fields = {"slug": ("name",)}
    list_filter = ('parent',)


@admin.register(ProductImage)
class ProductImageAdmin(admin.ModelAdmin):
    list_display = ('product', 'is_primary', 'sort_order')
    list_editable = ('is_primary', 'sort_order')
    search_fields = ('product__title', 'product__sku')
    ordering = ('product', 'sort_order')

# username = admin
# password = admin1234$

# username = admin
# password = admin1234$
