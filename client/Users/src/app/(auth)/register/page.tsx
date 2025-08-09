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
              // TODO: Implement server action to call your backend.
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
