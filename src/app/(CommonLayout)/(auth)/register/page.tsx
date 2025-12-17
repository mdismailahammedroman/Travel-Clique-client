"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Name: ${name}\nEmail: ${email}\nPassword: ${password}`);
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
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 "></div>

      <Card className="relative w-full max-w-md shadow-lg border border-white/30 backdrop-blur-md z-10">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl text-cyan-900">Register</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <Label htmlFor="name" className="text-gray-600">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className=" focus:border-cyan-400 focus:ring-cyan-400 bg-white/20 text-white placeholder-white border-gray-200"
                required
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-gray-600">Email</Label>
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
              <Label htmlFor="password" className="text-gray-600">Password</Label>
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
              Register
            </Button>
          </form>
          <p className="text-center text-sm text-gray-700 mt-4">
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
