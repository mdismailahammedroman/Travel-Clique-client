/* eslint-disable @typescript-eslint/no-explicit-any */
export const loginAction = async (
  _currentState: any,
  formData: FormData
): Promise<any> => {
  try {
    const loginData = {
      email: String(formData.get("email") ?? ""),
      password: String(formData.get("password") ?? ""),
    };

    if (!loginData.email || !loginData.password) {
      return { error: "All fields are required" };
    }
    console.log(loginData);

    const url = `${process.env.NEXT_PUBLIC_API_URL}/auth/login`;
    console.log("Login URL:", url);

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
      credentials: "include",
    });

    if (!res.ok) {
      let message = "Login failed";
      try {
        const err = await res.json();
        message = err.error || err.message || message;
      } catch {}
      return { error: message };
    }

    const result = await res.json();
    console.log("Login success:", result);

    return { success: true, data: result.data };
  } catch (error: any) {
    console.error("Login error:", error);
    return { error: "Something went wrong. Try again." };
  }
};
