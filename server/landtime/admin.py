from django.contrib import admin
from .models import Product


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('title', 'price', 'is_exist', 'rating')
    list_filter = ('is_exist',)
    search_fields = ('title', 'short_description')
    ordering = ('-price',)
    list_editable = ('price', 'is_exist')

    def __str__(self):
        return self.title


#username = admin
#password = admin1234@