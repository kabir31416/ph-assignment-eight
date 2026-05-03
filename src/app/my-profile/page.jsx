"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";

export default function MyProfilePage() {


    const { data: session } = authClient.useSession()

    const user = session?.user;

  if (!user) {
    return <p className="text-center mt-20">Loading...</p>;
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow-md w-80 text-center">

        <Image
          src={user.image}
          alt="profile"
          width={100}
          height={100}
          className="rounded-full mx-auto"
        />

        <h2 className="text-xl font-bold mt-3">
          {user.name}
        </h2>

        <p className="text-gray-500 mb-4">
          {user.email}
        </p>

        <Link href="/my-profile/update">
          <button className="btn w-full bg-linear-to-r from-red-500 to-orange-400 text-white">
            Update Profile
          </button>
        </Link>

      </div>

    </div>
  );
}