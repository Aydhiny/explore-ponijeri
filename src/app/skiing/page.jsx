"use client";
import { motion } from "framer-motion";
import SkiSchoolInfo from "../components/SkiSchoolInfo";
import { FaSkiing, FaClock, FaMoon, FaSun } from "react-icons/fa";

const backgroundImage = new URL("../images/ponijeri.jpg", import.meta.url);

const SCHEDULE = [
  { date: "15.12. (SRIJEDA)", type: "NOĆNO SKIJANJE", icon: FaMoon, color: "#818cf8" },
  { date: "16.12. (ČETVRTAK)", type: "NOĆNO SKIJANJE", icon: FaMoon, color: "#818cf8" },
  { date: "17.12. (PETAK)", type: "NOĆNO SKIJANJE", icon: FaMoon, color: "#818cf8" },
  { date: "18.12. (SUBOTA)", type: "DNEVNO I NOĆNO", icon: FaSun, color: "#fbbf24" },
  { date: "19.12. (NEDJELJA)", type: "DNEVNO SKIJANJE", icon: FaSun, color: "#fbbf24" },
];

export default function Skijanje() {
  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <div
        className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        <div className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at center, rgba(0,132,255,0.08) 0%, transparent 70%)" }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 text-center py-32">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium text-blue-200"
              style={{ background: "rgba(0,132,255,0.2)", border: "1px solid rgba(0,132,255,0.35)", backdropFilter: "blur(8px)" }}
            >
              <FaSkiing className="text-xs" />
              Ski sezona 2024/2025
            </span>
          </motion.div>

          <motion.h1
            className="font-playwrite-hr text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Raspored Rada{" "}
            <span style={{
              background: "linear-gradient(135deg, #0084FF, #4fa8ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Ski Lifta
            </span>
          </motion.h1>

          <motion.p
            className="text-white/70 text-lg mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Obavezno provjerite radno vrijeme skijališta Ponijeri!
          </motion.p>

          {/* Schedule cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            {SCHEDULE.map(({ date, type, icon: Icon, color }, i) => (
              <div
                key={date}
                className="rounded-2xl p-5 text-left transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  backdropFilter: "blur(12px)",
                  boxShadow: `0 0 20px ${color}15`,
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div
                    className="p-2 rounded-xl"
                    style={{ background: `${color}20`, border: `1px solid ${color}30` }}
                  >
                    <Icon style={{ color }} className="text-sm" />
                  </div>
                  <FaClock className="text-white/20 text-sm mt-1" />
                </div>
                <p className="text-white/50 text-xs font-medium mb-1 uppercase tracking-wide">{date}</p>
                <p className="text-white font-bold text-sm" style={{ color }}>{type}</p>
              </div>
            ))}
          </motion.div>

          {/* Schedule table (glass) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="rounded-2xl overflow-hidden mx-auto max-w-2xl"
            style={{
              background: "rgba(0,20,60,0.7)",
              border: "1px solid rgba(0,132,255,0.2)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="px-6 py-4 border-b border-white/10">
              <h3 className="text-white font-semibold text-sm flex items-center gap-2">
                <FaSkiing className="text-main-color-lighter-green" />
                Sedmični raspored
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                    <th className="px-6 py-3 text-main-color-lighter-green font-semibold uppercase text-xs tracking-wide">Datum</th>
                    <th className="px-6 py-3 text-main-color-lighter-green font-semibold uppercase text-xs tracking-wide">Vrsta skijanja</th>
                  </tr>
                </thead>
                <tbody>
                  {SCHEDULE.map(({ date, type }, i) => (
                    <tr
                      key={date}
                      style={{ borderBottom: i < SCHEDULE.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}
                    >
                      <td className="px-6 py-3.5 text-white/70">{date}</td>
                      <td className="px-6 py-3.5 text-white font-medium">{type}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>

      <SkiSchoolInfo />
    </div>
  );
}
