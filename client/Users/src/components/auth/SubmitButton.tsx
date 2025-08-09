"use client";

import { useState } from "react";

export default function SubmitButton({ label }: { label: string }) {
  const [loading, setLoading] = useState(false);

  return (
    <button
      type="submit"
      onClick={() => setLoading(true)}
      className="inline-flex w-full items-center justify-center rounded-xl bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-white dark:text-black dark:hover:bg-zinc-100"
    >
      {loading ? "Please wait…" : label}
    </button>
  );
}
