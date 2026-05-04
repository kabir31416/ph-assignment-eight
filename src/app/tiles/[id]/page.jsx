"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";

export default function TileDetailsPage() {
  const router = useRouter();
  const params = useParams();

  const { data: session, isPending } = authClient.useSession();

  const [tile, setTile] = useState(null);

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/login");
    }
  });

  useEffect(() => {
    fetch("http://localhost:5001/tiles")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((t) => t.id === params.id);
        setTile(found);
      });
  }, [params.id]);


  if (isPending || !tile) {
    return <p className="text-center mt-20">Loading...</p>;
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">

      <div className="grid md:grid-cols-2 gap-10 items-center">


        <div className="rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={tile.image}
            alt={tile.title}
            width={600}
            height={600}
            className="w-full h-full object-cover"
            unoptimized
          />
        </div>

        <div className="space-y-4">

          <h1 className="text-3xl font-bold text-gray-800">
            {tile.title}
          </h1>

          <p className="text-gray-600 leading-relaxed">
            {tile.description}
          </p>

          <div className="text-2xl font-bold text-red-500">
            ${tile.price}
          </div>

          
          <div className="bg-gray-100 p-4 rounded-lg space-y-2 text-sm">

            <p><span className="font-semibold">Category:</span> {tile.category}</p>
            <p><span className="font-semibold">Material:</span> {tile.material}</p>
            <p><span className="font-semibold">Dimensions:</span> {tile.dimensions}</p>

          </div>

          <div>
            {tile.inStock ? (
              <span className="px-4 py-1 bg-green-500 text-white rounded-full text-sm">
                In Stock
              </span>
            ) : (
              <span className="px-4 py-1 bg-red-500 text-white rounded-full text-sm">
                Out of Stock
              </span>
            )}
          </div>

          <button className="mt-4 bg-linear-to-r from-red-500 to-orange-400 text-white px-6 py-2 rounded-lg hover:scale-105 transition">
            Add to Cart
          </button>

        </div>

      </div>
    </div>
  );
}