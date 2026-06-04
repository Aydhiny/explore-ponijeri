"use client";
import Image from "next/image";
import EkoKuca from "../images/eko-kuca.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaLeaf, FaConciergeBell, FaHiking } from "react-icons/fa";

const CHIPS = [
  { icon: FaLeaf,          label: "8 luksuznih apartmana" },
  { icon: FaConciergeBell, label: "Restoran u sklopu"     },
  { icon: FaHiking,        label: "Za grupe i planinarce" },
];

export default function Eko() {
  const [ref, inView] = useInView({ threshold: 0.12, triggerOnce: true });

  return (
    <section
      style={{ background: "linear-gradient(180deg, #f4f9ff 0%, #ffffff 100%)" }}
      className="py-24 sm:py-32"
    >
      <div ref={ref} className="max-w-7xl mx-auto px-6 sm:px-10 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <p className="text-brand text-[11px] font-semibold tracking-[0.22em] uppercase">
              Smještaj
            </p>
            <h2
              className="font-display font-bold text-brand-dark leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
            >
              Eko Kuća{" "}
              <span className="text-gradient">Ponijeri</span>
            </h2>
            <div className="h-px w-16 bg-brand opacity-30" />
            <p className="text-gray-500 leading-relaxed text-[15px]">
              Eko kuća Ponijeri nudi osam luksuzno opremljenih apartmana, osmišljenih
              da pruže maksimalnu udobnost i spoj modernog dizajna s netaknutom
              prirodom. Svaki apartman ima predivan pogled na Ponijere.
            </p>
            <p className="text-gray-500 leading-relaxed text-[15px]">
              Novootvoreni restoran unutar kompleksa pravo je gastronomsko utočište —
              tradicionalna jela od svježih lokalnih namirnica i international menu.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {CHIPS.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-medium text-brand-dark"
                  style={{
                    background: "rgba(0,132,255,0.07)",
                    border: "1px solid rgba(0,132,255,0.12)",
                  }}
                >
                  <Icon className="text-brand text-xs" />
                  {label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="tilt-card rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(0,132,255,0.1)", boxShadow: "0 20px 60px rgba(0,47,90,0.1)" }}
            >
              <Image src={EkoKuca} alt="Eko Kuća Ponijeri" width={700} height={500} className="w-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
