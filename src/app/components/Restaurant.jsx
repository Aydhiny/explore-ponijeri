"use client";
import Image from "next/image";
import React from "react";
import Medena from "../images/medena.jpeg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { LuDonut } from "react-icons/lu";
import { IoPricetagOutline } from "react-icons/io5";
import { GiFoodChain } from "react-icons/gi";

const HIGHLIGHTS = [
  { icon: LuDonut, text: "Tradicionalni uštipci" },
  { icon: IoPricetagOutline, text: "Povoljne cijene" },
  { icon: GiFoodChain, text: "Raznovrsna hrana" },
];

export default function Restaurant() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Accent */}
      <div
        className="absolute -right-32 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,132,255,0.06) 0%, transparent 70%)" }}
      />

      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div
              className="tilt-card rounded-2xl overflow-hidden"
              style={{
                border: "2px solid rgba(0,132,255,0.15)",
                boxShadow: "0 20px 60px rgba(0,47,90,0.15)",
              }}
            >
              <Image
                alt="Medena Dolina Ponijeri"
                src={Medena}
                width={700}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="h-px w-12" style={{ background: "linear-gradient(90deg, rgba(0,132,255,0.4), transparent)" }} />
              <span className="text-main-color-lighter-green text-sm font-semibold uppercase tracking-widest">Restoran</span>
            </div>

            <h2 className="font-playwrite-hr text-3xl sm:text-4xl md:text-5xl font-bold text-main-color-dark-green leading-tight">
              Medena Dolina{" "}
              <span style={{
                background: "linear-gradient(135deg, #0084FF, #4fa8ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Ponijeri
              </span>
            </h2>

            <div
              className="h-px w-full"
              style={{ background: "linear-gradient(90deg, rgba(0,132,255,0.3), transparent)" }}
            />

            <div className="space-y-4 text-gray-600 text-base sm:text-lg leading-relaxed">
              <p>
                Medena Dolina Ponijeri predstavlja jedinstveno utočište koje spaja
                luksuz, prirodu i autentičnost. Deset moderno opremljenih apartmana
                s pogledom na predivne krajolike Ponijera.
              </p>
              <p>
                Restoran u sklopu kompleksa prava je kulinarska oaza — tradicionalna
                kuhinja s lokalnim i svježim namirnicama, te jela moderne kuhinje.
              </p>
            </div>

            {/* Feature chips */}
            <div
              className="p-4 rounded-2xl grid grid-cols-3 gap-3"
              style={{
                background: "rgba(0,132,255,0.06)",
                border: "1px solid rgba(0,132,255,0.12)",
              }}
            >
              {HIGHLIGHTS.map(({ icon: Icon, text }) => (
                <div key={text} className="flex flex-col items-center text-center gap-2 p-2">
                  <Icon className="text-2xl text-main-color-lighter-green" />
                  <span className="text-xs font-medium text-main-color-dark-green leading-tight">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
