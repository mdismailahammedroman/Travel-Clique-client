"use client";
import { useActionState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { loginAction } from "@/services/auth/loginAction";

export default function LoginForm() {
  const [state, formAction, isPending] = useActionState(loginAction, null);

  return (
    <>
      <form action={formAction} className="flex flex-col gap-4">
        <div>
          <Label htmlFor="email" className="text-white">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Your email"
            required
            className="focus:border-cyan-400 focus:ring-cyan-400 bg-white/20 text-gray-950 placeholder-white border-gray-200"
          />
        </div>

        <div>
          <Label htmlFor="password" className="text-white">
            Password
          </Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Your password"
            required
            className="focus:border-cyan-400 focus:ring-cyan-400 bg-white/20 text-gray-950 placeholder-white border-gray-200"
          />
        </div>

        <Button
          type="submit"
          className="w-full mt-2 bg-cyan-500 hover:bg-cyan-600 text-white"
          disabled={isPending}
        >
          {isPending ? "Logging in..." : "Login"}
        </Button>

        {state?.error && (
          <div className="text-red-500 mt-2 text-center">{state.error}</div>
        )}
      </form>

      <p className="text-center text-sm text-gray-700 mt-4">
        Don’t have an account?{" "}
        <Link href="/register" className="text-cyan-600 hover:underline">
          Register
        </Link>
      </p>
    </>
  );
}
