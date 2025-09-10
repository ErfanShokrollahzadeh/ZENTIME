"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logoutAction() {
  const jar = await cookies();
  const token = jar.get("auth_token")?.value;
  const base = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8000";
  try {
    if (token) {
      await fetch(`${base}/api/auth/logout/`, {
        method: "POST",
        headers: { Authorization: `Token ${token}` },
        cache: "no-store",
      });
    }
  } catch {}
  jar.delete("auth_token");
  redirect("/");
}
