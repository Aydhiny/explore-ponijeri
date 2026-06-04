"use client";
import Image from "next/image";
import React from "react";
import EkoKuca from "../images/eko-kuca.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaLeaf, FaConciergeBell, FaHiking } from "react-icons/fa";

const FEATURES = [
  { icon: FaLeaf, text: "8 luksuznih apartmana" },
  { icon: FaConciergeBell, text: "Gastronomski restoran" },
  { icon: FaHiking, text: "Idealno za sportske grupe" },
];

export default function Eko() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Accent blob */}
      <div
        className="absolute -left-32 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,132,255,0.07) 0%, transparent 70%)" }}
      />

      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="h-px w-12" style={{ background: "linear-gradient(90deg, rgba(0,132,255,0.4), transparent)" }} />
              <span className="text-main-color-lighter-green text-sm font-semibold uppercase tracking-widest">Smještaj</span>
            </div>

            <h2 className="font-playwrite-hr text-3xl sm:text-4xl md:text-5xl font-bold text-main-color-dark-green leading-tight">
              Eko Kuća{" "}
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
                Eko kuća Ponijeri nudi osam luksuzno opremljenih apartmana,
                osmišljenih da pruže maksimalnu udobnost i spoj modernog dizajna
                s prirodnim okruženjem. Svaki apartman opremljen je najnovijom
                tehnologijom uz predivan pogled na netaknutu prirodu Ponijera.
              </p>
              <p>
                Novootvoreni restoran unutar kompleksa pravo je gastronomsko
                utočište, s raznolikom ponudom koja zadovoljava svačije ukuse.
              </p>
            </div>

            {/* Feature chips */}
            <div className="flex flex-wrap gap-3 pt-2">
              {FEATURES.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-main-color-dark-green"
                  style={{
                    background: "rgba(0,132,255,0.08)",
                    border: "1px solid rgba(0,132,255,0.15)",
                  }}
                >
                  <Icon className="text-main-color-lighter-green text-sm" />
                  {text}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="tilt-card rounded-2xl overflow-hidden"
              style={{
                border: "2px solid rgba(0,132,255,0.15)",
                boxShadow: "0 20px 60px rgba(0,47,90,0.15)",
              }}
            >
              <Image
                alt="Eko Kuća Ponijeri"
                src={EkoKuca}
                width={700}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
