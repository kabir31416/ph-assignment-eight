"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    photo: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.photo || !form.password) {
      setError("All fields are required");
      return;
    }

    if (form.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-red-50 via-white to-orange-50 px-4">

      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border">

        <h1 className="text-3xl font-bold text-center mb-2">
          Create Account
        </h1>
        <p className="text-center text-gray-500 mb-6 text-sm">
          Join TilesGallery today
        </p>

        {error && (
          <p className="text-red-500 text-sm text-center mb-4">
            {error}
          </p>
        )}

        <form onSubmit={handleRegister} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
            value={form.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
            value={form.photo}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
            value={form.password}
            onChange={handleChange}
          />

          <button className="w-full bg-linear-to-r from-red-500 to-orange-400 text-white py-3 rounded-lg hover:scale-105 transition">
            Register
          </button>

        </form>

        <button className="w-full mt-3 border py-3 rounded-lg hover:bg-gray-100 transition">
          Continue with Google
        </button>

        <p className="text-sm text-center mt-5">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500 font-medium hover:underline">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}