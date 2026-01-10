/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { redirect } from "next/navigation";

export interface RegisterResponse {
  success?: boolean;
  error?: string;
  data?: any;
}

export async function registerAction(
  _currentState: RegisterResponse | null,
  formData: FormData
): Promise<RegisterResponse> {
  try {
    const registerData = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      password: String(formData.get("password") ?? ""),
    };

    if (!registerData.name || !registerData.email || !registerData.password) {
      return { error: "All fields are required" };
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/users/register`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registerData),
        cache: "no-store",
      }
    );

    if (!res.ok) {
      let message = "Registration failed";
      try {
        const err = await res.json();
        message = err.error || message;
      } catch {}
      return { error: message };
    }

    const result = await res.json();

    // ✅ Ignore NEXT_REDIRECT exception in dev
    try {
      redirect("/login");
    } catch (err: any) {
      if (!err?.digest?.startsWith("NEXT_REDIRECT")) {
        console.error("Unexpected redirect error:", err);
        return { error: "Something went wrong. Try again." };
      }
    }

    return { success: true, data: result };
  } catch (error) {
    console.error("Register error:", error);
    return { error: "Something went wrong. Try again." };
  }
}
