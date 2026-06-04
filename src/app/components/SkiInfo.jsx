"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaSkiing } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { MovingBorder } from "./ui/MovingBorder";

const PRICES = [
  { label: "Poludnevna karta",    price: "10 KM", note: "10:00–13:00 ili 13:00–16:00", pop: false },
  { label: "Dnevna karta",        price: "15 KM", note: "10:00–16:00",                 pop: true  },
  { label: "Noćno skijanje",      price: "10 KM", note: "",                             pop: false },
  { label: "Jedna vožnja",        price: "2 KM",  note: "",                             pop: false },
  { label: "Parking",             price: "2 KM",  note: "Po vozilu",                   pop: false },
  { label: "Sedmodnevna karta",   price: "80 KM", note: "",                             pop: false },
  { label: "Sezonska karta",      price: "300 KM",note: "",                             pop: true  },
  { label: "Grupa 5–12 odraslih", price: "12 KM", note: "po osobi, dnevna",            pop: false },
  { label: "Grupa 5–12 djece",    price: "8 KM",  note: "po osobi (ski klubovi)",      pop: false },
];

function PriceCard({ label, price, note, pop }) {
  const inner = (
    <div
      className="h-full p-5 rounded-2xl relative"
      style={!pop ? {
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
      } : {}}
    >
      {pop && (
        <span
          className="absolute top-3 right-3 text-[9px] font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-full text-brand-mid"
          style={{ background: "rgba(0,132,255,0.18)", border: "1px solid rgba(0,132,255,0.3)" }}
        >
          Popular
        </span>
      )}
      <p className="text-white/45 text-xs font-medium mb-2.5 leading-snug pr-14">{label}</p>
      <p
        className="text-2xl font-bold font-display"
        style={{ color: pop ? "#4fa8ff" : "#ffffff" }}
      >
        {price}
      </p>
      {note && <p className="text-white/28 text-[11px] mt-1">{note}</p>}
    </div>
  );

  if (pop) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <MovingBorder duration={3200} containerClassName="h-full rounded-2xl">
          {inner}
        </MovingBorder>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="rounded-2xl transition-all duration-300 hover:-translate-y-1"
    >
      {inner}
    </motion.div>
  );
}

export default function SkiInfo() {
  const [ref, inView] = useInView({ threshold: 0.07, triggerOnce: true });

  return (
    <section
      style={{
        background: "linear-gradient(180deg, #060d1a 0%, #030810 100%)",
        paddingTop: "6rem",
        paddingBottom: "6rem",
      }}
    >
      {/* Top rule */}
      <div
        className="mb-0"
        style={{
          height: 1,
          background: "linear-gradient(90deg, transparent, rgba(0,132,255,0.3), transparent)",
        }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-6 sm:px-10 pt-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="text-center mb-14"
        >
          <div className="flex justify-center items-center gap-3 mb-5">
            <div className="h-px w-10" style={{ background: "linear-gradient(90deg, transparent, rgba(0,132,255,0.5))" }} />
            <FaSkiing className="text-brand text-lg" />
            <div className="h-px w-10" style={{ background: "linear-gradient(90deg, rgba(0,132,255,0.5), transparent)" }} />
          </div>
          <h2
            className="font-display italic font-bold text-white mb-3 leading-tight"
            style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
          >
            Cijene{" "}
            <span className="text-gradient not-italic">Skijanja</span>
          </h2>
          <p className="text-white/38 text-[15px] max-w-md mx-auto">
            Dostupno za sve uzraste — od djece do iskusnih skijaša.
          </p>
        </motion.div>

        {inView && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {PRICES.map((p) => (
              <PriceCard key={p.label} {...p} />
            ))}
          </div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 }}
          className="mt-14 text-center"
        >
          <Link
            href="/skiing"
            className="group relative inline-flex items-center gap-4 px-8 py-3.5 text-[11px] font-bold tracking-[0.26em] uppercase text-white overflow-hidden"
            style={{ border: "1px solid rgba(255,255,255,0.28)" }}
          >
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" style={{ background: "rgba(255,255,255,0.06)" }} />
            <FaSkiing className="relative z-10 text-white/60" />
            <span className="relative z-10">Raspored i Ski Škola</span>
            <FiArrowRight className="relative z-10 text-white/55 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
