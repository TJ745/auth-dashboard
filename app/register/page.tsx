"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(form),
    });
    router.push("/login");
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="p-8 rounded-lg shadow-md bg-teal-800 flex flex-col gap-4 w-96"
      >
        <h1 className="text-2xl font-bold mb-2">Register</h1>
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Register
        </button>
        <p className="text-sm">
          Already have an account?{" "}
          <Link href="/login" className="underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
