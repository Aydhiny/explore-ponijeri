import Image from "next/image";
import React from "react";
import Medena from "../images/medena.jpeg";
import Link from "next/link";
import { LuDonut } from "react-icons/lu";
import { IoPricetagOutline } from "react-icons/io5";
import { GiFoodChain } from "react-icons/gi";

export default function Restaurant() {
  return (
    <div className="px-6 sm:px-10 md:px-16 lg:px-24 cursor-default py-10 sm:py-12 lg:py-16 text-gray-700 flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-10 lg:space-y-0">
      {/* Image Section */}
      <div className="relative group cursor-pointer flex-shrink-0 mx-auto lg:mx-0">
        <Image
          className="rounded-lg border-4 border-main-color-lighter-green hover:shadow-xl transition-transform duration-300 transform group-hover:rotate-6"
          alt="eko"
          src={Medena}
          width={800}
          height={800}
        />
      </div>
      {/* Text Section */}
      <div className="flex flex-col text-justify max-w-2xl space-y-8 mx-auto lg:mx-0">
        <h1 className="font-playwrite-hr text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-600 leading-tight">
          Medena Dolina Ponijeri
        </h1>
        <div className="p-1 bg-gray-600"></div>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
          Medena Dolina Ponijeri predstavlja jedinstveno utočište koje spaja
          luksuz, prirodu i autentičnost. Svojim posjetiteljima nudi deset
          moderno opremljenih apartmana koji odišu toplinom i pažljivo biranim
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
        <div className="p-2 flex flex-wrap justify-center items-center bg-blue-800 bg-opacity-50 border-2 rounded-lg border-blue-500 border-opacity-50 shadow-xl gap-4">
          <div className="flex flex-col items-center text-center w-36 sm:w-44 md:w-52">
            <LuDonut className="text-4xl text-blue-800 mb-2" />
            <p className="text-blue-800 font-bold">Tradicionalni uštipci!</p>
          </div>
          <div className="flex flex-col items-center text-center w-36 sm:w-44 md:w-52">
            <IoPricetagOutline className="text-4xl text-blue-800 mb-2" />
            <p className="text-blue-800 font-bold">Povoljne cijene</p>
          </div>
          <div className="flex flex-col items-center text-center w-36 sm:w-44 md:w-52">
            <GiFoodChain className="text-4xl text-blue-800 mb-2" />
            <p className="text-blue-800 font-bold">Raznovrsna hrana</p>
          </div>
        </div>
      </div>
    </div>
  );
}
