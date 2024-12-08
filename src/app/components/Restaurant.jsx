import Image from "next/image";
import React from "react";
import Medena from "../images/medena.jpeg";
import Link from "next/link";
import { LuDonut } from "react-icons/lu";
import { IoPricetagOutline } from "react-icons/io5";
import { GiFoodChain } from "react-icons/gi";

export default function Restaurant() {
  return (
    <div className="bg-white px-24 cursor-default py-16 text-gray-700 flex justify-between items-center">
      {/* Image Section */}
      <div className="relative group cursor-pointer">
        <Image
          className="border-4 border-green-300 shadow-lg rounded-sm transition-transform duration-300 transform group-hover:rotate-6"
          alt="eko"
          src={Medena}
          width={800}
          height={800}
        />
      </div>
      {/* Text Section */}
      <div className="flex flex-col max-w-2xl space-y-8">
        <h1 className="font-playwrite-hr text-6xl font-bold text-green-900 leading-tight">
          Medena Dolina Ponijeri
        </h1>
        <p className="text-lg leading-relaxed">
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
        <div className="p-4 flex justify-center bg-green-800 bg-opacity-50 rounded-sm border-4 border-green-500 border-opacity-50 shadow-xl">
          <div className="flex-col flex items-center text-center mr-4">
            <LuDonut className="size-12 text-green-800 mb-4" />
            <p className="text-green-800 font-bold">Tradicionalni uštipci!</p>
          </div>
          <div className="flex-col flex items-center text-center mr-4">
            <IoPricetagOutline className="size-12 text-green-800 mb-4" />
            <p className="text-green-800 font-bold">Povoljne cijene</p>
          </div>
          <div className="flex-col flex items-center text-center">
            <GiFoodChain className="size-12 text-green-800 mb-4" />
            <p className="text-green-800 font-bold">Raznovrsna hrana</p>
          </div>
        </div>

        <Link
          href="/restorani"
          className="text-white border-b-2 mr-8 hover:bg-black hover:text-white transition-all duration-150 border-white rounded-sm font-bold px-8 py-3 bg-green-500 backdrop-blur-sm self-start"
        >
          Više informacija
        </Link>
      </div>
    </div>
  );
}
