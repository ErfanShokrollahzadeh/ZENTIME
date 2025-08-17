from django.http import HttpResponse
from rest_framework import viewsets, mixins
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import Product
from .serializers import (
    ProductListSerializer,
    ProductDetailSerializer,
    ProductWriteSerializer,
)
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters


def home(request):  # Simple placeholder
    return HttpResponse("Welcome to Shop :)")


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.select_related(
        'brand').prefetch_related('categories', 'images')
    lookup_field = 'slug'
    filter_backends = [DjangoFilterBackend,
                       filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['brand__slug', 'categories__slug', 'is_active']
    search_fields = ['title', 'short_description', 'sku', 'brand__name']
    ordering_fields = ['created_at', 'price', 'title']
    ordering = ['-created_at']

    def get_queryset(self):
        qs = super().get_queryset()
        # Public API: only active & existing products by default
        if self.action in ['list', 'retrieve']:
            return qs.active()
        return qs

    def get_serializer_class(self):
        if self.action == 'list':
            return ProductListSerializer
        if self.action == 'retrieve':
            return ProductDetailSerializer
        return ProductWriteSerializer

    def perform_create(self, serializer):
        serializer.save()

    def perform_update(self, serializer):
        serializer.save()

    @action(detail=False, methods=['get'])
    def available(self, request):
        qs = self.filter_queryset(self.get_queryset().available())
        page = self.paginate_queryset(qs)
        serializer = ProductListSerializer(
            page, many=True, context={'request': request})
        return self.get_paginated_response(serializer.data)
