"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiArrowRight } from "react-icons/fi";

const CATEGORIES = [
  {
    title: "Dnevni ulazi",
    items: [
      { label: "Poludnevna karta", sub: "am ili pm", price: "10 KM", pop: false },
      { label: "Dnevna karta",     sub: "10:00 – 16:00", price: "15 KM", pop: true  },
      { label: "Noćno skijanje",   sub: "",           price: "10 KM", pop: false },
    ],
  },
  {
    title: "Karte & Sezonske",
    items: [
      { label: "Jedna vožnja",   sub: "",           price: "2 KM",   pop: false },
      { label: "Sedmodnevna",    sub: "",           price: "80 KM",  pop: false },
      { label: "Sezonska karta", sub: "",           price: "300 KM", pop: true  },
    ],
  },
  {
    title: "Grupni popusti",
    items: [
      { label: "Odrasli 5–12",   sub: "dnevna, po osobi", price: "12 KM", pop: false },
      { label: "Djeca ski klup", sub: "po osobi",          price: "8 KM",  pop: false },
      { label: "Parking",        sub: "po vozilu",         price: "2 KM",  pop: false },
    ],
  },
];

export default function SkiInfo() {
  const [ref, inView] = useInView({ threshold: 0.07, triggerOnce: true });

  return (
    <section
      style={{
        background: "linear-gradient(180deg, #060d1a 0%, #030810 100%)",
        paddingTop: "6rem",
        paddingBottom: "6rem",
      }}
    >
      <div
        style={{
          height: 1,
          background: "linear-gradient(90deg, transparent, rgba(0,132,255,0.28), transparent)",
        }}
      />

      <div ref={ref} className="max-w-2xl mx-auto px-6 sm:px-10 pt-16">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-brand/40" />
            <span className="text-[10px] tracking-[0.32em] font-bold uppercase text-brand-mid">
              Skijaški centar Ponijeri
            </span>
          </div>
          <h2
            className="font-display italic font-bold text-white leading-tight"
            style={{ fontSize: "clamp(2.6rem, 6vw, 4.5rem)" }}
          >
            Cijene{" "}
            <span className="text-gradient not-italic">Skijanja</span>
          </h2>
        </motion.div>

        {/* Editorial pricing table */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.55, delay: 0.18 }}
        >
          {CATEGORIES.map((cat, ci) => (
            <div key={cat.title} className={ci > 0 ? "mt-10 pt-8 border-t border-white/6" : ""}>

              {/* Category label */}
              <p className="text-[9px] font-bold tracking-[0.36em] uppercase text-white/22 mb-4">
                {cat.title}
              </p>

              {/* Rows */}
              {cat.items.map(({ label, sub, price, pop }, i) => (
                <div
                  key={label}
                  className={`flex items-baseline justify-between py-3.5 transition-colors duration-200
                    ${i < cat.items.length - 1 ? "border-b border-white/[0.05]" : ""}
                    ${pop ? "text-white" : "text-white/50 hover:text-white/70"}
                  `}
                >
                  {/* Label + sub */}
                  <div className="flex items-baseline gap-2.5">
                    {pop && (
                      <span className="w-1 h-1 rounded-full bg-brand self-center flex-shrink-0" />
                    )}
                    <span className={`text-[14px] font-medium ${pop ? "" : "ml-[14px]"}`}>
                      {label}
                    </span>
                    {sub && (
                      <span className="text-[11px] text-white/22">{sub}</span>
                    )}
                  </div>

                  {/* Price */}
                  <span
                    className={`font-display font-bold tabular-nums ml-6 flex-shrink-0
                      ${pop ? "text-brand-mid" : ""}
                    `}
                    style={{ fontSize: "1.2rem" }}
                  >
                    {price}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>

        {/* Footer row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-12 pt-7 border-t border-white/8 flex items-center justify-between gap-4"
        >
          <p className="text-white/22 text-[11px] tracking-wide">
            Sezona 2024/2025 · Ponijeri, Kakanj
          </p>
          <Link
            href="/skiing"
            className="group relative inline-flex items-center gap-3 px-6 py-2.5 text-[11px] font-bold tracking-[0.24em] uppercase text-white overflow-hidden flex-shrink-0"
            style={{ border: "1px solid rgba(255,255,255,0.22)" }}
          >
            <span
              className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"
              style={{ background: "rgba(255,255,255,0.05)" }}
            />
            <span className="relative z-10">Raspored</span>
            <FiArrowRight className="relative z-10 text-white/45 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
