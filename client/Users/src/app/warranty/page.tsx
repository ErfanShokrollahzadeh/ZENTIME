import Link from "next/link";

export const metadata = {
  title: "Warranty",
  description: "ZENTIME 24‑month limited international warranty details, coverage and claims process.",
};

const coverage = [
  { title: 'Movement defects', desc: 'Failures in the internal Swiss quartz movement under normal conditions.' },
  { title: 'Hands & dial', desc: 'Misalignment, detachment or manufacturing defects.' },
  { title: 'Water resistance', desc: 'Seal failures up to the rated 5ATM when crown was properly secured.' },
  { title: 'Materials', desc: 'Manufacturing faults in case, crown, clasp or bracelet links.' },
];

const exclusions = [
  'Accidental damage, drops, crushing or impact',
  'Wear & tear (scratches on case / bracelet / clasp)',
  'Battery depletion after normal lifespan',
  'Unauthorized repairs or modifications',
  'Damage from misuse (steam rooms, diving, chemicals)',
];

export default function WarrantyPage() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-amber-300/40 via-yellow-100 to-white dark:from-zinc-900 dark:via-black dark:to-zinc-900" />
        <div className="mx-auto max-w-5xl px-6 pt-20 pb-24 sm:pt-24 sm:pb-28 lg:px-8">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/80 px-3 py-1 text-[11px] font-medium tracking-wide text-amber-600 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-amber-400">Support • Warranty</p>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-black dark:text-white sm:text-5xl">24‑Month Limited Warranty</h1>
            <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">Every ZENTIME watch is engineered for longevity. This warranty covers manufacturing defects so you can focus on the moments that matter.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200">File a claim</Link>
              <a href="#coverage" className="inline-flex items-center rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-black hover:bg-zinc-100 dark:border-white/20 dark:text-white dark:hover:bg-white/10">View coverage</a>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section id="coverage" className="mx-auto -mt-14 max-w-5xl px-6 pb-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {coverage.map(item => (
            <div key={item.title} className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white/70 p-6 shadow-sm transition hover:shadow-md hover:bg-white dark:border-white/10 dark:bg-zinc-900/70 dark:hover:bg-zinc-900">
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-tr from-amber-300/40 to-yellow-200/20 blur-2xl transition group-hover:scale-125 dark:from-amber-500/20 dark:to-amber-400/10" />
              <h3 className="font-medium text-base tracking-tight text-zinc-900 dark:text-zinc-100">{item.title}</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{item.desc}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-amber-600 dark:text-amber-400">Covered <span className="transition-transform group-hover:translate-x-0.5">✓</span></span>
            </div>
          ))}
        </div>
      </section>

      {/* Exclusions & Claim process */}
      <section className="mx-auto max-w-5xl px-6 py-14 lg:px-8">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">What is not covered</h2>
            <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              {exclusions.map(e => (
                <li key={e} className="flex items-start gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-amber-500" />{e}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">How to file a claim</h2>
            <ol className="mt-4 space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
              <li className="flex gap-3"><span className="flex h-7 w-7 items-center justify-center rounded-full border border-amber-500 bg-amber-400/10 text-xs font-semibold text-amber-600 dark:text-amber-400">1</span>Prepare your order number, purchase date, and clear photos of the issue.</li>
              <li className="flex gap-3"><span className="flex h-7 w-7 items-center justify-center rounded-full border border-amber-500 bg-amber-400/10 text-xs font-semibold text-amber-600 dark:text-amber-400">2</span>Contact our support team through the contact form or email support@zentime.example.</li>
              <li className="flex gap-3"><span className="flex h-7 w-7 items-center justify-center rounded-full border border-amber-500 bg-amber-400/10 text-xs font-semibold text-amber-600 dark:text-amber-400">3</span>We review within 2 business days and send return / inspection instructions.</li>
              <li className="flex gap-3"><span className="flex h-7 w-7 items-center justify-center rounded-full border border-amber-500 bg-amber-400/10 text-xs font-semibold text-amber-600 dark:text-amber-400">4</span>After inspection, a repair, replacement, or equivalent resolution is provided.</li>
            </ol>
            <div className="mt-6 inline-flex gap-3">
              <Link href="/contact" className="inline-flex items-center rounded-full bg-black px-5 py-2.5 text-xs font-medium text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200">Start claim</Link>
              <a href="mailto:support@zentime.example" className="inline-flex items-center rounded-full border border-black/10 px-5 py-2.5 text-xs font-medium text-black hover:bg-zinc-100 dark:border-white/20 dark:text-white dark:hover:bg-white/10">Email us</a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ snippet */}
      <section className="mx-auto max-w-5xl px-6 pb-24 lg:px-8">
        <div className="rounded-3xl border border-black/5 bg-white/70 p-10 backdrop-blur dark:border-white/10 dark:bg-zinc-900/70">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <h3 className="text-xl font-semibold tracking-tight">Quick answers</h3>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">Most warranty claims are processed within 7–10 business days from receipt of the watch.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/help-center" className="inline-flex items-center rounded-full bg-black px-5 py-2.5 text-xs font-medium text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200">Help Center</Link>
                <a href="mailto:support@zentime.example" className="inline-flex items-center rounded-full border border-black/10 px-5 py-2.5 text-xs font-medium text-black hover:bg-zinc-100 dark:border-white/20 dark:text-white dark:hover:bg-white/10">Email support</a>
              </div>
            </div>
            <div className="space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
              <div>
                <p className="font-medium text-zinc-900 dark:text-zinc-100">Is shipping covered?</p>
                <p className="mt-1 text-xs leading-relaxed">Return shipping for approved claims is covered in most regions. Outbound shipping after repair is always covered.</p>
              </div>
              <div>
                <p className="font-medium text-zinc-900 dark:text-zinc-100">Will my warranty reset?</p>
                <p className="mt-1 text-xs leading-relaxed">Replacements or repaired parts carry the remainder of the original warranty or 90 days—whichever is longer.</p>
              </div>
              <div>
                <p className="font-medium text-zinc-900 dark:text-zinc-100">What documentation do I need?</p>
                <p className="mt-1 text-xs leading-relaxed">Proof of purchase (order number or receipt) and photos/videos clearly showing the defect.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
