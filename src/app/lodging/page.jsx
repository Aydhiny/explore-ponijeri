"use client";
import React from "react";
import Image from "next/image";
import apartman1 from "../images/apartman1.jpg";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="w-full h-full cursor-default relative">
      <div className="pt-24 px-4 sm:px-8">
        {/* Title Section */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-playwrite-hr font-bold text-center text-gray-600 mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Apartmani Ponijeri
        </motion.h1>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 max-w-5xl mx-auto">
          {/* Apartman Image Section */}
          <motion.div
            className="w-full lg:w-2/3 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <Image
              alt="Apartman Ponijeri"
              src={apartman1}
              className="shadow-lg rounded-lg hover:scale-105 transition-transform duration-200"
              width={600}
              height={400}
            />
          </motion.div>

          {/* Apartman Info Section */}
          <div className="lg:w-1/2 mt-6 lg:mt-0 px-4 sm:px-0">
            <motion.h2
              className="text-2xl sm:text-3xl font-bold text-main-color-lighter-green mb-4"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              O Apartmanima
            </motion.h2>

            <motion.p
              className="text-base sm:text-lg md:text-xl leading-relaxed mb-4 text-gray-600 dark:text-gray-600"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              Smješteni u srcu Ponijera, apartmani nude idealno mjesto za
              uživanje u prirodi i miru. Pogodni su za porodice, parove ili
              grupe prijatelja koji žele bijeg od gradske vreve. Sadržaji
              uključuju moderno opremljene sobe, kuhinju, i blizinu skijališta.
            </motion.p>

            {/* Feature List */}
            <motion.ul
              className="list-disc text-gray-600 list-inside text-base sm:text-lg md:text-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <li>Komforni smještaj s grijanim sobama</li>
              <li>Pristup skijalištu u blizini</li>
              <li>Prostrano dvorište za aktivnosti na otvorenom</li>
              <li>Besplatan parking za goste</li>
            </motion.ul>

            {/* Rating Section */}
            <motion.div
              className="mt-6 flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              <span className="text-xl font-bold text-gray-600">Ocjena:</span>
              <div className="flex items-center ml-3">
                <FaStar className="text-yellow-500 text-2xl" />
                <FaStar className="text-yellow-500 text-2xl" />
                <FaStar className="text-yellow-500 text-2xl" />
                <FaStar className="text-yellow-500 text-2xl" />
                <FaStar className="text-yellow-500 text-2xl" />
                <span className="ml-3 text-lg text-gray-600">5.0 / 5.0</span>
              </div>
            </motion.div>

            {/* Location Button */}
            <motion.div
              className="mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              <div className="flex items-center text-lg text-gray-600">
                <FaMapMarkerAlt className="mr-2 text-main-color-dark-green text-xl" />
                <span className="font-semibold">
                  Ponijeri, Bosna i Hercegovina
                </span>
              </div>
            </motion.div>

            {/* Booking Button */}
            <motion.div
              className="mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              <a
                href="https://www.booking.com/hotel/ba/apartmani-ponijeri.hr.html"
                className="inline-block bg-main-color-lighter-green text-white font-bold py-3 px-6 mb-12 hover:bg-main-color-dark-green transition-colors rounded-md"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rezervišite Sada
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
