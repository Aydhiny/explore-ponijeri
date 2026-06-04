"use client";
import Image from "next/image";
import { FaInstagram, FaBusAlt } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import Autobus from "../images/autobuska.jpg";
import Insta   from "../images/visit.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CARDS = [
  {
    href:  "https://www.instagram.com/visit.ponijeri",
    image: Insta,
    icon:  FaInstagram,
    tag:   "@visit.ponijeri",
    title: "Visit Ponijeri",
    sub:   "Pratite nas na Instagramu za najnovije fotografije i vijesti.",
  },
  {
    href:  "https://www.instagram.com/p/DDKNvetIsgU/?hl=en",
    image: Autobus,
    icon:  FaBusAlt,
    tag:   "Provjeri raspored",
    title: "Autobuska linija",
    sub:   "Redovna linija Kakanj – Ponijeri. Polasci svaki dan.",
  },
];

export default function Travel() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      className="py-24 sm:py-32"
      style={{ background: "linear-gradient(180deg, #ffffff 0%, #f4f9ff 100%)" }}
    >
      <div ref={ref} className="max-w-5xl mx-auto px-6 sm:px-10">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-10"
        >
          <span className="h-px flex-1 max-w-[3rem] bg-brand/20" />
          <span className="text-[10px] tracking-[0.32em] font-bold uppercase text-gray-300">
            02 — Povežite se
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="font-display italic font-bold text-brand-dark mb-12 leading-tight"
          style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
        >
          Visit &{" "}
          <span className="text-gradient not-italic">Travel</span>
        </motion.h2>

        {/* Image-fill cards — no more white Bootstrap boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {CARDS.map(({ href, image, icon: Icon, tag, title, sub }, i) => (
            <motion.a
              key={title}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1 + i * 0.1 }}
              className="group relative block rounded-2xl overflow-hidden aspect-[4/3]"
            >
              {/* Full-bleed photo */}
              <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

              {/* Top-right arrow chip */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ border: "1px solid rgba(255,255,255,0.25)" }}>
                <FiArrowUpRight className="text-white text-sm" />
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="text-brand-mid text-xs" />
                  <span className="text-brand-mid text-[10px] font-bold tracking-[0.22em] uppercase">
                    {tag}
                  </span>
                </div>
                <h3 className="font-display italic font-bold text-white text-2xl leading-tight">
                  {title}
                </h3>
                <p className="text-white/50 text-[13px] mt-1 leading-snug">{sub}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
