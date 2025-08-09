"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
  { name: "Collection", href: "/collection" },
  { name: "Why ZENTIME", href: "/why-zentime" },
  { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur dark:border-white/10 dark:bg-black/40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
        <Link href="/" className="relative inline-flex items-center gap-2">
          <span className="text-lg font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 bg-clip-text text-transparent">ZEN</span>
            <span>TIME</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 sm:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm text-zinc-700 transition hover:text-black dark:text-zinc-300 dark:hover:text-white"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/login"
            className="text-sm text-zinc-700 transition hover:text-black dark:text-zinc-300 dark:hover:text-white"
          >
            Sign in
          </Link>
          <Link
            href="/register"
            className="inline-flex items-center rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-black transition hover:bg-zinc-100 dark:border-white/20 dark:text-white dark:hover:bg-white/10"
          >
            Create account
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-100"
          >
            Products
          </Link>
        </nav>

        {/* Mobile */}
        <button
          aria-label="Toggle menu"
          className="sm:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/10 bg-white/70 text-zinc-800 backdrop-blur hover:bg-white dark:border-white/10 dark:bg-black/40 dark:text-zinc-100"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="sm:hidden border-t border-black/5 bg-white/80 px-6 pb-6 backdrop-blur dark:border-white/10 dark:bg-black/50">
          <div className="flex flex-col gap-3 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm text-zinc-800 hover:bg-zinc-100 dark:text-zinc-100 dark:hover:bg-zinc-800/60"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 text-sm text-zinc-800 hover:bg-zinc-100 dark:text-zinc-100 dark:hover:bg-zinc-800/60"
            >
              Sign in
            </Link>
            <Link
              href="/register"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-black hover:bg-zinc-100 dark:border-white/20 dark:text-white dark:hover:bg-zinc-800/60"
            >
              Create account
            </Link>
            <Link
              href="#"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-black px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-100"
            >
              Shop now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
