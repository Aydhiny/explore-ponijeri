import React from "react";
const backgroundImage = new URL("../images/apartman1.jpg", import.meta.url);
export default function Promo() {
  return (
    <div
      className="w-full border-b-2 border-main-color-lighter-green border-opacity-50 text-gray-600 h-fit cursor-default shadow-2xl relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="px-20 text-white py-24 bg-black bg-opacity-50">
        <h1 className="text-6xl mb-4 font-bold font-playwrite-hr">
          Apartmani Ponijeri
        </h1>
        <p className="text-2xl font-bold">Uredan i kvalitetan smještaj.</p>
      </div>
    </div>
  );
}
