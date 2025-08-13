import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-black/5 bg-white/70 text-sm backdrop-blur dark:border-white/10 dark:bg-black/40">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand + address */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-2" aria-label="ZENTIME home">
              <span className="text-lg font-semibold tracking-tight">
                <span className="bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 bg-clip-text text-transparent">ZEN</span>
                <span>TIME</span>
              </span>
            </Link>
            <p className="max-w-xs text-zinc-600 dark:text-zinc-400">
              Modern timepieces balancing minimal design and precise engineering.
            </p>
            <address className="not-italic text-zinc-500 dark:text-zinc-500">
              123 Chrono Ave<br />
              Zürich, Switzerland<br />
              support@zentime.example
            </address>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:justify-self-center">
            <div className="space-y-3">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/why-zentime" className="text-zinc-600 transition hover:text-black dark:text-zinc-400 dark:hover:text-white">About</Link></li>
                <li><Link href="/contact" className="text-zinc-600 transition hover:text-black dark:text-zinc-400 dark:hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Support</h4>
              <ul className="space-y-2">
                <li><Link href="/help-center" className="text-zinc-600 transition hover:text-black dark:text-zinc-400 dark:hover:text-white">Help Center</Link></li>
                <li><a href="#" className="text-zinc-600 transition hover:text-black dark:text-zinc-400 dark:hover:text-white">Warranty</a></li>
                <li><a href="#" className="text-zinc-600 transition hover:text-black dark:text-zinc-400 dark:hover:text-white">Shipping</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-zinc-600 transition hover:text-black dark:text-zinc-400 dark:hover:text-white">Privacy</a></li>
                <li><a href="#" className="text-zinc-600 transition hover:text-black dark:text-zinc-400 dark:hover:text-white">Terms</a></li>
                <li><a href="#" className="text-zinc-600 transition hover:text-black dark:text-zinc-400 dark:hover:text-white">Cookies</a></li>
              </ul>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4 md:justify-self-end">
            <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Follow us</h4>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-zinc-700 transition hover:bg-amber-50 hover:text-black dark:border-white/10 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-zinc-700 transition hover:bg-amber-50 hover:text-black dark:border-white/10 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.53 3h3.7l-8.08 9.22L23 21h-6.37l-4.98-6.17L5.9 21H2.2l8.64-9.86L1 3h6.5l4.5 5.58L17.53 3Z"/></svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-zinc-700 transition hover:bg-amber-50 hover:text-black dark:border-white/10 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 22v-8.02H16l.38-3.12h-2.88V8.51c0-.9.25-1.51 1.54-1.51H16.5V4.3c-.27-.04-1.2-.12-2.28-.12-2.26 0-3.8 1.38-3.8 3.92v2.2H8v3.12h2.42V22h3.08Z"/></svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-zinc-700 transition hover:bg-amber-50 hover:text-black dark:border-white/10 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9h4v12H3V9Zm7.5 0h3.83v1.71h.05c.53-.95 1.84-1.96 3.78-1.96 4.04 0 4.79 2.66 4.79 6.11V21h-4v-5.18c0-1.24-.03-2.83-1.73-2.83-1.74 0-2.01 1.36-2.01 2.73V21h-4V9Z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-black/5 pt-6 text-xs text-zinc-500 dark:border-white/10 dark:text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>© {year} ZENTIME. All rights reserved.</p>
          <p className="max-w-md leading-relaxed">All product names, logos, and brands are property of their respective owners. Illustrative content only.</p>
        </div>
      </div>
    </footer>
  );
}
