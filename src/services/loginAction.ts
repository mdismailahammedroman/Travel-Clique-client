"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function loginAction(
  _prevState: { error?: string } | null,
  formData: FormData
) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { error: "Email and password are required" };
  }

  try {
    const res = await fetch("http://localhost:5000/api/v1/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
      credentials: "include", // important to send cookies
    });

    const data = await res.json();

    if (!res.ok) {
      return { error: data.message || "Login failed" };
    }

    // Set cookie if accessToken is present
    if (data.accessToken) {
      const cookieStore = await cookies();
      cookieStore.set("accessToken", data.accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: 60 * 60 * 24 * 7, // 7 days
      });
    }

    // ✅ Login successful → redirect (will be thrown as error below)
  } catch (err) {
    if ((err as Error).message === "NEXT_REDIRECT") {
      throw err;
    }
    console.error("Login Error:", err);
    return { error: "Network error" };
  }

  redirect("/");
}
