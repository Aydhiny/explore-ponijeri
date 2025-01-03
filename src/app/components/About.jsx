import Image from "next/image";
import React from "react";
import AboutImage from "../images/ponijeri-about.jpg";
import AboutImage2 from "../images/ponijeri-about2.jpg";

export default function About() {
  return (
    <div
      id="about"
      className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 cursor-default py-12 text-gray-600 flex flex-col xl:flex-row"
    >
      <div className="px-8 py-1 bg-gray-600 m-2 h-0 hidden xl:block"></div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playwrite-hr text-gray-600 text-center xl:text-left">
        Planinsko Izletište
      </h1>
      <div className="mt-8 xl:mt-24 text-base sm:text-lg flex flex-col xl:items-end text-justify">
        <p className="text-base font-bold sm:text-lg md:text-xl leading-relaxed mb-6">
          Ponijeri su planinsko izletište na nadmorskoj visini od 1200 metara,
          koje je udaljeno oko 20 kilometara od centra Kaknja. Zbog nadmorske
          visine ujedno je i zračna banja.
        </p>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-6">
          Izletište Ponijeri se nalaze u sastavu masiva Ravne Planine koja se
          pruža između općina Kakanj, Zavidovići, Vareš i Zenica s najvećim
          vrhom Tajan na nadmorskoj visini od 1297 metara. U podnožju Ponijera
          izvire veliki broj rijeka i potoka, a najpoznatije su: Suha, Marošićka
          rijeka, Žuća, Ribnica, Mala Rijeka, Boriva i Lužnica. Sastavni je dio
          Spomenika prirode Tajan.
        </p>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-6">
          Geološki, područje Ponijera je veoma zanimljivo. Centralni dio
          Ponijera izgrađen je od trijaskih vapnanaca koji se pružaju od izvora
          Žuće na zapadu do Omlatka i Prašume Trstionica na istoku. Uz prisustvo
          vode i tektonsku aktivnost, krečnjaci su razvili kraške formacije
          poput malog kraškog polja u centru Ponijera, 3 veće kraške uvale,
          mnogobrojne ponore, pećine, i jame.
        </p>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-6">
          Vode koje poniru s područja Ponijerskog polja i Opake Ravni (njih 6)
          javljaju se kao vrelo rijeke Žuća, zakonom zaštićeno kao strogi
          prirodni rezervat, dok ponori s područja Močila i Omlatka izviru kao
          Djedova vrela u slivu rijeke Borive i Trstionice. Sjeverni, zapadni, i
          istočni dijelovi Ponijera su dio bosanske serpentinske zone koja na
          ovom području izgrađuje bazalte, serpentinite, peridotite, škriljce,
          dijabaze, i dijelom laporce. Ovdje se mogu pronaći minerali poput
          kvarca, jaspisa, limonita, serpentina, olivina, opala, hematita,
          kalcita, gipsa i liksuna.
        </p>
        <div className="flex flex-col sm:flex-row sm:justify-center xl:justify-start">
          <Image
            alt="ponijeri"
            src={AboutImage}
            className="rounded-lg border border-main-color-lighter-green sm:mr-4 hover:rotate-3 cursor-pointer hover:shadow-2xl transition-all duration-150 mt-4 border-opacity-50"
            height={500}
            width={500}
          />
          <Image
            alt="ponijeri2"
            src={AboutImage2}
            className="rounded-lg border border-main-color-lighter-green hover:rotate-3 cursor-pointer hover:shadow-2xl transition-all duration-150 mt-4 border-opacity-50"
            height={500}
            width={500}
          />
        </div>
      </div>
    </div>
  );
}
