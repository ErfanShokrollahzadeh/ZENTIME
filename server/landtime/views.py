from django.http import HttpResponse
from rest_framework import viewsets, mixins, status
from rest_framework.response import Response
from rest_framework.decorators import action, api_view, permission_classes
from .models import Product
from .serializers import (
    ProductListSerializer,
    ProductDetailSerializer,
    ProductWriteSerializer,
)
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.authtoken.models import Token
from django.views.decorators.csrf import csrf_exempt


def home(request):  # Simple placeholder
    return HttpResponse("Welcome to Shop :)")


@api_view(['POST'])
@permission_classes([AllowAny])
@csrf_exempt
def register(request):
    email = request.data.get('email')
    password = request.data.get('password')
    first_name = request.data.get('first_name', '')
    last_name = request.data.get('last_name', '')
    if not email or not password:
        return Response({'detail': 'email and password required'}, status=status.HTTP_400_BAD_REQUEST)
    if User.objects.filter(username__iexact=email).exists() or User.objects.filter(email__iexact=email).exists():
        return Response({'detail': 'user already exists'}, status=status.HTTP_400_BAD_REQUEST)
    user = User.objects.create_user(
        username=email, email=email, password=password, first_name=first_name, last_name=last_name)
    token, _ = Token.objects.get_or_create(user=user)
    return Response({'token': token.key, 'user': {'email': email, 'first_name': first_name, 'last_name': last_name}}, status=status.HTTP_201_CREATED)


@api_view(['POST'])
@permission_classes([AllowAny])
@csrf_exempt
def login(request):
    email = request.data.get('email')
    password = request.data.get('password')
    user = authenticate(username=email, password=password)
    if not user:
        try:
            found = User.objects.get(email__iexact=email)
            user = authenticate(username=found.username, password=password)
        except User.DoesNotExist:
            user = None
    if not user:
        return Response({'detail': 'invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)
    token, _ = Token.objects.get_or_create(user=user)
    return Response({'token': token.key, 'user': {'email': user.email, 'first_name': user.first_name, 'last_name': user.last_name}})


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def me(request):
    user = request.user
    return Response({'email': user.email, 'first_name': user.first_name, 'last_name': user.last_name})


@api_view(['POST'])
@permission_classes([IsAuthenticated])
@csrf_exempt
def logout(request):
    Token.objects.filter(user=request.user).delete()
    return Response({'detail': 'logged out'})


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
