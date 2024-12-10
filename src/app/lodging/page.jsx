import React from "react";
import Image from "next/image";
import apartman1 from "../images/apartman1.jpg";

export default function page() {
  return (
    <div className="min-h-screen py-32 p-8">
      <h1 className="text-6xl mb-8 font-bold font-playwrite-hr text-center text-gray-600 my-4">
        Apartmani Ponijeri
      </h1>
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 max-w-5xl mx-auto">
        <Image
          alt="Apartman Ponijeri"
          src={apartman1}
          className="shadow-lg hover:scale-105 transition-transform duration-200"
          width={600}
          height={400}
        />
        <div className="lg:w-2/3">
          <h2 className="text-2xl font-semibold text-main-color-lighter-green mb-4">
            O Apartmanima
          </h2>
          <p className="text-lg text-gray-700 leading-7">
            Smješteni u srcu Ponijera, apartmani nude idealno mjesto za uživanje
            u prirodi i miru. Pogodni su za porodice, parove ili grupe
            prijatelja koji žele bijeg od gradske vreve. Sadržaji uključuju
            moderno opremljene sobe, kuhinju, i blizinu skijališta.
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-700">
            <li>Komforni smještaj s grijanim sobama</li>
            <li>Pristup skijalištu u blizini</li>
            <li>Prostrano dvorište za aktivnosti na otvorenom</li>
            <li>Besplatan parking za goste</li>
          </ul>
          <div className="mt-6">
            <span className="text-xl font-bold text-main-color-dark-green">
              Ocjena:
            </span>
            <div className="flex items-center mt-2">
              <span className="text-yellow-500 text-2xl">★★★★★</span>
              <span className="ml-3 text-lg text-gray-700">5.0 / 5.0</span>
            </div>
          </div>
          <div className="mt-6">
            <a
              href="https://www.booking.com/hotel/ba/apartmani-ponijeri.hr.html?aid=356980&label=gog235jc-1FCAsoEkIIcG9uaWplcmlIEFgDaBKIAQGYARC4ARfIAQzYAQHoAQH4AQKIAgGoAgO4AvKD4boGwAIB0gIkMzJlMDRhYWMtZmU5NS00OTNmLTk5YWItNDY3YTllNTczOWNm2AIF4AIB&sid=ffd45bb001e3fa13ead22814f9340557&dest_id=-83918&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1733837308&srpvid=e19b5eb9294004db&type=total&ucfs=1&"
              className="inline-block bg-main-color-lighter-green text-white font-semibold py-3 px-6 hover:bg-main-color-dark-green transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rezervišite Sada
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
