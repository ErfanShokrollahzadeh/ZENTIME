import Image from "next/image";
import Link from "next/link";

export default function AuthCard({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-black/5 bg-white/70 shadow-xl backdrop-blur dark:border-white/10 dark:bg-black/40">
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-amber-400/20 blur-3xl" />
      <div className="p-6 sm:p-8">
        <div className="mb-6 flex items-center justify-between">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 bg-clip-text text-transparent">ZEN</span>
            <span>TIME</span>
          </Link>
          <Image src="/vercel.svg" alt="" width={20} height={20} className="opacity-0" />
        </div>
        <h1 className="text-xl font-semibold sm:text-2xl">{title}</h1>
        {subtitle && (
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{subtitle}</p>
        )}
        <div className="mt-6">{children}</div>
        <p className="mt-8 text-center text-xs text-zinc-500 dark:text-zinc-400">
          By continuing you agree to our <a href="#" className="underline">Terms</a> and <a href="#" className="underline">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
}
