"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 shadow-md">
      {/* Left: Logo/Brand */}
      <Link href="/" className="text-2xl font-bold text-blue-600">
        MyApp
      </Link>

      {/* Right: Auth buttons */}
      <div className="flex gap-4">
        <Link
          href="/login"
          className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
        >
          Login
        </Link>
        <Link
          href="/register"
          className="px-4 py-2 rounded-lg border border-blue-500 text-blue-500 hover:bg-blue-50 transition"
        >
          Register
        </Link>
      </div>
    </nav>
  );
}
