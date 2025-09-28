"use client";

import Link from "next/link";
import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
     
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Realty<span className="text-gray-800">Hub</span>
        </Link>

           
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/listings" className="hover:text-blue-600">Listings</Link>
          <Link href="/agents" className="hover:text-blue-600">Agents</Link>
          <Link href="/about" className="hover:text-blue-600">About</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
        </nav>

          
        <div className="flex items-center space-x-4">
      
          <SignedOut>  
            <Link 
              href="/sign-in"
              className="px-5 py-2 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              Sign In
            </Link>
          </SignedOut>

          
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
    </header>
  );
}
