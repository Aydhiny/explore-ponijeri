"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaSkiing } from "react-icons/fa";

const PRICES = [
  { label: "Poludnevna karta", price: "10 KM", note: "10:00–13:00 ili 13:00–16:00", highlight: false },
  { label: "Dnevna karta", price: "15 KM", note: "10:00–16:00", highlight: true },
  { label: "Noćno skijanje", price: "10 KM", note: "", highlight: false },
  { label: "Karta za jednu vožnju", price: "2 KM", note: "", highlight: false },
  { label: "Parking", price: "2 KM", note: "Po vozilu", highlight: false, green: true },
  { label: "Sedmodnevna karta", price: "80 KM", note: "", highlight: false },
  { label: "Sezonska karta", price: "300 KM", note: "", highlight: true },
  { label: "Grupna karta (5–12 odraslih)", price: "12 KM", note: "Po osobi, dnevna karta", highlight: false },
  { label: "Grupna karta (5–12 djece)", price: "8 KM", note: "Po osobi, ski klubovi", highlight: false },
];

export default function SkiInfo() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      className="relative py-20 xl:py-28 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #0a1628 0%, #001f3f 40%, #002F5A 100%)",
      }}
    >
      {/* Background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,132,255,0.5), transparent)" }}
      />
      <div
        className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,132,255,0.12) 0%, transparent 70%)" }}
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
            <FaSkiing className="text-main-color-lighter-green text-xl" />
            <div className="h-px w-12" style={{ background: "linear-gradient(90deg, rgba(0,132,255,0.5), transparent)" }} />
          </div>
          <h2 className="font-playwrite-hr text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Cijene{" "}
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
            Cijene skijanja na Ponijerima — dostupno za sve uzraste.
          </p>
        </motion.div>

        {/* Price grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PRICES.map(({ label, price, note, highlight, green }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 cursor-default"
              style={{
                background: highlight
                  ? "linear-gradient(135deg, rgba(0,132,255,0.25), rgba(0,132,255,0.1))"
                  : green
                    ? "linear-gradient(135deg, rgba(0,200,100,0.15), rgba(0,200,100,0.05))"
                    : "rgba(255,255,255,0.04)",
                border: highlight
                  ? "1px solid rgba(0,132,255,0.4)"
                  : green
                    ? "1px solid rgba(0,200,100,0.3)"
                    : "1px solid rgba(255,255,255,0.08)",
                boxShadow: highlight
                  ? "0 0 30px rgba(0,132,255,0.1)"
                  : "none",
              }}
            >
              {highlight && (
                <div
                  className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-xs font-semibold text-white"
                  style={{ background: "rgba(0,132,255,0.6)" }}
                >
                  Popularno
                </div>
              )}
              <h3 className="text-white/80 font-medium text-sm mb-3 leading-tight">{label}</h3>
              <p
                className="text-3xl font-bold"
                style={{
                  color: highlight ? "#4fa8ff" : green ? "#4ade80" : "#ffffff",
                }}
              >
                {price}
              </p>
              {note && <p className="text-white/40 text-xs mt-2">{note}</p>}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <Link
            href="/skiing"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #0084FF, #005fcc)",
              boxShadow: "0 0 40px rgba(0,132,255,0.35)",
            }}
          >
            <FaSkiing />
            Raspored i Ski Škola
            <span>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
