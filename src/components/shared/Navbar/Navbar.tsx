"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type UserRole = "guest" | "user" | "admin";

export default function Navbar() {
  const [role, setRole] = useState<UserRole>("guest");

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-lg bg-white/30 border-b border-white/20 shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-900">
          Travel-Clique
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 font-medium text-gray-800">
          {role === "guest" && (
            <>
              <Link href="/travelers" className="hover:text-gray-900 transition">
                Explore Travelers
              </Link>
              <Link href="/find-buddy" className="hover:text-gray-900 transition">
                Find Travel Buddy
              </Link>
              <Link href="/login" className="hover:text-gray-900 transition">
                Login
              </Link>
              <Button
                variant="default"
                size="sm"
                className="bg-white/40 backdrop-blur-sm text-gray-900 hover:bg-white/50 border border-white/30"
              >
                <Link href="/register">Register</Link>
              </Button>
            </>
          )}

          {role === "user" && (
            <>
              <Link href="/travelers" className="hover:text-gray-900 transition">
                Explore Travelers
              </Link>
              <Link href="/plans" className="hover:text-gray-900 transition">
                My Travel Plans
              </Link>
              <Link href="/profile" className="hover:text-gray-900 transition">
                Profile
              </Link>
              <Button
                variant="default"
                size="sm"
                className="bg-white/30 backdrop-blur-sm text-gray-900 hover:bg-white/40 border border-white/20"
              >
                Logout
              </Button>
            </>
          )}

          {role === "admin" && (
            <>
              <Link href="/admin" className="hover:text-gray-900 transition">
                Admin Dashboard
              </Link>
              <Link href="/admin/users" className="hover:text-gray-900 transition">
                Manage Users
              </Link>
              <Link href="/admin/plans" className="hover:text-gray-900 transition">
                Manage Travel Plans
              </Link>
              <Link href="/profile" className="hover:text-gray-900 transition">
                Profile
              </Link>
              <Button
                variant="default"
                size="sm"
                className="bg-white/30 backdrop-blur-sm text-red-600 hover:bg-white/40 border border-white/20"
              >
                Logout
              </Button>
            </>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="default"
            size="sm"
            className="bg-white/40 backdrop-blur-sm text-gray-900 hover:bg-white/50 border border-white/30"
          >
            Menu
          </Button>
        </div>
      </div>
    </header>
  );
}
