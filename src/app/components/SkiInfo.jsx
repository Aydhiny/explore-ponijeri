import React from "react";
import Link from "next/link";

export default function SkiInfo() {
  return (
    <div className="px-24 py-16 bg-gradient-to-t from-gray-800 to-gray-900 cursor-default text-white flex flex-col items-center">
      {/* Text Section */}
      <div className="text-center max-w-3xl space-y-8">
        <h1 className="font-playwrite-hr text-6xl font-bold text-white leading-tight">
          Cijene Skijanja na Ponijerima
        </h1>
        <div className="p-1 bg-gray-600 w-24 mx-auto"></div>
        <p className="text-lg leading-relaxed text-white">
          Cijene skijanja na Ponijerima bit će iste kao i prošle godine:
        </p>
      </div>

      {/* Prices Section */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        <div className="bg-gradient-to-t from-[#0044ff94] to-[#0066ffd8] hover:bg-gray-600 shadow-xl backdrop-blur-sm border-2 border-opacity-35 border-main-color-lighter-green text-white text-center py-8 px-6 hover:scale-105 transition-all duration-300">
          <h3 className="text-3xl font-bold mb-4">Poludnevna karta</h3>
          <p className="text-5xl font-bold">10 KM</p>
          <p className="text-2xl mt-2">
            od 10:00 do 13:00 ili od 13:00 do 16:00
          </p>
        </div>
        <div className="bg-gradient-to-t from-[#0044ff94] to-[#0066ffd8] hover:bg-gray-600 shadow-xl backdrop-blur-sm border-2 border-opacity-35 border-main-color-lighter-green text-white text-center py-8 px-6 hover:scale-105 transition-all duration-300">
          <h3 className="text-3xl font-bold mb-4">Dnevna karta</h3>
          <p className="text-5xl font-bold">15 KM</p>
          <p className="text-2xl mt-2">od 10:00 do 16:00</p>
        </div>
        <div className="bg-gradient-to-t from-[#0044ff94] to-[#0066ffd8] hover:bg-gray-600 shadow-xl backdrop-blur-sm border-2 border-opacity-35 border-main-color-lighter-green text-white text-center py-8 px-6 hover:scale-105 transition-all duration-300">
          <h3 className="text-3xl font-bold mb-4">Noćno skijanje</h3>
          <p className="text-5xl font-bold">10 KM</p>
        </div>
        <div className="bg-gradient-to-t from-[#0044ff94] to-[#0066ffd8] hover:bg-gray-600 shadow-xl backdrop-blur-sm border-2 border-opacity-35 border-main-color-lighter-green text-white text-center py-8 px-6 hover:scale-105 transition-all duration-300">
          <h3 className="text-3xl font-bold mb-4">Karta za jednu vožnju</h3>
          <p className="text-5xl font-bold">2 KM</p>
        </div>
        <div className="bg-gradient-to-t from-[#00ff3794] to-[#00ffaad8] hover:bg-gray-600 shadow-xl backdrop-blur-sm border-2 border-opacity-35 border-green-500 text-white text-center py-8 px-6 hover:scale-105 transition-all duration-300">
          <h3 className="text-3xl font-bold mb-4">Cijena parkinga</h3>
          <p className="text-5xl font-bold">2 KM</p>
        </div>
        <div className="bg-gradient-to-t from-[#0044ff94] to-[#0066ffd8] hover:bg-gray-600 shadow-xl backdrop-blur-sm border-2 border-opacity-35 border-main-color-lighter-green text-white text-center py-8 px-6 hover:scale-105 transition-all duration-300">
          <h3 className="text-3xl font-bold mb-4">Sedmodnevna karta</h3>
          <p className="text-5xl font-bold">80 KM</p>
        </div>
        <div className="bg-gradient-to-t from-[#0044ff94] to-[#0066ffd8] hover:bg-gray-600 shadow-xl backdrop-blur-sm border-2 border-opacity-35 border-main-color-lighter-green text-white text-center py-8 px-6 hover:scale-105 transition-all duration-300">
          <h3 className="text-3xl font-bold mb-4">Sezonska karta</h3>
          <p className="text-5xl font-bold">300 KM</p>
        </div>
        <div className="bg-gradient-to-t from-[#0044ff94] to-[#0066ffd8] hover:bg-gray-600 shadow-xl backdrop-blur-sm border-2 border-opacity-35 border-main-color-lighter-green text-white text-center py-8 px-6 hover:scale-105 transition-all duration-300">
          <h3 className="text-3xl font-bold mb-4">
            Karta za grupu od 5 do 12 odraslih osoba
          </h3>
          <p className="text-5xl font-bold">12 KM po osobi</p>
          <p className="text-2xl mt-2">dnevna karta</p>
        </div>
        <div className="bg-gradient-to-t from-[#0044ff94] to-[#0066ffd8] hover:bg-gray-600 shadow-xl backdrop-blur-sm border-2 border-opacity-35 border-main-color-lighter-green text-white text-center py-8 px-6 hover:scale-105 transition-all duration-300">
          <h3 className="text-3xl font-bold mb-4">
            Karta za grupu od 5 do 12 djece
          </h3>
          <p className="text-5xl font-bold">8 KM po osobi</p>
          <p className="text-2xl mt-2">dnevna karta (ski klubovi)</p>
        </div>
      </div>

      {/* Link Section */}
      <div className="mt-12 flex justify-center">
        <Link
          href="/skijanje"
          className="text-white border-b-2 mr-8 hover:bg-black hover:text-white transition-all duration-150 border-white rounded-sm font-bold px-8 py-3 bg-main-color-lighter-green backdrop-blur-sm self-start"
        >
          Raspored i Ski Škola
        </Link>
      </div>
    </div>
  );
}
