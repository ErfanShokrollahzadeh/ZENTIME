"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface Slide {
  id: number;
  title: string;
  tagline: string;
  img: string;
  accent?: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Crafted for Everyday",
    tagline: "Premium materials. Minimalist form.",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
    accent: "from-amber-400/30 to-yellow-500/30",
  },
  {
    id: 2,
    title: "Swiss Movement Inside",
    tagline: "Reliability you can feel each second.",
    img: "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?q=80&w=1200&auto=format&fit=crop",
    accent: "from-white/10 to-white/0",
  },
  {
    id: 3,
    title: "Sapphire Crystal Glass",
    tagline: "Engineered to resist life’s scratches.",
    img: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=1200&auto=format&fit=crop",
    accent: "from-amber-500/20 to-transparent",
  },
];

export default function IntroSlider() {
  const [index, setIndex] = useState(0);
  const active = slides[index];

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  function goTo(i: number) {
    setIndex(i < 0 ? slides.length - 1 : i % slides.length);
  }

  return (
    <section aria-label="Introduction" className="relative overflow-hidden border-b border-black/5 dark:border-white/10">
      <div className="relative mx-auto flex max-w-7xl items-stretch gap-6 px-6 py-6 lg:px-8">
        <div className="flex w-full flex-col justify-center md:w-1/2">
          <div className="inline-flex items-center gap-2 text-[11px] font-medium tracking-wide text-amber-600 dark:text-amber-400">
            <span className="h-1 w-1 rounded-full bg-amber-500" /> INTRO
          </div>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
            {active.title}
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {active.tagline}
          </p>
          <div className="mt-5 flex items-center gap-3">
            <button
              aria-label="Previous slide"
              onClick={() => goTo(index - 1)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 dark:border-white/20 dark:text-zinc-200 dark:hover:bg-white/10"
            >
              ‹
            </button>
            <button
              aria-label="Next slide"
              onClick={() => goTo(index + 1)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 dark:border-white/20 dark:text-zinc-200 dark:hover:bg-white/10"
            >
              ›
            </button>
            <div className="ml-2 flex gap-2">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={`h-2 w-2 rounded-full transition ${
                    i === index ? "bg-amber-500 scale-110" : "bg-zinc-300 dark:bg-zinc-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="relative hidden aspect-[5/4] flex-1 overflow-hidden rounded-2xl border border-black/10 md:block dark:border-white/15">
          <Image
            key={active.id}
            src={active.img}
            alt={active.title}
            fill
            sizes="(max-width: 1024px) 50vw, 40vw"
            className="object-cover will-change-transform animate-fadeIn"
            priority
          />
          <div className={`pointer-events-none absolute inset-0 bg-gradient-to-tr ${active.accent}`} />
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn { from { opacity: 0; transform: scale(1.02); } to { opacity: 1; transform: scale(1); } }
        .animate-fadeIn { animation: fadeIn 0.8s ease; }
      `}</style>
    </section>
  );
}
