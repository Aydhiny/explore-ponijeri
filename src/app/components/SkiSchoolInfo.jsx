import React from "react";
import Link from "next/link";

export default function SkiSchoolInfo() {
  return (
    <div className="px-4 xl:px-24 py-16 bg-gradient-to-t from-gray-800 to-gray-900 cursor-default text-white flex flex-col items-center">
      {/* Text Section */}
      <div className="text-center max-w-3xl space-y-8">
        <h1 className="font-playwrite-hr text-6xl font-bold text-white leading-tight">
          Škola Skijanja na Ponijerima
        </h1>
        <div className="p-1 bg-gray-600 w-24 mx-auto"></div>
        <p className="text-lg leading-relaxed text-white">
          Za sve koji žele naučiti skijati, tu su profesionalni ski instruktori
          i škola skijanja.
        </p>
      </div>

      {/* Prices Section */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        <div className="bg-gradient-to-t from-[#0044ff94] to-[#0066ffd8] hover:bg-gray-600 shadow-xl backdrop-blur-sm border-2 border-opacity-35 border-main-color-lighter-green text-white text-center py-8 px-6 hover:scale-105 transition-all duration-300">
          <h3 className="text-3xl font-bold mb-4">Cijena za 1 sat (1 osoba)</h3>
          <p className="text-5xl font-bold">10 KM</p>
          <p className="text-2xl mt-2">Bez prevoza</p>
        </div>
        <div className="bg-gradient-to-t from-[#0044ff94] to-[#0066ffd8] hover:bg-gray-600 shadow-xl backdrop-blur-sm border-2 border-opacity-35 border-main-color-lighter-green text-white text-center py-8 px-6 hover:scale-105 transition-all duration-300">
          <h3 className="text-3xl font-bold mb-4">
            Cijena za 3 sata (1 osoba)
          </h3>
          <p className="text-5xl font-bold">25 KM</p>
        </div>
        <div className="bg-gradient-to-t from-[#0044ff94] to-[#0066ffd8] hover:bg-gray-600 shadow-xl backdrop-blur-sm border-2 border-opacity-35 border-main-color-lighter-green text-white text-center py-8 px-6 hover:scale-105 transition-all duration-300">
          <h3 className="text-3xl font-bold mb-4">
            Cijena za 5 dana (1 osoba)
          </h3>
          <p className="text-5xl font-bold">150 KM</p>
        </div>
        <div className="bg-gradient-to-t from-[#00ff3794] to-[#00ffaad8] hover:bg-gray-600 shadow-xl backdrop-blur-sm border-2 border-opacity-35 border-green-500 text-white text-center py-8 px-6 hover:scale-105 transition-all duration-300">
          <h3 className="text-3xl font-bold mb-4">Cijena za 1 sat (2 osobe)</h3>
          <p className="text-5xl font-bold">17 KM</p>
          <p className="text-2xl mt-2">Bez prevoza</p>
        </div>
        <div className="bg-gradient-to-t from-[#00ff3794] to-[#00ffaad8] hover:bg-gray-600 shadow-xl backdrop-blur-sm border-2 border-opacity-35 border-green-500 text-white text-center py-8 px-6 hover:scale-105 transition-all duration-300">
          <h3 className="text-3xl font-bold mb-4">
            Cijena za 3 sata (2 osobe)
          </h3>
          <p className="text-5xl font-bold">45 KM</p>
        </div>
        <div className="bg-gradient-to-t from-[#00ff3794] to-[#00ffaad8] hover:bg-gray-600 shadow-xl backdrop-blur-sm border-2 border-opacity-35 border-green-500 text-white text-center py-8 px-6 hover:scale-105 transition-all duration-300">
          <h3 className="text-3xl font-bold mb-4">
            Cijena za 5 dana (2 osobe)
          </h3>
          <p className="text-5xl font-bold">250 KM</p>
        </div>
      </div>

      {/* Additional Pricing for More Participants */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        <div className="bg-gradient-to-t from-[#0044ff94] to-[#0066ffd8] hover:bg-gray-600 shadow-xl backdrop-blur-sm border-2 border-opacity-35 border-main-color-lighter-green text-white text-center py-8 px-6 hover:scale-105 transition-all duration-300">
          <h3 className="text-3xl font-bold mb-4">Cijena za 1 sat (3 osobe)</h3>
          <p className="text-5xl font-bold">25 KM</p>
        </div>
        <div className="bg-gradient-to-t from-[#0044ff94] to-[#0066ffd8] hover:bg-gray-600 shadow-xl backdrop-blur-sm border-2 border-opacity-35 border-main-color-lighter-green text-white text-center py-8 px-6 hover:scale-105 transition-all duration-300">
          <h3 className="text-3xl font-bold mb-4">
            Cijena za 3 sata (3 osobe)
          </h3>
          <p className="text-5xl font-bold">60 KM</p>
        </div>
        <div className="bg-gradient-to-t from-[#0044ff94] to-[#0066ffd8] hover:bg-gray-600 shadow-xl backdrop-blur-sm border-2 border-opacity-35 border-main-color-lighter-green text-white text-center py-8 px-6 hover:scale-105 transition-all duration-300">
          <h3 className="text-3xl font-bold mb-4">
            Cijena za 5 dana (3 osobe)
          </h3>
          <p className="text-5xl font-bold">400 KM</p>
        </div>
        <div className="bg-gradient-to-t from-[#00ff3794] to-[#00ffaad8] hover:bg-gray-600 shadow-xl backdrop-blur-sm border-2 border-opacity-35 border-green-500 text-white text-center py-8 px-6 hover:scale-105 transition-all duration-300">
          <h3 className="text-3xl font-bold mb-4">Cijena za 1 sat (4 osobe)</h3>
          <p className="text-5xl font-bold">30 KM</p>
        </div>
        <div className="bg-gradient-to-t from-[#00ff3794] to-[#00ffaad8] hover:bg-gray-600 shadow-xl backdrop-blur-sm border-2 border-opacity-35 border-green-500 text-white text-center py-8 px-6 hover:scale-105 transition-all duration-300">
          <h3 className="text-3xl font-bold mb-4">
            Cijena za 3 sata (4 osobe)
          </h3>
          <p className="text-5xl font-bold">75 KM</p>
        </div>
        <div className="bg-gradient-to-t from-[#00ff3794] to-[#00ffaad8] hover:bg-gray-600 shadow-xl backdrop-blur-sm border-2 border-opacity-35 border-green-500 text-white text-center py-8 px-6 hover:scale-105 transition-all duration-300">
          <h3 className="text-3xl font-bold mb-4">
            Cijena za 5 dana (4 osobe)
          </h3>
          <p className="text-5xl font-bold">550 KM</p>
        </div>
      </div>

      {/* How to Apply Section */}
      <div className="mt-12 text-center">
        <h3 className="text-3xl font-bold mb-4">Kako se prijaviti?</h3>
        <p className="text-lg text-white">
          Kontakt telefoni za prijavu: <strong>032-771-920</strong> ili direktno
          u <strong>SKI centru Ponijeri</strong>.
        </p>
        <p className="text-lg text-white">
          Kontakt osobe: <strong>prof. Irfan Hasagić</strong> i{" "}
          <strong>prof. Marin Mijač</strong>.
        </p>
        <p className="text-lg text-white">
          Iznajmljivanje ski opreme je moguće direktno u SKI centru Ponijeri.
        </p>
      </div>

      {/* Link Section */}
      <div className="mt-12 flex justify-center">
        <Link
          href="/"
          className="text-white border-b-2 mr-8 hover:bg-black hover:text-white transition-all duration-150 border-white rounded-sm font-bold px-8 py-3 bg-main-color-lighter-green backdrop-blur-sm self-start"
        >
          Nazad
        </Link>
      </div>
    </div>
  );
}
