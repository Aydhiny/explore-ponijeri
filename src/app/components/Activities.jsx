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
    sub: "Staze za sve nivoe",
    href: "/skiing",
    featured: true,
    desc: "Skijaški centar na 1200m nadmorske visine — moderne žičare, uređene staze i profesionalna škola skijanja za sve uzraste.",
  },
  { icon: IoRestaurant,     label: "Restorani",    sub: "Lokalna kuhinja",     href: "/restaurants", featured: false },
  { icon: FaMountainSun,    label: "Planinarenje", sub: "Planinski pohodi",    href: "/about",       featured: false },
  { icon: FaMonument,       label: "Tajan",        sub: "Prirodni rezervat",   href: "/about",       featured: false },
  { icon: MdSportsHandball, label: "Sport",        sub: "Aktivnosti vani",     href: "/about",       featured: false },
];

function ActivityCard({ icon: Icon, label, sub, href, featured, desc, delay, inView }) {
  const cardRef  = useRef(null);
  const [pos,     setPos]     = useState({ x: 0, y: 0 });
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
      className={cn(featured && "col-span-full")}
    >
      <Link href={href}>
        <div
          ref={cardRef}
          onMouseMove={handleMove}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={cn(
            "group relative overflow-hidden rounded-2xl cursor-pointer transition-transform duration-300 hover:-translate-y-1.5",
            featured ? "flex flex-col sm:flex-row items-start gap-6 p-7" : "flex flex-col items-center text-center p-6"
          )}
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {/* Aceternity mouse-tracking radial spotlight */}
          <div
            className="absolute pointer-events-none rounded-full"
            style={{
              width: 260,
              height: 260,
              left: pos.x - 130,
              top: pos.y - 130,
              background: "radial-gradient(circle, rgba(0,132,255,0.20) 0%, rgba(79,168,255,0.06) 50%, transparent 70%)",
              opacity: hovered ? 1 : 0,
              transition: "opacity 0.25s ease",
            }}
          />

          {/* Icon */}
          <div
            className={cn(
              "relative z-10 flex-shrink-0 rounded-xl transition-all duration-300 group-hover:scale-110",
              featured ? "p-4 mt-0.5" : "p-4 mb-4"
            )}
            style={{
              background: "rgba(0,132,255,0.14)",
              border: "1px solid rgba(0,132,255,0.22)",
              boxShadow: hovered ? "0 0 20px rgba(0,132,255,0.25)" : "none",
              transition: "box-shadow 0.3s ease",
            }}
          >
            <Icon className={cn("text-blue-300", featured ? "text-3xl" : "text-2xl")} />
          </div>

          {/* Text */}
          <div className={cn("relative z-10 flex-1", featured ? "text-left" : "text-center")}>
            <div className={cn("flex items-center gap-2", !featured && "justify-center")}>
              <p className="text-white font-semibold text-sm leading-none mb-1">{label}</p>
              {featured && (
                <FiArrowUpRight
                  className="text-white/30 group-hover:text-brand-mid group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 text-base"
                />
              )}
            </div>
            <p className="text-white/40 text-[11px] leading-relaxed">
              {featured ? desc : sub}
            </p>
          </div>
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
        background: "linear-gradient(180deg, #ffffff 0%, #060d1a 8%, #060d1a 92%, #ffffff 100%)",
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

        {/* Bento-style grid: featured + 4 equal */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <ActivityCard {...ITEMS[0]} delay={0.1}  inView={inView} />
          {ITEMS.slice(1).map((item, i) => (
            <ActivityCard key={item.label} {...item} delay={0.18 + i * 0.07} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
