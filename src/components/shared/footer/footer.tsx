"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-linear-to-r from-blue-50/40 to-purple-50/40 backdrop-blur-lg border-t border-white/20">
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row md:flex-wrap gap-8 justify-between">
        {/* Logo & Description */}
        <div className="flex-1 min-w-56">
          <h2 className="text-2xl font-bold text-gray-700">Travel-Clique</h2>
          <p className="text-gray-700 text-sm sm:text-base mt-2">
            Connecting travelers with buddies around the world. Explore
            destinations, create plans, and find your travel companion!
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-1 min-w-36">
          <h3 className="font-semibold text-gray-700 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {[
              { name: "Explore Travelers", href: "/travelers" },
              { name: "My Travel Plans", href: "/plans" },
              { name: "About Us", href: "/about" },
              { name: "Contact", href: "/contact" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-gray-700 hover:text-gray-800 transition-colors duration-300 text-sm sm:text-base"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex-1 min-w-36">
          <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
          <div className="flex gap-4 flex-wrap">
            <Link
              href="https://www.facebook.com/mdismailahammedroman/"
              aria-label="Visit us on Facebook"
              className="hover:text-blue-600 transition-colors duration-300"
            >
              <Facebook size={24} aria-hidden="true" />
            </Link>

            <Link
              href="https://x.com/ismailahammedr3"
              aria-label="Visit us on Twitter"
              className="hover:text-blue-600 transition-colors duration-300"
            >
              <Twitter size={24} aria-hidden="true" />
            </Link>

            <Link
              href="https://www.instagram.com/"
              aria-label="Visit us on Instagram"
              className="hover:text-blue-600 transition-colors duration-300"
            >
              <Instagram size={24} aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex-1 min-w-56">
          <h3 className="font-semibold text-gray-700 mb-4">Newsletter</h3>
          <p className="text-gray-700 mb-2 text-sm sm:text-base">
            Get travel tips and updates delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 w-full">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded-md border border-white/10 bg-white/30 text-gray-900 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 backdrop-blur-sm transition-all duration-300 w-20 sm:flex-1"
            />
            <Button
              variant="default"
              className="bg-gray-600 text-white hover:bg-gray-800 rounded-md w-full sm:w-auto transition-colors duration-300"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/20 mt-8 py-4 text-center text-gray-700 text-sm">
        &copy; {new Date().getFullYear()} Travel-Clique. All rights reserved.
      </div>
    </footer>
  );
}
