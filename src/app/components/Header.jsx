"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import BG from "../images/ponijeri.jpg";
import opcina from "../images/opcina-kakanj.png";
import { motion } from "framer-motion";
import { FiArrowRight, FiArrowDown } from "react-icons/fi";
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

      {/* ── Overlays ─────────────────────────────────────────── */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to bottom," +
            "rgba(3,8,16,0.72) 0%," +
            "rgba(3,8,16,0.30) 38%," +
            "rgba(3,8,16,0.18) 55%," +
            "rgba(3,8,16,0.65) 80%," +
            "rgba(3,8,16,0.92) 100%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-52 z-[2]"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(244,249,255,0.98))" }}
      />

      {/* ── Aceternity Spotlight ─────────────────────────────── */}
      <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none">
        <Spotlight className="left-0 top-0 rotate-[14deg]" fill="#6ab4ff" />
      </div>

      {/* ── Snow ─────────────────────────────────────────────── */}
      <SnowCanvas />

      {/* ── Content ──────────────────────────────────────────── */}
      <div className="absolute inset-0 z-[5] flex flex-col justify-center px-6 sm:px-14 lg:px-20 xl:px-28 pb-20">

        {/* Location tag */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="h-px w-10 bg-white/20" />
          <span className="text-white/45 text-[10px] font-semibold tracking-[0.32em] uppercase">
            Kakanj · Bosna i Hercegovina · 1200m
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="font-display leading-[0.88] mb-6"
          style={{ fontSize: "clamp(4rem, 11vw, 10.5rem)", fontWeight: 800 }}
        >
          <span className="block text-white italic">
            Explore
          </span>
          <span
            className="block not-italic"
            style={{
              background: "linear-gradient(135deg, #7ec8ff 0%, #4fa8ff 35%, #0084FF 70%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Ponijeri
          </span>
        </motion.h1>

        {/* Cycling word */}
        <div className="h-8 overflow-hidden mb-12">
          <motion.p
            key={wordIdx}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="text-white/40 text-base tracking-[0.15em] font-light"
          >
            {WORDS[wordIdx]}
          </motion.p>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex items-center gap-3 mb-10 text-white/30 text-[10px] tracking-[0.22em] uppercase font-medium"
        >
          <span>5 ski staza</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span>Žičara</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span>Ski škola</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span>Noćno skijanje</span>
        </motion.div>

        {/* CTAs — editorial style, NO pill buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="flex items-center gap-8"
        >
          {/* Primary — thin rectangle, luxury style */}
          <button
            onClick={() => scrollTo("showcase")}
            className="group relative flex items-center gap-4 px-8 py-3.5 text-[11px] font-bold tracking-[0.28em] uppercase text-white overflow-hidden transition-colors duration-300"
            style={{ border: "1px solid rgba(255,255,255,0.30)" }}
          >
            <span
              className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"
              style={{ background: "rgba(255,255,255,0.07)" }}
            />
            <span className="relative z-10">Istraži</span>
            <FiArrowRight className="relative z-10 text-white/60 group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          {/* Secondary — pure text link */}
          <button
            onClick={() => scrollTo("about")}
            className="group flex items-center gap-2 text-[11px] font-medium tracking-[0.22em] uppercase text-white/38 hover:text-white/70 transition-colors duration-300"
          >
            <span>O nama</span>
            <span className="block w-0 h-px bg-white/40 group-hover:w-5 transition-all duration-400 ease-out" />
          </button>
        </motion.div>
      </div>

      {/* ── Scroll cue ───────────────────────────────────────── */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[6] flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.8 }}
      >
        <span className="text-white/25 text-[9px] tracking-[0.38em] uppercase font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <FiArrowDown className="text-white/25 text-sm" />
        </motion.div>
      </motion.div>

      {/* ── Opcina badge ─────────────────────────────────────── */}
      <motion.div
        className="absolute bottom-10 right-6 sm:right-14 z-[6] animate-float"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.8, duration: 0.7 }}
      >
        <Image
          alt="Općina Kakanj"
          src={opcina}
          width={52}
          height={52}
          className="opacity-55 hover:opacity-80 transition-opacity"
          style={{
            borderRadius: "50%",
            padding: 6,
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.14)",
            backdropFilter: "blur(10px)",
          }}
        />
      </motion.div>
    </section>
  );
}
