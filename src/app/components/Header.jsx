"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import BG    from "../images/ponijeri.jpg";
import opcina from "../images/opcina-kakanj.png";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import { MovingBorder } from "./ui/MovingBorder";
import { Spotlight }    from "./ui/Spotlight";

// ─── Pure-CSS snowflakes via globals.css .snowflake-symbol ────────────────────
const SNOW = Array.from({ length: 30 }, (_, i) => ({
  left:     `${((i / 30) * 100 + (i % 5) * 2.2).toFixed(1)}%`,
  size:     `${(0.48 + (i % 6) * 0.13).toFixed(2)}rem`,
  duration: `${(10 + (i * 2.47) % 13).toFixed(1)}s`,
  delay:    `-${((i * 3.13) % 22).toFixed(1)}s`,
  opacity:  +(0.25 + (i % 5) * 0.07).toFixed(2),
  drift:    `${(i % 2 === 0 ? 1 : -1) * (14 + (i * 7) % 24)}px`,
  rotation: `${180 + i * 37}deg`,
}));

const TAGLINES = ["Planina.", "Priroda.", "Avangarda."];

export default function Header() {
  const [tagIdx, setTagIdx] = useState(0);
  const bgRef   = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const id = setInterval(() => setTagIdx(i => (i + 1) % TAGLINES.length), 3200);
    return () => clearInterval(id);
  }, []);

  // Two-layer mouse parallax — bg moves less, text moves more → depth
  useEffect(() => {
    const h = (e) => {
      const nx = e.clientX / window.innerWidth  - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;
      if (bgRef.current)
        bgRef.current.style.transform = `scale(1.06) translate(${nx * -9}px, ${ny * -6}px)`;
      if (textRef.current)
        textRef.current.style.transform = `translate(${nx * -16}px, ${ny * -8}px)`;
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

      {/* ── Photography ───────────────────────────────────────────── */}
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
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* ── Cinematic overlays ────────────────────────────────────── */}
      {/* Darken top & bottom while letting the mountain layers breathe */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(180deg, rgba(3,10,28,0.82) 0%, rgba(3,10,28,0.42) 36%, rgba(3,10,28,0.38) 64%, rgba(3,10,28,0.74) 90%, rgba(3,10,28,0.88) 100%)",
        }}
      />
      {/* Blue cast to harmonise photo with brand */}
      <div
        className="absolute inset-0 z-[2]"
        style={{ background: "rgba(8,28,80,0.22)", mixBlendMode: "color" }}
      />

      {/* ── Aceternity spotlight sweep (once on load) ─────────────── */}
      <Spotlight
        className="z-[3] -top-24 -left-10 lg:left-8"
        fill="#3d8fff"
      />

      {/* ── CSS snowflakes (pure CSS, zero WebGL) ────────────────── */}
      <div className="absolute inset-0 z-[4] overflow-hidden pointer-events-none" aria-hidden="true">
        {SNOW.map((f, i) => (
          <span
            key={i}
            className="snowflake-symbol"
            style={{
              left: f.left,
              "--snow-size":     f.size,
              "--snow-duration": f.duration,
              "--snow-delay":    f.delay,
              "--snow-opacity":  f.opacity,
              "--snow-drift":    f.drift,
              "--snow-rotation": f.rotation,
            }}
          >
            ❄
          </span>
        ))}
      </div>

      {/* ── Content overlay ──────────────────────────────────────── */}
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
            <span className="h-px w-8" style={{ background: "rgba(255,255,255,0.25)" }} />
            <span className="text-[10px] tracking-[0.35em] font-bold uppercase text-white/42">
              Kakanj · Bosna i Hercegovina · 1200m
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-display leading-[0.85] mb-8 select-none"
            style={{ fontSize: "clamp(4.5rem, 12vw, 10.5rem)" }}
          >
            {/* Ghost "Explore" */}
            <span
              className="block font-light italic"
              style={{ color: "rgba(255,255,255,0.13)" }}
            >
              Explore
            </span>
            {/* "Ponijeri" — strong vertical blue gradient */}
            <span
              className="block font-bold not-italic"
              style={{
                background:
                  "linear-gradient(180deg, #f0f8ff 0%, #b8dcff 20%, #4dabff 50%, #1055dd 78%, #002299 100%)",
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
                className="text-[11px] tracking-[0.3em] uppercase font-medium text-white/35"
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
            <MovingBorder
              duration={3400}
              containerClassName="rounded-full"
              className="px-8 py-3.5 rounded-full"
            >
              <button
                onClick={() => scrollTo("showcase")}
                className="text-[11px] font-bold tracking-[0.24em] uppercase whitespace-nowrap text-white/85"
              >
                Istraži Resort
              </button>
            </MovingBorder>

            <button
              onClick={() => scrollTo("about")}
              className="group flex items-center gap-2 text-[11px] font-medium tracking-[0.22em] uppercase text-white/32 hover:text-white/58 transition-colors duration-200"
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
            className="flex items-center gap-7"
            style={{
              borderTop: "1px solid rgba(255,255,255,0.10)",
              paddingTop: "1.4rem",
              maxWidth: "460px",
            }}
          >
            {[
              { val: "5",     sub: "ski staza"  },
              { val: "1200m", sub: "n.v."       },
              { val: "8",     sub: "apartmana"  },
              { val: "Noćno", sub: "skijanje"   },
            ].map((s, i) => (
              <div key={i} className="flex flex-col gap-0.5">
                <span className="font-display font-bold text-base leading-none text-white/80">
                  {s.val}
                </span>
                <span className="text-[8px] tracking-[0.24em] uppercase text-white/26">
                  {s.sub}
                </span>
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
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/22 hover:text-white/48 transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <span className="text-[8px] tracking-[0.42em] uppercase font-medium">Scroll</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <FiArrowDown className="text-xs" />
        </motion.div>
      </motion.button>

      {/* ── Fade hero bottom into next (white) section ───────────── */}
      <div
        className="absolute bottom-0 inset-x-0 z-[3] pointer-events-none"
        style={{ height: "130px", background: "linear-gradient(to bottom, transparent, white)" }}
      />
    </section>
  );
}
