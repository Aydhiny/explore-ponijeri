import React from "react";
import { FaPersonSkiingNordic } from "react-icons/fa6";

const backgroundImage = new URL("../images/skijanje1.jpg", import.meta.url);
export default function PromoSki() {
  return (
    <div
      className="w-full text-gray-600 h-fit cursor-default relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="flex items-center justify-end bg-black bg-opacity-50 px-20">
        <div className="text-end text-white py-24 ">
          <h1 className="text-6xl mb-4 font-bold font-playwrite-hr">
            Škola skijanja
          </h1>
          <p className="text-2xl font-bold">Učite kod profesionalaca!</p>
        </div>
        <FaPersonSkiingNordic className="text-white size-28 ml-4" />
      </div>
    </div>
  );
}
