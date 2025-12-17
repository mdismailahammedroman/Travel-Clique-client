"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage: "url('/dino-reichmuth-A5rCN8626Ck-unsplash.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50 "></div> {/* dark overlay for readability */}

      <Card className="relative w-full max-w-md shadow-lg border border-white/30 backdrop-blur-md z-10">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl text-white transition-colors">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <Label htmlFor="email" className="text-white">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=" focus:border-cyan-400 focus:ring-cyan-400 bg-white/20 text-white placeholder-white border-gray-200"
                required
              />
            </div>
            <div>
              <Label htmlFor="password" className="text-white">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className=" focus:border-cyan-400 focus:ring-cyan-400 bg-white/20 text-white placeholder-white border-gray-200"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full mt-2 bg-cyan-500 hover:bg-cyan-600 text-white transition-colors"
            >
              Login
            </Button>
          </form>
          <p className="text-center text-sm text-gray-700 mt-4">
            Don’t have an account?{" "}
            <Link href="/register" className="text-cyan-300 hover:underline">
              Register
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
