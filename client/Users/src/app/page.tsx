import Image from "next/image";
import SubscribeForm from "@/components/SubscribeForm";
import IntroSlider from "@/components/IntroSlider";

const products = [
  {
  id: 1,
    name: "Eclipse Chrono",
    price: "$349",
  slug: "eclipse-chrono",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Aurora Classic",
    price: "$289",
  slug: "aurora-classic",
    img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Nebula Steel",
    price: "$399",
  slug: "nebula-steel",
    img: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Zen Minimal",
    price: "$259",
  slug: "zen-minimal",
    img: "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Home() {
  const featureCards = [
    { title: "Sapphire glass", desc: "Scratch-resistant clarity for life." },
    { title: "5ATM water resistant", desc: "Rain, wash, repeat." },
    { title: "Swiss movement", desc: "Precision you can trust." },
    { title: "316L steel", desc: "Hypoallergenic, durable, sleek." },
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* New Hero */}
      <section className="relative isolate h-[92vh] min-h-[640px] overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-black via-zinc-900 to-neutral-900" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[120vmax] w-[120vmax] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[radial-gradient(circle_at_center,rgba(255,224,130,0.08),transparent_55%)]" />
        <div className="pointer-events-none absolute -top-24 right-10 -z-10 h-72 w-72 rounded-full bg-gradient-to-tr from-amber-400/30 via-yellow-500/20 to-white/0 blur-3xl" />
        <div className="mx-auto flex h-full max-w-7xl flex-col px-6 pt-24 lg:px-8">
          <div className="grid flex-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wide text-white/70 backdrop-blur">Summer 2025 Drop</p>
              <h1 className="mt-6 text-balance text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl">
                Time reimagined
                <span className="block bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">for modern life</span>
              </h1>
              <p className="mt-6 max-w-xl text-base text-white/70 sm:text-lg">
                Premium hand watches crafted with sapphire glass, surgical 316L steel, and precise Swiss movement—built to elevate every moment.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#collection" className="group inline-flex items-center rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition hover:bg-amber-100">
                  Shop collection <span className="ml-1 transition-transform group-hover:translate-x-0.5">→</span>
                </a>
                <a href="#features" className="inline-flex items-center rounded-full border border-white/20 px-7 py-3 text-sm font-medium text-white/90 hover:bg-white/10">
                  Why ZENTIME
                </a>
              </div>
              <div className="mt-10 flex flex-wrap gap-6 text-xs font-medium text-white/60">
                <span className="tracking-wide"><span className="text-white">2-yr</span> warranty</span>
                <span className="tracking-wide">Free worldwide shipping</span>
                <span className="tracking-wide">30-day returns</span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-amber-300/20 via-white/10 to-transparent blur-2xl" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop"
                  alt="Hero watch"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Slider Section (always visible) */}
      <section id="showcase" className="relative border-b border-black/5 bg-white/90 py-12 dark:border-white/10 dark:bg-zinc-900/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Highlights</h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">A quick glimpse at the engineering & finishes.</p>
            </div>
            <a href="#collection" className="text-sm font-medium text-amber-600 hover:underline">Shop collection →</a>
          </div>
          <IntroSlider />
        </div>
      </section>

      {/* Feature Rail */}
      <section id="features" className="relative border-y border-black/5 bg-white/90 backdrop-blur dark:border-white/10 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="flex snap-x gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {featureCards.map((f) => (
              <div key={f.title} className="group relative w-64 shrink-0 snap-start rounded-2xl border border-black/5 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-zinc-900">
                <div className="absolute -right-4 -top-4 h-14 w-14 rounded-full bg-gradient-to-br from-amber-300/40 to-yellow-200/20 blur-xl opacity-0 transition group-hover:opacity-100 dark:from-amber-500/20 dark:to-amber-400/10" />
                <h3 className="text-sm font-semibold tracking-tight">{f.title}</h3>
                <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Collection Redesigned */}
      <section id="collection" className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Signature Collection</h2>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Curated picks designed for every occasion.</p>
            </div>
            <a href="/collection/signature" className="inline-flex text-sm font-medium text-amber-600 hover:underline">View all</a>
          </div>
          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
            {/* Featured large card (first product) */}
            {products.slice(0,1).map(p => (
              <a key={p.id} href={`/product/${p.slug}`} className="group relative md:col-span-2 md:row-span-2 aspect-[5/6] overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm transition hover:shadow-xl dark:border-white/10 dark:bg-zinc-900">
                <Image src={p.img} alt={p.name} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-70 mix-blend-multiply" />
                <div className="absolute bottom-0 p-6">
                  <p className="text-xs font-medium tracking-wide text-amber-400">ZENTIME</p>
                  <h3 className="mt-1 text-xl font-semibold text-white">{p.name}</h3>
                  <span className="mt-3 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-black backdrop-blur">{p.price}</span>
                </div>
              </a>
            ))}
            {products.slice(1).map(p => (
              <a key={p.id} href={`/product/${p.slug}`} className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition hover:shadow-lg dark:border-white/10 dark:bg-zinc-900">
                <Image src={p.img} alt={p.name} fill sizes="(max-width:1024px) 50vw, 25vw" className="object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-4 py-3 backdrop-blur-sm bg-gradient-to-t from-black/60 to-transparent">
                  <div>
                    <p className="text-[10px] font-medium tracking-wide text-amber-300">ZENTIME</p>
                    <h3 className="text-sm font-medium text-white">{p.name}</h3>
                  </div>
                  <div className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-black">{p.price}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Craft / Materials Section */}
      <section id="craft" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-zinc-50 via-white to-zinc-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950" />
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-gradient-to-tr from-amber-300/40 to-yellow-200/20 blur-2xl dark:from-amber-500/20 dark:to-amber-400/10" />
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Crafted to endure</h2>
              <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-prose">Each ZENTIME piece is assembled from 316L hypoallergenic steel, sealed for 5ATM water resistance and capped with sapphire crystal for superior scratch defense. Our Swiss quartz movement is regulated for dependable accuracy with minimal service overhead.</p>
              <ul className="mt-6 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
                {['Sapphire crystal • Mohs 9 hardness','Swiss regulated movement','316L surgical grade steel','Precision-etched dial detailing'].map(i => (
                  <li key={i} className="flex items-start gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-amber-500" />{i}</li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#features" className="inline-flex items-center rounded-full bg-black px-6 py-3 text-xs font-medium text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200">Explore features</a>
                <a href="#collection" className="inline-flex items-center rounded-full border border-black/10 px-6 py-3 text-xs font-medium text-black hover:bg-zinc-100 dark:border-white/20 dark:text-white dark:hover:bg-white/10">View collection</a>
              </div>
            </div>
            <div className="relative order-1 aspect-[4/5] overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm dark:border-white/10 dark:bg-zinc-900 lg:order-2">
              <Image
                src="https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=1600&auto=format&fit=crop"
                alt="Case manufacturing closeup"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-transparent mix-blend-multiply" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5 text-xs text-white/70">
                Precision-machined 316L case • Micro-brushed finishing
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press / Logos band */}
      <section className="relative border-y border-black/5 bg-white/95 py-10 dark:border-white/10 dark:bg-zinc-900/70">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-10 opacity-80 grayscale">
            {['ModernTime','ChronoLab','DesignWatch','MotionDaily','QuartzMag'].map(brand => (
              <span key={brand} className="text-xs font-semibold tracking-wider text-zinc-500 dark:text-zinc-400">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Quote + Stats */}
      <section className="relative bg-white dark:bg-zinc-950">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-zinc-50 via-white to-zinc-100 dark:from-zinc-900 dark:via-black dark:to-zinc-900" />
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <div className="relative">
              <blockquote className="text-balance text-2xl font-light leading-relaxed text-zinc-700 dark:text-zinc-300">
                “A perfect fusion of clean design and precise mechanics. ZENTIME is redefining the everyday watch.”
              </blockquote>
              <div className="mt-6 text-sm text-zinc-600 dark:text-zinc-400">— Modern Time Journal</div>
            </div>
            <div className="grid grid-cols-3 gap-6 sm:gap-8">
              {[
                { k: '2 yr', v: 'Warranty' },
                { k: '30 d', v: 'Returns' },
                { k: '100%', v: 'QC Checked' },
              ].map(i => (
                <div key={i.k} className="relative overflow-hidden rounded-2xl border border-black/5 bg-white p-5 text-center shadow-sm dark:border-white/10 dark:bg-zinc-900">
                  <div className="text-xl font-semibold tracking-tight bg-gradient-to-r from-amber-500 to-yellow-400 bg-clip-text text-transparent">{i.k}</div>
                  <div className="mt-1 text-[11px] font-medium uppercase tracking-wide text-zinc-600 dark:text-zinc-400">{i.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-6 pb-28 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-black/5 bg-gradient-to-tr from-zinc-900 via-black to-zinc-900 px-10 py-16 shadow-2xl dark:border-white/10 sm:px-16 sm:py-20">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-amber-400/20 blur-3xl" />
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h3 className="text-3xl font-semibold text-white sm:text-4xl">Join the ZENTIME club</h3>
                <p className="mt-4 max-w-lg text-sm text-white/70">Get early access to releases and members-only pricing. No spam — just good time.</p>
                <div className="mt-6 max-w-md"><SubscribeForm /></div>
              </div>
              <div className="relative">
                <div className="relative mx-auto aspect-[4/5] max-w-xs overflow-hidden rounded-2xl border border-white/10">
                  <Image
                    src="https://images.unsplash.com/photo-1524594081293-190a2fe0baae?q=80&w=1200&auto=format&fit=crop"
                    alt="Watch showcase"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
