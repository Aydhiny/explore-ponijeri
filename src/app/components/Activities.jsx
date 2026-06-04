"use client";
import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaSkiing, FaMonument } from "react-icons/fa";
import { IoRestaurant } from "react-icons/io5";
import { FaMountainSun } from "react-icons/fa6";
import { MdSportsHandball } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import { cn } from "@/lib/utils";

const ITEMS = [
  {
    icon: FaSkiing,
    label: "Skijanje",
    sub: "Ski centar · 1200m n.v.",
    href: "/skiing",
    featured: true,
    num: "01",
    accent: "#0084FF",
    desc: "Skijaški centar na 1200m nadmorske visine — moderne žičare, uređene staze i profesionalna škola skijanja za sve uzraste.",
  },
  { icon: IoRestaurant,     label: "Restorani",    sub: "Lokalna kuhinja",    href: "/restaurants", num: "02", accent: "#FF7A3D" },
  { icon: FaMountainSun,    label: "Planinarenje", sub: "Planinski pohodi",   href: "/about",       num: "03", accent: "#34D399" },
  { icon: FaMonument,       label: "Tajan",        sub: "Prirodni rezervat",  href: "/about",       num: "04", accent: "#A78BFA" },
  { icon: MdSportsHandball, label: "Sport",        sub: "Aktivnosti vani",    href: "/about",       num: "05", accent: "#FBBF24" },
];

function FeaturedCard({ icon: Icon, label, sub, href, accent, num, desc, delay, inView }) {
  const cardRef = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMove = useCallback((e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay }}
      className="col-span-full"
    >
      <Link href={href}>
        <div
          ref={cardRef}
          onMouseMove={handleMove}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="group relative overflow-hidden rounded-2xl cursor-pointer transition-transform duration-300 hover:-translate-y-1"
          style={{
            background: "linear-gradient(135deg, #0a1628 0%, #0d1f3c 60%, #081424 100%)",
            border: `1px solid rgba(0,132,255,0.18)`,
            boxShadow: hovered ? `0 0 40px rgba(0,132,255,0.12)` : "none",
            transition: "box-shadow 0.4s ease, transform 0.3s ease",
          }}
        >
          {/* Mouse-tracking spotlight */}
          <div
            className="absolute pointer-events-none rounded-full"
            style={{
              width: 420,
              height: 420,
              left: pos.x - 210,
              top: pos.y - 210,
              background: `radial-gradient(circle, rgba(0,132,255,0.13) 0%, rgba(0,84,200,0.05) 50%, transparent 70%)`,
              opacity: hovered ? 1 : 0,
              transition: "opacity 0.3s ease",
            }}
          />

          {/* Big decorative number */}
          <span
            className="absolute right-6 top-1/2 -translate-y-1/2 font-display font-bold select-none pointer-events-none"
            style={{
              fontSize: "clamp(5rem, 10vw, 8rem)",
              color: "rgba(0,132,255,0.07)",
              lineHeight: 1,
            }}
          >
            {num}
          </span>

          <div className="relative z-10 flex flex-col sm:flex-row items-start gap-6 p-8 sm:p-10">
            {/* Icon */}
            <div
              className="flex-shrink-0 rounded-2xl p-5 transition-all duration-300 group-hover:scale-105"
              style={{
                background: `rgba(0,132,255,0.15)`,
                border: `1px solid rgba(0,132,255,0.25)`,
                boxShadow: hovered ? `0 0 24px rgba(0,132,255,0.3)` : "none",
                transition: "box-shadow 0.3s ease",
              }}
            >
              <Icon className="text-4xl" style={{ color: accent }} />
            </div>

            {/* Text */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] tracking-[0.3em] font-bold uppercase" style={{ color: `${accent}99` }}>
                  {sub}
                </span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-white font-display font-bold italic" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)" }}>
                  {label}
                </h3>
                <FiArrowUpRight
                  className="text-white/20 group-hover:text-brand-mid group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                  style={{ fontSize: "1.4rem" }}
                />
              </div>
              <p className="text-white/45 text-sm leading-relaxed max-w-lg">{desc}</p>
            </div>
          </div>

          {/* Bottom accent line */}
          <div
            className="absolute bottom-0 left-0 right-0 h-px"
            style={{
              background: `linear-gradient(to right, transparent, ${accent}50, transparent)`,
              opacity: hovered ? 1 : 0.4,
              transition: "opacity 0.3s ease",
            }}
          />
        </div>
      </Link>
    </motion.div>
  );
}

function SmallCard({ icon: Icon, label, sub, href, accent, num, delay, inView }) {
  const cardRef = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMove = useCallback((e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <Link href={href}>
        <div
          ref={cardRef}
          onMouseMove={handleMove}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="group relative overflow-hidden rounded-2xl cursor-pointer transition-transform duration-300 hover:-translate-y-1.5"
          style={{
            background: "linear-gradient(145deg, #0a1628 0%, #080f1e 100%)",
            border: `1px solid ${hovered ? `${accent}35` : "rgba(255,255,255,0.06)"}`,
            boxShadow: hovered ? `0 4px 30px ${accent}18` : "none",
            transition: "border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",
            padding: "1.5rem",
          }}
        >
          {/* Mouse spotlight */}
          <div
            className="absolute pointer-events-none rounded-full"
            style={{
              width: 200,
              height: 200,
              left: pos.x - 100,
              top: pos.y - 100,
              background: `radial-gradient(circle, ${accent}22 0%, ${accent}08 50%, transparent 70%)`,
              opacity: hovered ? 1 : 0,
              transition: "opacity 0.25s ease",
            }}
          />

          {/* Number */}
          <span
            className="absolute top-3 right-4 font-display font-bold select-none"
            style={{ fontSize: "0.65rem", letterSpacing: "0.2em", color: `${accent}40` }}
          >
            {num}
          </span>

          {/* Icon */}
          <div
            className="relative z-10 inline-flex rounded-xl p-3.5 mb-4 transition-all duration-300 group-hover:scale-110"
            style={{
              background: `${accent}18`,
              border: `1px solid ${accent}28`,
              boxShadow: hovered ? `0 0 16px ${accent}30` : "none",
              transition: "box-shadow 0.3s ease",
            }}
          >
            <Icon style={{ fontSize: "1.4rem", color: accent }} />
          </div>

          {/* Text */}
          <div className="relative z-10">
            <p className="text-white font-semibold text-sm leading-snug mb-1">{label}</p>
            <p className="text-white/35 text-[11px] leading-relaxed">{sub}</p>
          </div>

          {/* Bottom accent */}
          <div
            className="absolute bottom-0 left-0 right-0 h-px"
            style={{
              background: `linear-gradient(to right, transparent, ${accent}40, transparent)`,
              opacity: hovered ? 1 : 0,
              transition: "opacity 0.3s ease",
            }}
          />
        </div>
      </Link>
    </motion.div>
  );
}

export default function Activities() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, #060d1a 6%, #060d1a 94%, #ffffff 100%)",
        paddingTop: "5rem",
        paddingBottom: "5rem",
      }}
    >
      <div ref={ref} className="max-w-6xl mx-auto px-6 sm:px-10">

        <motion.p
          className="text-center text-[10px] font-semibold tracking-[0.3em] uppercase text-brand-mid mb-3"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          Što nudi Ponijeri
        </motion.p>

        <motion.h2
          className="text-center font-display italic text-white font-bold mb-10 leading-tight"
          style={{ fontSize: "clamp(1.9rem, 4vw, 3.2rem)" }}
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1 }}
        >
          Aktivnosti &{" "}
          <span className="text-gradient not-italic">Doživljaji</span>
        </motion.h2>

        {/* Featured card + 4 small cards */}
        <div className="flex flex-col gap-3">
          <FeaturedCard {...ITEMS[0]} delay={0.1} inView={inView} />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {ITEMS.slice(1).map((item, i) => (
              <SmallCard key={item.label} {...item} delay={0.2 + i * 0.08} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
