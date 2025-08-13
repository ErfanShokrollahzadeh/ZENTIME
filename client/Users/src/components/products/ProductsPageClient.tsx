"use client";
import { CartIconButton } from "@/components/cart/CartIconButton";
import { productsData, type ProductRecord } from "@/data/products";
import { useState, useMemo } from "react";
import { FilterPanel, type FiltersState } from "@/components/products/FilterPanel";
import { ProductsGrid } from "@/components/products/ProductsGrid";
import Image from "next/image";

interface ProductsPageClientProps {
  products: ProductRecord[];
}

export function ProductsPageClient({ products }: ProductsPageClientProps) {
  const initial: FiltersState = {
    brands: [],
    maxPrice: Math.max(...products.map(p => p.price)),
    sort: 'views',
    onlyDiscount: false,
  };
  const [filters, setFilters] = useState<FiltersState>(initial);

  const topViewed = useMemo(() => [...products].sort((a,b)=>b.views-a.views).slice(0,3), [products]);
  const topSales = useMemo(() => [...products].sort((a,b)=>b.sales-a.sales).slice(0,3), [products]);
  const discounted = useMemo(() => products.filter(p=>p.originalPrice && p.originalPrice>p.price).slice(0,3), [products]);

  return (
    <div className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="mb-10 flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-semibold sm:text-3xl">All products</h1>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Filter and discover the perfect timepiece.</p>
          </div>
            <CartIconButton size="sm" />
        </div>

        {discounted.length > 0 && (
          <div className="mb-10 overflow-hidden rounded-2xl border border-amber-400/30 bg-gradient-to-r from-amber-400/15 via-yellow-300/10 to-amber-500/15 p-5 backdrop-blur-sm dark:border-amber-300/20">
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <span className="inline-flex items-center rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">Limited Offers</span>
              {discounted.map(d => {
                const pct = d.originalPrice ? Math.round(((d.originalPrice-d.price)/d.originalPrice)*100) : 0;
                return <span key={d.id} className="flex items-center gap-1 text-amber-800 dark:text-amber-200"><strong>{d.name}</strong> -{pct}%</span>;
              })}
            </div>
          </div>
        )}

        <div className="grid gap-12 lg:grid-cols-[250px_1fr]">
          <FilterPanel products={products} value={filters} onChange={setFilters} />
          <div className="space-y-14">
            <div className="space-y-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Browse</h2>
              <ProductsGrid products={products} filters={filters} />
            </div>

            <section className="space-y-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Most Viewed</h2>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {topViewed.map(p => (
                  <a key={p.id} href={`/product/${p.slug}`} className="group relative overflow-hidden rounded-xl border border-black/10 bg-white p-4 transition hover:shadow-md dark:border-white/10 dark:bg-zinc-900">
                    <div className="relative mb-3 aspect-[5/4] overflow-hidden rounded-lg">
                      <Image src={p.img} alt={p.name} fill sizes="(min-width:1024px) 30vw, 50vw" className="object-cover transition group-hover:scale-105" />
                    </div>
                    <div className="flex items-center justify-between text-xs font-medium">
                      <span className="text-zinc-700 dark:text-zinc-300">{p.name}</span>
                      <span className="text-amber-600">👁 {p.views}</span>
                    </div>
                  </a>
                ))}
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Top Sales</h2>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {topSales.map(p => (
                  <a key={p.id} href={`/product/${p.slug}`} className="group relative overflow-hidden rounded-xl border border-black/10 bg-white p-4 transition hover:shadow-md dark:border-white/10 dark:bg-zinc-900">
                    <div className="relative mb-3 aspect-[5/4] overflow-hidden rounded-lg">
                      <Image src={p.img} alt={p.name} fill sizes="(min-width:1024px) 30vw, 50vw" className="object-cover transition group-hover:scale-105" />
                    </div>
                    <div className="flex items-center justify-between text-xs font-medium">
                      <span className="text-zinc-700 dark:text-zinc-300">{p.name}</span>
                      <span className="text-amber-600">🛒 {p.sales}</span>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
