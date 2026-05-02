import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import TilesCard from "@/components/TilesCard";
import TilesSlider from "@/components/TilesSlider";
import Image from "next/image";
import Link from "next/link";

async function getTiles() {
  const res = await fetch("http://localhost:5001/tiles");
  return res.json();
}

export default async function Home() {
  const tiles = await getTiles();

  return (
    <div>
      <TilesSlider tiles={tiles} />
      <Banner />

      
      <div className="max-w-7xl mx-auto px-6 py-10">

        <h2 className="text-3xl font-bold mb-6">
          Featured Tiles
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">

          {tiles.slice(0, 4).map((tile) => (
            <TilesCard key={tile.id} tile={tile} /> 
          ))}

        </div>

      </div>
    </div>
  );
}