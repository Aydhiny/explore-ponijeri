"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiPlay } from "react-icons/fi";

import BG from "../images/ponijeri.jpg";

export default function Showcase() {
  const [playing, setPlaying] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.25, triggerOnce: true });

  return (
    <section
      id="showcase"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      {/* Full-bleed bg */}
      <div className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${BG.src})` }} />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg," +
            "  rgba(6,13,26,0.62) 0%," +
            "  rgba(6,13,26,0.38) 45%," +
            "  rgba(6,13,26,0.72) 100%)",
        }}
      />

      <div ref={ref} className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 text-center py-20">

        {inView && (
          <>
            <motion.p
              className="text-brand-mid text-[11px] font-semibold tracking-[0.24em] uppercase mb-5"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Video obilazak
            </motion.p>

            <motion.h2
              className="font-display font-bold text-white mb-10 leading-tight"
              style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.15 }}
            >
              Naši{" "}
              <span className="text-gradient-white">Ponijeri</span>
            </motion.h2>

            {/* Video container */}
            <motion.div
              className="relative mx-auto rounded-2xl overflow-hidden"
              style={{
                aspectRatio: "16/9",
                maxWidth: "820px",
                border: "1px solid rgba(255,255,255,0.12)",
                boxShadow: "0 0 80px rgba(0,132,255,0.15), 0 40px 80px rgba(0,0,0,0.4)",
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {!playing ? (
                /* Thumbnail overlay with play button */
                <button
                  onClick={() => setPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center group bg-black/20 transition-colors hover:bg-black/10"
                  aria-label="Play video"
                >
                  <div
                    className="relative flex items-center justify-center w-20 h-20 rounded-full transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: "rgba(0,132,255,0.85)",
                      boxShadow: "0 0 0 0 rgba(0,132,255,0.4)",
                      animation: "pulseRing 2s ease-in-out infinite",
                    }}
                  >
                    <FiPlay className="text-white text-2xl ml-1" />
                  </div>
                </button>
              ) : (
                <iframe
                  src="https://www.youtube.com/embed/2l4idGxkm_M?autoplay=1&rel=0"
                  title="Naši Ponijeri"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}
