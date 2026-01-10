"use client";

import { useActionState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { registerAction } from "@/services/registerAction";

export default function RegisterForm() {
  const [state, formAction, isPending] = useActionState(registerAction, null);

  return (
    <>
      <form action={formAction} className="flex flex-col gap-4">
        <div>
          <Label htmlFor="name" className="text-cyan-600">
            Full Name
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="John Doe"
            required
            className="bg-white/20 text-gray-950"
          />
        </div>

        <div>
          <Label htmlFor="email" className="text-cyan-600">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="example@email.com"
            required
            className="bg-white/20 text-gray-950"
          />
        </div>

        <div>
          <Label htmlFor="password" className="text-cyan-600">
            Password
          </Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="********"
            required
            className="bg-white/20 text-gray-950"
          />
        </div>

        {state?.error && (
          <p className="text-red-400 text-sm text-center">{state.error}</p>
        )}

        <Button
          type="submit"
          disabled={isPending}
          className="w-full bg-cyan-500 hover:bg-cyan-600"
        >
          {isPending ? "Registering..." : "Register"}
        </Button>
      </form>

      <p className="text-center text-sm text-gray-600 mt-4">
        Already have an account?{" "}
        <Link href="/login" className="text-cyan-300 hover:underline">
          Login
        </Link>
      </p>
    </>
  );
}
