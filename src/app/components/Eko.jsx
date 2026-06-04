"use client";
import Image from "next/image";
import EkoKuca from "../images/eko-kuca.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

const FEATURES = [
  { num: "8",   label: "Luksuznih apartmana" },
  { num: "1",   label: "Restoran u sklopu"   },
  { num: "∞",   label: "Pogled na planine"   },
];

export default function Eko() {
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true });

  return (
    <section
      ref={ref}
      style={{ background: "linear-gradient(180deg, #030810 0%, #060d1a 100%)" }}
      className="py-24 sm:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 xl:px-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* ── Image — full width, no tilt-card border ───────── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden">
              <Image
                src={EkoKuca}
                alt="Eko Kuća Ponijeri"
                width={700}
                height={500}
                className="w-full object-cover"
              />
            </div>
            {/* Floating stat chip */}
            <div
              className="absolute -bottom-4 -right-4 px-5 py-3 rounded-xl"
              style={{
                background: "rgba(0,132,255,0.18)",
                border: "1px solid rgba(0,132,255,0.3)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div className="font-display font-bold text-white text-2xl leading-none">8</div>
              <div className="text-white/50 text-[10px] tracking-[0.15em] uppercase mt-0.5">Apartmana</div>
            </div>
          </motion.div>

          {/* ── Text ─────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-brand/40" />
              <span className="text-[10px] tracking-[0.3em] font-bold uppercase text-brand-mid">
                Smještaj
              </span>
            </div>

            <h2
              className="font-display italic font-bold text-white leading-tight"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
            >
              Eko Kuća{" "}
              <span className="text-gradient not-italic">Ponijeri</span>
            </h2>

            <p className="text-white/50 leading-relaxed text-[15px]">
              Eko kuća Ponijeri nudi osam luksuzno opremljenih apartmana, osmišljenih
              da pruže maksimalnu udobnost i spoj modernog dizajna s netaknutom prirodom.
              Svaki apartman ima predivan pogled na Ponijere.
            </p>
            <p className="text-white/50 leading-relaxed text-[15px]">
              Novootvoreni restoran unutar kompleksa pravo je gastronomsko utočište —
              tradicionalna jela od svježih lokalnih namirnica.
            </p>

            {/* Features — just plain numbers, no chips */}
            <div className="flex items-center gap-8 pt-2">
              {FEATURES.map(({ num, label }) => (
                <div key={label}>
                  <div className="font-display font-bold text-brand text-2xl leading-none">{num}</div>
                  <div className="text-white/35 text-[11px] mt-1 leading-tight">{label}</div>
                </div>
              ))}
            </div>

            <Link
              href="/lodging"
              className="group inline-flex items-center gap-4 text-[11px] font-bold tracking-[0.26em] uppercase text-white px-7 py-3.5 overflow-hidden relative mt-2"
              style={{ border: "1px solid rgba(255,255,255,0.22)" }}
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" style={{ background: "rgba(255,255,255,0.06)" }} />
              <span className="relative z-10">Pogledaj smještaj</span>
              <FiArrowRight className="relative z-10 text-white/55 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
