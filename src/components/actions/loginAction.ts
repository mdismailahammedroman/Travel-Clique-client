"use server";

export async function loginAction(
  _prevState: { error?: string } | null,
  formData: FormData
) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  // Example validation
  if (!email || !password) {
    return { error: "Email and password are required" };
  }

  // TODO: replace with real auth logic
  if (email !== "test@test.com" || password !== "password") {
    return { error: "Invalid credentials" };
  }

  // On success you could:
  // - set cookies
  // - redirect()
  // - return success state

  return { error: undefined };
}
