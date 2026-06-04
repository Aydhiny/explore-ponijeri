"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import opcina from "../images/opcina-kakanj.png";
import { motion } from "framer-motion";
import { FiArrowRight, FiArrowDown } from "react-icons/fi";
import dynamic from "next/dynamic";
import { Spotlight } from "./ui/Spotlight";

const SnowCanvas     = dynamic(() => import("./SnowCanvas"),     { ssr: false });
const MountainCanvas = dynamic(() => import("./MountainCanvas"), { ssr: false });

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

      {/* ── Sky gradient (CSS — behind everything) ───────────── */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(180deg," +
            "#020b18 0%," +
            "#031525 40%," +
            "#071d35 70%," +
            "#0c2540 100%)",
        }}
      />

      {/* ── Three.js mountain scene ───────────────────────────── */}
      <MountainCanvas />

      {/* ── Bottom fade into next section ────────────────────── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-56 z-[3]"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(244,249,255,0.98))" }}
      />

      {/* ── Aceternity Spotlight ─────────────────────────────── */}
      <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none">
        <Spotlight className="left-0 top-0 rotate-[14deg]" fill="#6ab4ff" />
      </div>

      {/* ── Snow canvas ──────────────────────────────────────── */}
      <SnowCanvas />

      {/* ── Hero content ─────────────────────────────────────── */}
      <div className="absolute inset-0 z-[5] flex flex-col justify-center px-6 sm:px-14 lg:px-20 xl:px-28 pb-20">

        {/* Location tag */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="h-px w-10 bg-white/20" />
          <span className="text-white/55 text-[10px] font-semibold tracking-[0.32em] uppercase">
            Kakanj · Bosna i Hercegovina · 1200m
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-display leading-[0.88] mb-6"
          style={{ fontSize: "clamp(4rem, 11vw, 10.5rem)", fontWeight: 700 }}
        >
          {/* First word: pure white, italic — clean and strong */}
          <span
            className="block italic"
            style={{
              color: "#ffffff",
              textShadow: "0 2px 40px rgba(0,0,0,0.5)",
            }}
          >
            Explore
          </span>
          {/* Second word: vertical gradient white → blue, not italic */}
          <span
            className="block not-italic"
            style={{
              background: "linear-gradient(to bottom, #ffffff 0%, #7ec8ff 45%, #2277dd 100%)",
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
            className="text-white/60 text-base tracking-[0.15em] font-light"
          >
            {WORDS[wordIdx]}
          </motion.p>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="flex items-center gap-3 mb-10 text-white/55 text-[10px] tracking-[0.22em] uppercase font-medium"
        >
          <span>5 ski staza</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span>Žičara</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span>Ski škola</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span>Noćno skijanje</span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex items-center gap-8"
        >
          {/* Primary — thin rectangle, luxury editorial */}
          <button
            onClick={() => scrollTo("showcase")}
            className="group relative flex items-center gap-4 px-8 py-3.5 text-[11px] font-bold tracking-[0.28em] uppercase text-white overflow-hidden"
            style={{ border: "1px solid rgba(255,255,255,0.28)" }}
          >
            <span
              className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"
              style={{ background: "rgba(255,255,255,0.06)" }}
            />
            <span className="relative z-10">Istraži</span>
            <FiArrowRight className="relative z-10 text-white/55 group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          {/* Secondary — pure text link */}
          <button
            onClick={() => scrollTo("about")}
            className="group flex items-center gap-2 text-[11px] font-medium tracking-[0.22em] uppercase text-white/35 hover:text-white/65 transition-colors duration-300"
          >
            <span>O nama</span>
            <span className="block w-0 h-px bg-white/35 group-hover:w-5 transition-all duration-400" />
          </button>
        </motion.div>
      </div>

      {/* ── Scroll cue ───────────────────────────────────────── */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[6] flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.8 }}
      >
        <span className="text-white/22 text-[9px] tracking-[0.38em] uppercase font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <FiArrowDown className="text-white/22 text-sm" />
        </motion.div>
      </motion.div>

      {/* ── Opcina badge ─────────────────────────────────────── */}
      <motion.div
        className="absolute bottom-10 right-6 sm:right-14 z-[6] animate-float"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.0, duration: 0.7 }}
      >
        <Image
          alt="Općina Kakanj"
          src={opcina}
          width={50}
          height={50}
          className="opacity-50 hover:opacity-75 transition-opacity"
          style={{
            borderRadius: "50%",
            padding: 6,
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.12)",
            backdropFilter: "blur(10px)",
          }}
        />
      </motion.div>
    </section>
  );
}
