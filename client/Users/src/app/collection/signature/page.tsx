import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Signature Collection",
  description: "Explore ZENTIME's flagship Signature Collection — balanced minimal designs with premium materials.",
};

const signature = [
  { name: "Aurum Mk II", price: "$899", badge: "Best seller", img: "/images/collection/watch-aurum.svg" },
  { name: "Graphite Pro", price: "$759", badge: "New", img: "/images/collection/watch-graphite.svg" },
  { name: "Onyx Minimal", price: "$629", badge: "Classic", img: "/images/collection/watch-onyx.svg" },
  { name: "Solstice Steel", price: "$689", badge: "Updated", img: "/images/collection/watch-solstice.svg" },
];

export default function SignatureCollectionPage() {
  return (
    <div className="relative">
      {/* Ambient gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60 blur-3xl">
        <div className="absolute left-[-15%] top-[-15%] h-72 w-72 rounded-full bg-amber-500/25" />
        <div className="absolute right-[-15%] bottom-[-15%] h-80 w-80 rounded-full bg-yellow-400/20" />
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-10 pt-14 lg:px-8 lg:pb-16 lg:pt-20">
        <div className="max-w-3xl">
          <Link href="/collection" className="text-xs font-medium text-amber-600 hover:underline">← Back to collection</Link>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Signature <span className="bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 bg-clip-text text-transparent">Collection</span>
          </h1>
          <p className="mt-4 max-w-prose text-sm text-zinc-600 dark:text-zinc-400">
            Our flagship line blends refined minimal geometry with premium 316L steel, sapphire crystal, and regulated Swiss movements. Each model is tuned for balance, legibility, and long‑term reliability.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/products" className="inline-flex items-center rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-100">Shop all products</Link>
            <a href="#watches" className="inline-flex items-center rounded-full border border-black/10 px-5 py-2.5 text-sm font-medium text-black hover:bg-zinc-100 dark:border-white/20 dark:text-white dark:hover:bg-white/10">Browse models</a>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section id="watches" className="mx-auto max-w-7xl px-6 pb-20 lg:px-8 lg:pb-28">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Flagship models</h2>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Core references defining the ZENTIME design language.</p>
          </div>
          <Link href="/products" className="text-sm font-medium text-amber-600 hover:underline">View all products</Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {signature.map(p => (
            <article key={p.name} className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white/70 p-5 backdrop-blur-md transition hover:shadow-[0_8px_40px_-10px_rgba(0,0,0,0.2)] dark:border-white/10 dark:bg-black/40">
              <div className="absolute inset-0 -z-10 opacity-70">
                <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_0%_0%,rgba(251,191,36,0.18),transparent_60%),radial-gradient(100%_120%_at_100%_100%,rgba(245,158,11,0.12),transparent_60%)]" />
              </div>
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-black/90 px-2 py-0.5 text-[10px] font-medium text-white dark:bg-white/90 dark:text-black">{p.badge}</span>
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{p.price}</span>
              </div>
              <div className="mt-6">
                <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-black/10 bg-black/80 dark:border-white/10">
                  <Image src={p.img} alt={p.name} fill sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 25vw, (min-width: 640px) 40vw, 80vw" className="object-contain p-6 transition-transform duration-300 group-hover:scale-[1.03]" />
                </div>
                <h3 className="mt-3 text-base font-semibold">{p.name}</h3>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">Automatic • Sapphire • 10 ATM</p>
              </div>
              <div className="mt-5 flex items-center gap-3">
                <Link href="/products" className="inline-flex items-center rounded-full bg-black px-4 py-1.5 text-xs font-medium text-white transition group-hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-100">Add to cart</Link>
                <Link href="/products" className="inline-flex items-center rounded-full border border-black/10 px-3 py-1.5 text-xs font-medium text-black transition hover:bg-zinc-100 dark:border-white/20 dark:text-white dark:hover:bg-white/10">Details</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
