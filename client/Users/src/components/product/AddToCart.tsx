"use client";

import { useState } from "react";

export default function AddToCart({ price }: { price: string }) {
  const [qty, setQty] = useState(1);
  const [adding, setAdding] = useState(false);

  function add() {
    setAdding(true);
    setTimeout(() => {
      setAdding(false);
      // TODO: Connect to cart state or backend.
      alert(`Added ${qty} to cart`);
    }, 600);
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <div className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100">
          {price}
        </div>
        <span className="text-xs text-zinc-600 dark:text-zinc-400">Incl. taxes</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="inline-flex items-center rounded-xl border border-black/10 bg-white px-2 py-1 dark:border-white/10 dark:bg-zinc-900">
          <button
            className="h-8 w-8 rounded-md text-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
          >
            −
          </button>
          <span className="w-8 text-center text-sm">{qty}</span>
          <button
            className="h-8 w-8 rounded-md text-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
            onClick={() => setQty((q) => q + 1)}
          >
            +
          </button>
        </div>
        <button
          onClick={add}
          disabled={adding}
          className="inline-flex flex-1 items-center justify-center rounded-xl bg-black px-4 py-3 text-sm font-medium text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-white dark:text-black dark:hover:bg-zinc-100"
        >
          {adding ? "Adding…" : "Add to cart"}
        </button>
      </div>
      <p className="text-xs text-zinc-600 dark:text-zinc-400">Free worldwide shipping · 2-year warranty</p>
    </div>
  );
}
