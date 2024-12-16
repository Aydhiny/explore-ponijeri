"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import EkoKuca from "../images/eko-kuca.jpg";

export default function Eko() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger animation only once

  return (
    <motion.div
      ref={ref}
      className="bg-white px-6 sm:px-12 md:px-16 lg:px-24 cursor-default py-8 sm:py-12 md:py-16 text-gray-700 flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-8 lg:gap-0"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      {/* Text Section */}
      <motion.div
        className="flex text-justify flex-col space-y-6 sm:space-y-8 max-w-3xl lg:max-w-2xl"
        initial={{ x: -100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <h1 className="font-playwrite-hr text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-900 leading-tight">
          Eko Kuća Ponijeri
        </h1>
        <motion.div
          className="p-1 bg-green-800"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, ease: "easeInOut" }}
        ></motion.div>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
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
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="relative group cursor-pointer"
        whileHover={{ scale: 1.05, rotate: 6 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <Image
            className="border-4 border-green-300 rounded-sm transition-transform duration-300"
            alt="eko"
            src={EkoKuca}
            width={800}
            height={800}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
