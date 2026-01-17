"use client";

import { useActionState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { loginAction } from "@/services/auth/loginAction";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function LoginForm({ redirect }: { redirect?: string }) {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(loginAction, null);

  useEffect(() => {
    if (state?.success && state.redirect) {
      router.replace(state.redirect); // 🔥 redirect to user intended page
    }

    if (state?.error) {
      toast.error(state.error);
    }
  }, [state, router]);

  return (
    <>
      <form action={formAction}>
        {redirect && <input type="hidden" name="redirect" value={redirect} />}

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
