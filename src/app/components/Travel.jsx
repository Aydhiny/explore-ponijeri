import Image from "next/image";
import React from "react";
import Autobus from "../images/autobuska.jpg";
import Insta from "../images/visit.jpg";
export default function Travel() {
  return (
    <div className="flex drop-shadow-2xl cursor-default bg-gradient-to-tl from-sky-200 to-white px-20 py-12 justify-center items-center text-center">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-6xl font-bold text-gray-600 font-playwrite-hr">
          Visit <span className="text-main-color-lighter-green">Ponijeri</span>
        </h1>
        <p className="text-gray-600 text-lg mt-4">
          Instagram stranica Ponijeri.
        </p>
        <Image
          alt="insta"
          width={500}
          height={500}
          src={Insta}
          className="cursor-pointer mr-10 hover:bg-white hover:shadow-lg transition-all duration-150 bg-gradient-to-t p-2 from-[#a7cdffe5] to-[#cfe2ff85] backdrop-blur-sm border-b-4 border-y-main-color-lighter-green border-opacity-35"
        />
      </div>
      <div className="flex flex-col items-center text-center">
        <h1 className="text-6xl font-bold text-gray-600 font-playwrite-hr">
          <span className="text-main-color-lighter-green">Putujte</span> sa nama
        </h1>
        <p className="text-gray-600 text-lg mt-4">
          Redovna autobuska linija iz Kaknja.
        </p>
        <Image
          alt="travel"
          width={500}
          height={500}
          src={Autobus}
          className="cursor-pointer hover:bg-white hover:shadow-lg transition-all duration-150 bg-gradient-to-t p-2 from-[#a7cdffe5] to-[#cfe2ff85] backdrop-blur-sm border-b-4 border-y-main-color-lighter-green border-opacity-35"
        />
      </div>
    </div>
  );
}