import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why ZENTIME",
  description:
    "Why choose ZENTIME: precision movements, durable materials, minimalist design, and honest pricing backed by a 5‑year warranty.",
};

export default function WhyZentimePage() {
  const features = [
    {
      title: "Swiss‑grade precision",
      desc: "Accurate, reliable movements calibrated to ±5s/day and tested in multiple positions.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
    {
      title: "Materials that last",
      desc: "316L stainless steel, sapphire crystal, and water resistance up to 10 ATM.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l4 7-7 4 3 9 6-5 7 1-4-7 7-4-9-1-2-8-4 7z" />
        </svg>
      ),
    },
    {
      title: "Minimalist design",
      desc: "Clean dials and balanced proportions for a timeless look that works anywhere.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="3" /><line x1="3" y1="9" x2="21" y2="9" />
        </svg>
      ),
    },
    {
      title: "Fair, honest pricing",
      desc: "Premium specs without traditional retail markups. Quality you can feel—value you can trust.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 1v22" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7H14a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
    },
    {
      title: "5‑year warranty",
      desc: "Each watch is backed by a comprehensive warranty and lifetime service options.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      title: "Fast, secure shipping",
      desc: "Tracked delivery worldwide with protective packaging and hassle‑free returns.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        </svg>
      ),
    },
  ];

  const stats = [
    { label: "Happy customers", value: "10k+" },
    { label: "Avg. rating", value: "4.9/5" },
    { label: "QC timeframe", value: "72h" },
    { label: "Water resistance", value: "10 ATM" },
  ];

  return (
    <div className="relative">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60 blur-3xl">
        <div className="absolute left-[-10%] top-[-10%] h-72 w-72 rounded-full bg-amber-500/25" />
        <div className="absolute right-[-10%] bottom-[-10%] h-80 w-80 rounded-full bg-yellow-400/20" />
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-10 pt-14 lg:px-8 lg:pb-16 lg:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Why <span className="bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 bg-clip-text text-transparent">ZENTIME</span>
          </h1>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            We obsess over the details so you don’t have to—bringing together engineering, materials, and design for a watch you’ll wear every day.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Link
              href="/products"
              className="inline-flex items-center rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg:white dark:text-black dark:hover:bg-zinc-100"
            >
              Shop watches
            </Link>
            <Link
              href="/collection"
              className="inline-flex items-center rounded-full border border-black/10 px-5 py-2.5 text-sm font-medium text-black transition hover:bg-zinc-100 dark:border-white/20 dark:text-white dark:hover:bg-white/10"
            >
              Explore collection
            </Link>
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <article key={f.title} className="relative overflow-hidden rounded-2xl border border-black/10 bg:white/70 p-6 backdrop-blur-md transition dark:border-white/10 dark:bg-black/40">
              <div className="absolute right-[-30px] top-[-30px] h-36 w-36 rotate-12 rounded-full bg-gradient-to-br from-amber-500/20 to-yellow-400/10" />
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/70 text-zinc-900 dark:border-white/10 dark:bg-black/40 dark:text-zinc-100">
                {f.icon}
              </div>
              <h3 className="mt-4 text-base font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{f.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Craftsmanship section */}
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-12 lg:px-8 lg:pb-16">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur-md dark:border-white/10 dark:bg-black/40">
            <div className="absolute inset-0 -z-10 opacity-70">
              <div className="absolute inset-0 bg-[radial-gradient(100%_80%_at_0%_0%,rgba(251,191,36,0.14),transparent_55%),radial-gradient(80%_100%_at_100%_100%,rgba(245,158,11,0.10),transparent_55%)]" />
            </div>
            <h3 className="text-lg font-semibold">Built to be worn—every day</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              From the case finishing to the tactile click of the crown, every detail is engineered for longevity and comfort. Our watches undergo multi‑stage quality control, including temperature and shock tests, so they keep time—and their finish—year after year.
            </p>
            <ul className="mt-4 grid list-disc gap-1 pl-5 text-sm text-zinc-600 marker:text-amber-500 dark:text-zinc-400">
              <li>Sapphire crystal with anti‑reflective coating</li>
              <li>316L steel case and bracelet options</li>
              <li>Gaskets and seals rated to 10 ATM</li>
              <li>Precision‑matched hands and indices</li>
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white/70 p-6 text-center backdrop-blur-md dark:border-white/10 dark:bg-black/40">
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(251,191,36,0.12),rgba(245,158,11,0.08),transparent_60%)]" />
            </div>
            <div className="mx-auto grid max-w-md grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-xl border border-black/10 bg-white/70 p-4 dark:border-white/10 dark:bg-black/40">
                  <div className="text-2xl font-semibold">{s.value}</div>
                  <div className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">{s.label}</div>
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs text-zinc-500 dark:text-zinc-400">Numbers updated quarterly based on internal QA and customer feedback.</p>
          </div>
        </div>
      </section>

      {/* Trust & support */}
      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8 lg:pb-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {["5‑year warranty", "30‑day returns", "Lifetime service"].map((title) => (
            <article key={title} className="relative overflow-hidden rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur-md dark:border-white/10 dark:bg-black/40">
              <div className="absolute left-[-30px] bottom-[-30px] h-36 w-36 -rotate-12 rounded-full bg-gradient-to-tr from-amber-500/20 to-yellow-400/10" />
              <h3 className="text-base font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                We stand behind our craft. If anything isn’t right, our support team will make it right—quickly and clearly.
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/products"
            className="inline-flex items-center rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-100"
          >
            Find your watch
          </Link>
        </div>
      </section>
    </div>
  );
}
