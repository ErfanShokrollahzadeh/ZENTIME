"use client";

import { useId } from "react";

export default function TextField({
  label,
  type = "text",
  placeholder,
  autoComplete,
  required,
  name,
}: {
  label: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
  name: string;
}) {
  const id = useId();
  return (
    <div className="grid gap-1.5">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        className="rounded-xl border border-black/10 bg-white px-3 py-2 text-sm outline-none transition placeholder:text-zinc-400 focus:border-zinc-400 dark:border-white/10 dark:bg-zinc-900 dark:focus:border-zinc-600"
      />
    </div>
  );
}
