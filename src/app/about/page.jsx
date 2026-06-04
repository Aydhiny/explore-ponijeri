"use client";
import React from "react";
import Image from "next/image";
import opcina from "../images/opcina-kakanj.png";
import AboutImage from "../images/ponijeri-about.jpg";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMountain } from "react-icons/fa";

const STATS = [
  { value: "1200m", label: "Nadmorska visina" },
  { value: "20km", label: "Od Kaknja" },
  { value: "1297m", label: "Vrh Tajan" },
  { value: "4", label: "Susjedne općine" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <div
        className="relative py-24 sm:py-32 overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #0a1628 0%, #001f3f 50%, #002F5A 100%)",
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${AboutImage.src})` }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 60%, #d8ecff 100%)" }} />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium text-blue-200 mb-6"
              style={{ background: "rgba(0,132,255,0.2)", border: "1px solid rgba(0,132,255,0.3)" }}
            >
              <FaMountain className="text-xs" />
              Planinsko izletište
            </span>

            <h1 className="font-playwrite-hr text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-6">
              O{" "}
              <span style={{
                background: "linear-gradient(135deg, #0084FF, #4fa8ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Ponijerima
              </span>
            </h1>

            <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Ponijeri, poznat kao zimski dragulj općine Kakanj, smješten je u srcu
              prekrasne prirode i predstavlja savršeno mjesto za ljubitelje skijanja
              i rekreativnih aktivnosti.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-5xl mx-auto px-6 -mt-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {STATS.map(({ value, label }) => (
            <div
              key={label}
              className="text-center p-5 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.8)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(0,132,255,0.12)",
                boxShadow: "0 4px 24px rgba(0,47,90,0.1)",
              }}
            >
              <div className="text-2xl sm:text-3xl font-bold text-main-color-lighter-green mb-1">{value}</div>
              <div className="text-xs text-gray-500">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <div>
              <h2 className="font-jakarta font-bold text-2xl text-main-color-dark-green mb-4">
                Prirodni dragulj Bosne
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Izletište Ponijeri se nalaze u sastavu masiva Ravne Planine koja se
                pruža između općina Kakanj, Zavidovići, Vareš i Zenica s najvećim
                vrhom Tajan na nadmorskoj visini od 1297 metara.
              </p>
            </div>

            <div>
              <h2 className="font-jakarta font-bold text-2xl text-main-color-dark-green mb-4">
                Geološke posebnosti
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Centralni dio Ponijera izgrađen je od trijaskih vapnanaca koji su
                razvili kraške formacije — malo kraško polje, 3 veće uvale,
                mnogobrojna ponore, pećine i jame.
              </p>
            </div>

            <div>
              <h2 className="font-jakarta font-bold text-2xl text-main-color-dark-green mb-4">
                Minerali i bogatstvo
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Ovdje se mogu pronaći minerali: kvarc, jaspis, limonit, serpentin,
                olivin, opal, hematit, kalcit, gips i liksun. Vode s Ponijerskog
                polja izviru kao vrelo rijeke Žuće — strogi prirodni rezervat.
              </p>
            </div>
          </motion.div>

          {/* Right side: Image + Contact */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Logo image */}
            <div className="flex justify-center">
              <Image
                alt="Općina Kakanj"
                src={opcina}
                height={180}
                width={180}
                className="animate-float"
                style={{
                  borderRadius: "50%",
                  padding: "16px",
                  background: "rgba(207,237,255,0.5)",
                  border: "2px solid rgba(0,132,255,0.2)",
                  boxShadow: "0 0 40px rgba(0,132,255,0.15)",
                }}
              />
            </div>

            {/* Contact card */}
            <div
              className="rounded-2xl p-6 space-y-4"
              style={{
                background: "rgba(255,255,255,0.7)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(0,132,255,0.12)",
                boxShadow: "0 4px 24px rgba(0,47,90,0.08)",
              }}
            >
              <h3 className="font-jakarta font-bold text-xl text-main-color-dark-green">
                Kontakt informacije
              </h3>
              <div
                className="h-px"
                style={{ background: "linear-gradient(90deg, rgba(0,132,255,0.3), transparent)" }}
              />
              <div className="space-y-3">
                <a
                  href="mailto:opcinaka@bih.net.ba"
                  className="flex items-center gap-3 text-gray-600 hover:text-main-color-lighter-green transition-colors"
                >
                  <FaEnvelope className="text-main-color-lighter-green flex-shrink-0" />
                  opcinaka@bih.net.ba
                </a>
                <a
                  href="tel:+38732771800"
                  className="flex items-center gap-3 text-gray-600 hover:text-main-color-lighter-green transition-colors"
                >
                  <FaPhone className="text-main-color-lighter-green flex-shrink-0" />
                  +387 32 771 800
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
