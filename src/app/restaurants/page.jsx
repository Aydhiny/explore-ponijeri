"use client";
import React from "react";
import Restaurant from "../components/Restaurant";
import Eko from "../components/Eko";
import Pasha from "../components/Pasha";
import { motion } from "framer-motion";
import { IoRestaurant } from "react-icons/io5";

export default function Page() {
  return (
    <div className="min-h-screen pt-20">
      {/* Page header */}
      <div
        className="relative py-20 overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #0a1628 0%, #001f3f 50%, #002F5A 100%)",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(ellipse at 30% 50%, rgba(0,132,255,0.12) 0%, transparent 60%)",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium text-blue-200 mb-6"
              style={{ background: "rgba(0,132,255,0.2)", border: "1px solid rgba(0,132,255,0.3)" }}
            >
              <IoRestaurant className="text-xs" />
              Gastronomija
            </span>

            <h1 className="font-playwrite-hr text-4xl sm:text-6xl font-bold text-white mb-4">
              Restorani{" "}
              <span style={{
                background: "linear-gradient(135deg, #0084FF, #4fa8ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Ponijeri
              </span>
            </h1>

            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Tri jedinstvena kulinarska doživljaja u srcu bosanske prirode.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Restaurant sections */}
      <div>
        <Restaurant />
        <div
          className="h-px mx-6 sm:mx-16"
          style={{ background: "linear-gradient(90deg, transparent, rgba(0,132,255,0.2), transparent)" }}
        />
        <Eko />
        <div
          className="h-px mx-6 sm:mx-16"
          style={{ background: "linear-gradient(90deg, transparent, rgba(0,132,255,0.2), transparent)" }}
        />
        <Pasha />
      </div>
    </div>
  );
}
