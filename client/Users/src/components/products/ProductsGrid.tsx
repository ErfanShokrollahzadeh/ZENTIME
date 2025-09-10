"use client";
import Link from "next/link";
import type { ProductRecord } from "@/data/products";
import { useMemo } from "react";
import type { FiltersState } from "./FilterPanel";

interface ProductsGridProps {
  products: ProductRecord[];
  filters: FiltersState;
}

function formatPrice(p: ProductRecord) {
  const curr = `$${p.price}`;
  if (p.originalPrice && p.originalPrice > p.price) return `${curr}`;
  return curr;
}

export function ProductsGrid({ products, filters }: ProductsGridProps) {
  const list = useMemo(() => {
    let res = products.filter(p => p.price <= filters.maxPrice);
    if (filters.brands.length) res = res.filter(p => filters.brands.includes(p.brand));
    if (filters.onlyDiscount) res = res.filter(p => p.originalPrice && p.originalPrice > p.price);

    res = [...res];
    switch(filters.sort){
      case 'views': res.sort((a,b) => b.views - a.views); break;
      case 'sales': res.sort((a,b) => b.sales - a.sales); break;
      case 'price_asc': res.sort((a,b) => a.price - b.price); break;
      case 'price_desc': res.sort((a,b) => b.price - a.price); break;
      case 'discount': res.sort((a,b) => ((b.originalPrice??b.price)-b.price) - ((a.originalPrice??a.price)-a.price)); break;
    }
    return res;
  }, [products, filters]);

  if (!list.length) {
    return <div className="col-span-full rounded-xl border border-dashed border-black/10 p-10 text-center text-sm text-zinc-500 dark:border-white/10 dark:text-zinc-400">No products match current filters.</div>;
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {list.map(p => {
        const discountPct = p.originalPrice && p.originalPrice > p.price ? Math.round(((p.originalPrice - p.price)/p.originalPrice)*100) : 0;
        return (
          <Link
            key={p.id}
            href={`/product/${p.slug}`}
            className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition hover:shadow-lg dark:border-white/10 dark:bg-zinc-900"
          >
            {discountPct > 0 && (
              <span className="absolute left-2 top-2 rounded-full bg-amber-500/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur">-{discountPct}%</span>
            )}
            <div className="relative aspect-[4/5]">
              <img
                src={p.img}
                alt={p.name}
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="flex items-center justify-between px-4 py-3">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-wide text-amber-600">{p.brand}</p>
                <h3 className="text-sm font-medium">{p.name}</h3>
                <div className="mt-1 flex items-center gap-2 text-sm">
                  <span className="font-semibold">${p.price}</span>
                  {p.originalPrice && p.originalPrice > p.price && (
                    <span className="text-xs text-zinc-500 line-through">${p.originalPrice}</span>
                  )}
                </div>
              </div>
              <div className="flex flex-col items-end text-[10px] font-medium text-zinc-500 dark:text-zinc-400">
                <span>👁 {p.views}</span>
                <span>🛒 {p.sales}</span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
