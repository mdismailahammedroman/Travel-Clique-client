/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

// Define the return type of the function (you can customize this according to your needs)
interface RegisterResponse {
  success?: boolean;
  error?: string;
  data?: any; // Use a more specific type for data if necessary
}

// Use async function declaration correctly
export async function registerAction(
  currentState: any,
  formData: FormData
): Promise<RegisterResponse> {
  try {
    // Prepare the register data from formData
    const registerData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    // Send the request to your backend
    const res = await fetch("http://localhost:5000/api/v1/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the content type to JSON
      },
      body: JSON.stringify(registerData), // Send JSON instead of FormData
    });

    // Check if response status is OK
    if (!res.ok) {
      const errorResult = await res.json();
      console.error("Error response from server:", errorResult); // Log the error details
      return { error: errorResult.error || "Registration failed" }; // Return server error message
    }

    // Parse the response
    const result = await res.json();

    // Handle the response
    console.log("Registration successful", result);
    return { success: true, data: result };
  } catch (error) {
    console.error("Error during registration:", error); // Log the error
    return { error: "Registration failed" }; // Return a generic error
  }
}
