"use client";
import { useState } from "react";

interface Item { q: string; a: string; }

const data: Item[] = [
  { q: "How long is the warranty?", a: "All watches include a 24‑month international warranty covering manufacturing defects." },
  { q: "Do you ship worldwide?", a: "Yes. Free tracked worldwide shipping on all orders. Some regions may have extended delivery times." },
  { q: "Can I return a watch?", a: "You can return unused items within 30 days for a full refund. Return labels are provided for most countries." },
  { q: "What movement do you use?", a: "We use precise Swiss quartz movements selected for reliability and low maintenance." },
  { q: "Is the glass scratch resistant?", a: "Yes – sapphire crystal rated 9 on the Mohs scale for superior scratch resistance." },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-black/5 rounded-2xl border border-black/5 bg-white/70 backdrop-blur dark:divide-white/10 dark:border-white/10 dark:bg-black/40">
      {data.map((item, i) => {
        const active = open === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(active ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={active}
            >
              <span className="font-medium text-sm md:text-base">{item.q}</span>
              <span className={`inline-flex h-6 w-6 items-center justify-center rounded-full border text-xs transition ${active ? 'rotate-45 bg-amber-500 text-white border-amber-500' : 'border-black/10 dark:border-white/20'}`}>+</span>
            </button>
            <div
              className={`grid overflow-hidden transition-all duration-300 ${active ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
              <div className="px-5 pb-5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {item.a}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
