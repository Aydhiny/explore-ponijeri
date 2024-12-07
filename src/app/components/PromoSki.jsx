import React from "react";
const backgroundImage = new URL("../images/skijanje1.jpg", import.meta.url);
export default function PromoSki() {
  return (
    <div
      className="w-full text-gray-600 h-fit cursor-default shadow-2xl relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="px-20 justify-end text-end text-white py-24 bg-black bg-opacity-50">
        <h1 className="text-6xl mb-4 font-bold font-playwrite-hr">
          Škola skijanja
        </h1>
        <p className="text-2xl font-bold">Učite kod profesionalaca!</p>
      </div>
    </div>
  );
}
