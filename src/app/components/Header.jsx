"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import BG    from "../images/ponijeri-2.jpg";
import opcina from "../images/opcina-kakanj.png";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiArrowDown } from "react-icons/fi";
import { Spotlight } from "./ui/Spotlight";
import Snow2D from "./Snow2D";

const TAGLINES = ["Planina.", "Priroda.", "Avangarda."];

export default function Header() {
  const [tagIdx, setTagIdx] = useState(0);
  const bgRef   = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const id = setInterval(() => setTagIdx(i => (i + 1) % TAGLINES.length), 3200);
    return () => clearInterval(id);
  }, []);

  // Subtle dual-layer parallax
  useEffect(() => {
    const h = (e) => {
      const nx = e.clientX / window.innerWidth  - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;
      if (bgRef.current)
        bgRef.current.style.transform = `scale(1.06) translate(${nx * -8}px, ${ny * -5}px)`;
      if (textRef.current)
        textRef.current.style.transform = `translate(${nx * -14}px, ${ny * -7}px)`;
    };
    window.addEventListener("mousemove", h, { passive: true });
    return () => window.removeEventListener("mousemove", h);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (window.__lenis) window.__lenis.scrollTo(el, { offset: -72, duration: 1.4 });
    else el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full h-screen min-h-[640px] overflow-hidden">

      {/* ── Background photo ─────────────────────────────────────── */}
      {/* ponijeri-2.jpg is B&W — the blue tint overlay turns it cinematic deep-winter */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          ref={bgRef}
          className="absolute inset-[-3%]"
          style={{ transform: "scale(1.06)", transition: "transform 1.0s cubic-bezier(0.16,1,0.3,1)" }}
        >
          <Image
            src={BG}
            alt="Ponijeri planinska panorama"
            fill
            priority
            quality={92}
            className="object-cover object-[center_38%]"
            style={{ filter: "brightness(0.78) contrast(1.08)" }}
          />
        </div>
      </div>

      {/* ── Blue tint — turns B&W photo into deep winter navy ────── */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: "rgba(8,28,88,0.58)" }}
      />

      {/* ── Edge vignette + top darkness for text readability ────── */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background:
            "linear-gradient(180deg, rgba(2,8,30,0.55) 0%, transparent 38%, transparent 58%, rgba(2,8,30,0.65) 100%)",
        }}
      />
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background:
            "radial-gradient(ellipse at 60% 45%, transparent 35%, rgba(2,6,22,0.45) 100%)",
        }}
      />

      {/* ── Aceternity spotlight (fires once on load) ────────────── */}
      <Spotlight className="z-[3] -top-20 left-0 lg:left-10" fill="#5599ff" />

      {/* ── 2D Canvas snow — soft circles, no WebGL ──────────────── */}
      <Snow2D />

      {/* ── Content ──────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center px-10 sm:px-16 xl:px-24 pb-20">
        <div
          ref={textRef}
          style={{ transition: "transform 0.95s cubic-bezier(0.16,1,0.3,1)" }}
        >

          {/* Location tag */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="h-px w-8 bg-white/25" />
            <span className="text-[10px] tracking-[0.35em] font-bold uppercase text-white/45">
              Kakanj · Bosna i Hercegovina · 1200m
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-display leading-[0.85] mb-9 select-none"
            style={{ fontSize: "clamp(4.5rem, 12vw, 10.5rem)" }}
          >
            {/* Ghost italic "Explore" */}
            <span className="block font-light italic" style={{ color: "rgba(255,255,255,0.11)" }}>
              Explore
            </span>
            {/* "Ponijeri" — strong vertical blue gradient */}
            <span
              className="block font-bold not-italic"
              style={{
                background:
                  "linear-gradient(180deg, #f0f8ff 0%, #b0d8ff 22%, #4aaaff 52%, #0d5add 78%, #001e88 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Ponijeri
            </span>
          </motion.h1>

          {/* Cycling tagline */}
          <div className="h-5 overflow-hidden mb-11">
            <AnimatePresence mode="wait">
              <motion.p
                key={tagIdx}
                initial={{ opacity: 0, y: 7 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -7 }}
                transition={{ duration: 0.22 }}
                className="text-[11px] tracking-[0.32em] uppercase font-medium text-white/38"
              >
                {TAGLINES[tagIdx]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.72 }}
            className="flex items-center gap-6 mb-14"
          >
            {/* Primary — frosted glass pill */}
            <button
              onClick={() => scrollTo("showcase")}
              className="group relative flex items-center gap-3 px-8 py-3.5 rounded-full overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.10)",
                border: "1px solid rgba(255,255,255,0.22)",
                backdropFilter: "blur(18px)",
                WebkitBackdropFilter: "blur(18px)",
              }}
            >
              <span
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "rgba(255,255,255,0.07)" }}
              />
              <span className="relative text-[11px] font-bold tracking-[0.24em] uppercase text-white/88">
                Istraži Resort
              </span>
              <FiArrowRight className="relative text-white/55 group-hover:translate-x-0.5 transition-transform duration-200 text-xs" />
            </button>

            {/* Secondary — text only */}
            <button
              onClick={() => scrollTo("about")}
              className="group flex items-center gap-2 text-[11px] font-medium tracking-[0.22em] uppercase text-white/34 hover:text-white/60 transition-colors duration-200"
            >
              O nama
              <span className="h-px w-0 group-hover:w-5 bg-white/28 transition-all duration-300 block" />
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.0 }}
            className="flex items-center gap-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.10)", paddingTop: "1.4rem", maxWidth: "460px" }}
          >
            {[
              { val: "5",     sub: "ski staza"  },
              { val: "1200m", sub: "n.v."       },
              { val: "8",     sub: "apartmana"  },
              { val: "Noćno", sub: "skijanje"   },
            ].map((s, i) => (
              <div key={i} className="flex flex-col gap-0.5">
                <span className="font-display font-bold text-base leading-none text-white/82">{s.val}</span>
                <span className="text-[8px] tracking-[0.24em] uppercase text-white/28">{s.sub}</span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* ── Opcina badge ─────────────────────────────────────────── */}
      <motion.div
        className="absolute bottom-10 right-9 z-10 animate-float"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <Image
          alt="Općina Kakanj"
          src={opcina}
          width={44}
          height={44}
          style={{
            borderRadius: "50%",
            padding: 5,
            background: "rgba(255,255,255,0.10)",
            border: "1px solid rgba(255,255,255,0.18)",
            backdropFilter: "blur(12px)",
          }}
        />
      </motion.div>

      {/* ── Scroll cue ───────────────────────────────────────────── */}
      <motion.button
        onClick={() => scrollTo("about")}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/22 hover:text-white/50 transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <span className="text-[8px] tracking-[0.42em] uppercase font-medium">Scroll</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <FiArrowDown className="text-xs" />
        </motion.div>
      </motion.button>

      {/* ── Fade to next section ─────────────────────────────────── */}
      <div
        className="absolute bottom-0 inset-x-0 z-[3] pointer-events-none"
        style={{ height: "130px", background: "linear-gradient(to bottom, transparent, white)" }}
      />
    </section>
  );
}
