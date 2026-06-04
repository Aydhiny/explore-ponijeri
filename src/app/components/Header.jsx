"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import opcina from "../images/opcina-kakanj.png";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";

const backgroundImage = new URL("../images/ponijeri.jpg", import.meta.url);

const SNOWFLAKE_COUNT = 30;

function generateSnowflakes() {
  return Array.from({ length: SNOWFLAKE_COUNT }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 6 + 3,
    duration: Math.random() * 8 + 6,
    delay: Math.random() * 8,
    drift: Math.random() * 40 - 20,
    opacity: Math.random() * 0.6 + 0.4,
  }));
}

export default function Header() {
  const [snowflakes] = useState(generateSnowflakes);
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlightX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const spotlightY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  useEffect(() => {
    setMounted(true);
    const el = heroRef.current;
    if (!el) return;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      mouseX.set(((e.clientX - rect.left) / rect.width) * 100);
      mouseY.set(((e.clientY - rect.top) / rect.height) * 100);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      ref={heroRef}
      className="w-full h-screen relative bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark overlay with depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 z-[1]" />

      {/* Spotlight */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{
          background: mounted
            ? `radial-gradient(500px circle at ${spotlightX.get()}% ${spotlightY.get()}%, rgba(0,132,255,0.12), transparent 60%)`
            : "none",
        }}
      />

      {/* Snowflakes */}
      {mounted && snowflakes.map((sf) => (
        <div
          key={sf.id}
          className="snowflake absolute z-[3]"
          style={{
            left: sf.left,
            width: sf.size,
            height: sf.size,
            opacity: sf.opacity,
            animationDuration: `${sf.duration}s`,
            animationDelay: `${sf.delay}s`,
          }}
        />
      ))}

      {/* Ice crystal overlay at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-[4] pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(207,237,255,0.25) 0%, transparent 100%)",
        }}
      />

      {/* Main Content */}
      <div className="absolute inset-0 z-[5] flex flex-col items-center justify-center px-4 sm:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-6"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium text-white/90"
            style={{
              background: "rgba(0,132,255,0.2)",
              border: "1px solid rgba(0,132,255,0.4)",
              backdropFilter: "blur(12px)",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Dobrodošli u Ponijere
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          className="font-playwrite-hr font-bold leading-none mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span
            className="block text-5xl sm:text-7xl md:text-8xl xl:text-9xl"
            style={{
              background: "linear-gradient(135deg, #ffffff 30%, #c5e8ff 60%, #7ec8ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 30px rgba(0,132,255,0.5))",
            }}
          >
            EXPLORE
          </span>
          <span
            className="block text-5xl sm:text-7xl md:text-8xl xl:text-9xl"
            style={{
              background: "linear-gradient(135deg, #0084FF 0%, #4fa8ff 50%, #002F5A 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            PONIJERI
          </span>
        </motion.h1>

        {/* Separator */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="h-px w-40 sm:w-64 mb-6"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(0,132,255,0.7), rgba(255,255,255,0.5), transparent)",
          }}
        />

        {/* Subtitle */}
        <motion.p
          className="text-white/80 text-base sm:text-lg md:text-xl max-w-lg mb-10 font-light tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.8 }}
        >
          Planinsko izletište na 1200m nadmorske visine — gdje priroda susreće avanturu
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <button
            onClick={() => scrollToSection("showcase")}
            className="group relative px-8 py-3.5 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #0084FF, #005fcc)",
              boxShadow: "0 0 30px rgba(0,132,255,0.4), 0 4px 20px rgba(0,0,0,0.3)",
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Obilazak
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </span>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          <button
            onClick={() => scrollToSection("about")}
            className="group px-8 py-3.5 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105"
            style={{
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.3)",
              backdropFilter: "blur(12px)",
            }}
          >
            <span className="flex items-center gap-2">
              O nama
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </span>
          </button>
        </motion.div>

        {/* Logo badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="animate-float"
        >
          <Image
            alt="Općina Kakanj"
            src={opcina}
            className="cursor-pointer transition-all duration-300 hover:scale-105"
            height={120}
            width={120}
            style={{
              borderRadius: "50%",
              padding: "12px",
              background: "rgba(207, 237, 255, 0.25)",
              backdropFilter: "blur(16px)",
              border: "2px solid rgba(0,132,255,0.3)",
              boxShadow: "0 0 30px rgba(0,132,255,0.25)",
            }}
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[5] flex flex-col items-center gap-2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        onClick={() => scrollToSection("about")}
      >
        <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <FaChevronDown className="text-white/50 text-sm" />
        </motion.div>
      </motion.div>
    </div>
  );
}
