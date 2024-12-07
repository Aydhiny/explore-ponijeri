import React from "react";
import { FaSkiing } from "react-icons/fa";
import { IoRestaurant } from "react-icons/io5";
import { FaMountainSun } from "react-icons/fa6";
import { FaMonument } from "react-icons/fa";
import { MdSportsHandball } from "react-icons/md";

export default function Activities() {
  return (
    <div className="p-12 text-gray-600 drop-shadow-2xl bg-gradient-to-r from-[#2582faaf] to-[#0026ff88] backdrop-blur-sm border-b-2 border-opacity-35 border-y-main-color-lighter-green">
      <div className="flex justify-around">
        <div className="flex cursor-pointer hover:-translate-y-5 transition-all duration-300 flex-col text-center items-center">
          <FaSkiing className="size-16" />
          <p className="font-bold text-2xl">Skijanje</p>
        </div>
        <div className="flex cursor-pointer hover:-translate-y-5 transition-all duration-300 flex-col text-center items-center">
          <IoRestaurant className="size-16" />
          <p className="font-bold text-2xl">Restorani</p>
        </div>
        <div className="flex cursor-pointer hover:-translate-y-5 transition-all duration-300 flex-col text-center items-center">
          <FaMountainSun className="size-16" />
          <p className="font-bold text-2xl">Izletišta</p>
        </div>
        <div className="flex cursor-pointer hover:-translate-y-5 transition-all duration-300 flex-col text-center items-center">
          <FaMonument className="size-16" />
          <p className="font-bold text-2xl">Spomenik</p>
        </div>
        <div className="flex cursor-pointer hover:-translate-y-5 transition-all duration-300 flex-col text-center items-center">
          <MdSportsHandball className="size-16" />
          <p className="font-bold text-2xl">Sport</p>
        </div>
      </div>
    </div>
  );
}
