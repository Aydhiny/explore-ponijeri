"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaPlay } from "react-icons/fa";

const backgroundImage = new URL("../images/ponijeri.jpg", import.meta.url);

export default function Showcase() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section
      id="showcase"
      ref={ref}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-blue-300/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${4 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4 sm:px-8 text-center w-full max-w-6xl mx-auto">
        {inView && (
          <>
            <motion.div
              className="mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span
                className="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-white/80"
                style={{
                  background: "rgba(0,132,255,0.2)",
                  border: "1px solid rgba(0,132,255,0.35)",
                  backdropFilter: "blur(8px)",
                }}
              >
                Video obilazak
              </span>
            </motion.div>

            <motion.h2
              className="font-playwrite-hr text-4xl sm:text-6xl md:text-7xl font-bold mb-8 leading-none"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span
                style={{
                  background: "linear-gradient(135deg, #ffffff, #c5e8ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Naši{" "}
              </span>
              <span
                style={{
                  background: "linear-gradient(135deg, #0084FF, #4fa8ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Ponijeri
              </span>
            </motion.h2>

            <motion.div
              className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              style={{
                border: "1px solid rgba(255,255,255,0.2)",
                boxShadow: "0 0 60px rgba(0,132,255,0.2), 0 30px 80px rgba(0,0,0,0.4)",
                aspectRatio: "16/9",
              }}
            >
              {!showVideo ? (
                <div
                  className="absolute inset-0 flex items-center justify-center cursor-pointer group bg-black/20"
                  onClick={() => setShowVideo(true)}
                >
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: "rgba(0,132,255,0.8)",
                      boxShadow: "0 0 40px rgba(0,132,255,0.5)",
                    }}
                  >
                    <FaPlay className="text-white text-2xl ml-1" />
                  </div>
                </div>
              ) : (
                <iframe
                  src="https://www.youtube.com/embed/2l4idGxkm_M?autoplay=1"
                  title="Naši Ponijeri Video"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
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
