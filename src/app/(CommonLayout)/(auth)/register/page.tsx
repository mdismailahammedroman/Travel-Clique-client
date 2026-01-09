"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRegisterMutation } from "@/components/redux/api/authApi";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const [register, { isLoading, error }] = useRegisterMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await register({ name, email, password }).unwrap();

      if (res.accessToken) {
        localStorage.setItem("accessToken", res.accessToken);
        router.push("/dashboard");
      } else {
        router.push("/login");
      }
    } catch (err) {
      console.error("Registration failed", err);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 relative"
      style={{
        backgroundImage: "url('/jack-ward-rknrvCrfS1k-unsplash.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <Card className="relative w-full max-w-md shadow-lg border border-white/30 backdrop-blur-md z-10">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl text-cyan-600">Register</CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <Label className="text-cyan-600">Full Name</Label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-white/20 text-gray-950"
              />
            </div>

            <div>
              <Label className="text-cyan-600">Email</Label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/20 text-gray-950"
              />
            </div>

            <div>
              <Label className="text-cyan-600">Password</Label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-white/20 text-gray-950"
              />
            </div>

            {error && (
              <p className="text-red-400 text-sm">
                Registration failed. Try another email.
              </p>
            )}

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-cyan-500 hover:bg-cyan-600"
            >
              {isLoading ? "Registering..." : "Register"}
            </Button>
          </form>

          <p className="text-center text-sm text-gray-300 mt-4">
            Already have an account?{" "}
            <Link href="/login" className="text-cyan-300 hover:underline">
              Login
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
