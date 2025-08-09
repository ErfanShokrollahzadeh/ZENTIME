"use client";

import { useState } from "react";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    // Fake submit
    setTimeout(() => {
      setStatus("success");
    }, 800);
  }

  return (
    <form className="mt-6 flex w-full max-w-md items-center gap-2" onSubmit={onSubmit}>
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        className="flex-1 rounded-full border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 outline-none backdrop-blur focus:border-white/30"
      />
      <button
        disabled={status !== "idle"}
        className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black hover:bg-amber-100 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "success" ? "Subscribed" : status === "submitting" ? "Sending…" : "Subscribe"}
      </button>
    </form>
  );
}
