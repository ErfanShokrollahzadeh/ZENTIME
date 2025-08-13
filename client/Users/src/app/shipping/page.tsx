import Link from "next/link";

export const metadata = {
  title: "Shipping & Delivery",
  description: "Worldwide shipping times, regions, tracking & duties information for ZENTIME orders.",
};

const regions = [
  { zone: 'EU / UK', time: '2–5 business days', duty: 'VAT included', note: 'Express upgrades available at checkout.' },
  { zone: 'North America', time: '3–6 business days', duty: 'Duties prepaid for orders > $150', note: 'Remote areas may experience +2 days.' },
  { zone: 'Asia Pacific', time: '4–8 business days', duty: 'Local duties may apply', note: 'Tracking events may batch update.' },
  { zone: 'Middle East', time: '5–9 business days', duty: 'Local duties may apply', note: 'Customs clearance can add 1–2 days.' },
  { zone: 'Latin America', time: '6–12 business days', duty: 'Duties & taxes at delivery', note: 'Some countries have limited tracking.' },
  { zone: 'Africa', time: '7–14 business days', duty: 'Duties & taxes at delivery', note: 'Rural delivery may require pickup.' },
];

const steps = [
  'Order placed — confirmation email sent',
  'Processing — quality check & packing (within 24h business)',
  'Dispatched — tracking number issued',
  'In transit — carrier scans and customs (if applicable)',
  'Out for delivery — local courier',
  'Delivered — enjoy your watch',
];

export default function ShippingPage() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-amber-200/40 via-yellow-50 to-white dark:from-zinc-900 dark:via-black dark:to-zinc-900" />
        <div className="mx-auto max-w-5xl px-6 pt-20 pb-24 sm:pt-24 sm:pb-28 lg:px-8">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/80 px-3 py-1 text-[11px] font-medium tracking-wide text-amber-600 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-amber-400">Support • Shipping</p>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-black dark:text-white sm:text-5xl">Shipping & Delivery</h1>
            <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">Fast, tracked, and global. Below are typical transit times and region specifics. You will receive real‑time tracking once your order leaves our facility.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200">Ask a question</Link>
              <a href="#regions" className="inline-flex items-center rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-black hover:bg-zinc-100 dark:border-white/20 dark:text-white dark:hover:bg-white/10">See regions</a>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto -mt-14 max-w-5xl px-6 pb-4 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-black/5 bg-white/70 p-8 backdrop-blur dark:border-white/10 dark:bg-zinc-900/70">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-tr from-amber-300/40 to-yellow-200/20 blur-3xl dark:from-amber-500/20 dark:to-amber-400/10" />
          <h2 className="text-xl font-semibold tracking-tight">Order journey</h2>
          <ol className="mt-6 space-y-5 text-sm">
            {steps.map((s, i) => (
              <li key={s} className="relative flex items-start gap-4">
                <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full border border-amber-500 bg-amber-400/10 text-[11px] font-semibold text-amber-600 dark:text-amber-400">{i+1}</span>
                <span className="text-zinc-600 dark:text-zinc-400">{s}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Regions grid */}
      <section id="regions" className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <div className="mb-10 flex flex-col gap-2">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Regions & estimates</h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">Business days exclude weekends & local holidays. Estimates begin after dispatch email.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {regions.map(r => (
            <div key={r.zone} className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white/70 p-6 shadow-sm transition hover:shadow-md hover:bg-white dark:border-white/10 dark:bg-zinc-900/70 dark:hover:bg-zinc-900">
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-tr from-amber-300/40 to-yellow-200/20 blur-2xl transition group-hover:scale-125 dark:from-amber-500/20 dark:to-amber-400/10" />
              <h3 className="font-medium text-base tracking-tight text-zinc-900 dark:text-zinc-100">{r.zone}</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{r.time}</p>
              <p className="mt-2 text-xs text-amber-600 dark:text-amber-400">{r.duty}</p>
              <p className="mt-2 text-[11px] leading-relaxed text-zinc-500 dark:text-zinc-500">{r.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ snippet */}
      <section className="mx-auto max-w-5xl px-6 pb-24 lg:px-8">
        <div className="rounded-3xl border border-black/5 bg-white/70 p-10 backdrop-blur dark:border-white/10 dark:bg-zinc-900/70">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <h3 className="text-xl font-semibold tracking-tight">Tracking & duties</h3>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">Tracking links activate within 12–24h. Duties shown at checkout where available for transparency.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/help-center" className="inline-flex items-center rounded-full bg-black px-5 py-2.5 text-xs font-medium text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200">Help Center</Link>
                <Link href="/warranty" className="inline-flex items-center rounded-full border border-black/10 px-5 py-2.5 text-xs font-medium text-black hover:bg-zinc-100 dark:border-white/20 dark:text-white dark:hover:bg-white/10">Warranty</Link>
              </div>
            </div>
            <div className="space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
              <div>
                <p className="font-medium text-zinc-900 dark:text-zinc-100">Can I change my address?</p>
                <p className="mt-1 text-xs leading-relaxed">If the order hasn’t shipped, contact support. After dispatch, rerouting depends on the carrier and region.</p>
              </div>
              <div>
                <p className="font-medium text-zinc-900 dark:text-zinc-100">Will I pay additional duties?</p>
                <p className="mt-1 text-xs leading-relaxed">Where pre-payment isn’t supported, local customs may collect duties/taxes upon delivery.</p>
              </div>
              <div>
                <p className="font-medium text-zinc-900 dark:text-zinc-100">What if tracking stalls?</p>
                <p className="mt-1 text-xs leading-relaxed">International tracking can pause during customs handover. If no updates after 5 business days, reach out.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
