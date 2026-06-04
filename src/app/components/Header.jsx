"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import BG from "../images/ponijeri.jpg";
import opcina from "../images/opcina-kakanj.png";
import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import dynamic from "next/dynamic";
import { Spotlight } from "./ui/Spotlight";

const SnowCanvas = dynamic(() => import("./SnowCanvas"), { ssr: false });

const WORDS = ["Planina.", "Priroda.", "Avangarda."];

export default function Header() {
  const [wordIdx, setWordIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setWordIdx(i => (i + 1) % WORDS.length), 2800);
    return () => clearInterval(id);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (window.__lenis) window.__lenis.scrollTo(el, { offset: -72, duration: 1.4 });
    else el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full h-screen min-h-[640px] overflow-hidden">

      {/* ── Background photo ─────────────────────────────────── */}
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

      {/* ── Gradient overlays ────────────────────────────────── */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to bottom," +
            "  rgba(3,8,16,0.60) 0%," +
            "  rgba(3,8,16,0.12) 40%," +
            "  rgba(3,8,16,0.04) 55%," +
            "  rgba(3,8,16,0.52) 80%," +
            "  rgba(3,8,16,0.88) 100%)",
        }}
      />

      {/* subtle blue at very bottom to blend into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 z-[2]"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(244,249,255,0.95))" }}
      />

      {/* ── Aceternity Spotlight ─────────────────────────────── */}
      <div className="absolute inset-0 z-[2] overflow-hidden">
        <Spotlight className="left-10 top-10 rotate-[10deg]" fill="#7ec8ff" />
      </div>

      {/* ── Three.js snow ────────────────────────────────────── */}
      <SnowCanvas />

      {/* ── Hero content ─────────────────────────────────────── */}
      <div className="absolute inset-0 z-[5] flex flex-col justify-center items-start px-6 sm:px-14 lg:px-22 xl:px-32 pb-28">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="flex items-center gap-3 mb-7"
        >
          <span className="block w-8 h-px bg-brand-mid opacity-80" />
          <span className="text-brand-mid text-[10px] font-semibold tracking-[0.3em] uppercase">
            Općina Kakanj · Bosna i Hercegovina
          </span>
        </motion.div>

        {/* Main headline — Fraunces italic */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-display leading-[0.9] mb-5"
          style={{ fontSize: "clamp(3.8rem, 10vw, 9rem)", fontWeight: 800 }}
        >
          <span className="block text-white italic drop-shadow-[0_2px_28px_rgba(0,0,0,0.55)]">
            Explore
          </span>
          <span
            className="block not-italic"
            style={{
              background: "linear-gradient(135deg, #4fa8ff 0%, #0084FF 40%, #a8d8ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 40px rgba(0,132,255,0.5))",
            }}
          >
            Ponijeri
          </span>
        </motion.h1>

        {/* Cycling subtitle */}
        <div className="h-9 mb-10 overflow-hidden">
          <motion.p
            key={wordIdx}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-white/55 text-lg sm:text-xl font-light tracking-wide"
          >
            {WORDS[wordIdx]}
          </motion.p>
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="flex flex-wrap gap-3"
        >
          <button
            onClick={() => scrollTo("showcase")}
            className="group flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:brightness-110"
            style={{
              background: "linear-gradient(135deg, #0084FF 0%, #005fcc 100%)",
              boxShadow: "0 0 40px rgba(0,132,255,0.45), 0 4px 20px rgba(0,0,0,0.3)",
            }}
          >
            Istraži
            <FiArrowDown className="group-hover:translate-y-0.5 transition-transform" />
          </button>

          <button
            onClick={() => scrollTo("about")}
            className="px-7 py-3.5 rounded-full text-sm font-semibold text-white/90 transition-all duration-300 hover:bg-white/20"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.20)",
              backdropFilter: "blur(12px)",
            }}
          >
            O nama
          </button>
        </motion.div>
      </div>

      {/* ── Scroll cue ───────────────────────────────────────── */}
      <motion.button
        onClick={() => scrollTo("about")}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-[6] flex flex-col items-center gap-2 text-white/35 hover:text-white/65 transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
      >
        <span className="text-[9px] tracking-[0.35em] uppercase font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <FiArrowDown className="text-base" />
        </motion.div>
      </motion.button>

      {/* ── Opcina badge ─────────────────────────────────────── */}
      <motion.div
        className="absolute bottom-12 right-6 sm:right-14 z-[6] animate-float"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.6, duration: 0.7 }}
      >
        <Image
          alt="Općina Kakanj"
          src={opcina}
          width={60}
          height={60}
          className="opacity-70 hover:opacity-100 transition-opacity"
          style={{
            borderRadius: "50%",
            padding: 7,
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.18)",
            backdropFilter: "blur(12px)",
          }}
        />
      </motion.div>
    </section>
  );
}
