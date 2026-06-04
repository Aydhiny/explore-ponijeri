"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaSkiing } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const PRICES = [
  { label: "Poludnevna karta",             price: "10 KM", note: "10:00–13:00 ili 13:00–16:00", pop: false },
  { label: "Dnevna karta",                 price: "15 KM", note: "10:00–16:00",                 pop: true  },
  { label: "Noćno skijanje",               price: "10 KM", note: "",                             pop: false },
  { label: "Jedna vožnja",                 price: "2 KM",  note: "",                             pop: false },
  { label: "Parking",                      price: "2 KM",  note: "Po vozilu",                   pop: false, green: true },
  { label: "Sedmodnevna karta",            price: "80 KM", note: "",                             pop: false },
  { label: "Sezonska karta",               price: "300 KM",note: "",                             pop: true  },
  { label: "Grupa 5–12 odraslih",          price: "12 KM", note: "po osobi, dnevna",            pop: false },
  { label: "Grupa 5–12 djece",             price: "8 KM",  note: "po osobi (ski klubovi)",      pop: false },
];

export default function SkiInfo() {
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true });

  return (
    <section
      style={{
        background: "linear-gradient(180deg, #060d1a 0%, #030810 100%)",
        paddingTop: "6rem",
        paddingBottom: "6rem",
      }}
    >
      {/* Top glow line */}
      <div className="rule mb-0" style={{
        background: "linear-gradient(90deg, transparent, rgba(0,132,255,0.35), transparent)",
        height: 1, marginBottom: 0,
      }} />

      <div ref={ref} className="max-w-7xl mx-auto px-6 sm:px-10 pt-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="text-center mb-14"
        >
          <div className="flex justify-center items-center gap-3 mb-4">
            <div className="h-px w-10" style={{ background: "linear-gradient(90deg, transparent, rgba(0,132,255,0.5))" }} />
            <FaSkiing className="text-brand text-lg" />
            <div className="h-px w-10" style={{ background: "linear-gradient(90deg, rgba(0,132,255,0.5), transparent)" }} />
          </div>
          <h2
            className="font-display font-bold text-white mb-3 leading-tight"
            style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
          >
            Cijene{" "}
            <span className="text-gradient">Skijanja</span>
          </h2>
          <p className="text-white/40 text-[15px] max-w-xl mx-auto">
            Dostupno za sve uzraste — od djece do iskusnih skijaša.
          </p>
        </motion.div>

        {/* Price grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {PRICES.map(({ label, price, note, pop, green }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="relative p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1"
              style={{
                background: pop
                  ? "linear-gradient(135deg, rgba(0,132,255,0.18), rgba(0,132,255,0.07))"
                  : green
                    ? "rgba(34,197,94,0.07)"
                    : "rgba(255,255,255,0.035)",
                border: pop
                  ? "1px solid rgba(0,132,255,0.3)"
                  : green
                    ? "1px solid rgba(34,197,94,0.2)"
                    : "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {pop && (
                <span
                  className="absolute top-3 right-3 text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full text-brand-mid"
                  style={{ background: "rgba(0,132,255,0.15)" }}
                >
                  Popular
                </span>
              )}
              <p className="text-white/50 text-xs font-medium mb-2 leading-snug pr-12">{label}</p>
              <p
                className="text-2xl font-bold"
                style={{ color: pop ? "#4fa8ff" : green ? "#4ade80" : "#ffffff" }}
              >
                {price}
              </p>
              {note && <p className="text-white/30 text-[11px] mt-1">{note}</p>}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <Link
            href="/skiing"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #0084FF, #005fcc)",
              boxShadow: "0 0 40px rgba(0,132,255,0.3)",
            }}
          >
            <FaSkiing />
            Raspored i Ski Škola
            <FiArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
