"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import TilesCard from "@/components/TilesCard";

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

        {filteredTiles.map((tile) => <TilesCard key={tile.id} tile={tile} />)}

      </div>
    </div>
  );
}