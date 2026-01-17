/* eslint-disable @typescript-eslint/no-explicit-any */
export const loginAction = async (_: any, formData: FormData) => {
  try {
    const email = String(formData.get("email") ?? "");
    const password = String(formData.get("password") ?? "");

    // get redirect path from form
    const rawRedirect = String(formData.get("redirect") ?? "/dashboard");

    // ✅ prevent open redirect attacks
    const redirect =
      rawRedirect.startsWith("/") && !rawRedirect.startsWith("//")
        ? rawRedirect
        : "/dashboard";

    if (!email || !password) {
      return { error: "All fields are required" };
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
      credentials: "include",
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      return { error: err.message || "Login failed" };
    }

    // ✅ return redirect
    return { success: true, redirect };
  } catch (err) {
    console.error("Login error:", err);
    return { error: "Something went wrong. Try again." };
  }
};
