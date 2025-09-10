import ProductGallery from "@/components/product/ProductGallery";
import AddToCart from "@/components/product/AddToCart";
import { notFound } from "next/navigation";
import ProductTopBar from "@/components/product/ProductTopBar";

interface ApiProductDetail {
  id: number;
  title: string;
  slug: string;
  price: string;
  compare_at_price?: string | null;
  short_description: string;
  description: string;
  brand?: { name: string } | null;
  gallery: { url: string; alt: string }[];
}

async function fetchProduct(slug: string): Promise<ApiProductDetail | null> {
  const base = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:8000';
  const res = await fetch(`${base}/api/products/${slug}/`, { next: { revalidate: 300 } });
  if (!res.ok) return null;
  return res.json();
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await fetchProduct(slug);
  if (!product) return notFound();

  const displayPrice = `$${product.price}`; // backend returns numeric string
  const base = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:8000';
  const toAbsolute = (u: string) => (u.startsWith('http://') || u.startsWith('https://')) ? u : `${base}${u}`;
  const images = product.gallery?.length
    ? product.gallery.map(i => ({ src: toAbsolute(i.url), alt: i.alt }))
    : [{ src: '/placeholder.png', alt: product.title }];

  return (
    <div className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
        <ProductTopBar slug={slug} />
        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-start">
          <ProductGallery images={images} />
          <div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">{product.brand?.name || 'ZENTIME'}</p>
            <h1 className="mt-1 text-3xl font-semibold sm:text-4xl">{product.title}</h1>
            <p className="mt-4 text-zinc-700 dark:text-zinc-300">{product.description || product.short_description}</p>
            <div className="mt-6">
              <AddToCart price={displayPrice} id={slug} name={product.title} />
            </div>
            <div className="mt-10 rounded-2xl border border-black/5 bg-white p-5 dark:border-white/10 dark:bg-zinc-900">
              <h3 className="text-sm font-medium">Shipping & returns</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Free worldwide shipping. 30-day returns. Two-year limited warranty.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
