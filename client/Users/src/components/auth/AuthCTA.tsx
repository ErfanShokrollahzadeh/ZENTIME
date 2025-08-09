import Link from "next/link";

export default function AuthCTA({
  prompt,
  actionText,
  href,
}: {
  prompt: string;
  actionText: string;
  href: string;
}) {
  return (
    <p className="text-center text-sm text-zinc-600 dark:text-zinc-400">
      {prompt} <Link href={href} className="font-medium text-amber-700 hover:underline dark:text-amber-400">{actionText}</Link>
    </p>
  );
}
