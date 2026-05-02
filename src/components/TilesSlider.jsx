"use client";

import Marquee from "react-fast-marquee";

const TilesSlider = ({ tiles = [] }) => {
    return (
        <div className="flex items-center gap-4 bg-gray-50 px-5 py-2 rounded">

            <button className=" btn text-sm bg-linear-to-r from-red-500 to-orange-400 text-white px-2 py-1 rounded">
            New Arrivals
            </button>

            <Marquee pauseOnHover={true} speed={50}>
                {tiles.map((tile) => (
                    <span key={tile.id} className="mx-4">
                        {tile.title} | Weekly Feature: Modern Geometric Patterns | Join the Community...
                    </span>
                ))}
            </Marquee>

        </div>
    );
};

export default TilesSlider;