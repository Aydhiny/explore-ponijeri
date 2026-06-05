"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import BG    from "../images/ponijeri.jpg";
import opcina from "../images/opcina-kakanj.png";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";
import Snow2D from "./Snow2D";

export default function Header() {
  const bgRef = useRef(null);

  // Subtle photo parallax
  useEffect(() => {
    const h = (e) => {
      if (!bgRef.current) return;
      const nx = e.clientX / window.innerWidth  - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;
      bgRef.current.style.transform = `scale(1.06) translate(${nx * -10}px, ${ny * -6}px)`;
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
    <section className="relative w-full h-screen min-h-[640px] overflow-hidden bg-[#040c1e]">

      {/* ── Photo — let it breathe ──────────────────────────────── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          ref={bgRef}
          className="absolute inset-[-3%]"
          style={{ transform: "scale(1.06)", transition: "transform 1.1s cubic-bezier(0.16,1,0.3,1)" }}
        >
          <Image
            src={BG}
            alt="Ponijeri planinska panorama"
            fill
            priority
            quality={92}
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* ── Base overlay — very light, just a hint ──────────────── */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: "rgba(4,10,28,0.30)" }}
      />

      {/* ── Top-left scrim — ONLY for headline readability ────────── */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background:
            "linear-gradient(135deg, rgba(4,10,28,0.75) 0%, rgba(4,10,28,0.50) 30%, transparent 58%)",
        }}
      />

      {/* ── Bottom scrim — for cards ──────────────────────────── */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background:
            "linear-gradient(to top, rgba(4,10,28,0.80) 0%, rgba(4,10,28,0.40) 28%, transparent 50%)",
        }}
      />

      {/* ── Snow — very fine, barely there ──────────────────────── */}
      <Snow2D />

      {/* ════════════════════════════════════════════════════════
          HEADLINE — top left (Iceburg-style)
          ════════════════════════════════════════════════════════ */}
      <div className="absolute top-0 left-0 z-10 px-10 sm:px-14 xl:px-20 pt-24 sm:pt-28">

        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[10px] tracking-[0.38em] uppercase font-semibold mb-5"
          style={{ color: "rgba(180,210,255,0.65)" }}
        >
          Kakanj · BiH · 1200m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans font-black leading-[0.9] tracking-tight select-none"
          style={{ fontSize: "clamp(3.8rem, 10vw, 9.5rem)" }}
        >
          {/* "Explore" — white, slightly muted */}
          <span className="block text-white" style={{ opacity: 0.92 }}>
            Explore
          </span>
          {/* "Ponijeri" — strong blue vertical gradient */}
          <span
            className="block"
            style={{
              background:
                "linear-gradient(180deg, #ffffff 0%, #c0deff 28%, #4aaaff 58%, #0d5aee 85%, #001e99 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 4px 32px rgba(60,150,255,0.40))",
            }}
          >
            Ponijeri
          </span>
        </motion.h1>
      </div>

      {/* ════════════════════════════════════════════════════════
          BOTTOM RIGHT — description + CTA
          ════════════════════════════════════════════════════════ */}
      <motion.div
        className="absolute bottom-10 right-10 sm:right-14 xl:right-20 z-10 max-w-[280px] text-right"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.65 }}
      >
        <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(220,235,255,0.70)" }}>
          Skijaški centar na 1200m nadmorske visine. Planinska ljepota Bosne, za sve uzraste.
        </p>

        {/* Dark pill CTA — Iceburg style */}
        <button
          onClick={() => scrollTo("showcase")}
          className="group inline-flex items-center gap-3 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:gap-4"
          style={{
            background: "rgba(255,255,255,0.92)",
            color: "#040c1e",
            padding: "12px 20px 12px 24px",
          }}
        >
          Istraži Resort
          <span
            className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
            style={{ background: "#040c1e" }}
          >
            <FiArrowUpRight className="text-white text-xs" />
          </span>
        </button>
      </motion.div>

      {/* ════════════════════════════════════════════════════════
          BOTTOM LEFT — glass info card
          ════════════════════════════════════════════════════════ */}
      <motion.div
        className="absolute bottom-10 left-10 sm:left-14 xl:left-20 z-10"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.80 }}
      >
        <button
          onClick={() => scrollTo("about")}
          className="group flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300"
          style={{
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.14)",
            backdropFilter: "blur(22px)",
            WebkitBackdropFilter: "blur(22px)",
          }}
        >
          <div>
            <p
              className="text-[12px] font-bold leading-snug"
              style={{ color: "rgba(255,255,255,0.90)" }}
            >
              5 ski staza · Žičara · Ski škola
            </p>
            <p
              className="text-[10px] mt-0.5"
              style={{ color: "rgba(180,210,255,0.50)" }}
            >
              Noćno skijanje · 8 apartmana
            </p>
          </div>
          <span
            className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
            style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.20)" }}
          >
            <FiArrowUpRight style={{ color: "rgba(255,255,255,0.80)", fontSize: "11px" }} />
          </span>
        </button>
      </motion.div>

      {/* ── Scroll cue — center bottom ───────────────────────── */}
      <motion.button
        onClick={() => scrollTo("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 transition-colors duration-200"
        style={{ color: "rgba(255,255,255,0.28)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        onMouseEnter={e => e.currentTarget.style.color = "rgba(255,255,255,0.55)"}
        onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.28)"}
      >
        <span className="text-[8px] tracking-[0.42em] uppercase font-medium">Scroll</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <FiArrowDown className="text-xs" />
        </motion.div>
      </motion.button>

      {/* ── Opcina badge ─────────────────────────────────────── */}
      <motion.div
        className="absolute top-6 right-8 z-10 animate-float"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <Image
          alt="Općina Kakanj"
          src={opcina}
          width={40}
          height={40}
          style={{
            borderRadius: "50%",
            padding: 4,
            background: "rgba(255,255,255,0.09)",
            border: "1px solid rgba(255,255,255,0.16)",
            backdropFilter: "blur(12px)",
          }}
        />
      </motion.div>
    </section>
  );
}
