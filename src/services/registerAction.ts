"use server";

import { redirect } from "next/navigation";

export async function registerAction(
  _prevState: { error?: string; success?: boolean } | null,
  formData: FormData
) {
  // Extract fields if validation is needed before sending
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  if (!name || !email || !password) {
    return { error: "Name, Email and Password are required" };
  }

  try {
    const res = await fetch("http://localhost:5000/api/v1/users/register", {
      method: "POST",

      body: formData,
    });

    const data = await res.json();

    if (!res.ok) {
      return { error: data.message || "Registration failed" };
    }

    // On success, redirect to login
    redirect("/login");
  } catch (err) {
    // If it's a redirect error, rethrow it (checking for the specific digest or type)
    if ((err as Error).message === "NEXT_REDIRECT") {
      throw err;
    }
    return { error: "Network error or Server unreachable" };
  }
}
