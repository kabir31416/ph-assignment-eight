import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TilesCard = ({tile}) => {
    return (
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
                <button className="btn mt-4 w-full bg-linear-to-r from-red-500 to-orange-400 text-white py-2 rounded-lg">
                View Details
                </button>
              </Link>

            </div>
          </div>
    );
};

export default TilesCard;