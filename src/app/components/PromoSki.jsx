"use client";
import React from "react";
import { FaPersonSkiingNordic } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const backgroundImage = new URL("../images/ponijeri.jpg", import.meta.url);

export default function PromoSki() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <div
      className="relative overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/50 to-transparent" />
      <div className="absolute inset-0"
        style={{ background: "linear-gradient(225deg, rgba(0,47,90,0.65) 0%, rgba(0,132,255,0.2) 100%)" }}
      />

      <div ref={ref} className="relative z-10 py-20 sm:py-28 flex justify-end">
        <div className="px-6 sm:px-12 lg:px-20 max-w-2xl text-right">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-blue-200"
              style={{ background: "rgba(0,132,255,0.2)", border: "1px solid rgba(0,132,255,0.3)" }}
            >
              Profesionalna instrukcija
            </span>

            <h2 className="font-playwrite-hr text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Škola skijanja
            </h2>

            <p className="text-white/70 text-lg font-medium">
              Učite kod profesionalaca — za sve uzraste i nivoe.
            </p>

            <div className="flex items-center justify-end gap-4 pt-2">
              <FaPersonSkiingNordic className="text-blue-300 text-4xl" />
              <Link
                href="/skiing"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105"
                style={{
                  background: "rgba(0,132,255,0.7)",
                  border: "1px solid rgba(0,132,255,0.5)",
                  backdropFilter: "blur(8px)",
                  boxShadow: "0 0 30px rgba(0,132,255,0.3)",
                }}
              >
                Saznaj više
                <span>→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
