"use client";

import TextField from "@/components/auth/TextField";
import SubmitButton from "@/components/auth/SubmitButton";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    try {
      // Placeholder: POST to an API route if needed
      await new Promise((r) => setTimeout(r, 600));
      setStatus("success");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <form
      className="relative grid gap-4 rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur-md dark:border-white/10 dark:bg-black/40 sm:p-8"
      onSubmit={onSubmit}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <TextField label="First name" name="firstName" autoComplete="given-name" required />
        <TextField label="Last name" name="lastName" autoComplete="family-name" required />
      </div>
      <TextField label="Email" name="email" type="email" autoComplete="email" required />
      <div className="grid gap-1.5">
        <label htmlFor="message" className="text-sm font-medium">Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us how we can help…"
          className="rounded-xl border border-black/10 bg-white px-3 py-2 text-sm outline-none transition placeholder:text-zinc-400 focus:border-zinc-400 dark:border-white/10 dark:bg-zinc-900 dark:focus:border-zinc-600"
        />
      </div>
      <div className="flex items-center justify-between gap-4">
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          We’ll never share your info. By submitting, you agree to our terms.
        </p>
        <SubmitButton label="Send message" />
      </div>

      {status === "success" && (
        <p className="mt-3 rounded-lg bg-green-500/10 px-3 py-2 text-xs text-green-700 dark:text-green-400">
          Thanks! We received your message.
        </p>
      )}
      {status === "error" && (
        <p className="mt-3 rounded-lg bg-red-500/10 px-3 py-2 text-xs text-red-700 dark:text-red-400">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
