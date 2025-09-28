"use client";

import Link from "next/link";
import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold text-blue-600">
          RealEstate
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6 text-gray-700 font-medium">
          <Link
            href="/buy"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Buy
          </Link>
          <Link
            href="/rent"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Rent
          </Link>
          <Link
            href="/sell"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Sell
          </Link>

          {/* User authentication buttons */}
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <Link
              href="/sign-in"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Sign In
            </Link>
          </SignedOut>
        </nav>
      </div>
    </header>
  );
}
