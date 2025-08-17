import { ProductsPageClient } from "@/components/products/ProductsPageClient";
import { type ProductRecord } from "@/data/products";

export const metadata = { title: "All products" };

async function fetchProducts(): Promise<ProductRecord[]> {
  const base = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8000";
  const res = await fetch(`${base}/api/products/?ordering=-created_at`, {
    // Revalidate every 5 minutes (adjust as needed)
    next: { revalidate: 300 },
  });
  if (!res.ok) {
    console.error("Failed to load products", res.status);
    return [];
  }
  const data = await res.json();
  // DRF page schema: {count, next, previous, results: [...]}
  const items = Array.isArray(data) ? data : data.results || [];
  return items.map((p: any) => {
    const primary = p.primary_image || {};
    return {
      id: p.id,
      name: p.title,
      slug: p.slug,
      brand: p.brand?.name || "",
      img: primary.url || "/placeholder.png",
      price: Number(p.price),
      originalPrice: p.compare_at_price ? Number(p.compare_at_price) : undefined,
      // Map rating_count as a stand-in for views until real analytics added
      views: p.rating_count || 0,
      // Use rating_count again (or 0) for sales placeholder
      sales: p.rating_count || 0,
      createdAt: p.created_at,
    } as ProductRecord;
  });
}

export default async function ProductsPage() {
  const products = await fetchProducts();
  return <ProductsPageClient products={products} />;
}
