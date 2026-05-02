"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function AllTilesPage() {
  const [tiles, setTiles] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:5001/tiles")
      .then((res) => res.json())
      .then((data) => setTiles(data))
      .catch(() => setTiles([]));
  }, []);

  const filteredTiles = tiles.filter((tile) =>
    tile.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <h1 className="text-4xl font-bold text-center mb-6">
        Tiles Collection
      </h1>

      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search tiles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-full px-4 py-2 w-full max-w-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {filteredTiles.map((tile) => (
          <div
            key={tile.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
          >

            <div className="overflow-hidden">
              <Image
                src={tile.image}
                alt={tile.title}
                width={500}
                height={400}
                className="w-full h-44 object-cover hover:scale-110 transition duration-300"
                unoptimized
              />
            </div>

            <div className="p-4">

              <h2 className="text-lg font-semibold text-gray-800">
                {tile.title}
              </h2>

              <p className="text-sm text-gray-500">
                {tile.category}
              </p>

              <p className="text-red-500 font-bold mt-1">
                ${tile.price}
              </p>

              <p className={`text-xs mt-1 font-medium ${
                tile.inStock ? "text-green-600" : "text-red-500"
              }`}>
                {tile.inStock ? "In Stock" : "Out of Stock"}
              </p>

              <Link href={`/tiles/${tile.id}`}>
                <button className="mt-4 w-full bg-linear-to-r from-red-500 to-orange-400 text-white py-2 rounded-lg hover:scale-105 transition">
                View Details
                </button>
              </Link>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}