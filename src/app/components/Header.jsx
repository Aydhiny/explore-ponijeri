"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import opcina from "../images/opcina-kakanj.png";
import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import dynamic from "next/dynamic";

// Load Three.js snow only client-side (no SSR)
const SnowCanvas = dynamic(() => import("./SnowCanvas"), { ssr: false });

import BG from "../images/ponijeri.jpg";

const WORDS = ["Planina.", "Priroda.", "Avangarda."];

export default function Header() {
  const [wordIdx, setWordIdx] = useState(0);

  // Cycling subtitle word
  useEffect(() => {
    const id = setInterval(() => setWordIdx((i) => (i + 1) % WORDS.length), 2600);
    return () => clearInterval(id);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      if (window.__lenis) {
        window.__lenis.scrollTo(el, { offset: -72, duration: 1.4 });
      } else {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">

      {/* ── Background photo ───────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <Image
          src={BG}
          alt="Ponijeri planina"
          fill
          priority
          className="object-cover object-center"
          quality={90}
        />
      </div>

      {/* ── Vertical gradient overlays — dark top + dark bottom ── */}
      <div className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to bottom," +
            "  rgba(6,13,26,0.55) 0%," +
            "  rgba(6,13,26,0.15) 35%," +
            "  rgba(6,13,26,0.05) 55%," +
            "  rgba(6,13,26,0.55) 80%," +
            "  rgba(6,13,26,0.85) 100%)",
        }}
      />
      {/* subtle blue cast at very bottom to blend into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 z-[2]"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(244,249,255,0.9))",
        }}
      />

      {/* ── Three.js snow ─────────────────────────────────── */}
      <SnowCanvas />

      {/* ── Hero content ──────────────────────────────────── */}
      <div className="absolute inset-0 z-[5] flex flex-col justify-center items-start px-6 sm:px-12 lg:px-20 xl:px-28 pb-24">

        {/* eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="block w-8 h-px bg-brand-mid opacity-80" />
          <span className="text-brand-mid text-xs font-semibold tracking-[0.25em] uppercase">
            Općina Kakanj · Bosna i Hercegovina
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-bold leading-[0.92] mb-4"
          style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)" }}
        >
          {/* White line */}
          <span className="block text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.5)]">
            Explore
          </span>
          {/* Blue gradient line */}
          <span
            className="block"
            style={{
              background: "linear-gradient(135deg, #4fa8ff 0%, #0084FF 40%, #7ec8ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 30px rgba(0,132,255,0.45))",
            }}
          >
            Ponijeri
          </span>
        </motion.h1>

        {/* Cycling word */}
        <div className="h-10 mb-10 overflow-hidden">
          <motion.p
            key={wordIdx}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="text-white/60 text-lg sm:text-xl font-light tracking-wide"
          >
            {WORDS[wordIdx]}
          </motion.p>
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap gap-3"
        >
          <button
            onClick={() => scrollTo("showcase")}
            className="group flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #0084FF 0%, #005fcc 100%)",
              boxShadow: "0 0 32px rgba(0,132,255,0.45), 0 4px 16px rgba(0,0,0,0.25)",
            }}
          >
            Istraži
            <FiArrowDown className="group-hover:translate-y-0.5 transition-transform text-sm" />
          </button>

          <button
            onClick={() => scrollTo("about")}
            className="px-7 py-3.5 rounded-full text-sm font-semibold text-white/90 transition-all duration-300 hover:bg-white/20"
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.22)",
              backdropFilter: "blur(10px)",
            }}
          >
            O nama
          </button>
        </motion.div>
      </div>

      {/* ── Bottom scroll cue ──────────────────────────────── */}
      <motion.button
        onClick={() => scrollTo("about")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[6] flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <FiArrowDown className="text-base" />
        </motion.div>
      </motion.button>

      {/* ── Opcina badge — bottom-right ────────────────────── */}
      <motion.div
        className="absolute bottom-10 right-6 sm:right-12 z-[6] animate-float"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4, duration: 0.7 }}
      >
        <Image
          alt="Općina Kakanj"
          src={opcina}
          width={64}
          height={64}
          className="opacity-80 hover:opacity-100 transition-opacity"
          style={{
            borderRadius: "50%",
            padding: 8,
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.2)",
            backdropFilter: "blur(10px)",
          }}
        />
      </motion.div>
    </section>
  );
}
