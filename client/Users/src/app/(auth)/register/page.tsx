import AuthCard from "@/components/auth/AuthCard";
import TextField from "@/components/auth/TextField";
import SubmitButton from "@/components/auth/SubmitButton";
import AuthCTA from "@/components/auth/AuthCTA";

export const metadata = {
  title: "Create account",
};

export default function RegisterPage() {
  return (
    <div className="relative isolate">
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-amber-50 via-white to-zinc-50 dark:from-zinc-900 dark:via-black dark:to-zinc-950"
        aria-hidden
      />
      <div className="mx-auto grid min-h-[70vh] max-w-7xl place-items-center px-6 py-16 lg:px-8">
        <AuthCard title="Create your account" subtitle="Join ZENTIME for early drops and members-only offers.">
          <form
            className="grid gap-4"
            action={async (formData: FormData) => {
              "use server";
              const first_name = String(formData.get("firstName") || "");
              const last_name = String(formData.get("lastName") || "");
              const email = String(formData.get("email") || "");
              const password = String(formData.get("password") || "");
              const base = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8000";
              const res = await fetch(`${base}/api/auth/register/`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ first_name, last_name, email, password }),
              });
              let data: any = null;
              if (!res.ok) {
                try { data = await res.json(); } catch {}
                if (res.status === 400 && data?.detail?.toLowerCase?.().includes("already exists")) {
                  // Email already registered: send user to login page instead of erroring
                  const { redirect } = await import("next/navigation");
                  redirect("/login?exists=1");
                } else {
                  console.error("Register failed", res.status, data);
                  throw new Error("Register failed");
                }
              } else {
                data = await res.json();
              }
              const token = data.token as string | undefined;
              if (token) {
                const { cookies } = await import("next/headers");
                const jar = await cookies();
                jar.set("auth_token", token, { httpOnly: true, sameSite: "lax", path: "/" });
              }
              const { redirect } = await import("next/navigation");
              redirect("/");
            }}
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <TextField label="First name" name="firstName" autoComplete="given-name" required />
              <TextField label="Last name" name="lastName" autoComplete="family-name" required />
            </div>
            <TextField label="Email" name="email" type="email" autoComplete="email" required />
            <TextField label="Password" name="password" type="password" autoComplete="new-password" required />
            <SubmitButton label="Create account" />
          </form>
          <div className="mt-6">
            <AuthCTA prompt="Already have an account?" actionText="Sign in" href="/login" />
          </div>
        </AuthCard>
      </div>
    </div>
  );
}
