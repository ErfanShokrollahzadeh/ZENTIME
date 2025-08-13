import FAQAccordion from "@/components/help/FAQAccordion";
import Link from "next/link";

export const metadata = {
  title: "Help Center",
  description: "Get answers, guides and support for your ZENTIME watch." ,
};

export default function HelpCenterPage() {
  return (
    <div className="relative">
      {/* Header / Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-amber-200/40 via-yellow-100 to-white dark:from-zinc-900 dark:via-black dark:to-zinc-900" />
        <div className="mx-auto max-w-5xl px-6 pt-20 pb-24 sm:pt-24 sm:pb-28 lg:px-8">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/80 px-3 py-1 text-[11px] font-medium tracking-wide text-amber-600 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-amber-400">Support • Help Center</p>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-black dark:text-white sm:text-5xl">How can we help?</h1>
            <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">Browse frequently asked questions, warranty details and quick guides. Still stuck? Reach out to our support team any time.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200">Contact support</Link>
              <a href="#faq" className="inline-flex items-center rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-black hover:bg-zinc-100 dark:border-white/20 dark:text-white dark:hover:bg-white/10">View FAQs</a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick cards */}
      <section className="mx-auto -mt-16 max-w-5xl px-6 pb-10 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {[
            { title: 'Track Order', desc: 'Check shipment status', href: '#', icon: 'M3 12h18M3 6h18M3 18h18' },
            { title: 'Warranty', desc: 'Coverage & claims', href: '#warranty', icon: 'M12 2l7 4v6c0 5-3.5 9.74-7 10-3.5-.26-7-5-7-10V6l7-4z' },
            { title: 'Returns', desc: 'Start a return', href: '#returns', icon: 'M4 4h9a4 4 0 0 1 0 8H4m9 0 3.5 3.5M13 12l3.5-3.5' },
            { title: 'Care Guide', desc: 'Keep your watch pristine', href: '#care', icon: 'M12 8v8m-4-4h8M5 3h14l2 4H3l2-4z' },
            { title: 'Shipping', desc: 'Times & regions', href: '#shipping', icon: 'M3 12h18M3 6h18M3 18h18' },
            { title: 'Movement', desc: 'Tech inside', href: '#movement', icon: 'M12 5v14m7-7H5' },
          ].map(card => (
            <a key={card.title} href={card.href} className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white/70 p-5 shadow-sm transition hover:shadow-md hover:bg-white dark:border-white/10 dark:bg-zinc-900/70 dark:hover:bg-zinc-900">
              <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gradient-to-tr from-amber-300/40 to-yellow-200/20 blur-2xl transition group-hover:scale-125 dark:from-amber-500/20 dark:to-amber-400/10" />
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white text-black shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-amber-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={card.icon} /></svg>
              </div>
              <h3 className="mt-4 font-medium text-sm tracking-tight text-zinc-900 dark:text-zinc-100">{card.title}</h3>
              <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">{card.desc}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-amber-600 dark:text-amber-400">Learn more <span className="transition-transform group-hover:translate-x-0.5">→</span></span>
            </a>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="mb-10 flex flex-col gap-2">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Frequently asked questions</h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">Still looking? Email <a href="mailto:support@zentime.example" className="underline decoration-amber-400/60 underline-offset-4 hover:text-black dark:hover:text-white">support@zentime.example</a>.</p>
        </div>
        <FAQAccordion />
      </section>

      {/* CTA */}
      <section className="relative">
        <div className="mx-auto max-w-5xl px-6 pb-28 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-black/5 bg-gradient-to-tr from-zinc-900 via-black to-zinc-900 px-8 py-14 shadow-2xl dark:border-white/10 sm:px-12 sm:py-16">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-amber-400/20 blur-3xl" />
            <div className="max-w-xl">
              <h3 className="text-2xl font-semibold text-white sm:text-3xl">Need personal assistance?</h3>
              <p className="mt-3 text-sm text-white/70">Our support specialists usually respond within a few hours on business days.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contact" className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-amber-100">Contact us</Link>
                <a href="mailto:support@zentime.example" className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white/90 hover:bg-white/10">Email directly</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
