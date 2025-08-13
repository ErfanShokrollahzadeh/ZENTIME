export const metadata = {
  title: "Cookies & Preferences",
  description: "Understand how ZENTIME uses cookies and manage your tracking preferences.",
};

const categories = [
  { name: 'Essential', desc: 'Required for basic site functionality: session, security, cart state, consent records.', stored: 'Session / up to 12 months', example: 'session_id, csrf_token' },
  { name: 'Performance', desc: 'Anonymous analytics to measure pages, load performance and errors.', stored: 'Up to 12 months', example: 'analytics_id, perf_bucket' },
  { name: 'Preferences', desc: 'Remembers language, currency, theme and dismissed banners.', stored: '6–12 months', example: 'theme, currency, locale' },
  { name: 'Marketing', desc: 'Helps tailor on‑site messaging and measure campaign effectiveness.', stored: 'Up to 6 months', example: 'campaign_source, attribution_id' },
];

export default function CookiesPage() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-amber-200/40 via-yellow-100 to-white dark:from-zinc-900 dark:via-black dark:to-zinc-900" />
        <div className="mx-auto max-w-4xl px-6 pt-20 pb-20 sm:pt-24 sm:pb-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/80 px-3 py-1 text-[11px] font-medium tracking-wide text-amber-600 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-amber-400">Legal • Cookies</p>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-black dark:text-white sm:text-5xl">Cookies & Preferences</h1>
            <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">We use minimal, privacy‑respecting technologies. Review each category and adjust your choices at any time (future preferences UI).</p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto -mt-12 max-w-4xl px-6 pb-28 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-black/5 bg-white/70 p-10 backdrop-blur dark:border-white/10 dark:bg-zinc-900/70">
          <div className="absolute -right-28 -top-28 h-72 w-72 rounded-full bg-gradient-to-tr from-amber-300/40 to-yellow-200/20 blur-3xl dark:from-amber-500/20 dark:to-amber-400/10" />
          <div className="space-y-8">
            {categories.map(cat => (
              <div key={cat.name} className="relative rounded-2xl border border-black/5 bg-white/60 p-6 backdrop-blur dark:border-white/10 dark:bg-white/5">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h2 className="text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">{cat.name}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{cat.desc}</p>
                    <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-500"><span className="font-medium text-zinc-700 dark:text-zinc-300">Retention:</span> {cat.stored} • <span className="font-medium text-zinc-700 dark:text-zinc-300">Examples:</span> {cat.example}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2 text-xs">
                    {cat.name === 'Essential' ? (
                      <span className="inline-flex items-center rounded-full bg-zinc-900 px-3 py-1 font-medium text-white dark:bg-white dark:text-black">Always on</span>
                    ) : (
                      <button className="inline-flex items-center rounded-full border border-black/10 px-3 py-1 font-medium text-zinc-700 transition hover:bg-amber-50 dark:border-white/20 dark:text-zinc-300 dark:hover:bg-white/10" aria-pressed="true">Enabled</button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-black/5 bg-white/60 p-6 text-sm leading-relaxed text-zinc-600 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-zinc-400">
            <p className="font-medium text-zinc-900 dark:text-zinc-100">Future control panel</p>
            <p className="mt-2">A full preference manager will allow granular opt‑in/out and consent withdrawal. For now, adjust via browser settings or contact <span className="text-amber-600 dark:text-amber-400">privacy@zentime.example</span>.</p>
            <p className="mt-4 text-xs">Last updated: 01 Aug 2025.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
