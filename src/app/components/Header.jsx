"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
// 4K aerial mountain range — Lukas Seitz / Unsplash
const BG = "https://images.unsplash.com/photo-1743376272672-c130603a3af2?w=3840&q=92&fit=crop&auto=format";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";
import Snow2D from "./Snow2D";

export default function Header() {
  const bgRef = useRef(null);

  useEffect(() => {
    const h = (e) => {
      if (!bgRef.current) return;
      const nx = e.clientX / window.innerWidth  - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;
      bgRef.current.style.transform = `scale(1.07) translate(${nx * -12}px, ${ny * -6}px)`;
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
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">

      {/* ── Photo — breathe ────────────────────────────────────── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          ref={bgRef}
          className="absolute inset-[-4%]"
          style={{ transform: "scale(1.07)", transition: "transform 1.2s cubic-bezier(0.16,1,0.3,1)" }}
        >
          <Image
            src={BG}
            alt="Ponijeri mountain range"
            fill priority quality={95}
            className="object-cover object-[center_35%]"
          />
        </div>
      </div>

      {/* ── Very light base overlay — photo must breathe ───────── */}
      <div className="absolute inset-0 z-[1]" style={{ background: "rgba(4,12,32,0.28)" }} />

      {/* ── Vignette edges only ──────────────────────────────────── */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background:
            "radial-gradient(ellipse at 50% 45%, transparent 42%, rgba(3,9,24,0.55) 100%)",
        }}
      />

      {/* ── Bottom fade ──────────────────────────────────────────── */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[2]"
        style={{ height: "35%", background: "linear-gradient(to top, rgba(3,9,24,0.72) 0%, transparent 100%)" }}
      />

      {/* ── Decorative circle — Everest style ────────────────────── */}
      <div className="absolute inset-0 z-[3] flex items-center justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width:  "min(74vh, 74vw)",
            height: "min(74vh, 74vw)",
            border: "1px solid rgba(255,255,255,0.14)",
            borderRadius: "50%",
          }}
        />
      </div>

      {/* ── Fine snow ────────────────────────────────────────────── */}
      <Snow2D />

      {/* ════════════════════════════════════════════════════════
          CENTRED CONTENT
          ════════════════════════════════════════════════════════ */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 sm:px-8">

        {/* "E X P L O R E" eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-sans font-light text-[9px] sm:text-[10px] tracking-[0.55em] uppercase mb-3 sm:mb-4"
          style={{ color: "rgba(200,228,255,0.70)" }}
        >
          Explore
        </motion.p>

        {/* "Ponijeri" — huge Cormorant Garamond italic */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-display italic font-light select-none"
          style={{
            fontSize: "clamp(4.8rem, 18vw, 17rem)",
            lineHeight: 0.88,
            letterSpacing: "-0.01em",
            color: "rgba(255,255,255,0.95)",
            textShadow: "0 8px 60px rgba(60,140,255,0.22)",
          }}
        >
          Ponijeri
        </motion.h1>

        {/* Separator line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.75 }}
          className="w-12 sm:w-16 h-px my-5 sm:my-6 origin-center"
          style={{ background: "rgba(255,255,255,0.28)" }}
        />

        {/* Location line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="font-sans font-light tracking-[0.18em] uppercase mb-8 sm:mb-10"
          style={{ fontSize: "clamp(0.6rem, 1.4vw, 0.78rem)", color: "rgba(195,222,255,0.62)" }}
        >
          Kakanj · Bosna i Hercegovina · 1200m n.v.
        </motion.p>

        {/* CTA pill */}
        <motion.button
          onClick={() => scrollTo("showcase")}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="group flex items-center gap-3 rounded-full font-sans font-semibold uppercase transition-all duration-300"
          style={{
            fontSize: "clamp(0.6rem, 1.2vw, 0.72rem)",
            letterSpacing: "0.24em",
            padding: "13px 26px",
            background: "rgba(255,255,255,0.10)",
            border: "1px solid rgba(255,255,255,0.30)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            color: "rgba(255,255,255,0.88)",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = "rgba(255,255,255,0.18)";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.50)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = "rgba(255,255,255,0.10)";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.30)";
          }}
        >
          Istraži Resort
          <span
            className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
            style={{ background: "rgba(255,255,255,0.16)", border: "1px solid rgba(255,255,255,0.25)" }}
          >
            <FiArrowUpRight style={{ fontSize: "10px", color: "rgba(255,255,255,0.85)" }} />
          </span>
        </motion.button>
      </div>

      {/* ════════════════════════════════════════════════════════
          BOTTOM BAR — stats left · scroll centre · links right
          ════════════════════════════════════════════════════════ */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-10 flex items-end justify-between px-8 sm:px-14 xl:px-20 pb-7 sm:pb-9"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
      >
        {/* Stats */}
        <div className="hidden sm:flex items-center gap-6">
          {[
            { val: "5",     sub: "ski staza" },
            { val: "1200m", sub: "n.v."      },
            { val: "8",     sub: "apartmana" },
          ].map((s, i) => (
            <div key={i} className="flex flex-col gap-0.5">
              <span className="font-display italic font-light text-sm leading-none" style={{ color: "rgba(255,255,255,0.85)" }}>{s.val}</span>
              <span className="font-sans text-[8px] tracking-[0.26em] uppercase" style={{ color: "rgba(180,210,255,0.42)" }}>{s.sub}</span>
            </div>
          ))}
        </div>

        {/* Scroll cue */}
        <button
          onClick={() => scrollTo("about")}
          className="flex flex-col items-center gap-1.5 transition-colors duration-200 mx-auto sm:mx-0"
          style={{ color: "rgba(255,255,255,0.30)" }}
          onMouseEnter={e => e.currentTarget.style.color = "rgba(255,255,255,0.60)"}
          onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.30)"}
        >
          <span className="font-sans text-[7px] tracking-[0.45em] uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <FiArrowDown style={{ fontSize: "11px" }} />
          </motion.div>
        </button>

        {/* Quick links */}
        <div className="hidden sm:flex items-center gap-6">
          {["Skijanje", "Smještaj", "O nama"].map((l, i) => (
            <button
              key={i}
              onClick={() => scrollTo("about")}
              className="font-sans text-[9px] tracking-[0.26em] uppercase transition-colors duration-200"
              style={{ color: "rgba(195,222,255,0.42)" }}
              onMouseEnter={e => e.currentTarget.style.color = "rgba(255,255,255,0.70)"}
              onMouseLeave={e => e.currentTarget.style.color = "rgba(195,222,255,0.42)"}
            >
              {l}
            </button>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
