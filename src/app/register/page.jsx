"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name || !email || !photo || !password) {
      setError("All fields required");
      return;
    }

    router.push("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

        <h1 className="text-3xl font-bold text-center mb-6">
          Register
        </h1>

        {error && (
          <p className="text-red-500 text-sm text-center mb-3">
            {error}
          </p>
        )}

        <form onSubmit={handleRegister} className="space-y-4">

          <input
            type="text"
            placeholder="Name"
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-orange-400"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-orange-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="text"
            placeholder="Photo URL"
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-orange-400"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-orange-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="w-full bg-linear-to-r from-red-500 to-orange-400 text-white py-3 rounded-lg hover:scale-105 transition">
            Register
          </button>

        </form>

        {/* GOOGLE */}
        <button className="w-full mt-3 border py-3 rounded-lg hover:bg-gray-100">
          Continue with Google
        </button>

        <p className="text-sm text-center mt-5">
          Already have account?{" "}
          <Link href="/login" className="text-blue-500 font-medium">
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}