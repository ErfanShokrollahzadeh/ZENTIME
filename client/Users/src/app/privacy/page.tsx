export const metadata = {
  title: "Privacy Policy",
  description: "How ZENTIME collects, uses and protects your personal data.",
};

const sections = [
  {
    title: '1. Data we collect',
    content: 'We collect data you provide (account details, orders, messages), automatic usage data (device, analytics, pages viewed), and optional marketing preferences. Payment details are processed securely by our PCI compliant payment partners and never stored in full by us.'
  },
  {
    title: '2. How we use data',
    content: 'Order processing, account management, customer support, fraud prevention, product improvement, and — if opted-in — carefully curated marketing updates. We minimise data and retain it only while necessary or legally required.'
  },
  {
    title: '3. Cookies & tracking',
    content: 'Essential cookies keep the site functioning (session, security). Optional analytics and preference cookies help us understand performance and remember choices. You can adjust preferences in your browser or future cookie settings panel.'
  },
  {
    title: '4. Sharing',
    content: 'We share only with service providers required to deliver our services (payments, logistics, analytics) under strict agreements. We do not sell personal data.'
  },
  {
    title: '5. Security',
    content: 'Encryption in transit (HTTPS) and at-rest for sensitive fields. Role-based access, audit logging, and periodic reviews. No system is 100% secure; we act swiftly on any issue.'
  },
  {
    title: '6. Your rights',
    content: 'Access, correction, deletion, portability, restriction, and withdrawal of consent. Contact privacy@zentime.example to exercise rights. We respond within applicable legal timeframes.'
  },
  {
    title: '7. International transfers',
    content: 'Where data moves across regions, safeguards such as Standard Contractual Clauses are applied. We select infrastructure regions for performance & compliance.'
  },
  {
    title: '8. Updates',
    content: 'Material changes will be posted here and, where required, notified by email. Continued use after changes constitutes acceptance.'
  },
];

export default function PrivacyPage() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-amber-200/40 via-yellow-100 to-white dark:from-zinc-900 dark:via-black dark:to-zinc-900" />
        <div className="mx-auto max-w-4xl px-6 pt-20 pb-20 sm:pt-24 sm:pb-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/80 px-3 py-1 text-[11px] font-medium tracking-wide text-amber-600 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-amber-400">Legal • Privacy</p>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-black dark:text-white sm:text-5xl">Privacy Policy</h1>
            <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">Transparency on how we respect and protect your data. If you have any question, reach out at <span className="underline decoration-amber-400/60 underline-offset-4">privacy@zentime.example</span>.</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto -mt-12 max-w-4xl px-6 pb-28 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-black/5 bg-white/70 p-10 backdrop-blur dark:border-white/10 dark:bg-zinc-900/70">
          <div className="absolute -right-28 -top-28 h-72 w-72 rounded-full bg-gradient-to-tr from-amber-300/40 to-yellow-200/20 blur-3xl dark:from-amber-500/20 dark:to-amber-400/10" />
          <div className="space-y-10">
            {sections.map(s => (
              <div key={s.title} className="relative">
                <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">{s.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{s.content}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 rounded-2xl border border-black/5 bg-white/60 p-6 text-sm leading-relaxed text-zinc-600 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-zinc-400">
            <p><span className="font-medium text-zinc-900 dark:text-zinc-100">Effective date:</span> 01 Aug 2025. This document is provided for information. For legally binding wording in your jurisdiction, contact us.</p>
            <p className="mt-4">Need a copy or want to exercise your rights? Email <span className="font-medium text-amber-600 dark:text-amber-400">privacy@zentime.example</span>.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
