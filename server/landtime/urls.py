from django.urls import path, include
from rest_framework import routers
from .views import home, ProductViewSet, register, login, me, logout

router = routers.DefaultRouter()
router.register('products', ProductViewSet, basename='product')

urlpatterns = [
    path('', home, name='home'),
    path('api/', include(router.urls)),
    path('api/auth/register/', register, name='register'),
    path('api/auth/login/', login, name='login'),
    path('api/auth/me/', me, name='me'),
    path('api/auth/logout/', logout, name='logout'),
]
