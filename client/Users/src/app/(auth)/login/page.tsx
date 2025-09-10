import AuthCard from "@/components/auth/AuthCard";
import TextField from "@/components/auth/TextField";
import SubmitButton from "@/components/auth/SubmitButton";
import AuthCTA from "@/components/auth/AuthCTA";

export const metadata = {
  title: "Sign in",
};

import { redirect } from "next/navigation";
import { headers } from "next/headers";

export default async function LoginPage() {
  const h = await headers();
  const url = new URL(h.get("referer") ? h.get("referer")! : "http://localhost/login");
  const params = new URLSearchParams(url.search);
  const exists = params.get("exists");
  const err = params.get("error");
  return (
    <div className="relative isolate">
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-amber-50 via-white to-zinc-50 dark:from-zinc-900 dark:via-black dark:to-zinc-950"
        aria-hidden
      />
      <div className="mx-auto grid min-h-[70vh] max-w-7xl place-items-center px-6 py-16 lg:px-8">
        <AuthCard title="Welcome back" subtitle="Sign in to manage your orders and profile.">
          {(exists || err) && (
            <div className="mb-2 rounded-md border border-amber-300 bg-amber-50 px-3 py-2 text-xs text-amber-800 dark:border-amber-700 dark:bg-amber-900/20 dark:text-amber-400">
              {exists ? "Account exists. Please sign in." : "Invalid email or password."}
            </div>
          )}
          <form
            className="grid gap-4"
            action={async (formData: FormData) => {
              "use server";
              const email = String(formData.get("email") || "");
              const password = String(formData.get("password") || "");
              const base = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8000";
              const res = await fetch(`${base}/api/auth/login/`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
              });
              if (!res.ok) {
                const { redirect } = await import("next/navigation");
                redirect("/login?error=1");
              }
              const data = await res.json();
              const token = data.token as string;
              const { cookies } = await import("next/headers");
              const jar = await cookies();
              jar.set("auth_token", token, { httpOnly: true, sameSite: "lax", path: "/" });
              const { redirect } = await import("next/navigation");
              redirect("/");
            }}
          >
            <TextField label="Email" name="email" type="email" autoComplete="email" required />
            <TextField label="Password" name="password" type="password" autoComplete="current-password" required />
            <div className="flex items-center justify-between">
              <a href="#" className="text-xs text-amber-700 hover:underline dark:text-amber-400">Forgot password?</a>
            </div>
            <SubmitButton label="Sign in" />
          </form>
          <div className="mt-6">
            <AuthCTA prompt="New to ZENTIME?" actionText="Create an account" href="/register" />
          </div>
        </AuthCard>
      </div>
    </div>
  );
}
