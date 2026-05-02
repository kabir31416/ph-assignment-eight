import React from 'react';
import Marquee from 'react-fast-marquee';

const TilesSlider = () => {
    return (
        <div className='flex justify-between gap-4 items-center bg-gray-50 px-5 py-1 rounded '>
            <button className='btn bg-linear-to-r from-red-500 to-orange-400 text-white'>New Arrivals</button>
            <Marquee pauseOnHover={true}>
            [Tile Name] | Weekly Feature: Modern Geometric Patterns | Join the Community...
            </Marquee>
        </div>
    );
};

export default TilesSlider;