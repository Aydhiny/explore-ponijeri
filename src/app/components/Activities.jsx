"use client";
import React from "react";
import { FaSkiing, FaMonument } from "react-icons/fa";
import { IoRestaurant } from "react-icons/io5";
import { FaMountainSun } from "react-icons/fa6";
import { MdSportsHandball } from "react-icons/md";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const ACTIVITIES = [
  {
    icon: FaSkiing,
    label: "Skijanje",
    desc: "Staze za sve nivoe",
    href: "/skiing",
    color: "#0084FF",
  },
  {
    icon: IoRestaurant,
    label: "Restorani",
    desc: "Lokalna gastronomija",
    href: "/restaurants",
    color: "#0084FF",
  },
  {
    icon: FaMountainSun,
    label: "Izletišta",
    desc: "Planinski pohodi",
    href: "/about",
    color: "#0084FF",
  },
  {
    icon: FaMonument,
    label: "Priroda Tajan",
    desc: "Zaštićeni rezervat",
    href: "/about",
    color: "#0084FF",
  },
  {
    icon: MdSportsHandball,
    label: "Sport",
    desc: "Aktivnosti na otvorenom",
    href: "/about",
    color: "#0084FF",
  },
];

export default function Activities() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      className="relative py-16 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #002F5A 0%, #003d7a 40%, #0055a8 100%)",
      }}
    >
      {/* Ice texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(0,132,255,0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(79,168,255,0.1) 0%, transparent 50%)`,
        }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-white font-jakarta font-bold text-2xl sm:text-3xl tracking-wide uppercase">
            Što nudi Ponijeri?
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {ACTIVITIES.map(({ icon: Icon, label, desc, href }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={href}>
                <div
                  className="group flex flex-col items-center text-center p-5 rounded-2xl cursor-pointer transition-all duration-300 hover:-translate-y-2"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <div
                    className="mb-3 p-4 rounded-xl transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: "rgba(0,132,255,0.2)",
                      border: "1px solid rgba(0,132,255,0.3)",
                    }}
                  >
                    <Icon className="text-2xl sm:text-3xl text-blue-300" />
                  </div>
                  <p className="font-bold text-white text-sm sm:text-base leading-tight mb-1">
                    {label}
                  </p>
                  <p className="text-blue-200/60 text-xs leading-tight hidden sm:block">
                    {desc}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
