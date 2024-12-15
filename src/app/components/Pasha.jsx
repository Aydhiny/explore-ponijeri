import Image from "next/image";
import React from "react";
import PashaImg from "../images/pasha.jpg";

export default function Pasha() {
  return (
    <div className="bg-white px-6 sm:px-12 md:px-16 lg:px-24 py-8 sm:py-12 md:py-16 cursor-default text-gray-700 flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center">
      {/* Image Section */}
      <div className="relative group cursor-pointer mb-8 lg:mb-0 flex-shrink-0 w-full sm:w-auto">
        <Image
          className="border-4 border-green-300 rounded-sm transition-transform duration-300 transform group-hover:rotate-6"
          alt="eko"
          src={PashaImg}
          width={800}
          height={800}
        />
      </div>
      {/* Text Section */}
      <div className="flex flex-col text-justify max-w-full sm:max-w-xl lg:max-w-2xl space-y-8">
        <h1 className="font-playwrite-hr text-4xl sm:text-5xl md:text-6xl font-bold text-green-900 leading-tight">
          Sofra Pasha
        </h1>
        <div className="p-1 bg-green-800"></div>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
          Sofra Pasha predstavlja jedinstveno utočište koje spaja luksuz,
          prirodu i autentičnost. Svojim posjetiteljima nudi deset moderno
          opremljenih apartmana koji odišu toplinom i pažljivo biranim
          detaljima, pružajući maksimalnu udobnost i osjećaj doma daleko od
          doma. Svaki apartman ima pogled na predivne krajolike Ponijera, koji
          oduzimaju dah u svako doba godine.
          <br />
          <br />
          Restoran u sklopu kompleksa prava je kulinarska oaza. Gosti mogu
          uživati u izvrsnim specijalitetima tradicionalne kuhinje,
          pripremljenim s lokalnim i svježim namirnicama. Tu su i pažljivo
          osmišljena jela moderne kuhinje, koja zadovoljavaju i najzahtjevnije
          nepce. Svaki detalj u pripremi i posluživanju jela osmišljen je kako
          bi pružio nezaboravno iskustvo.
        </p>
      </div>
    </div>
  );
}
