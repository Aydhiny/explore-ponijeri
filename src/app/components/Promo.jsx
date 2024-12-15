import React from "react";
import { MdApartment } from "react-icons/md";

const backgroundImage = new URL("../images/apartman1.jpg", import.meta.url);

export default function Promo() {
  return (
    <div
      className="w-full border-b-2 border-main-color-lighter-green border-opacity-50 text-gray-600 h-fit cursor-default relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="flex flex-col lg:flex-row px-5 lg:px-20 items-center bg-black bg-opacity-50 text-center lg:text-left py-12 lg:py-24">
        {/* Icon */}
        <MdApartment className="text-5xl size-24 lg:text-6xl text-white mb-5 lg:mb-0 lg:mr-5" />

        {/* Text Content */}
        <div className="text-white py-5 lg:py-0">
          <h1 className="text-3xl lg:text-6xl mb-4 font-bold font-playwrite-hr">
            Apartmani Ponijeri
          </h1>
          <p className="text-lg lg:text-2xl font-bold">
            Uredan i kvalitetan smještaj.
          </p>
        </div>
      </div>
    </div>
  );
}
