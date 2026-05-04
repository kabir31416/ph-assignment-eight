"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { FaGoogle } from "react-icons/fa";

export default function RegisterPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = async (e) => {

    const { data, error } = await authClient.signUp.email({
      name: e.name,
      email: e.email,
      password: e.password,
      image: e.photo,
      callbackURL: "/login",
    });

    console.log(data, error)

    if (error) {
      alert(error.message)
    }

    if (data) {
      alert(data.message)
    }

  };

  const handleGoogle = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });

  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-red-50 via-white to-orange-50 px-4">

      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border">

        <h1 className="text-3xl font-bold text-center mb-2">
          Create Account
        </h1>
        <p className="text-center text-gray-500 mb-6 text-sm">
          Join TilesGallery today
        </p>

        <form onSubmit={handleSubmit(handleRegister)} className="space-y-4">

          <div>
            <input
              type="text"
              placeholder="Full Name"
              {...register("name", { required: "Name is required" })}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
            />
            {errors.name && (
              <p className="text-red-500 text-sm animate__animated animate__shakeX">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Email Address"
              {...register("email", { required: "Email is required" })}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-sm animate__animated animate__shakeX">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="Photo URL"
              {...register("photo", { required: "Photo URL is required" })}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
            />
            {errors.photo && (
              <p className="text-red-500 text-sm animate__animated animate__shakeX">
                {errors.photo.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters",
                },
              })}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
            />
            {errors.password && (
              <p className="text-red-500 text-sm animate__animated animate__shakeX">
                {errors.password.message}
              </p>
            )}
          </div>

          <button className="w-full bg-linear-to-r from-red-500 to-orange-400 text-white py-3 rounded-lg hover:scale-105 transition">
            Register
          </button>

        </form>

        <button onClick={handleGoogle} className="flex items-center justify-center gap-3 w-full mt-3 border py-3 rounded-lg hover:bg-gray-100 transition">
          <FaGoogle className="text-red-500" />
          <span>Continue with Google</span>
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