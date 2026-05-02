import Image from "next/image";
import React from "react";
import banner from "@/assets/banner.jpg"
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-white flex items-center py-10">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        
        {/* Text Section */}
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Discover Premium{" "}
            <span className="bg-linear-to-r from-red-500 to-orange-400 text-transparent bg-clip-text">
              Tiles Design
            </span>
          </h1>

          <p className="py-6 text-gray-600 max-w-lg">
            Explore a wide range of modern and stylish tiles to transform your
            home or office. Quality meets elegance at TilesGallery.
          </p>

          <div className="flex gap-4">
            <button className="px-6 py-3 rounded-lg bg-linear-to-r from-red-500 to-orange-400 text-white font-medium hover:scale-105 transition duration-300 shadow-md">
              <Link href={'/all-tiles'}>Browse Now</Link>
            </button>

          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <div className="relative">
            <Image
              src={banner}
              alt="Tiles Banner"
              width={400}
              height={400}
              className="rounded-2xl shadow-xl"
            />

            {/* Decorative Glow */}
            <div className="absolute -z-10 top-10 left-10 w-72 h-72 bg-red-400/20 blur-3xl rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;