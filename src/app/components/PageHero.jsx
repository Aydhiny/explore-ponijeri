"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Spotlight } from "./ui/Spotlight";

/**
 * Shared hero for all sub-pages.
 * Props:
 *  label      — small eyebrow text
 *  title      — big Garamond italic headline
 *  subtitle   — paragraph below title
 *  bgSrc      — image src (string URL or imported asset). Defaults to ponijeri.jpg
 *  bgPosition — CSS object-position string, default "center 40%"
 *  height     — Tailwind min-h class, default "min-h-[58vh]"
 */

import defaultBg from "../images/ponijeri.jpg";

export default function PageHero({
  label,
  title,
  subtitle,
  bgSrc,
  bgPosition = "center 40%",
  height     = "min-h-[58vh]",
}) {
  const src = bgSrc ?? defaultBg;

  return (
    <section className={`relative w-full ${height} flex flex-col justify-end overflow-hidden`}>

      {/* ── Background photo ─────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <Image
          src={src}
          alt={title}
          fill
          priority
          quality={88}
          className="object-cover"
          style={{ objectPosition: bgPosition }}
        />
      </div>

      {/* ── Base overlay ─────────────────────────────────── */}
      <div className="absolute inset-0 z-[1]" style={{ background: "rgba(3,9,24,0.45)" }} />

      {/* ── Top darken + vignette ─────────────────────────── */}
      <div className="absolute inset-0 z-[2]" style={{
        background:
          "linear-gradient(180deg, rgba(3,9,24,0.30) 0%, transparent 40%, transparent 55%, rgba(3,9,24,0.68) 100%)",
      }} />
      <div className="absolute inset-0 z-[2]" style={{
        background:
          "radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(3,9,24,0.45) 100%)",
      }} />

      {/* ── Aceternity Spotlight ─────────────────────────── */}
      <Spotlight className="z-[3] -top-20 left-0" fill="#4488ff" />

      {/* ── Decorative circle ────────────────────────────── */}
      <div className="absolute inset-0 z-[3] flex items-center justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, delay: 0.2 }}
          style={{
            width:  "min(55vh, 55vw)",
            height: "min(55vh, 55vw)",
            border: "1px solid rgba(255,255,255,0.11)",
            borderRadius: "50%",
          }}
        />
      </div>

      {/* ── Content — bottom aligned ──────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-8 sm:px-14 xl:px-20 pb-12 sm:pb-16">

        {label && (
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans font-light text-[9px] tracking-[0.55em] uppercase mb-3"
            style={{ color: "rgba(190,220,255,0.65)" }}
          >
            {label}
          </motion.p>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-display italic font-light leading-[0.88] select-none"
          style={{
            fontSize: "clamp(3.4rem, 9vw, 8rem)",
            color: "rgba(255,255,255,0.94)",
            textShadow: "0 6px 50px rgba(60,140,255,0.20)",
          }}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="font-sans font-light mt-4 max-w-xl"
            style={{
              fontSize: "clamp(0.82rem, 1.5vw, 1rem)",
              lineHeight: 1.7,
              color: "rgba(190,218,255,0.58)",
              letterSpacing: "0.01em",
            }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
