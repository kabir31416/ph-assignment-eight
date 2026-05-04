"use client";

import { useEffect, useMemo } from "react";
import { useRouter, useParams } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import tilesData from "@/data/db.json";

export default function TileDetailsPage() {
  const router = useRouter();
  const params = useParams();
  const { data: session, isPending } = authClient.useSession();

 
  useEffect(() => {
    if (!isPending && !session) {
      router.push("/login");
    }
  }, [isPending, session, router]);


  const tile = useMemo(() => {
    const tiles = Array.isArray(tilesData) ? tilesData : tilesData?.tiles || [];
    return tiles.find((item) => String(item.id) === String(params?.id));
  }, [params?.id]);


  if (isPending) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="animate-pulse text-lg font-medium">Authenticating...</p>
      </div>
    );
  }


  if (!tile) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-semibold">Tiles not found!</h2>
        <button onClick={() => router.back()} className="text-blue-500 mt-2">Go Back</button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        
      
        <div className="rounded-2xl overflow-hidden shadow-lg bg-gray-50 flex items-center justify-center">
          <Image
            src={tile.image}
            alt={tile.title}
            width={600}
            height={600}
            className="w-full h-full "
            unoptimized
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{tile.title}</h1>
          <p className="text-gray-600 leading-relaxed">{tile.description}</p>
          <div className="text-2xl font-extrabold text-red-500">${tile.price}</div>

          <div className="bg-gray-100 p-5 rounded-xl space-y-2 text-sm border border-gray-200">
            <p><span className="font-semibold">Category:</span> {tile.category}</p>
            <p><span className="font-semibold">Material:</span> {tile.material}</p>
            <p><span className="font-semibold">Dimensions:</span> {tile.dimensions}</p>
          </div>

          <div className="flex items-center gap-3">
            {tile.inStock ? (
              <span className="px-3 py-1 bg-green-100 text-green-700 border border-green-200 rounded-full text-xs font-bold uppercase">
                In Stock
              </span>
            ) : (
              <span className="px-3 py-1 bg-red-100 text-red-700 border border-red-200 rounded-full text-xs font-bold uppercase">
                Out of Stock
              </span>
            )}
          </div>

          <button className="w-full md:w-auto mt-6 bg-linear-to-r from-red-500 to-orange-400 text-white px-10 py-3 rounded-xl font-bold hover:shadow-lg active:scale-95 transition-all shadow-md">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}