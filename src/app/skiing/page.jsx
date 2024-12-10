"use client";
import { motion } from "framer-motion";
import SkiSchoolInfo from "../components/SkiSchoolInfo";

const backgroundImage = new URL("../images/ponijeri.jpg", import.meta.url);

export default function Skijanje() {
  return (
    <div>
      <div
        className="w-full h-screen cursor-default relative bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-gray-600 text-center py-8 mt-20 px-4">
          <motion.h1
            className="text-5xl md:text-7xl font-playwrite-hr font-semibold text-gray-600 mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Raspored Rada Ski Lifta
          </motion.h1>

          <motion.div
            className="text-lg text-gray-600 font-bold mb-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            <p>Obavezno provjerite radno vrijeme skijališta Ponijeri!</p>
          </motion.div>

          {/* Ski schedule table */}
          <motion.div
            className="overflow-x-auto bg-gray-700 border-2 border-main-color-lighter-green border-opacity-50 w-full bg-opacity-70 backdrop-blur-md rounded-lg shadow-lg p-6 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 1 }}
          >
            <table className="min-w-full text-white text-left table-auto">
              <thead>
                <tr>
                  <th className="py-3 px-4 text-lg font-semibold text-main-color-lighter-green">
                    Datum
                  </th>
                  <th className="py-3 px-4 text-lg font-semibold text-main-color-lighter-green">
                    Skijanje
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-300">
                  <td className="py-3 px-4 text-lg">15.12. (SRIJEDA)</td>
                  <td className="py-3 px-4 text-lg">NOĆNO SKIJANJE</td>
                </tr>
                <tr className="border-t border-gray-300">
                  <td className="py-3 px-4 text-lg">16.12. (ČETVRTAK)</td>
                  <td className="py-3 px-4 text-lg">NOĆNO SKIJANJE</td>
                </tr>
                <tr className="border-t border-gray-300">
                  <td className="py-3 px-4 text-lg">17.12. (PETAK)</td>
                  <td className="py-3 px-4 text-lg">NOĆNO SKIJANJE</td>
                </tr>
                <tr className="border-t border-gray-300">
                  <td className="py-3 px-4 text-lg">18.12. (SUBOTA)</td>
                  <td className="py-3 px-4 text-lg">DNEVNO I NOĆNO SKIJANJE</td>
                </tr>
                <tr className="border-t border-gray-300">
                  <td className="py-3 px-4 text-lg">19.12. (NEDJELJA)</td>
                  <td className="py-3 px-4 text-lg">DNEVNO SKIJANJE</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </div>
      <SkiSchoolInfo />
    </div>
  );
}
