import React from "react";
import { MdApartment } from "react-icons/md";

const backgroundImage = new URL("../images/apartman1.jpg", import.meta.url);
export default function Promo() {
  return (
    <div
      className="w-full border-b-2 border-main-color-lighter-green border-opacity-50 text-gray-600 h-fit cursor-default shadow-2xl relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="flex px-20 items-center bg-black bg-opacity-50">
        <MdApartment className="size-32 text-white" />
        <div className="text-white py-24 ">
          <h1 className="text-6xl mb-4 font-bold font-playwrite-hr">
            Apartmani Ponijeri
          </h1>
          <p className="text-2xl font-bold">Uredan i kvalitetan smještaj.</p>
        </div>
      </div>
    </div>
  );
}
