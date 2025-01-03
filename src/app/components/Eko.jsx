"use client";
import Image from "next/image";
import React from "react";
import EkoKuca from "../images/eko-kuca.jpg";

export default function Eko() {
  return (
    <div className="px-6 sm:px-12 md:px-16 lg:px-24 cursor-default py-8 sm:py-12 md:py-16 text-gray-700 flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-8 lg:gap-0">
      {/* Text Section */}
      <div className="flex text-justify flex-col space-y-6 sm:space-y-8 max-w-3xl lg:max-w-2xl">
        <h1 className="font-playwrite-hr text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-600 leading-tight">
          Eko Kuća Ponijeri
        </h1>
        <div className="p-1 bg-gray-600"></div>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
          Eko kuća Ponijeri nudi osam luksuzno opremljenih apartmana,
          osmišljenih kako bi pružili maksimalnu udobnost i spoj modernog
          dizajna s prirodnim okruženjem. Svaki apartman opremljen je najnovijom
          tehnologijom i elegantnim interijerom, uz predivan pogled na netaknutu
          prirodu Ponijera.
          <br />
          <br />
          Novootvoreni restoran unutar kompleksa pravo je gastronomsko utočište,
          s raznolikom ponudom koja zadovoljava svačije ukuse. Gosti mogu
          uživati u tradicionalnim jelima pripremljenim od svježih lokalnih
          namirnica, kao i u specijalitetima međunarodne kuhinje. Posebna pažnja
          posvećena je detaljima kako bi svaki obrok bio nezaboravno iskustvo.
          <br />
          <br />
          Idealna destinacija za sportske klubove, članove Gorske službe
          spašavanja, planinarska društva i sve ljubitelje prirode koji traže
          savršenu ravnotežu između aktivnosti i opuštanja.
        </p>
      </div>

      {/* Image Section */}
      <div className="relative group cursor-pointer">
        <div>
          <Image
            className="rounded-lg border-4 border-main-color-lighter-green hover:shadow-xl hover:rotate-2 transition-transform duration-300"
            alt="eko"
            src={EkoKuca}
            width={800}
            height={800}
          />
        </div>
      </div>
    </div>
  );
}
