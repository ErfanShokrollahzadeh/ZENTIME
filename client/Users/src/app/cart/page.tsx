"use client";

import { useCart } from "@/components/cart/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { items, count, total, updateQty, removeItem, clear } = useCart();

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Your Cart</h1>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{count} item{count!==1 && 's'} in cart</p>

      {items.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-dashed border-black/10 p-10 text-center dark:border-white/10">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">Your cart is empty.</p>
          <Link href="/products" className="mt-6 inline-flex rounded-lg bg-black px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-100">Browse products</Link>
        </div>
      ) : (
        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_280px]">
          <div className="space-y-6">
            {items.map(item => (
              <div key={item.id} className="flex items-start gap-5 rounded-xl border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-zinc-900">
                <div className="flex-1">
                  <h2 className="text-sm font-medium">{item.name}</h2>
                  <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">{item.price} · Added {new Date(item.addedAt).toLocaleDateString()}</p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="inline-flex items-center rounded-xl border border-black/10 bg-zinc-50 px-2 py-1 dark:border-white/10 dark:bg-zinc-800">
                      <button onClick={() => updateQty(item.id, item.qty - 1)} className="h-7 w-7 rounded-md text-lg hover:bg-zinc-100 dark:hover:bg-zinc-700">−</button>
                      <span className="w-8 text-center text-sm">{item.qty}</span>
                      <button onClick={() => updateQty(item.id, item.qty + 1)} className="h-7 w-7 rounded-md text-lg hover:bg-zinc-100 dark:hover:bg-zinc-700">+</button>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="text-xs text-red-600 hover:underline">Remove</button>
                  </div>
                </div>
                <div className="text-sm font-semibold">${(Number(item.price.replace(/[^0-9.]/g, '')) * item.qty).toFixed(2)}</div>
              </div>
            ))}
          </div>
          <div className="h-max rounded-xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-zinc-900">
            <h2 className="text-sm font-medium">Summary</h2>
            <div className="mt-4 flex justify-between text-sm">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="mt-1 flex justify-between text-sm text-zinc-600 dark:text-zinc-400">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="mt-6 flex justify-between border-t border-black/5 pt-4 text-sm font-semibold dark:border-white/10">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button disabled className="mt-6 w-full rounded-lg bg-black px-4 py-3 text-sm font-medium text-white opacity-80 dark:bg-white dark:text-black">
              Checkout (coming soon)
            </button>
            <button onClick={clear} className="mt-4 w-full rounded-lg border border-black/10 px-4 py-2 text-xs font-medium text-zinc-700 hover:bg-zinc-50 dark:border-white/10 dark:text-zinc-200 dark:hover:bg-zinc-800">Clear cart</button>
            <Link href="/products" className="mt-4 block text-center text-xs text-amber-600 hover:underline">Continue shopping</Link>
          </div>
        </div>
      )}
    </div>
  );
}
