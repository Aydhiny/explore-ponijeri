"use client";
import Image from "next/image";
import Medena from "../images/medena.jpeg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

const FEATURES = [
  { num: "10",  label: "Apartmana"         },
  { num: "↯",   label: "Lokalna kuhinja"   },
  { num: "★",   label: "Tradicionalno"     },
];

export default function Restaurant() {
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true });

  return (
    <section
      ref={ref}
      className="py-24 sm:py-32 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 xl:px-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* ── Text (left) ───────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-brand/30" />
              <span className="text-[10px] tracking-[0.3em] font-bold uppercase text-gray-300">
                Restoran
              </span>
            </div>

            <h2
              className="font-display italic font-bold text-brand-dark leading-tight"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
            >
              Medena Dolina{" "}
              <span className="text-gradient not-italic">Ponijeri</span>
            </h2>

            <p className="text-gray-400 leading-relaxed text-[15px]">
              Medena Dolina Ponijeri nudi deset moderno opremljenih apartmana s pogledom
              na predivne krajolike koji oduzimaju dah u svako doba godine.
            </p>
            <p className="text-gray-400 leading-relaxed text-[15px]">
              Restoran u sklopu kompleksa pravo je kulinarska oaza — tradicionalna
              kuhinja s lokalnim namirnicama i moderna gastronomija.
            </p>

            {/* Plain number stats */}
            <div className="flex items-center gap-8 pt-2 border-t border-gray-100">
              {FEATURES.map(({ num, label }) => (
                <div key={label}>
                  <div className="font-display font-bold text-brand text-2xl leading-none">{num}</div>
                  <div className="text-gray-400 text-[11px] mt-1 leading-tight">{label}</div>
                </div>
              ))}
            </div>

            <Link
              href="/restaurants"
              className="group inline-flex items-center gap-4 text-[11px] font-bold tracking-[0.26em] uppercase text-brand-dark px-7 py-3.5 overflow-hidden relative mt-2"
              style={{ border: "1px solid rgba(0,47,90,0.22)" }}
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" style={{ background: "rgba(0,47,90,0.04)" }} />
              <span className="relative z-10">Vidi restorane</span>
              <FiArrowRight className="relative z-10 text-brand-dark/40 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>

          {/* ── Image (right) ─────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={Medena}
                alt="Medena Dolina"
                width={700}
                height={500}
                className="w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
