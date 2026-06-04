"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import BG from "../images/ponijeri.jpg";

export default function PromoSki() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div
      className="relative overflow-hidden"
      style={{
        backgroundImage: `url(${BG.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(255deg," +
            "rgba(3,8,16,0.90) 0%," +
            "rgba(3,8,16,0.60) 50%," +
            "rgba(3,8,16,0.22) 100%)",
        }}
      />

      <div ref={ref} className="relative z-10 py-24 sm:py-32 flex justify-end">
        <div className="px-6 sm:px-12 lg:px-20 max-w-lg text-right">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="block text-[10px] font-bold tracking-[0.3em] uppercase text-white/35 mb-5">
              Profesionalna instrukcija
            </span>
            <h2
              className="font-display italic font-bold text-white mb-4 leading-tight"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
            >
              Škola<br />
              <span className="not-italic text-gradient-white">Skijanja</span>
            </h2>
            <p className="text-white/45 text-[15px] mb-10 leading-relaxed">
              Učite kod profesionalnih instruktora — za sve uzraste i nivoe iskustva.
            </p>

            {/* Thin rectangle button, right-aligned */}
            <Link
              href="/skiing"
              className="group relative inline-flex items-center gap-4 px-8 py-3.5 text-[11px] font-bold tracking-[0.26em] uppercase text-white overflow-hidden ml-auto"
              style={{ border: "1px solid rgba(255,255,255,0.30)" }}
            >
              <span
                className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"
                style={{ background: "rgba(255,255,255,0.07)" }}
              />
              <span className="relative z-10">Saznaj više</span>
              <FiArrowRight className="relative z-10 text-white/55 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
