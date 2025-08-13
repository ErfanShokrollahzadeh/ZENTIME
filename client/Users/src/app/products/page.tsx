import Image from "next/image";
import { CartIconButton } from "@/components/cart/CartIconButton";

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

export const metadata = {
  title: "All products",
};

export default function ProductsPage() {
  return (
    <div className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="mb-8 flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-semibold sm:text-3xl">All products</h1>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Explore our full ZENTIME collection.</p>
          </div>
          <CartIconButton size="sm" />
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
    </div>
  );
}
