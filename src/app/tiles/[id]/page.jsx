import Image from "next/image";

export default async function TileDetailsPage({ params }) {
  const { id } = await params;

  const res = await fetch("http://localhost:5001/tiles");
  const data = await res.json();

  const tile = data.find((t) => t.id === id);

  if (!tile) {
    return (
      <div className="text-center mt-20 text-red-500 text-xl">
        Tile Not Found
      </div>
    );
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

        {/* DETAILS */}
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

          {/* INFO BOX */}
          <div className="bg-gray-100 p-4 rounded-lg space-y-2 text-sm">

            <p><span className="font-semibold">Category:</span> {tile.category}</p>
            <p><span className="font-semibold">Material:</span> {tile.material}</p>
            <p><span className="font-semibold">Dimensions:</span> {tile.dimensions}</p>

          </div>

          {/* STATUS BADGE */}
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

          {/* BUTTON */}
          <button className="mt-4 bg-gradient-to-r from-red-500 to-orange-400 text-white px-6 py-2 rounded-lg hover:scale-105 transition">
            Add to Cart
          </button>

        </div>

      </div>
    </div>
  );
}