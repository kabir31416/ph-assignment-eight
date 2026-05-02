import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6">

      <h1 className="text-7xl md:text-9xl font-extrabold tracking-widest bg-linear-to-r from-red-500 via-pink-500 to-orange-400 text-transparent bg-clip-text">
        404
      </h1>

      <div className="w-24 h-1 bg-linear-to-r from-red-500 to-orange-400 rounded my-6"></div>

      <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-center text-gray-800">
        Oops! Page not found
      </h2>

      <p className="text-gray-500 text-center max-w-md mb-6">
        The page you’re looking for doesn’t exist or has been moved.
        Let’s get you back to exploring TilesGallery.
      </p>

      <Link href="/">
        <button className="bg-linear-to-r from-red-500 to-orange-400 text-white px-6 py-2 rounded-lg font-medium hover:scale-105 hover:shadow-lg transition duration-300">
          ⬅ Back to Home
        </button>
      </Link>

      <p className="text-xs text-gray-400 mt-6">
        Error code: <span className="text-red-500 font-semibold">404</span> | TilesGallery
      </p>
    </div>
  );
};

export default NotFound;