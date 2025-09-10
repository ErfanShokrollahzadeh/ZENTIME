import { getCurrentUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export const metadata = { title: "Your profile" };

export default async function ProfilePage() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  const name = [user.first_name, user.last_name].filter(Boolean).join(" ") || user.email;
  const jar = await cookies();
  const token = jar.get("auth_token")?.value;
  const base = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8000";
  async function updateProfile(formData: FormData) {
    "use server";
    const payload: any = {
      phone: String(formData.get("phone") || ""),
      first_name: String(formData.get("first_name") || ""),
      last_name: String(formData.get("last_name") || ""),
      email: String(formData.get("email") || ""),
    };
    await fetch(`${base}/api/auth/profile/`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", Authorization: `Token ${token}` },
      body: JSON.stringify(payload),
    });
    // No redirect; page will re-render on navigation
  }
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
        <form className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2" action={updateProfile}>
          <div>
            <label className="text-xs text-zinc-500 dark:text-zinc-400">First name</label>
            <input name="first_name" defaultValue={user.first_name || ""} className="mt-1 w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm dark:border-white/10 dark:bg-zinc-900" />
          </div>
          <div>
            <label className="text-xs text-zinc-500 dark:text-zinc-400">Last name</label>
            <input name="last_name" defaultValue={user.last_name || ""} className="mt-1 w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm dark:border-white/10 dark:bg-zinc-900" />
          </div>
          <div className="sm:col-span-2">
            <label className="text-xs text-zinc-500 dark:text-zinc-400">Email</label>
            <input type="email" name="email" defaultValue={user.email} className="mt-1 w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm dark:border-white/10 dark:bg-zinc-900" />
          </div>
          <div className="sm:col-span-2">
            <label className="text-xs text-zinc-500 dark:text-zinc-400">Phone</label>
            <input name="phone" defaultValue="" placeholder="Optional" className="mt-1 w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm dark:border-white/10 dark:bg-zinc-900" />
          </div>
          <div className="sm:col-span-2">
            <button className="inline-flex items-center rounded-xl bg-black px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-100" type="submit">Save changes</button>
          </div>
        </form>
      </div>
    </div>
  );
}
