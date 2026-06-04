"use client";
import React from "react";
import Image from "next/image";
import apartman1 from "../images/apartman1.jpg";
import { FaMapMarkerAlt, FaStar, FaWifi, FaParking, FaSnowflake } from "react-icons/fa";
import { MdApartment } from "react-icons/md";
import { motion } from "framer-motion";

const FEATURES = [
  { icon: FaSnowflake, label: "Grijane sobe", desc: "Toplo i udobno" },
  { icon: FaParking, label: "Besplatan parking", desc: "Za sve goste" },
  { icon: FaMapMarkerAlt, label: "Blizina staza", desc: "Odmah uz skijalište" },
  { icon: FaWifi, label: "Moderna oprema", desc: "Sve što trebate" },
];

export default function Page() {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div
        className="relative py-20 overflow-hidden"
        style={{ background: "linear-gradient(160deg, #0a1628 0%, #001f3f 50%, #002F5A 100%)" }}
      >
        <div className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(ellipse at 70% 50%, rgba(0,132,255,0.12) 0%, transparent 60%)" }}
        />
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
              <MdApartment className="text-xs" />
              Smještaj
            </span>
            <h1 className="font-playwrite-hr text-4xl sm:text-6xl font-bold text-white mb-4">
              Apartmani{" "}
              <span style={{
                background: "linear-gradient(135deg, #0084FF, #4fa8ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>Ponijeri</span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              Moderni smještaj u srcu planine — idealno za porodice, parove i grupe.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div
              className="tilt-card rounded-2xl overflow-hidden"
              style={{
                border: "2px solid rgba(0,132,255,0.15)",
                boxShadow: "0 20px 60px rgba(0,47,90,0.15)",
              }}
            >
              <Image
                alt="Apartman Ponijeri"
                src={apartman1}
                width={700}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Rating */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-3 mt-4 px-2"
            >
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-base" />
                ))}
              </div>
              <span className="text-gray-500 text-sm font-medium">5.0 / 5.0 — Odlično</span>
            </motion.div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12" style={{ background: "linear-gradient(90deg, rgba(0,132,255,0.4), transparent)" }} />
                <span className="text-main-color-lighter-green text-sm font-semibold uppercase tracking-widest">O apartmanima</span>
              </div>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Smješteni u srcu Ponijera, apartmani nude idealno mjesto za uživanje
                u prirodi i miru. Pogodni su za porodice, parove ili grupe prijatelja
                koji žele bijeg od gradske vreve.
              </p>
            </div>

            {/* Features grid */}
            <div className="grid grid-cols-2 gap-3">
              {FEATURES.map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="flex items-start gap-3 p-4 rounded-xl"
                  style={{
                    background: "rgba(0,132,255,0.06)",
                    border: "1px solid rgba(0,132,255,0.12)",
                  }}
                >
                  <Icon className="text-main-color-lighter-green mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-main-color-dark-green text-sm">{label}</p>
                    <p className="text-gray-500 text-xs">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <FaMapMarkerAlt className="text-main-color-lighter-green flex-shrink-0" />
              <span>Ponijeri, Kakanj — Bosna i Hercegovina</span>
            </div>

            {/* CTA */}
            <a
              href="https://www.booking.com/hotel/ba/apartmani-ponijeri.hr.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #0084FF, #005fcc)",
                boxShadow: "0 0 40px rgba(0,132,255,0.35)",
              }}
            >
              <MdApartment />
              Rezervišite na Booking.com
              <span>→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
