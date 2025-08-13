"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "@/components/cart/CartContext";
import { CartIconButton } from "@/components/cart/CartIconButton";

interface ProductTopBarProps {
  slug: string;
}

export default function ProductTopBar({ slug }: ProductTopBarProps) {
  const { count } = useCart();
  const [showPing, setShowPing] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Mark mounted to avoid SSR/client mismatch for dynamic badge
  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    function onAdd() {
      setShowPing(true);
      const t = setTimeout(() => setShowPing(false), 1200);
      return () => clearTimeout(t);
    }
    window.addEventListener("cart:add", onAdd);
    return () => window.removeEventListener("cart:add", onAdd);
  }, []);

  const formatted = slug.replace(/-/g, " ");

  return (
    <div className="flex items-center justify-between border-b border-black/5 pb-4 dark:border-white/10">
      <div className="flex items-center gap-3 text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
        <Link href="/products" className="hover:text-amber-600">Products</Link>
        <span>/</span>
        <span className="font-medium text-zinc-700 dark:text-zinc-200">{formatted}</span>
      </div>
  <CartIconButton />
    </div>
  );
}
