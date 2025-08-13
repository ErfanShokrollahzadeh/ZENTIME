"use client";
import { useEffect, useState } from "react";
import type { ProductRecord } from "@/data/products";

export interface FiltersState {
  brands: string[];
  maxPrice: number;
  sort: string; // views|sales|price_asc|price_desc|discount
  onlyDiscount: boolean;
}

interface FilterPanelProps {
  products: ProductRecord[];
  value: FiltersState;
  onChange: (f: FiltersState) => void;
}

export function FilterPanel({ products, value, onChange }: FilterPanelProps) {
  const brands = Array.from(new Set(products.map(p => p.brand))).sort();
  const maxProductPrice = Math.max(...products.map(p => p.price));

  const set = (partial: Partial<FiltersState>) => onChange({ ...value, ...partial });

  // Keyboard accessibility for range input displayed progress
  const pct = Math.round((value.maxPrice / maxProductPrice) * 100);

  return (
    <aside className="space-y-8">
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Brands</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {brands.map(b => {
            const active = value.brands.includes(b);
            return (
              <button
                key={b}
                onClick={() => set({ brands: active ? value.brands.filter(x => x !== b) : [...value.brands, b] })}
                className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition ${active ? 'border-amber-500 bg-amber-500 text-white' : 'border-black/10 bg-white hover:bg-zinc-100 dark:border-white/10 dark:bg-zinc-900 dark:hover:bg-zinc-800'}`}
              >
                {b}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Max Price (${value.maxPrice})</h3>
        <div className="mt-4">
          <div className="relative">
            <input
              type="range"
              min={0}
              max={maxProductPrice}
              value={value.maxPrice}
              onChange={e => set({ maxPrice: Number(e.target.value) })}
              className="w-full cursor-pointer"
            />
            <div className="pointer-events-none absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 rounded-full bg-zinc-200 dark:bg-zinc-700" />
            <div style={{ width: pct + '%' }} className="pointer-events-none absolute top-1/2 h-1 -translate-y-1/2 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400" />
          </div>
          <div className="mt-2 flex justify-between text-[10px] font-medium text-zinc-500 dark:text-zinc-400">
            <span>$0</span>
            <span>${maxProductPrice}</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Sort by</h3>
        <div className="mt-3 grid gap-2 text-xs">
          {[
            ['views','Most views'],
            ['sales','Most sales'],
            ['price_asc','Price: low to high'],
            ['price_desc','Price: high to low'],
            ['discount','Biggest discount'],
          ].map(([k,label]) => (
            <label key={k} className="flex items-center gap-2">
              <input
                type="radio"
                name="sort"
                value={k}
                checked={value.sort === k}
                onChange={() => set({ sort: k })}
                className="accent-amber-500"
              />
              <span>{label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2 text-xs">
        <input
          id="discountOnly"
          type="checkbox"
          checked={value.onlyDiscount}
          onChange={e => set({ onlyDiscount: e.target.checked })}
          className="accent-amber-500"
        />
        <label htmlFor="discountOnly">Discounted only</label>
      </div>

      <button
        onClick={() => onChange({ brands: [], maxPrice: maxProductPrice, sort: 'views', onlyDiscount: false })}
        className="rounded-full border border-black/10 px-4 py-1.5 text-xs font-medium hover:bg-zinc-100 dark:border-white/10 dark:text-white dark:hover:bg-white/10"
      >
        Reset filters
      </button>
    </aside>
  );
}
