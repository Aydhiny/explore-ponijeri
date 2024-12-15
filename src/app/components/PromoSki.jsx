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
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-end bg-black bg-opacity-50 px-5 lg:px-20 py-10 lg:py-24">
        <div className="text-center lg:text-end text-white py-5 lg:py-0">
          <h1 className="text-4xl lg:text-6xl mb-4 font-bold font-playwrite-hr">
            Škola skijanja
          </h1>
          <p className="text-lg lg:text-2xl font-bold">
            Učite kod profesionalaca!
          </p>
        </div>
        <FaPersonSkiingNordic className="text-white size-24 text-5xl lg:text-6xl mt-4 lg:mt-0 lg:ml-4" />
      </div>
    </div>
  );
}
