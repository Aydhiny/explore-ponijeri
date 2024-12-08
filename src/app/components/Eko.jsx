import Image from "next/image";
import React from "react";
import EkoKuca from "../images/eko-kuca.jpg";
import Link from "next/link";

export default function Eko() {
  return (
    <div className="bg-white px-24 cursor-default py-16 text-gray-700 flex justify-between items-center">
      {/* Text Section */}
      <div className="flex flex-col max-w-2xl space-y-8">
        <h1 className="font-playwrite-hr text-6xl font-bold text-green-900 leading-tight">
          Eko Kuća Ponijeri
        </h1>
        <p className="text-lg leading-relaxed">
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
        <Link
          href="/restorani"
          className="text-white border-b-2 mr-8 hover:bg-black hover:text-white transition-all duration-150 border-white rounded-sm font-bold px-8 py-3 bg-green-500 backdrop-blur-sm self-start"
        >
          Više informacija
        </Link>
      </div>

      {/* Image Section */}
      <div className="relative group cursor-pointer">
        <Image
          className="border-4 border-green-300 shadow-lg rounded-sm transition-transform duration-300 transform group-hover:rotate-6"
          alt="eko"
          src={EkoKuca}
          width={800}
          height={800}
        />
      </div>
    </div>
  );
}
