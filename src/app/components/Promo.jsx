"use client";
import React from "react";
import { MdApartment } from "react-icons/md";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const backgroundImage = new URL("../images/apartman1.jpg", import.meta.url);

export default function Promo() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <div
      className="relative overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      <div className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, rgba(0,47,90,0.6) 0%, rgba(0,132,255,0.2) 100%)" }}
      />

      <div ref={ref} className="relative z-10 py-20 sm:py-28 px-6 sm:px-12 lg:px-20 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
        >
          <div
            className="p-4 rounded-2xl flex-shrink-0"
            style={{
              background: "rgba(0,132,255,0.25)",
              border: "1px solid rgba(0,132,255,0.4)",
              backdropFilter: "blur(12px)",
            }}
          >
            <MdApartment className="text-white text-4xl" />
          </div>

          <div>
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-blue-200 mb-3"
              style={{ background: "rgba(0,132,255,0.2)", border: "1px solid rgba(0,132,255,0.3)" }}
            >
              Dostupno odmah
            </span>
            <h2 className="font-playwrite-hr text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
              Apartmani Ponijeri
            </h2>
            <p className="text-white/70 text-lg font-medium mb-6">
              Uredan i kvalitetan smještaj uz sam skijaški centar.
            </p>
            <Link
              href="/lodging"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105"
              style={{
                background: "rgba(0,132,255,0.7)",
                border: "1px solid rgba(0,132,255,0.5)",
                backdropFilter: "blur(8px)",
                boxShadow: "0 0 30px rgba(0,132,255,0.3)",
              }}
            >
              Pogledaj smještaj
              <span>→</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
