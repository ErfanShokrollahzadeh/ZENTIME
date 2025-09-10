"use client";

import { useState } from "react";

export default function ProductGallery({
  images,
}: {
  images: { src: string; alt: string }[];
}) {
  const [active, setActive] = useState(0);
  const current = images[active] ?? images[0];

  return (
    <div className="space-y-3">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm dark:border-white/10 dark:bg-zinc-900">
        <img
          src={current.src}
          alt={current.alt}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {images.map((img, idx) => (
            <button
              key={img.src}
              onClick={() => setActive(idx)}
              className={`relative aspect-[4/5] overflow-hidden rounded-xl border ${
                active === idx
                  ? "border-amber-400 ring-2 ring-amber-400/30"
                  : "border-black/5 dark:border-white/10"
              }`}
            >
              <img src={img.src} alt={img.alt} className="absolute inset-0 h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
