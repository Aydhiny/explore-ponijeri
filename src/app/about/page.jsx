import React from "react";
import Image from "next/image";
import opcina from "../images/opcina-kakanj.png";

export default function page() {
  return (
    <div className="bg-gradient-to-t cursor-default from-gray-900 to-gray-800 text-white px-8 py-32">
      {/* Header Section */}
      <div className="text-center max-w-4xl mx-auto space-y-8">
        <h1 className="text-6xl font-bold font-playwrite-hr text-main-color-lighter-green">
          O Ponijerima Kakanj
        </h1>
        <div className="p-1 bg-main-color-lighter-green w-24 mx-auto"></div>
        <p className="text-lg leading-relaxed">
          Ponijeri, poznat kao zimski dragulj općine Kakanj, smješten je u srcu
          prekrasne prirode i predstavlja savršeno mjesto za ljubitelje skijanja
          i rekreativne aktivnosti. S čistim zrakom, netaknutim pejzažima i
          dobro opremljenim ski-centrom, Ponijeri privlači posjetioce iz cijele
          regije. Bilo da ste početnik ili iskusan skijaš, Ponijeri nudi idealne
          uvjete za zimske sportove i nezaboravno iskustvo.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex justify-center mt-12">
        <Image
          alt="opcina"
          src={opcina}
          className="cursor-pointer hover:bg-white hover:shadow-lg transition-all duration-150 bg-gradient-to-t rounded-full p-4 from-[#a7cdffe5] to-[#cfe2ff85] backdrop-blur-sm border-b-4 border-y-main-color-lighter-green border-opacity-35"
          height={300}
          width={300}
        />
      </div>

      {/* Contact Information Section */}
      <div className="mt-16 text-center space-y-6">
        <h2 className="text-4xl font-bold text-main-color-lighter-green">
          Kontakt informacije
        </h2>
        <div className="p-1 bg-main-color-lighter-green w-20 mx-auto"></div>
        <p className="text-lg leading-relaxed">
          Za dodatne informacije o Ponijerima ili Općini Kakanj, kontaktirajte
          nas putem emaila ili telefona:
        </p>
        <div className="text-xl font-medium space-y-2">
          <p>
            Email:{" "}
            <a
              href="mailto:opcinaka@bih.net.ba"
              className="text-blue-400 hover:underline"
            >
              opcinaka@bih.net.ba
            </a>
          </p>
          <p>
            Telefon:{" "}
            <a
              href="tel:+38732771800"
              className="text-blue-400 hover:underline"
            >
              +387 32 771 800
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
