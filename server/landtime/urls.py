from django.urls import path, include
from rest_framework import routers
from .views import home, ProductViewSet

router = routers.DefaultRouter()
router.register('products', ProductViewSet, basename='product')

urlpatterns = [
    path('', home, name='home'),
    path('api/', include(router.urls)),
]
