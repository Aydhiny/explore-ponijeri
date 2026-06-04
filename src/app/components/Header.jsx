"use client";
import { useEffect, useState, Suspense, lazy } from "react";
import Image from "next/image";
import opcina from "../images/opcina-kakanj.png";
import { motion } from "framer-motion";
import { FiArrowRight, FiArrowDown } from "react-icons/fi";

const HeroCanvas = lazy(() => import("./HeroCanvas"));

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
    <section className="relative w-full h-screen min-h-[640px] flex overflow-hidden">

      {/* ── Left column — text ──────────────────────────────────────── */}
      <div
        className="relative z-10 flex flex-col justify-center w-full lg:w-[54%] px-8 sm:px-14 xl:px-20 py-28"
        style={{
          background: "#f4f9ff",
          backgroundImage: "radial-gradient(circle, rgba(0,47,90,0.055) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      >
        {/* Decorative number */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="absolute top-10 left-8 sm:left-14 xl:left-20 font-display font-bold select-none pointer-events-none"
          style={{ fontSize: "clamp(5rem, 14vw, 11rem)", color: "rgba(0,47,90,0.045)", lineHeight: 1 }}
          aria-hidden="true"
        >
          01
        </motion.span>

        {/* Location tag */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="h-px w-8 bg-brand/30" />
          <span className="text-[10px] tracking-[0.32em] font-bold uppercase text-brand-dark/45">
            Kakanj · Bosna i Hercegovina · 1200m
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-display leading-[0.88] mb-6"
          style={{ fontSize: "clamp(3.8rem, 9vw, 7.5rem)" }}
        >
          {/* "Explore" — thin italic, barely-there colour */}
          <span
            className="block italic font-light"
            style={{ color: "rgba(0,47,90,0.28)" }}
          >
            Explore
          </span>
          {/* "Ponijeri" — bold, vertical gradient white→deep-blue */}
          <span
            className="block font-bold not-italic"
            style={{
              background: "linear-gradient(to bottom, #002F5A 0%, #0055aa 55%, #0084FF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Ponijeri
          </span>
        </motion.h1>

        {/* Cycling word */}
        <div className="h-7 overflow-hidden mb-8">
          <motion.p
            key={wordIdx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-brand-dark/45 text-sm tracking-[0.12em] font-light"
          >
            {WORDS[wordIdx]}
          </motion.p>
        </div>

        {/* Stats — plain inline numbers */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex items-center gap-5 mb-12 text-[11px] tracking-[0.18em] uppercase text-brand-dark/40 font-medium"
        >
          <span>5 ski staza</span>
          <span className="w-1 h-1 rounded-full bg-brand-dark/20" />
          <span>Žičara</span>
          <span className="w-1 h-1 rounded-full bg-brand-dark/20" />
          <span>Ski škola</span>
          <span className="w-1 h-1 rounded-full bg-brand-dark/20" />
          <span>Noćno skijanje</span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="flex items-center gap-7"
        >
          {/* Primary — thin rectangle, dark border */}
          <button
            onClick={() => scrollTo("showcase")}
            className="group relative flex items-center gap-4 px-8 py-3.5 text-[11px] font-bold tracking-[0.26em] uppercase text-brand-dark overflow-hidden"
            style={{ border: "1px solid rgba(0,47,90,0.30)" }}
          >
            <span
              className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"
              style={{ background: "rgba(0,47,90,0.05)" }}
            />
            <span className="relative z-10">Istraži</span>
            <FiArrowRight className="relative z-10 text-brand-dark/50 group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          {/* Secondary — text only */}
          <button
            onClick={() => scrollTo("about")}
            className="group flex items-center gap-2 text-[11px] font-medium tracking-[0.2em] uppercase text-brand-dark/38 hover:text-brand-dark/65 transition-colors"
          >
            <span>O nama</span>
            <span className="block w-0 h-px bg-brand-dark/30 group-hover:w-5 transition-all duration-300" />
          </button>
        </motion.div>

        {/* Scroll cue — bottom of left column */}
        <motion.button
          onClick={() => scrollTo("about")}
          className="absolute bottom-8 left-8 sm:left-14 xl:left-20 flex items-center gap-3 text-brand-dark/30 hover:text-brand-dark/55 transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
        >
          <span className="text-[9px] tracking-[0.35em] uppercase font-medium">Scroll</span>
          <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <FiArrowDown className="text-xs" />
          </motion.div>
        </motion.button>
      </div>

      {/* ── Right column — Three.js winter scene ────────────────────── */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[50%] overflow-hidden">

        {/* Angled left edge — ski slope cut */}
        <div
          className="absolute inset-0 z-10 bg-[#f4f9ff]"
          style={{ clipPath: "polygon(0 0, 12% 0, 0 100%)" }}
        />

        {/* Three.js canvas */}
        <div className="absolute inset-0">
          <Suspense fallback={<div style={{ background: "#020a1c", width: "100%", height: "100%" }} />}>
            <HeroCanvas />
          </Suspense>
        </div>

        {/* Subtle bottom fade into the next section */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 z-[2]"
          style={{ background: "linear-gradient(to bottom, transparent, #020a1c)" }}
        />

        {/* Opcina badge */}
        <motion.div
          className="absolute bottom-8 right-8 z-[3] animate-float"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          <Image
            alt="Općina Kakanj"
            src={opcina}
            width={48}
            height={48}
            className="opacity-80 hover:opacity-100 transition-opacity"
            style={{
              borderRadius: "50%",
              padding: 5,
              background: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(0,47,90,0.12)",
              backdropFilter: "blur(8px)",
            }}
          />
        </motion.div>
      </div>

      {/* ── Mobile: dark sky fill ────────────────────────────────────── */}
      <div className="absolute inset-0 lg:hidden z-0" style={{ background: "#f4f9ff" }} />

    </section>
  );
}
