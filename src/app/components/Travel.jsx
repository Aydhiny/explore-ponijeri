import Image from "next/image";
import React from "react";
import { FaInstagram, FaBusAlt } from "react-icons/fa";
import Autobus from "../images/autobuska.jpg";
import Insta from "../images/visit.jpg";

export default function Travel() {
  return (
    <div className="flex flex-wrap xl:flex-nowrap bg-gradient-to-b from-white to-gray-100 px-6 md:px-12 xl:px-20 py-8 md:py-12 justify-center items-center text-center cursor-default">
      {/* Instagram Section */}
      <div className="flex flex-col items-center text-center mb-8 xl:mb-0 xl:mr-10 group">
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-gray-700 font-playwrite-hr">
          Visit{" "}
          <span className="text-main-color-lighter-green transition-colors duration-300 group-hover:text-main-color-dark-green">
            Ponijeri
          </span>
        </h1>
        <p className="text-gray-600 text-base md:text-lg mt-4">
          Pratite nas na instagramu.
        </p>
        <a
          href="https://www.instagram.com/visit.ponijeri"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center mt-6 transform transition-transform duration-300 group-hover:scale-105"
        >
          <Image
            alt="Instagram"
            width={500}
            height={500}
            src={Insta}
            className="rounded-lg border border-gray-300 shadow-md transition-all duration-200 group-hover:shadow-xl"
          />
          <div className="flex items-center mt-4 text-main-color-lighter-green font-semibold text-lg space-x-2 group-hover:text-main-color-dark-green">
            <FaInstagram className="text-xl group-hover:animate-bounce" />
            <span>Posjetite Instagram</span>
          </div>
        </a>
      </div>

      {/* Travel Section */}
      <div className="flex flex-col items-center text-center group">
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-gray-700 font-playwrite-hr">
          <span className="text-main-color-lighter-green transition-colors duration-300 group-hover:text-main-color-dark-green">
            Travel
          </span>{" "}
          with Us
        </h1>
        <p className="text-gray-600 text-base md:text-lg mt-4">
          Redovna autobuska linija iz Kaknja.
        </p>
        <a
          href="https://www.instagram.com/p/DDKNvetIsgU/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center mt-6 transform transition-transform duration-300 group-hover:scale-105"
        >
          <Image
            alt="Travel with Us"
            width={500}
            height={500}
            src={Autobus}
            className="rounded-lg border border-gray-300 shadow-md transition-all duration-200 group-hover:shadow-xl"
          />
          <div className="flex items-center mt-4 text-main-color-lighter-green font-semibold text-lg space-x-2 group-hover:text-main-color-dark-green">
            <FaBusAlt className="text-xl group-hover:animate-bounce" />
            <span>Provjeri raspored</span>
          </div>
        </a>
      </div>
    </div>
  );
}
