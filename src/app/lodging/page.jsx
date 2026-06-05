"use client";
import Image from "next/image";
import apartman1 from "../images/apartman1.jpg";
import { FaMapMarkerAlt, FaStar, FaWifi, FaParking, FaSnowflake, FaArrowRight } from "react-icons/fa";
import { MdApartment } from "react-icons/md";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PageHero from "../components/PageHero";
import { MovingBorder } from "../components/ui/MovingBorder";

const LODGE_BG = "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=2400&q=88&fit=crop&auto=format";

const FEATURES = [
  { icon: FaSnowflake, label: "Grijane sobe",      desc: "Toplo i udobno" },
  { icon: FaParking,   label: "Besplatan parking", desc: "Za sve goste" },
  { icon: FaMapMarkerAlt, label: "Blizina staza",  desc: "Odmah uz skijalište" },
  { icon: FaWifi,      label: "Moderna oprema",    desc: "Sve što trebate" },
];

const STATS = [
  { val: "8",  label: "Apartmana"        },
  { val: "5★", label: "Ocjena"           },
  { val: "Ski-in", label: "Pristup"      },
  { val: "4",  label: "Sobe po aptm."    },
];

export default function Page() {
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true });

  return (
    <div className="min-h-screen">
      <PageHero
        label="Smještaj · Ponijeri"
        title="Apartmani Ponijeri"
        subtitle="Moderni smještaj u srcu planine — idealno za porodice, parove i grupe koje žele bijeg od gradske vreve."
        bgSrc={LODGE_BG}
        bgPosition="center 45%"
        height="min-h-[60vh]"
      />

      {/* Stats strip */}
      <div style={{ background: "#050e20", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto px-8 sm:px-14 xl:px-20 py-7 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {STATS.map(({ val, label }, i) => (
            <div key={label} className="flex flex-col gap-0.5">
              <span className="font-display italic font-light text-2xl leading-none"
                    style={{ color: "rgba(255,255,255,0.88)" }}>{val}</span>
              <span className="font-sans text-[9px] tracking-[0.28em] uppercase"
                    style={{ color: "rgba(160,200,255,0.42)" }}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div ref={ref} className="bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 xl:px-16 py-20 xl:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-20 items-start">

            {/* Left — image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]"
                   style={{ boxShadow: "0 24px 64px rgba(0,47,90,0.14)" }}>
                <Image
                  src={apartman1}
                  alt="Apartman Ponijeri"
                  fill
                  className="object-cover"
                />
                {/* Floating rating badge */}
                <div
                  className="absolute bottom-4 left-4 flex items-center gap-2 px-4 py-2.5 rounded-full"
                  style={{
                    background: "rgba(255,255,255,0.95)",
                    backdropFilter: "blur(12px)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
                  }}
                >
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-amber-400 text-xs" />
                  ))}
                  <span className="text-xs font-semibold text-gray-700 ml-1">5.0</span>
                </div>
              </div>
            </motion.div>

            {/* Right — details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <p className="text-[9px] tracking-[0.45em] uppercase font-semibold mb-3"
                   style={{ color: "#0084FF" }}>
                  O apartmanima
                </p>
                <h2 className="font-display italic font-light text-brand-dark leading-tight mb-4"
                    style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
                  Vaš dom na planini
                </h2>
                <p className="text-gray-500 leading-relaxed text-[15px]">
                  Smješteni u srcu Ponijera, apartmani nude idealno mjesto za uživanje
                  u prirodi i miru. Pogodni su za porodice, parove ili grupe prijatelja
                  koji žele bijeg od gradske vreve uz sve pogodnosti modernog smještaja.
                </p>
              </div>

              {/* Feature grid */}
              <div className="grid grid-cols-2 gap-3">
                {FEATURES.map(({ icon: Icon, label, desc }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 8 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.35 + i * 0.07 }}
                    className="flex items-start gap-3 p-4 rounded-xl transition-colors duration-200 hover:bg-blue-50/60 cursor-default"
                    style={{
                      background: "rgba(0,132,255,0.04)",
                      border: "1px solid rgba(0,132,255,0.10)",
                    }}
                  >
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: "rgba(0,132,255,0.10)" }}
                    >
                      <Icon className="text-brand text-xs" />
                    </div>
                    <div>
                      <p className="font-semibold text-brand-dark text-sm">{label}</p>
                      <p className="text-gray-400 text-xs mt-0.5">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <FaMapMarkerAlt className="text-brand text-xs flex-shrink-0" />
                <span>Ponijeri, Kakanj — Bosna i Hercegovina</span>
              </div>

              {/* CTA */}
              <MovingBorder
                duration={3800}
                containerClassName="rounded-2xl w-fit"
                className="px-7 py-4 rounded-2xl"
              >
                <a
                  href="https://www.booking.com/hotel/ba/apartmani-ponijeri.hr.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-semibold text-sm text-white/90"
                >
                  <MdApartment />
                  Rezervišite na Booking.com
                  <FaArrowRight className="text-xs opacity-60" />
                </a>
              </MovingBorder>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
