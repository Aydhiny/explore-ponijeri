"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaPersonSkiingNordic, FaPhone } from "react-icons/fa6";

const SCHOOL_PRICES = [
  { label: "1 sat — 1 osoba", price: "10 KM", note: "Bez prevoza", group: "1" },
  { label: "3 sata — 1 osoba", price: "25 KM", note: "", group: "1" },
  { label: "5 dana — 1 osoba", price: "150 KM", note: "", group: "1" },
  { label: "1 sat — 2 osobe", price: "17 KM", note: "Bez prevoza", group: "2" },
  { label: "3 sata — 2 osobe", price: "45 KM", note: "", group: "2" },
  { label: "5 dana — 2 osobe", price: "250 KM", note: "", group: "2" },
  { label: "1 sat — 3 osobe", price: "25 KM", note: "", group: "3" },
  { label: "3 sata — 3 osobe", price: "60 KM", note: "", group: "3" },
  { label: "5 dana — 3 osobe", price: "400 KM", note: "", group: "3" },
  { label: "1 sat — 4 osobe", price: "30 KM", note: "", group: "4" },
  { label: "3 sata — 4 osobe", price: "75 KM", note: "", group: "4" },
  { label: "5 dana — 4 osobe", price: "550 KM", note: "", group: "4" },
];

const GROUP_COLORS = {
  "1": { bg: "rgba(0,132,255,0.12)", border: "rgba(0,132,255,0.25)", price: "#4fa8ff" },
  "2": { bg: "rgba(0,200,100,0.1)", border: "rgba(0,200,100,0.25)", price: "#4ade80" },
  "3": { bg: "rgba(120,80,255,0.1)", border: "rgba(120,80,255,0.25)", price: "#a78bfa" },
  "4": { bg: "rgba(255,160,0,0.1)", border: "rgba(255,160,0,0.25)", price: "#fbbf24" },
};

export default function SkiSchoolInfo() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      className="relative py-20 xl:py-28 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #060f22 0%, #001432 50%, #002050 100%)",
      }}
    >
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,132,255,0.3), transparent)" }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12" style={{ background: "linear-gradient(90deg, transparent, rgba(0,132,255,0.5))" }} />
            <FaPersonSkiingNordic className="text-main-color-lighter-green text-xl" />
            <div className="h-px w-12" style={{ background: "linear-gradient(90deg, rgba(0,132,255,0.5), transparent)" }} />
          </div>
          <h2 className="font-playwrite-hr text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Škola{" "}
            <span style={{
              background: "linear-gradient(135deg, #0084FF, #4fa8ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Skijanja
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Za sve koji žele naučiti skijati — profesionalni instruktori za sve uzraste i grupe.
          </p>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {Object.entries(GROUP_COLORS).map(([group, { border, price }]) => (
            <div
              key={group}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium"
              style={{ border: `1px solid ${border}`, color: price }}
            >
              <span className="w-2 h-2 rounded-full" style={{ background: price }} />
              {group} {group === "1" ? "osoba" : "osobe"}
            </div>
          ))}
        </motion.div>

        {/* Price grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {SCHOOL_PRICES.map(({ label, price, note, group }, i) => {
            const { bg, border, price: priceColor } = GROUP_COLORS[group];
            return (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1"
                style={{ background: bg, border: `1px solid ${border}` }}
              >
                <p className="text-white/70 text-sm font-medium mb-3 leading-tight">{label}</p>
                <p className="text-2xl font-bold" style={{ color: priceColor }}>{price}</p>
                {note && <p className="text-white/40 text-xs mt-1">{note}</p>}
              </motion.div>
            );
          })}
        </div>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-14 max-w-xl mx-auto rounded-2xl p-6 text-center"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h3 className="font-jakarta font-bold text-white text-xl mb-4">Kako se prijaviti?</h3>
          <div className="space-y-2 text-white/60 text-sm">
            <div className="flex items-center justify-center gap-2">
              <FaPhone className="text-main-color-lighter-green" />
              <span>032-771-920</span>
              <span className="text-white/30">ili</span>
              <span>direktno u SKI centru</span>
            </div>
            <p>Kontakt osobe: <span className="text-white/80">prof. Irfan Hasagić</span> i <span className="text-white/80">prof. Marin Mijač</span></p>
            <p className="text-white/50">Iznajmljivanje ski opreme dostupno direktno u SKI centru.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
