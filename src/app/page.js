import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
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
            <div
              key={tile.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >

              <Image
                src={tile.image}
                alt={tile.title}
                width={400}
                height={300}
                className="w-full h-40 object-cover"
                unoptimized
              />

              <div className="p-3">

                <h3 className="font-semibold text-sm">
                  {tile.title}
                </h3>

                <p className="text-xs text-gray-500">
                  {tile.category}
                </p>

                <p className="text-red-500 font-bold text-sm">
                  ${tile.price}
                </p>

                <Link href={`/tiles/${tile.id}`}>
                  <button className=" btn mt-2 w-full bg-linear-to-r from-red-500 to-orange-400 text-white text-sm py-1 rounded-md">
                    View Details
                  </button>
                </Link>

              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}