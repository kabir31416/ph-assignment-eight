"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function MyProfilePage() {

  const router = useRouter();
  const { data: session } = authClient.useSession()
  const user = session?.user;

   useEffect(() => {
    if (!user) {
      router.push("/login"); 
    }
  }, [user, router]);

  const handleSignout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login"); 
        },
      },
    });
  }

  return (
    <div className=" flex justify-center items-center bg-gray-100 py-20">

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


        <button onClick={() => handleSignout()} className="btn w-full bg-linear-to-r from-red-500 to-orange-400 text-white">
          Sign Out
        </button>

      </div>

    </div>
  );
}