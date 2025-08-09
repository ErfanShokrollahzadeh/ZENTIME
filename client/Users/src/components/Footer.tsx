export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white/70 backdrop-blur dark:border-white/10 dark:bg-black/40">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">© {new Date().getFullYear()} ZENTIME. All rights reserved.</p>
          <nav className="flex items-center gap-4 text-sm">
            <a className="text-zinc-700 hover:text-black dark:text-zinc-300 dark:hover:text-white" href="#">Privacy</a>
            <a className="text-zinc-700 hover:text-black dark:text-zinc-300 dark:hover:text-white" href="#">Terms</a>
            <a className="text-zinc-700 hover:text-black dark:text-zinc-300 dark:hover:text-white" href="#">Support</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
