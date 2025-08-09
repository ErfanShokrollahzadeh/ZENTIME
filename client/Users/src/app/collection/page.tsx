import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Collection",
  description: "Explore ZENTIME's curated watch collections — Signature, Limited, and Essentials.",
};

const signature = [
  { name: "Aurum Mk II", price: "$899", badge: "Best seller", img: "/images/collection/watch-aurum.svg" },
  { name: "Graphite Pro", price: "$759", badge: "New", img: "/images/collection/watch-graphite.svg" },
  { name: "Onyx Minimal", price: "$629", badge: "Classic", img: "/images/collection/watch-onyx.svg" },
];

const limited = [
  { name: "Solstice 24K", price: "$1,290", badge: "Limited 250", img: "/images/collection/watch-solstice.svg" },
  { name: "Lunar Eclipse", price: "$1,090", badge: "Limited 500", img: "/images/collection/watch-lunar.svg" },
];

const essentials = [
  { name: "Everyday 36", price: "$299", img: "/images/collection/watch-everyday.svg" },
  { name: "Everyday 40", price: "$349", img: "/images/collection/watch-everyday.svg" },
  { name: "Everyday 42", price: "$379", img: "/images/collection/watch-everyday.svg" },
  { name: "Field Sport", price: "$429", img: "/images/collection/watch-everyday.svg" },
];

export default function CollectionPage() {
  return (
    <div className="relative">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60 blur-3xl">
        <div className="absolute left-[-10%] top-[-10%] h-72 w-72 rounded-full bg-amber-500/25" />
        <div className="absolute right-[-10%] bottom-[-10%] h-80 w-80 rounded-full bg-yellow-400/20" />
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-10 pt-14 lg:px-8 lg:pb-16 lg:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Our <span className="bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 bg-clip-text text-transparent">Collection</span>
          </h1>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            Precision engineering meets timeless design. Browse our signature lines, limited editions, and everyday essentials.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Link
              href="/products"
              className="inline-flex items-center rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-100"
            >
              Shop all products
            </Link>
            <a
              href="#signature"
              className="inline-flex items-center rounded-full border border-black/10 px-5 py-2.5 text-sm font-medium text-black transition hover:bg-zinc-100 dark:border-white/20 dark:text-white dark:hover:bg-white/10"
            >
              Explore signature
            </a>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur-md dark:border-white/10 dark:bg-black/40">
            <div className="absolute right-[-30px] top-[-40px] h-40 w-40 rotate-12 rounded-full bg-gradient-to-br from-amber-500/20 to-yellow-400/10" />
            <h3 className="text-lg font-semibold">Swiss-grade precision</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Ultra-reliable movements with ±5s/day accuracy. Tested under heat, cold, and impact.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur-md dark:border-white/10 dark:bg-black/40">
            <div className="absolute left-[-30px] bottom-[-40px] h-40 w-40 -rotate-12 rounded-full bg-gradient-to-tr from-amber-500/20 to-yellow-400/10" />
            <h3 className="text-lg font-semibold">Materials that last</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              316L steel, sapphire crystal, and water resistance up to 10 ATM for daily durability.
            </p>
          </div>
        </div>
      </section>

      {/* Signature series */}
      <section id="signature" className="mx-auto max-w-7xl px-6 pb-12 pt-12 lg:px-8 lg:pb-16">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Signature Series</h2>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Flagship designs — balanced, minimal, and precise.</p>
          </div>
          <Link href="/products" className="text-sm text-zinc-700 underline-offset-4 hover:underline dark:text-zinc-300">
            View all
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {signature.map((p, i) => (
            <article key={p.name} className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white/70 p-5 backdrop-blur-md transition hover:shadow-[0_8px_40px_-10px_rgba(0,0,0,0.2)] dark:border-white/10 dark:bg-black/40">
              <div className="absolute inset-0 -z-10 opacity-70">
                <div
                  className={`absolute inset-0 bg-[radial-gradient(120%_100%_at_0%_0%,rgba(251,191,36,0.18),transparent_60%),radial-gradient(100%_120%_at_100%_100%,rgba(245,158,11,0.12),transparent_60%)]`}
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-black/90 px-2 py-0.5 text-[10px] font-medium text-white dark:bg-white/90 dark:text-black">{p.badge}</span>
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{p.price}</span>
              </div>
              <div className="mt-6">
                <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-black/10 bg-black/80 dark:border-white/10">
                  <Image src={p.img} alt={p.name} fill sizes="(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 90vw" className="object-contain p-6 transition-transform duration-300 group-hover:scale-[1.03]" />
                </div>
                <h3 className="text-base font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Automatic movement • Sapphire • 10 ATM</p>
              </div>
              <div className="mt-5 flex items-center gap-3">
                <Link href="/products" className="inline-flex items-center rounded-full bg-black px-4 py-1.5 text-xs font-medium text-white transition group-hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-100">
                  Add to cart
                </Link>
                <Link href="/products" className="inline-flex items-center rounded-full border border-black/10 px-3 py-1.5 text-xs font-medium text-black transition hover:bg-zinc-100 dark:border-white/20 dark:text-white dark:hover:bg-white/10">
                  Details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Limited editions */}
      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8 lg:pb-16">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Limited Editions</h2>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Rare drops, numbered, and crafted in small batches.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {limited.map((p) => (
            <article key={p.name} className="relative overflow-hidden rounded-2xl border border-black/10 bg-white/70 p-5 backdrop-blur-md dark:border-white/10 dark:bg-black/40">
              <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(251,191,36,0.15),rgba(245,158,11,0.08),transparent_60%)]" />
              </div>
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-black/10 bg-white/70 px-2 py-0.5 text-[10px] font-medium text-black dark:border-white/10 dark:bg-black/40 dark:text-white">{p.badge}</span>
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{p.price}</span>
              </div>
              <div className="mt-6">
                <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-black/10 bg-black/80 dark:border-white/10">
                  <Image src={p.img} alt={p.name} fill sizes="(min-width: 1024px) 40vw, 90vw" className="object-contain p-6" />
                </div>
                <h3 className="text-base font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Hand-finished details • Numbered caseback</p>
              </div>
              <div className="mt-5">
                <Link href="/products" className="inline-flex items-center rounded-full bg-black px-4 py-1.5 text-xs font-medium text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-100">
                  See availability
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Essentials grid */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8 lg:pb-28">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Everyday Essentials</h2>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Built for daily wear, tuned for comfort and clarity.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {essentials.map((p, idx) => (
            <article key={p.name} className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white/70 p-4 backdrop-blur-md transition hover:shadow-[0_8px_40px_-10px_rgba(0,0,0,0.2)] dark:border-white/10 dark:bg-black/40">
              <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_0%_0%,rgba(253,230,138,0.15),transparent_55%),radial-gradient(80%_120%_at_100%_100%,rgba(234,179,8,0.08),transparent_55%)]" />
              </div>
              <div className="relative mb-3 aspect-square w-full overflow-hidden rounded-xl border border-black/10 bg-black/80 dark:border-white/10">
                <Image src={p.img} alt={p.name} fill sizes="(min-width: 1024px) 18vw, (min-width: 640px) 28vw, 45vw" className="object-contain p-5" />
              </div>
              <h3 className="text-sm font-semibold">{p.name}</h3>
              <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">Quartz • Sapphire</p>
              <p className="mt-3 text-sm font-medium text-zinc-800 dark:text-zinc-200">{p.price}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link
            href="/products"
            className="inline-flex items-center rounded-full border border-black/10 px-5 py-2.5 text-sm font-medium text-black transition hover:bg-zinc-100 dark:border-white/20 dark:text-white dark:hover:bg-white/10"
          >
            Browse all products
          </Link>
        </div>
      </section>
    </div>
  );
}
