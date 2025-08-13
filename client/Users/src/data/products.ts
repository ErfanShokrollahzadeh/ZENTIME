export interface ProductRecord {
  id: number;
  name: string;
  slug: string;
  brand: string;
  img: string;
  price: number; // current price
  originalPrice?: number; // if discounted
  views: number;
  sales: number;
  createdAt: string; // ISO date for potential future sorting
}

export const productsData: ProductRecord[] = [
  {
    id: 1,
    name: "Eclipse Chrono",
    slug: "eclipse-chrono",
    brand: "Zentime",
  img: "https://m.media-amazon.com/images/I/71Jdvtde4DL._SS1000_.jpg",
    price: 349,
    originalPrice: 399,
    views: 2350,
    sales: 740,
    createdAt: "2025-04-02",
  },
  {
    id: 2,
    name: "Aurora Classic",
    slug: "aurora-classic",
    brand: "Zentime",
    img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1200&auto=format&fit=crop",
    price: 289,
    views: 1980,
    sales: 680,
    createdAt: "2025-03-14",
  },
  {
    id: 3,
    name: "Nebula Steel",
    slug: "nebula-steel",
    brand: "Zentime",
    img: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=1200&auto=format&fit=crop",
    price: 399,
    views: 1650,
    sales: 520,
    createdAt: "2025-01-05",
  },
  {
    id: 4,
    name: "Zen Minimal",
    slug: "zen-minimal",
    brand: "Zentime",
    img: "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?q=80&w=1200&auto=format&fit=crop",
    price: 259,
    originalPrice: 299,
    views: 3100,
    sales: 910,
    createdAt: "2025-05-11",
  },
  {
    id: 5,
    name: "Field Sport",
    slug: "field-sport",
    brand: "Outdoor",
    img: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=1600&auto=format&fit=crop",
    price: 429,
    views: 880,
    sales: 190,
    createdAt: "2025-02-21",
  },
  {
    id: 6,
    name: "Onyx Diver",
    slug: "onyx-diver",
    brand: "Performance",
    img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1600&auto=format&fit=crop",
    price: 520,
    originalPrice: 560,
    views: 1490,
    sales: 340,
    createdAt: "2025-05-30",
  },
  {
    id: 7,
    name: "Graphite GMT",
    slug: "graphite-gmt",
    brand: "Performance",
    img: "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?q=80&w=1600&auto=format&fit=crop",
    price: 610,
    views: 1320,
    sales: 280,
    createdAt: "2025-04-20",
  },
  {
    id: 8,
    name: "Solstice 24K",
    slug: "solstice-24k",
    brand: "Limited",
  img: "https://m.media-amazon.com/images/I/71Jdvtde4DL._SS1000_.jpg",
    price: 1290,
    originalPrice: 1490,
    views: 4050,
    sales: 120,
    createdAt: "2025-06-01",
  }
];
