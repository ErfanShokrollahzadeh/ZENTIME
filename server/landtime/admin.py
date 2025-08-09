from django.contrib import admin
from .models import Product, Brand, Category, ProductImage


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('title', 'price', 'is_exist', 'rating')
    list_filter = ('is_exist',)
    search_fields = ('title', 'short_description')
    ordering = ('-price',)
    list_editable = ('price', 'is_exist')

    def __str__(self):
        return self.title

class BrandAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)

class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)

class ProductImageAdmin(admin.ModelAdmin):
    list_display = ('product', 'image')
    search_fields = ('product__title',)


admin.site.register(Brand, BrandAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(ProductImage, ProductImageAdmin)

#username = admin
#password = admin1234$