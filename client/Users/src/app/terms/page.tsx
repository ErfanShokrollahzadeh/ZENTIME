export const metadata = {
  title: "Terms of Service",
  description: "ZENTIME website terms, conditions of sale, and acceptable use.",
};

const sections = [
  { heading: '1. Agreement', body: 'By accessing or purchasing from ZENTIME you agree to these Terms and any referenced policies. If you do not agree, discontinue use. We may update Terms periodically.' },
  { heading: '2. Eligibility', body: 'You must be of legal age to enter into a binding contract in your jurisdiction. You agree to provide accurate account and order information.' },
  { heading: '3. Orders & acceptance', body: 'Placing an order constitutes an offer. We reserve the right to refuse or cancel orders for suspected fraud, incorrect pricing, or stock issues. A contract forms once we dispatch the product.' },
  { heading: '4. Pricing & taxes', body: 'Prices shown may include or exclude taxes depending on region. Additional duties or local taxes may be payable on delivery where pre-collection is not available.' },
  { heading: '5. Shipping & risk', body: 'Risk passes on delivery to the address supplied. Title transfers upon full payment. Delivery estimates are not guarantees.' },
  { heading: '6. Returns', body: 'Eligible items can be returned within the specified return window in original condition. Refunds are processed to original payment method minus any non-refundable fees.' },
  { heading: '7. Warranty', body: 'Our 24‑month limited warranty covers manufacturing defects as outlined on the Warranty page. This is your exclusive remedy for covered defects.' },
  { heading: '8. Acceptable use', body: 'You agree not to misuse the site: no scraping beyond reasonable personal use, no security probing, no distribution of malicious code.' },
  { heading: '9. Intellectual property', body: 'All content, trademarks, designs and code are owned by or licensed to ZENTIME. Limited personal, non-commercial viewing license only.' },
  { heading: '10. Limitation of liability', body: 'To the maximum extent permitted by law, indirect or consequential damages are disclaimed. Liability is limited to the amount you paid for products giving rise to the claim.' },
  { heading: '11. Indemnity', body: 'You agree to indemnify us against claims arising from your breach of these Terms or misuse of the services.' },
  { heading: '12. Governing law', body: 'Applicable laws of our principal establishment jurisdiction (Switzerland) govern these Terms, excluding conflict rules. Courts of Zürich have non-exclusive jurisdiction.' },
  { heading: '13. Severability', body: 'If a provision is held invalid, remaining provisions remain in effect and are construed to best reflect original intent.' },
  { heading: '14. Changes', body: 'Material changes will be posted with a new effective date. Continued use after changes constitutes acceptance.' },
  { heading: '15. Contact', body: 'Questions about these Terms: legal@zentime.example' },
];

export default function TermsPage() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-amber-200/40 via-yellow-100 to-white dark:from-zinc-900 dark:via-black dark:to-zinc-900" />
        <div className="mx-auto max-w-4xl px-6 pt-20 pb-20 sm:pt-24 sm:pb-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/80 px-3 py-1 text-[11px] font-medium tracking-wide text-amber-600 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-amber-400">Legal • Terms</p>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-black dark:text-white sm:text-5xl">Terms of Service</h1>
            <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">Key conditions governing your use of the ZENTIME website and purchase of our products.</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto -mt-12 max-w-4xl px-6 pb-28 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-black/5 bg-white/70 p-10 backdrop-blur dark:border-white/10 dark:bg-zinc-900/70">
          <div className="absolute -right-28 -top-28 h-72 w-72 rounded-full bg-gradient-to-tr from-amber-300/40 to-yellow-200/20 blur-3xl dark:from-amber-500/20 dark:to-amber-400/10" />
          <div className="space-y-10">
            {sections.map(s => (
              <div key={s.heading} className="relative">
                <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">{s.heading}</h2>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 rounded-2xl border border-black/5 bg-white/60 p-6 text-sm leading-relaxed text-zinc-600 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-zinc-400">
            <p><span className="font-medium text-zinc-900 dark:text-zinc-100">Effective date:</span> 01 Aug 2025. These Terms supersede prior versions.</p>
            <p className="mt-4">For clarifications contact <span className="font-medium text-amber-600 dark:text-amber-400">legal@zentime.example</span>.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
