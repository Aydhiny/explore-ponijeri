"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiPlay } from "react-icons/fi";
import BG from "../images/ponijeri.jpg";

export default function Showcase() {
  const [playing, setPlaying] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      id="showcase"
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${BG.src})` }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg," +
            "rgba(3,8,16,0.72) 0%," +
            "rgba(3,8,16,0.45) 50%," +
            "rgba(3,8,16,0.72) 100%)",
        }}
      />

      <div ref={ref} className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-10 py-20 text-center">
        {inView && (
          <>
            {/* No eyebrow — just the heading */}
            <motion.h2
              className="font-display italic font-bold text-white mb-12 leading-tight"
              style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Naši{" "}
              <span className="text-gradient-white not-italic">Ponijeri</span>
            </motion.h2>

            {/* Video */}
            <motion.div
              className="relative mx-auto rounded-2xl overflow-hidden"
              style={{
                aspectRatio: "16/9",
                maxWidth: "780px",
                border: "1px solid rgba(255,255,255,0.10)",
                boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
              }}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              {!playing ? (
                <button
                  onClick={() => setPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center group bg-black/10 hover:bg-black/5 transition-colors duration-300"
                  aria-label="Play video"
                >
                  {/* Minimal thin-circle play button — no blue fill */}
                  <div
                    className="relative flex items-center justify-center w-16 h-16 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:bg-white/10"
                    style={{ border: "1px solid rgba(255,255,255,0.45)" }}
                  >
                    <FiPlay className="text-white text-lg ml-0.5" />
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
