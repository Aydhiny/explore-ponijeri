"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { FaPersonSkiingNordic } from "react-icons/fa6";
import { FiArrowRight } from "react-icons/fi";

const BG = new URL("../images/ponijeri.jpg", import.meta.url);

export default function PromoSki() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <div
      className="relative overflow-hidden"
      style={{ backgroundImage: `url(${BG})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(255deg," +
            "  rgba(6,13,26,0.82) 0%," +
            "  rgba(6,13,26,0.55) 45%," +
            "  rgba(6,13,26,0.22) 100%)",
        }}
      />

      <div ref={ref} className="relative z-10 py-20 sm:py-28 flex justify-end">
        <div className="px-6 sm:px-12 lg:px-20 max-w-lg text-right">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <FaPersonSkiingNordic className="text-brand-mid text-4xl mb-4 ml-auto" />
            <span className="block text-[10px] font-semibold tracking-[0.22em] uppercase text-brand-mid mb-3">
              Profesionalna instrukcija
            </span>
            <h2
              className="font-display font-bold text-white mb-3 leading-tight"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
            >
              Škola skijanja
            </h2>
            <p className="text-white/55 text-base mb-7">
              Učite kod profesionalnih instruktora — za sve uzraste i nivoe iskustva.
            </p>
            <Link
              href="/skiing"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #0084FF 0%, #005fcc 100%)",
                boxShadow: "0 0 30px rgba(0,132,255,0.4)",
              }}
            >
              Saznaj više
              <FiArrowRight className="text-sm" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
