import { ProductsPageClient } from "@/components/products/ProductsPageClient";
import { type ProductRecord } from "@/data/products";

export const metadata = { title: "All products" };

async function fetchProducts(): Promise<ProductRecord[]> {
  const configuredBase = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8000";
  const bases = [configuredBase];
  if (configuredBase.includes("localhost")) {
    bases.push(configuredBase.replace("localhost", "127.0.0.1"));
  }

  let res: Response | null = null;
  let lastError: unknown = null;

  for (const baseCandidate of [...new Set(bases)]) {
    try {
      res = await fetch(`${baseCandidate}/api/products/?ordering=-created_at`, {
        next: { revalidate: 300 },
      });
      if (res.ok) break;
      console.error("Failed to load products", res.status, "from", baseCandidate);
    } catch (error) {
      lastError = error;
      console.error("Failed to reach products API at", baseCandidate, error);
    }
  }

  if (!res || !res.ok) {
    if (lastError) console.error("Products fetch error", lastError);
    return [];
  }

  const data = await res.json();
  // DRF page schema: {count, next, previous, results: [...]}
  const items = Array.isArray(data) ? data : data.results || [];
  const base = configuredBase;
  const toAbsolute = (u?: string) => {
    if (!u) return undefined;
    return u.startsWith("http://") || u.startsWith("https://") ? u : `${base}${u}`;
  };
  return items.map((p: any) => {
    const primary = p.primary_image || {};
    return {
      id: p.id,
      name: p.title,
      slug: p.slug,
      brand: p.brand?.name || "",
  img: toAbsolute(primary.url) || "/images/collection/watch-aurum.svg",
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
