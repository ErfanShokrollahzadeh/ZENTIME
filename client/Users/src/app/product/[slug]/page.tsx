import Image from "next/image";
import ProductGallery from "@/components/product/ProductGallery";
import AddToCart from "@/components/product/AddToCart";
import { notFound } from "next/navigation";
import ProductTopBar from "@/components/product/ProductTopBar";

const mockProducts: Record<string, {
  name: string;
  price: string;
  description: string;
  images: { src: string; alt: string }[];
  specs: string[];
}> = {
  "eclipse-chrono": {
    name: "Eclipse Chrono",
    price: "$349",
    description:
      "A balanced chronograph with sapphire glass, 316L steel, and Swiss movement for daily precision.",
    images: [
      { src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop", alt: "Front view" },
      { src: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=1600&auto=format&fit=crop", alt: "Side view" },
      { src: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1600&auto=format&fit=crop", alt: "Wrist shot" },
    ],
    specs: ["42mm case", "Sapphire crystal", "5ATM", "Swiss movement"],
  },
  "aurora-classic": {
    name: "Aurora Classic",
    price: "$289",
    description:
      "Minimalist elegance with a polished 40mm case, sapphire crystal, and dependable quartz movement.",
    images: [
      { src: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1600&auto=format&fit=crop", alt: "Front view" },
      { src: "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?q=80&w=1600&auto=format&fit=crop", alt: "Lifestyle" },
      { src: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=1600&auto=format&fit=crop", alt: "Details" },
    ],
    specs: ["40mm case", "Sapphire crystal", "5ATM", "Quartz movement"],
    },
    "nebula-steel": {
    name: "Nebula Steel",
    price: "$399",
    description:
      "A robust timepiece with a 42mm stainless steel case, sapphire crystal, and automatic movement.",
    images: [
      { src: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1600&auto=format&fit=crop", alt: "Front view" },
      { src: "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?q=80&w=1600&auto=format&fit=crop", alt: "Lifestyle" },
      { src: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=1600&auto=format&fit=crop", alt: "Details" },
    ],
    specs: ["40mm case", "Sapphire crystal", "5ATM", "Quartz movement"],
  },
};


    

export function generateStaticParams() {
  return Object.keys(mockProducts).map((slug) => ({ slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  // Await params per Next.js async dynamic route API (prevents warning)
  const { slug } = await params;
  const product = mockProducts[slug];

  if (!product) return notFound();

  return (
    <div className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
        <ProductTopBar slug={slug} />
        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-start">
          <ProductGallery images={product.images} />
          <div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">ZENTIME</p>
            <h1 className="mt-1 text-3xl font-semibold sm:text-4xl">{product.name}</h1>
            <p className="mt-4 text-zinc-700 dark:text-zinc-300">{product.description}</p>
            <div className="mt-6">
              <AddToCart price={product.price} id={slug} name={product.name} />
            </div>
            <div className="mt-10 grid gap-3">
              <h2 className="text-sm font-medium">Specifications</h2>
              <ul className="grid list-disc gap-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                {product.specs.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
            <div className="mt-10 rounded-2xl border border-black/5 bg-white p-5 dark:border-white/10 dark:bg-zinc-900">
              <h3 className="text-sm font-medium">Shipping & returns</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Free worldwide shipping. 30-day returns. Two-year limited warranty.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
