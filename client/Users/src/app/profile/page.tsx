import { getCurrentUser } from "@/lib/auth";
import { redirect } from "next/navigation";

export const metadata = { title: "Your profile" };

export default async function ProfilePage() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  const name = [user.first_name, user.last_name].filter(Boolean).join(" ") || user.email;
  return (
    <div className="mx-auto max-w-3xl px-6 py-12 lg:px-8">
      <h1 className="text-2xl font-semibold">Profile</h1>
      <div className="mt-6 rounded-2xl border border-black/10 p-6 dark:border-white/10">
        <div className="flex items-center gap-4">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/80 text-lg font-bold text-white">
            {name.slice(0,1).toUpperCase()}
          </span>
          <div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Signed in as</p>
            <p className="text-base font-medium">{user.email}</p>
          </div>
        </div>
        <dl className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <dt className="text-xs text-zinc-500 dark:text-zinc-400">First name</dt>
            <dd className="text-sm">{user.first_name || "—"}</dd>
          </div>
          <div>
            <dt className="text-xs text-zinc-500 dark:text-zinc-400">Last name</dt>
            <dd className="text-sm">{user.last_name || "—"}</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-xs text-zinc-500 dark:text-zinc-400">Email</dt>
            <dd className="text-sm">{user.email}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
