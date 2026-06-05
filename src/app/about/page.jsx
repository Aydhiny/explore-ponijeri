"use client";
import Image from "next/image";
import opcina from "../images/opcina-kakanj.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaPhone, FaEnvelope, FaMountain, FaLeaf, FaGem } from "react-icons/fa";
import PageHero from "../components/PageHero";

const ABOUT_BG = "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=2400&q=88&fit=crop&auto=format";

const STATS = [
  { value: "1200m", label: "Nadmorska visina" },
  { value: "20 km", label: "Od Kaknja"        },
  { value: "1297m", label: "Vrh Tajan"        },
  { value: "4",     label: "Susjedne općine"  },
];

const SECTIONS = [
  {
    icon: FaMountain,
    title: "Prirodni dragulj Bosne",
    text: "Izletište Ponijeri se nalaze u sastavu masiva Ravne Planine koja se pruža između općina Kakanj, Zavidovići, Vareš i Zenica s najvećim vrhom Tajan na nadmorskoj visini od 1297 metara.",
  },
  {
    icon: FaLeaf,
    title: "Kraški fenomeni",
    text: "Centralni dio Ponijera izgrađen je od trijaskih vapnanaca koji su razvili kraške formacije — malo kraško polje, 3 veće uvale, mnogobrojna ponore, pećine i jame.",
  },
  {
    icon: FaGem,
    title: "Minerali i bogatstvo",
    text: "Ovdje se mogu pronaći minerali: kvarc, jaspis, limonit, serpentin, olivin, opal, hematit, kalcit, gips i liksun. Vode s Ponijerskog polja izviru kao vrelo rijeke Žuće.",
  },
];

export default function AboutPage() {
  const [ref, inView] = useInView({ threshold: 0.07, triggerOnce: true });
  const [contactRef, contactInView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <div className="min-h-screen">
      <PageHero
        label="Planinsko izletište · Kakanj"
        title="O Ponijerima"
        subtitle="Ponijeri — zimski dragulj općine Kakanj, na 1200m nadmorske visine, u srcu netaknute prirode i beskrajne tišine."
        bgSrc={ABOUT_BG}
        bgPosition="center 50%"
        height="min-h-[62vh]"
      />

      {/* ── Stats strip ─────────────────────────────────────────── */}
      <div style={{ background: "#050e20", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto px-8 sm:px-14 xl:px-20 py-7 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {STATS.map(({ value, label }, i) => (
            <div key={label} className="flex flex-col gap-0.5">
              <span className="font-display italic font-light text-2xl leading-none"
                    style={{ color: "rgba(255,255,255,0.88)" }}>{value}</span>
              <span className="font-sans text-[9px] tracking-[0.28em] uppercase"
                    style={{ color: "rgba(160,200,255,0.42)" }}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Content ─────────────────────────────────────────────── */}
      <div ref={ref} className="bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 xl:px-16 py-20 xl:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-20 items-start">

            {/* Text sections */}
            <div className="space-y-10">
              {SECTIONS.map(({ icon: Icon, title, text }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="flex gap-5"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1"
                    style={{ background: "rgba(0,132,255,0.08)", border: "1px solid rgba(0,132,255,0.14)" }}
                  >
                    <Icon className="text-brand text-sm" />
                  </div>
                  <div>
                    <h2 className="font-display italic font-light text-brand-dark text-xl mb-2">
                      {title}
                    </h2>
                    <p className="text-gray-500 leading-relaxed text-sm">{text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right — badge + contact */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="space-y-6 lg:pt-2"
            >
              {/* Opcina badge */}
              <div className="flex justify-center lg:justify-start">
                <Image
                  alt="Općina Kakanj"
                  src={opcina}
                  height={160}
                  width={160}
                  className="animate-float"
                  style={{
                    borderRadius: "50%",
                    padding: "14px",
                    background: "rgba(207,237,255,0.45)",
                    border: "2px solid rgba(0,132,255,0.15)",
                    boxShadow: "0 0 40px rgba(0,132,255,0.10)",
                  }}
                />
              </div>

              {/* Contact card */}
              <div
                ref={contactRef}
                className="rounded-2xl p-6 space-y-5"
                style={{
                  border: "1px solid rgba(0,132,255,0.10)",
                  background: "rgba(247,251,255,0.80)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div>
                  <p className="text-[9px] tracking-[0.4em] uppercase font-semibold text-brand mb-1">
                    Kontakt
                  </p>
                  <h3 className="font-display italic font-light text-brand-dark"
                      style={{ fontSize: "1.5rem" }}>
                    Stupite u kontakt
                  </h3>
                </div>

                <div className="h-px" style={{ background: "linear-gradient(90deg, rgba(0,132,255,0.2), transparent)" }} />

                <div className="space-y-3">
                  <a
                    href="mailto:opcinaka@bih.net.ba"
                    className="flex items-center gap-3 text-gray-500 hover:text-brand transition-colors duration-200 text-sm"
                  >
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                         style={{ background: "rgba(0,132,255,0.08)" }}>
                      <FaEnvelope className="text-brand text-xs" />
                    </div>
                    opcinaka@bih.net.ba
                  </a>
                  <a
                    href="tel:+38732771800"
                    className="flex items-center gap-3 text-gray-500 hover:text-brand transition-colors duration-200 text-sm"
                  >
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                         style={{ background: "rgba(0,132,255,0.08)" }}>
                      <FaPhone className="text-brand text-xs" />
                    </div>
                    +387 32 771 800
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
