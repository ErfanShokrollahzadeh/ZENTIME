# ZENTIME Monorepo (Next.js + Django)

A full-stack e-commerce starter combining a Next.js 15 frontend and a Django 5 REST API backend.

## Structure

- `client/Users/` — Next.js app (App Router), UI components, pages
  - `src/app/products/` — products listing (server component fetches API)
  - `src/app/product/[slug]/` — product detail page (fetch by slug from API)
  - `src/components/` — UI building blocks (cart, product gallery, etc.)
  - `src/data/` — temporary types/mocks; listing now fetches from API
- `server/` — Django project with DRF
  - `server/` — Django settings and project urls
  - `landtime/` — app with models, admin, serializers, views, urls
    - `models.py` — Product/Brand/Category, ProductImage, Attribute/Variant, PriceHistory
    - `serializers.py` — DRF serializers for product list/detail
    - `views.py` — `ProductViewSet` (list/search/filter/order; retrieve by slug)
    - `urls.py` — `/api/products/` routes via DRF router
    - `admin.py` — enhanced admin with image inline, filters, actions

Images uploaded via admin are saved under `MEDIA_ROOT` and served at `MEDIA_URL` in development.

## Prerequisites

- Node.js 18+ (Next.js 15)
- Python 3.11+ (Django 5)

## Quick start (dev)

Open two terminals (backend and frontend) from repo root.

Backend:

```bash
cd server
python -m venv .venv
source .venv/bin/activate
pip install --upgrade pip
pip install django djangorestframework django-filter Pillow
python manage.py makemigrations landtime
python manage.py migrate
python manage.py createsuperuser  # optional for admin
python manage.py runserver 0.0.0.0:8000
```

Frontend:

```bash
cd client/Users
npm install
# configure API base for local dev
printf "NEXT_PUBLIC_API_BASE=http://localhost:8000\n" > .env.local
npm run dev
```

- Frontend: http://localhost:3000
- Backend API: http://localhost:8000/api/products/
- Django Admin: http://localhost:8000/admin/

## API overview

- Quick reference

| Method | Path                       | Description                        | Sample                                             |
| ------ | -------------------------- | ---------------------------------- | -------------------------------------------------- |
| GET    | `/api/products/`           | List products (paginated)          | `/api/products/?search=watch&ordering=-created_at` |
| GET    | `/api/products/{slug}/`    | Product detail by slug             | `/api/products/eclipse-chrono/`                    |
| GET    | `/api/products/available/` | Only products with stock available | `/api/products/available/?brand__slug=zentime`     |

Supported query params:

- `brand__slug`, `categories__slug`, `is_active`
- `search`: matches title, sku, short_description, brand name
- `ordering`: `created_at`, `price`, `title` (prefix with `-` for desc)

## Models (highlights)

- Product: title, price, compare_at_price, currency, brand, categories, stock_qty, reserved_qty, rating, SEO, gallery, auto SKU/slug
- ProductImage: multiple images, unique primary per product
- Attribute / AttributeValue / ProductVariant: minimal variant system
- PriceHistory: optional tracking of price changes (manual create for now)

Inventory helpers on Product/Variant:

- `reserve(qty)`, `release(qty)`, `commit_sale(qty)` with row locks

## Frontend integration

- Products page fetches `GET /api/products` and maps to the UI grid
- Product detail page fetches `GET /api/products/{slug}` and renders gallery, price, and add-to-cart

To change the API base URL, set `NEXT_PUBLIC_API_BASE` in `client/Users/.env.local`.

## Development notes

- Media setup is enabled in Django settings:
  - `MEDIA_URL = '/media/'`
  - `MEDIA_ROOT = BASE_DIR / 'media'`
- In development, media files are served via `static()` in `server/server/urls.py`.
- If frontend runs on a different host/port in production, configure CORS.

## Testing

Run Django tests:

```bash
cd server
source .venv/bin/activate
python manage.py test landtime
```

What’s covered:

- SKU generation
- Unique primary image constraint enforcement
- Inventory reservation flow

## Next steps / optional

- Emit `PriceHistory` entries on price changes (signal or overridden save)
- Add price/rating filters and caching (e.g., Redis) to product list
- Expose variants/attributes in API serializers
- Add CORS (django-cors-headers) for cross-origin setups
- Seed data fixtures for easier local testing
