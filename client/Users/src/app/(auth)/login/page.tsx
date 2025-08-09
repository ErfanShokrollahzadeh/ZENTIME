import AuthCard from "@/components/auth/AuthCard";
import TextField from "@/components/auth/TextField";
import SubmitButton from "@/components/auth/SubmitButton";
import AuthCTA from "@/components/auth/AuthCTA";

export const metadata = {
  title: "Sign in",
};

export default function LoginPage() {
  return (
    <div className="relative isolate">
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-amber-50 via-white to-zinc-50 dark:from-zinc-900 dark:via-black dark:to-zinc-950"
        aria-hidden
      />
      <div className="mx-auto grid min-h-[70vh] max-w-7xl place-items-center px-6 py-16 lg:px-8">
        <AuthCard title="Welcome back" subtitle="Sign in to manage your orders and profile.">
          <form
            className="grid gap-4"
            action={async (formData: FormData) => {
              "use server";
              // TODO: Implement server action to call your backend.
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
