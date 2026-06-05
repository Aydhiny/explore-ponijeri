"use client";
import Restaurant from "../components/Restaurant";
import Eko from "../components/Eko";
import Pasha from "../components/Pasha";
import PageHero from "../components/PageHero";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const REST_BG = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=2400&q=88&fit=crop&auto=format";

const HIGHLIGHTS = [
  { num: "3", label: "Restorana"           },
  { num: "100+", label: "Mjesta za sjedenje" },
  { num: "Lokalna", label: "Kuhinja"          },
  { num: "Svježe", label: "Namirnice"        },
];

export default function Page() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <div className="min-h-screen">
      <PageHero
        label="Gastronomija · Ponijeri"
        title="Restorani Ponijeri"
        subtitle="Tri jedinstvena kulinarska doživljaja u srcu bosanske prirode — od planinarskog grila do elegantnog fine dininga."
        bgSrc={REST_BG}
        bgPosition="center 60%"
        height="min-h-[60vh]"
      />

      {/* Highlights strip */}
      <div
        ref={ref}
        style={{ background: "#050e20", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-7xl mx-auto px-8 sm:px-14 xl:px-20 py-7 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {HIGHLIGHTS.map(({ num, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col gap-0.5"
            >
              <span className="font-display italic font-light text-2xl leading-none"
                    style={{ color: "rgba(255,255,255,0.88)" }}>{num}</span>
              <span className="font-sans text-[9px] tracking-[0.28em] uppercase"
                    style={{ color: "rgba(160,200,255,0.42)" }}>{label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Restaurant sections */}
      <div>
        <Restaurant />
        <div className="h-px mx-8 sm:mx-16"
             style={{ background: "linear-gradient(90deg, transparent, rgba(0,132,255,0.18), transparent)" }} />
        <Eko />
        <div className="h-px mx-8 sm:mx-16"
             style={{ background: "linear-gradient(90deg, transparent, rgba(0,132,255,0.18), transparent)" }} />
        <Pasha />
      </div>
    </div>
  );
}
