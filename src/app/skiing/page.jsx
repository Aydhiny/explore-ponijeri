"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SkiSchoolInfo from "../components/SkiSchoolInfo";
import PageHero from "../components/PageHero";
import { FaMoon, FaSun, FaSkiing } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

// Unsplash ski slopes 4K
const SKI_BG = "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=2400&q=88&fit=crop&auto=format";

const SCHEDULE = [
  { date: "15.12.",  day: "Srijeda",  type: "Noćno skijanje",     icon: FaMoon, accent: "#818cf8" },
  { date: "16.12.",  day: "Četvrtak", type: "Noćno skijanje",     icon: FaMoon, accent: "#818cf8" },
  { date: "17.12.",  day: "Petak",    type: "Noćno skijanje",     icon: FaMoon, accent: "#818cf8" },
  { date: "18.12.",  day: "Subota",   type: "Dnevno i noćno",     icon: FaSun,  accent: "#fbbf24" },
  { date: "19.12.",  day: "Nedjelja", type: "Dnevno skijanje",    icon: FaSun,  accent: "#fbbf24" },
];

const FACTS = [
  { val: "5",     label: "Ski staza"       },
  { val: "1200m", label: "Nadmorska visina" },
  { val: "2 km",  label: "Najduža staza"   },
  { val: "4",     label: "Skijaške žičare"  },
];

function ScheduleCard({ date, day, type, icon: Icon, accent, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="group relative rounded-2xl p-5 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 cursor-default"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: `1px solid rgba(255,255,255,0.07)`,
      }}
    >
      {/* Accent glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl"
        style={{ background: `radial-gradient(ellipse at 50% 120%, ${accent}18 0%, transparent 65%)` }}
      />
      {/* Top accent line */}
      <div
        className="absolute top-0 left-6 right-6 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${accent}60, transparent)` }}
      />

      <div className="relative z-10 flex items-start justify-between">
        <div>
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase mb-1.5"
             style={{ color: "rgba(180,210,255,0.40)" }}>
            {date} — {day}
          </p>
          <p className="font-display italic font-light text-xl leading-tight"
             style={{ color: "rgba(255,255,255,0.90)" }}>
            {type}
          </p>
        </div>
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: `${accent}18`, border: `1px solid ${accent}30` }}
        >
          <Icon style={{ color: accent, fontSize: "14px" }} />
        </div>
      </div>
    </motion.div>
  );
}

export default function Skijanje() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [factsRef, factsInView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <PageHero
        label="Ski sezona 2024 / 2025"
        title="Skijalište Ponijeri"
        subtitle="Moderna žičara, uređene staze i profesionalna ski škola na 1200m nadmorske visine — za sve uzraste i nivoe."
        bgSrc={SKI_BG}
        bgPosition="center 55%"
        height="min-h-[62vh]"
      />

      {/* ── Facts strip ─────────────────────────────────────────────── */}
      <div
        ref={factsRef}
        className="border-b"
        style={{ background: "#050e20", borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-7xl mx-auto px-8 sm:px-14 xl:px-20 py-7 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {FACTS.map(({ val, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 10 }}
              animate={factsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col gap-0.5"
            >
              <span className="font-display italic font-light text-2xl leading-none"
                    style={{ color: "rgba(255,255,255,0.88)" }}>{val}</span>
              <span className="font-sans text-[9px] tracking-[0.28em] uppercase"
                    style={{ color: "rgba(160,200,255,0.42)" }}>{label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Schedule ─────────────────────────────────────────────────── */}
      <section
        ref={ref}
        className="relative py-20 xl:py-28"
        style={{ background: "linear-gradient(180deg, #050e20 0%, #030a18 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-8 sm:px-14 xl:px-20">

          {/* Section header */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="font-sans text-[9px] tracking-[0.55em] uppercase mb-3"
               style={{ color: "rgba(100,160,255,0.65)" }}>
              Sedmični raspored
            </p>
            <h2
              className="font-display italic font-light leading-tight"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", color: "rgba(255,255,255,0.92)" }}
            >
              Raspored Rada Ski Lifta
            </h2>
          </motion.div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-12">
            {SCHEDULE.map((item, i) => (
              <ScheduleCard key={item.date} {...item} index={i} inView={inView} />
            ))}
          </div>

          {/* Glass table */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-2xl overflow-hidden max-w-2xl"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="px-6 py-4 flex items-center gap-3"
                 style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              <FaSkiing style={{ color: "#4fa8ff", fontSize: "13px" }} />
              <span className="font-sans font-semibold text-xs tracking-wider text-white/70 uppercase">
                Pregled rasporeda
              </span>
            </div>
            <table className="w-full text-left text-sm">
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <th className="px-6 py-3 text-[10px] tracking-[0.3em] uppercase font-semibold"
                      style={{ color: "#4fa8ff" }}>Datum</th>
                  <th className="px-6 py-3 text-[10px] tracking-[0.3em] uppercase font-semibold"
                      style={{ color: "#4fa8ff" }}>Vrsta skijanja</th>
                </tr>
              </thead>
              <tbody>
                {SCHEDULE.map(({ date, day, type, accent }, i) => (
                  <tr
                    key={date}
                    style={{ borderBottom: i < SCHEDULE.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none" }}
                  >
                    <td className="px-6 py-3.5 font-sans text-sm"
                        style={{ color: "rgba(200,220,255,0.55)" }}>{date} {day}</td>
                    <td className="px-6 py-3.5 font-sans font-medium text-sm"
                        style={{ color: accent }}>{type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Ski school section */}
      <SkiSchoolInfo />
    </div>
  );
}
