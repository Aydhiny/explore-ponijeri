import React from "react";
import { FaSkiing } from "react-icons/fa";
import { IoRestaurant } from "react-icons/io5";
import { FaMountainSun } from "react-icons/fa6";
import { FaMonument } from "react-icons/fa";
import { MdSportsHandball } from "react-icons/md";

export default function Activities() {
  return (
    <div className="p-6 sm:p-8 lg:p-12 text-gray-600 drop-shadow-2xl bg-gradient-to-r from-[#2582faaf] to-[#0026ff88] backdrop-blur-sm border-b-2 border-opacity-35 border-y-main-color-lighter-green">
      <div className="flex flex-wrap justify-center gap-8 lg:gap-12 lg:justify-around">
        <div className="flex cursor-pointer hover:-translate-y-5 transition-all duration-300 flex-col text-center items-center w-24 sm:w-28 lg:w-auto">
          <FaSkiing className="text-4xl sm:text-5xl lg:text-6xl" />
          <p className="font-bold text-lg sm:text-xl lg:text-2xl">Skijanje</p>
        </div>
        <div className="flex cursor-pointer hover:-translate-y-5 transition-all duration-300 flex-col text-center items-center w-24 sm:w-28 lg:w-auto">
          <IoRestaurant className="text-4xl sm:text-5xl lg:text-6xl" />
          <p className="font-bold text-lg sm:text-xl lg:text-2xl">Restorani</p>
        </div>
        <div className="flex cursor-pointer hover:-translate-y-5 transition-all duration-300 flex-col text-center items-center w-24 sm:w-28 lg:w-auto">
          <FaMountainSun className="text-4xl sm:text-5xl lg:text-6xl" />
          <p className="font-bold text-lg sm:text-xl lg:text-2xl">Izletišta</p>
        </div>
        <div className="flex cursor-pointer hover:-translate-y-5 transition-all duration-300 flex-col text-center items-center w-24 sm:w-28 lg:w-auto">
          <FaMonument className="text-4xl sm:text-5xl lg:text-6xl" />
          <p className="font-bold text-lg sm:text-xl lg:text-2xl">Spomenik</p>
        </div>
        <div className="flex cursor-pointer hover:-translate-y-5 transition-all duration-300 flex-col text-center items-center w-24 sm:w-28 lg:w-auto">
          <MdSportsHandball className="text-4xl sm:text-5xl lg:text-6xl" />
          <p className="font-bold text-lg sm:text-xl lg:text-2xl">Sport</p>
        </div>
      </div>
    </div>
  );
}
