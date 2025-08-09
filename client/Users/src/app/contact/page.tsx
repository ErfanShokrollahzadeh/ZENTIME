import type { Metadata } from "next";
import ContactForm from "../../components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with ZENTIME — Questions, support, and store information.",
};

export default function ContactPage() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-60 blur-3xl">
          <div className="absolute left-[-10%] top-[-20%] h-72 w-72 rounded-full bg-amber-500/30"></div>
          <div className="absolute right-[-10%] bottom-[-20%] h-72 w-72 rounded-full bg-yellow-400/30"></div>
        </div>

        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              <span className="bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 bg-clip-text text-transparent">Contact</span> ZENTIME
            </h1>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              We’re here to help with product questions, orders, or partnerships. Reach out and we’ll get back within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Content grid */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 pb-16 lg:grid-cols-5 lg:px-8 lg:pb-24">
        {/* Info card */}
        <aside className="lg:col-span-2">
          <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur-md dark:border-white/10 dark:bg-black/40 sm:p-8">
            <div className="absolute right-[-40px] top-[-40px] h-40 w-40 rotate-12 rounded-full bg-gradient-to-br from-amber-500/20 to-yellow-400/10" />
            <h2 className="text-lg font-semibold">Visit or Call</h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Our LA studio welcomes you by appointment.
            </p>

            <dl className="mt-6 space-y-4 text-sm">
              <div>
                <dt className="font-medium">Address</dt>
                <dd className="text-zinc-600 dark:text-zinc-400">1234 Sunset Blvd, Los Angeles, CA 90026</dd>
              </div>
              <div>
                <dt className="font-medium">Phone</dt>
                <dd className="text-zinc-600 dark:text-zinc-400">(213) 555‑0199</dd>
              </div>
              <div>
                <dt className="font-medium">Email</dt>
                <dd className="text-zinc-600 dark:text-zinc-400">support@zentime.co</dd>
              </div>
              <div>
                <dt className="font-medium">Hours</dt>
                <dd className="text-zinc-600 dark:text-zinc-400">Mon–Fri, 10:00–18:00 PT</dd>
              </div>
            </dl>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-1 text-xs font-medium text-zinc-800 dark:border-white/10 dark:text-zinc-200">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>
                Fast reply
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-1 text-xs font-medium text-zinc-800 dark:border-white/10 dark:text-zinc-200">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-3-3.87"/><path d="M4 21v-2a4 4 0 0 1 3-3.87"/><circle cx="12" cy="7" r="4"/></svg>
                Human support
              </span>
            </div>
          </div>
        </aside>

        {/* Form */}
        <div className="lg:col-span-3">
          <ContactForm />
        </div>
      </section>

      {/* Map - Los Angeles */}
      <section aria-label="Map of our Los Angeles studio" className="border-t border-black/5 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-0 py-0 lg:px-0">
          <div className="relative h-[420px] w-full overflow-hidden rounded-none sm:rounded-2xl sm:px-6 sm:py-6 lg:px-8">
            <div className="absolute inset-0 sm:rounded-2xl">
              <iframe
                title="Los Angeles Map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.274051886!2d-118.69192063412898!3d34.02016129664905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c0b7160b5f3b%3A0x64f6c5d96d9ef08f!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1691790500000"
                className="h-full w-full border-0"
                allowFullScreen
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-white/40 dark:from-black/30 dark:to-black/50 sm:rounded-2xl" />
          </div>
        </div>
      </section>
    </div>
  );
}
