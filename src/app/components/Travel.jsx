"use client";
import Image from "next/image";
import React from "react";
import { FaInstagram, FaBusAlt } from "react-icons/fa";
import Autobus from "../images/autobuska.jpg";
import Insta from "../images/visit.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function TravelCard({ href, image, icon: Icon, title, subtitle, cta, delay }) {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group flex flex-col"
    >
      <div
        className="rounded-2xl overflow-hidden transition-all duration-400"
        style={{
          border: "1px solid rgba(0,132,255,0.15)",
          boxShadow: "0 4px 24px rgba(0,47,90,0.08)",
        }}
      >
        {/* Image */}
        <div className="relative overflow-hidden h-64 sm:h-72">
          <Image
            alt={title}
            src={image}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        {/* Content */}
        <div
          className="p-6"
          style={{
            background: "rgba(255,255,255,0.7)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            <Icon className="text-main-color-lighter-green text-lg" />
            <span className="text-main-color-lighter-green font-semibold text-sm">{cta}</span>
          </div>
          <h3 className="font-jakarta font-bold text-xl text-main-color-dark-green mb-1">
            {title}
          </h3>
          <p className="text-gray-500 text-sm">{subtitle}</p>
        </div>
      </div>
    </motion.a>
  );
}

export default function Travel() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="section-padding bg-white/40">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12" style={{ background: "linear-gradient(90deg, transparent, rgba(0,132,255,0.4))" }} />
            <span className="text-main-color-lighter-green text-sm font-semibold uppercase tracking-widest">Povežite se s nama</span>
            <div className="h-px w-12" style={{ background: "linear-gradient(90deg, rgba(0,132,255,0.4), transparent)" }} />
          </div>
          <h2 className="font-playwrite-hr text-3xl sm:text-4xl md:text-5xl font-bold text-main-color-dark-green">
            Visit & Travel{" "}
            <span style={{
              background: "linear-gradient(135deg, #0084FF, #4fa8ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>Ponijeri</span>
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          <TravelCard
            href="https://www.instagram.com/visit.ponijeri"
            image={Insta}
            icon={FaInstagram}
            title="Visit Ponijeri"
            subtitle="Pratite nas na Instagramu za najnovije vijesti i fotografije."
            cta="@visit.ponijeri"
            delay={0.1}
          />
          <TravelCard
            href="https://www.instagram.com/p/DDKNvetIsgU/?hl=en"
            image={Autobus}
            icon={FaBusAlt}
            title="Autobuska linija"
            subtitle="Redovna linija iz Kaknja — praktičan prijevoz do Ponijera."
            cta="Provjeri raspored"
            delay={0.25}
          />
        </div>
      </div>
    </section>
  );
}
