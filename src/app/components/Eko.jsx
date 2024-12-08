import Image from "next/image";
import React from "react";
import EkoKuca from "../images/eko-kuca.jpg";
import Link from "next/link";
export default function Eko() {
  return (
    <div className="px-24 py-12 text-gray-600 justify-between flex">
      <div className="flex flex-col">
        <h1 className="font-playwrite-hr mb-8 text-6xl font-bold">
          Eko Kuća Ponijeri
        </h1>
        <p>
          Eko kuća Ponijeri nudi osam luksuzno opremljenih apartmana,
          osmišljenih kako bi pružili maksimalnu udobnost i spoj modernog
          dizajna s prirodnim okruženjem. Svaki apartman opremljen je najnovijom
          tehnologijom i elegantnim interijerom, uz predivan pogled na netaknutu
          prirodu Ponijera. Novootvoreni restoran unutar kompleksa pravo je
          gastronomsko utočište, s raznolikom ponudom koja zadovoljava svačije
          ukuse. Gosti mogu uživati u tradicionalnim jelima pripremljenim od
          svježih lokalnih namirnica, kao i u specijalitetima međunarodne
          kuhinje. Posebna pažnja posvećena je detaljima kako bi svaki obrok bio
          nezaboravno iskustvo. <br /> <br /> Eko kuća Ponijeri idealna je
          destinacija za sportske klubove, članove Gorske službe spašavanja,
          planinarska društva i sve ostale ljubitelje prirode koji traže
          savršenu ravnotežu između aktivnosti i opuštanja. Svojim gostima nudi
          širok spektar mogućnosti za rekreaciju, uključujući planinarenje,
          biciklizam, skijanje i istraživanje netaknute prirode. <br /> <br />
        </p>
        <Link
          href="/restorani"
          className="text-white mx-auto border-b-2 mr-8 hover:bg-black hover:text-white transition-all duration-150 hover:border-none border-white rounded-sm font-bold shadow-xl px-8 py-3 bg-blue-600 bg-opacity-60 backdrop-blur-sm"
        >
          Više informacija
        </Link>
      </div>
      <Image
        className="border-4 hover:rotate-3 cursor-pointer hover:shadow-2xl transition-all duration-150 border-main-color-lighter-green shadow-xl mt-4 rounded-sm border-opacity-50"
        alt="eko"
        src={EkoKuca}
        width={800}
        height={800}
      />
    </div>
  );
}
