"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaSkiing, FaMonument } from "react-icons/fa";
import { IoRestaurant }  from "react-icons/io5";
import { FaMountainSun } from "react-icons/fa6";
import { MdSportsHandball } from "react-icons/md";
import Link from "next/link";

const ITEMS = [
  { icon: FaSkiing,        label: "Skijanje",    sub: "Staze za sve",       href: "/skiing"      },
  { icon: IoRestaurant,    label: "Restorani",   sub: "Lokalna kuhinja",     href: "/restaurants" },
  { icon: FaMountainSun,   label: "Izletišta",   sub: "Planinski pohodi",    href: "/about"       },
  { icon: FaMonument,      label: "Tajan",       sub: "Prirodni rezervat",   href: "/about"       },
  { icon: MdSportsHandball,label: "Sport",       sub: "Aktivnosti vani",     href: "/about"       },
];

export default function Activities() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    /* Dark band — gradient from white above → deep navy → white below */
    <section
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, #060d1a 12%, #060d1a 88%, #ffffff 100%)",
        paddingTop: "5rem",
        paddingBottom: "5rem",
      }}
    >
      <div ref={ref} className="max-w-6xl mx-auto px-6 sm:px-10">

        <motion.p
          className="text-center text-[11px] font-semibold tracking-[0.24em] uppercase text-brand-mid mb-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          Što nudi Ponijeri
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {ITEMS.map(({ icon: Icon, label, sub, href }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link href={href}>
                <div
                  className="group flex flex-col items-center text-center p-5 rounded-2xl cursor-pointer transition-all duration-300 hover:-translate-y-1.5"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div
                    className="mb-3 p-3.5 rounded-xl transition-all duration-300 group-hover:bg-brand/20"
                    style={{ background: "rgba(0,132,255,0.12)" }}
                  >
                    <Icon className="text-blue-300 text-xl sm:text-2xl" />
                  </div>
                  <p className="text-white font-semibold text-sm mb-0.5">{label}</p>
                  <p className="text-white/35 text-[11px] hidden sm:block">{sub}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
