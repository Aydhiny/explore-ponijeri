"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AboutImage  from "../images/ponijeri-about.jpg";
import AboutImage2 from "../images/ponijeri-about2.jpg";

const STATS = [
  { value: "1200m", label: "Nadmorska visina" },
  { value: "20 km", label: "Od Kaknja"        },
  { value: "1297m", label: "Vrh Tajan"        },
];

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true });

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 sm:py-36 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 xl:px-16">

        {/* Section marker — editorial, not the clichéd eyebrow-with-line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="h-px flex-1 max-w-[3rem] bg-brand/20" />
          <span className="text-[10px] tracking-[0.32em] font-bold uppercase text-gray-300">
            01 — Destinacija
          </span>
        </motion.div>

        {/* Massive heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-bold italic text-brand-dark leading-[0.88] mb-16"
          style={{ fontSize: "clamp(3.5rem, 9vw, 7.5rem)" }}
        >
          Planinsko<br />
          <span className="text-gradient not-italic">Izletište</span>
        </motion.h2>

        {/* 5-col grid: text (2) + images (3) */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 xl:gap-20 items-start">

          {/* ── Text column ─────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 space-y-6"
          >
            <p className="text-brand-dark/75 font-semibold text-[1.05rem] leading-relaxed">
              Ponijeri su planinsko izletište na nadmorskoj visini od 1200 metara,
              udaljeno oko 20 km od centra Kaknja — prirodna zračna banja i zimski
              dragulj Bosne.
            </p>
            <p className="text-gray-400 leading-relaxed text-[15px]">
              Izletište se nalazi u sastavu masiva Ravne Planine koja se pruža između
              općina Kakanj, Zavidovići, Vareš i Zenica. Kraški fenomeni — polja,
              uvale, ponori, pećine i jame — čine ga geološkim biserjem.
            </p>
            <p className="text-gray-400 leading-relaxed text-[15px]">
              Minerali kvarca, jaspisa, olivina, opala i hematita svjedoče o
              bogatoj geološkoj prošlosti. Sastavni je dio Spomenika prirode Tajan.
            </p>

            {/* Stats — no boxes, just big numbers */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
              {STATS.map(({ value, label }) => (
                <div key={label}>
                  <div className="font-display font-bold text-brand text-2xl leading-none mb-1">
                    {value}
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-gray-400">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Images column — overlapping editorial treatment ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 relative"
          >
            {/* Primary large image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
              <Image
                src={AboutImage}
                alt="Ponijeri ljeto"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>

            {/* Secondary — overlapping bottom-right corner */}
            <div
              className="absolute -bottom-8 -right-4 sm:-right-8 w-2/5 rounded-xl overflow-hidden shadow-2xl"
              style={{ border: "4px solid white", aspectRatio: "1" }}
            >
              <Image
                src={AboutImage2}
                alt="Ponijeri priroda"
                fill
                sizes="25vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
