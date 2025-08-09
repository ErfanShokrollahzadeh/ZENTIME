import Image from "next/image";
import SubscribeForm from "@/components/SubscribeForm";

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
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Hero */}
      <section className="relative isolate">
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-zinc-900 to-neutral-900"
          aria-hidden
        />
        <div
          className="absolute -top-24 right-10 -z-10 h-72 w-72 rounded-full bg-gradient-to-tr from-amber-400/30 via-yellow-500/20 to-white/0 blur-3xl"
          aria-hidden
        />
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-16 sm:pt-28 sm:pb-24 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
                New drop • Summer 2025
              </p>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
                Timeless design. Modern engineering.
              </h1>
              <p className="mt-4 max-w-xl text-base text-white/70 sm:text-lg">
                Meet ZENTIME — premium hand watches crafted for everyday elegance. Built with sapphire glass, surgical steel, and Swiss movement.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#collection"
                  className="group inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-amber-100"
                >
                  Shop collection
                  <span className="ml-1 transition-transform group-hover:translate-x-0.5">→</span>
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white/90 hover:bg-white/10"
                >
                  Why ZENTIME
                </a>
              </div>
              <div className="mt-10 flex items-center gap-6 text-white/60">
                <div className="text-sm"><span className="text-white">2-yr</span> warranty</div>
                <div className="text-sm">Free worldwide shipping</div>
                <div className="text-sm">30-day returns</div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-amber-300/20 via-white/10 to-transparent blur-2xl" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur">
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

      {/* Features */}
      <section id="features" className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Sapphire glass",
                desc: "Scratch-resistant clarity for life.",
              },
              { title: "5ATM water resistant", desc: "Rain, wash, repeat." },
              { title: "Swiss movement", desc: "Precision you can trust." },
              { title: "316L steel", desc: "Hypoallergenic, durable, sleek." },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-900"
              >
                <h3 className="text-base font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground text-zinc-600 dark:text-zinc-400">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collection */}
      <section id="collection" className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl">Signature Collection</h2>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                Curated picks designed for every occasion.
              </p>
            </div>
            <a href="#" className="text-sm text-amber-600 hover:underline">
              View all
            </a>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((p) => (
              <a
                key={p.id}
        href={`/product/${p.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition hover:shadow-lg dark:border-white/10 dark:bg-zinc-900"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between px-4 py-3">
                  <div>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">ZENTIME</p>
                    <h3 className="text-base font-medium">{p.name}</h3>
                  </div>
                  <div className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100">
                    {p.price}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-gradient-to-b from-background to-zinc-50 dark:to-zinc-950">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-8">
          <blockquote className="text-balance text-xl font-light text-zinc-700 dark:text-zinc-300">
            “A perfect fusion of clean design and precise mechanics. ZENTIME is redefining the everyday watch.”
          </blockquote>
          <div className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">— Modern Time Journal</div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-6 pb-24 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-black/5 bg-gradient-to-tr from-zinc-900 via-black to-zinc-900 px-8 py-12 shadow-2xl dark:border-white/10 sm:px-12 sm:py-16">
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-amber-400/20 blur-3xl" />
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h3 className="text-2xl font-semibold text-white sm:text-3xl">Join the ZENTIME club</h3>
                <p className="mt-2 max-w-lg text-sm text-white/70">
                  Get early access to releases and members-only pricing. No spam — just good time.
                </p>
                <SubscribeForm />
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
