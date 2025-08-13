"use client";

import Link from "next/link";
import { useCart } from "@/components/cart/CartContext";
import { useEffect, useState } from "react";

interface CartIconButtonProps {
  className?: string;
  withBorder?: boolean;
  size? : 'sm' | 'md';
}

function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

export function CartIconButton({ className, withBorder = true, size = 'md' }: CartIconButtonProps) {
  const { count } = useCart();
  const [showPing, setShowPing] = useState(false);
  const [mounted, setMounted] = useState(false);

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

  const baseSize = size === 'sm' ? 'h-9 w-9' : 'h-11 w-11';

  return (
    <Link
      href="/cart"
      aria-label="Cart"
      className={cn(
        "relative inline-flex items-center justify-center rounded-xl bg-white text-zinc-800 shadow-sm transition hover:bg-zinc-100 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800",
        withBorder && "border border-black/10 dark:border-white/10",
        baseSize,
        className
      )}
    >
      <svg
        width={size === 'sm' ? 18 : 20}
        height={size === 'sm' ? 18 : 20}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
      {mounted && count > 0 && (
        <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-500 px-1 text-[10px] font-semibold text-white shadow ring-2 ring-white dark:ring-zinc-900">
          {count}
          {showPing && (
            <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-amber-400/60" />
          )}
        </span>
      )}
    </Link>
  );
}
