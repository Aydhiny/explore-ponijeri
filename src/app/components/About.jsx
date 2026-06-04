"use client";
import Image from "next/image";
import React from "react";
import AboutImage from "../images/ponijeri-about.jpg";
import AboutImage2 from "../images/ponijeri-about2.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function FadeIn({ children, delay = 0, className = "" }) {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="relative section-padding overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,132,255,0.06) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <FadeIn className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 max-w-[80px]" style={{ background: "linear-gradient(90deg, rgba(0,132,255,0.4), transparent)" }} />
            <span className="text-main-color-lighter-green text-sm font-semibold uppercase tracking-widest">O nama</span>
          </div>
          <h2 className="font-playwrite-hr text-4xl sm:text-5xl md:text-6xl font-bold text-main-color-dark-green leading-tight">
            Planinsko <br className="hidden sm:block" />
            <span style={{
              background: "linear-gradient(135deg, #0084FF, #4fa8ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>Izletište</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-20 items-start">
          {/* Text */}
          <div className="space-y-6">
            <FadeIn delay={0.1}>
              <div
                className="rounded-2xl p-6"
                style={{
                  background: "rgba(0,132,255,0.06)",
                  border: "1px solid rgba(0,132,255,0.12)",
                }}
              >
                <p className="text-main-color-dark-green font-semibold text-lg leading-relaxed">
                  Ponijeri su planinsko izletište na nadmorskoj visini od 1200 metara,
                  udaljeno oko 20 km od centra Kaknja. Zbog nadmorske visine ujedno je i
                  zračna banja.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Izletište Ponijeri se nalaze u sastavu masiva Ravne Planine koja se
                pruža između općina Kakanj, Zavidovići, Vareš i Zenica s najvećim
                vrhom Tajan na nadmorskoj visini od 1297 metara.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Geološki, područje Ponijera je veoma zanimljivo. Centralni dio
                izgrađen je od trijaskih vapnanaca koji su razvili kraške formacije
                poput malog kraškog polja, 3 veće kraške uvale, mnogobrojna ponore,
                pećine i jame.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Ovdje se mogu pronaći minerali poput kvarca, jaspisa, limonita,
                serpentina, olivina, opala, hematita, kalcita, gipsa i liksuna.
              </p>
            </FadeIn>

            {/* Stats */}
            <FadeIn delay={0.5}>
              <div className="grid grid-cols-3 gap-4 pt-4">
                {[
                  { value: "1200m", label: "Nadmorska visina" },
                  { value: "20km", label: "Od Kaknja" },
                  { value: "1297m", label: "Vrh Tajan" },
                ].map(({ value, label }) => (
                  <div
                    key={label}
                    className="text-center p-4 rounded-xl glass-card"
                  >
                    <div className="text-xl sm:text-2xl font-bold text-main-color-lighter-green mb-1">
                      {value}
                    </div>
                    <div className="text-xs text-gray-500 leading-tight">{label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            <FadeIn delay={0.2} className="col-span-1">
              <div className="tilt-card rounded-2xl overflow-hidden"
                style={{ border: "2px solid rgba(0,132,255,0.15)" }}>
                <Image
                  alt="Ponijeri ljeto"
                  src={AboutImage}
                  className="w-full h-full object-cover"
                  height={400}
                  width={400}
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.35} className="col-span-1 mt-8">
              <div className="tilt-card rounded-2xl overflow-hidden"
                style={{ border: "2px solid rgba(0,132,255,0.15)" }}>
                <Image
                  alt="Ponijeri priroda"
                  src={AboutImage2}
                  className="w-full h-full object-cover"
                  height={400}
                  width={400}
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
