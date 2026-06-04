"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AboutImage  from "../images/ponijeri-about.jpg";
import AboutImage2 from "../images/ponijeri-about2.jpg";

function Reveal({ children, delay = 0, className = "" }) {
  const [ref, inView] = useInView({ threshold: 0.12, triggerOnce: true });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

const STATS = [
  { value: "1200m", label: "Nadmorska visina" },
  { value: "20 km", label: "Od Kaknja" },
  { value: "1297m", label: "Vrh Tajan" },
];

export default function About() {
  return (
    /* Seamless blend: surface → white */
    <section
      id="about"
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #f4f9ff 0%, #ffffff 100%)",
        paddingTop: "6rem",
        paddingBottom: "7rem",
      }}
    >
      {/* Very faint radial accent — not a pattern, just atmosphere */}
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,132,255,0.04) 0%, transparent 65%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 xl:px-16">

        {/* Eyebrow */}
        <Reveal className="flex items-center gap-3 mb-5">
          <span className="h-px w-8 bg-brand opacity-60" />
          <span className="text-brand text-[11px] font-semibold tracking-[0.22em] uppercase">
            O destinaciji
          </span>
        </Reveal>

        {/* Heading */}
        <Reveal delay={0.05} className="mb-14">
          <h2
            className="font-display font-bold text-brand-dark leading-tight"
            style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
          >
            Planinsko{" "}
            <span className="text-gradient">Izletište</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-14 xl:gap-24 items-start">

          {/* ── Text column ────────────────────────────────── */}
          <div className="space-y-7">
            <Reveal delay={0.1}>
              <p className="text-brand-dark/80 font-semibold text-lg leading-relaxed"
                style={{
                  borderLeft: "3px solid #0084FF",
                  paddingLeft: "1.25rem",
                }}>
                Ponijeri su planinsko izletište na nadmorskoj visini od 1200 metara,
                udaljeno oko 20 km od centra Kaknja. Zbog nadmorske visine ujedno je
                i prirodna zračna banja.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="text-gray-500 leading-relaxed text-[15px]">
                Izletište se nalazi u sastavu masiva Ravne Planine koja se pruža između
                općina Kakanj, Zavidovići, Vareš i Zenica. Kraški fenomeni —
                polja, uvale, ponori, pećine i jame — čine ga geološkim biserjem.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-gray-500 leading-relaxed text-[15px]">
                Minerali kvarca, jaspisa, olivina, opala i hematita svjedoče o
                bogatoj geološkoj prošlosti. Sastavni je dio Spomenika prirode Tajan.
              </p>
            </Reveal>

            {/* Stats */}
            <Reveal delay={0.28}>
              <div className="grid grid-cols-3 gap-3 pt-4">
                {STATS.map(({ value, label }) => (
                  <div
                    key={label}
                    className="text-center py-4 rounded-2xl"
                    style={{
                      background: "rgba(0,132,255,0.05)",
                      border: "1px solid rgba(0,132,255,0.1)",
                    }}
                  >
                    <div className="text-2xl font-bold text-brand leading-none mb-1">{value}</div>
                    <div className="text-[11px] text-gray-400 leading-tight">{label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* ── Image column ────────────────────────────────── */}
          <div className="grid grid-cols-2 gap-4">
            <Reveal delay={0.18} className="col-span-1">
              <div
                className="tilt-card relative rounded-2xl overflow-hidden aspect-[3/4]"
                style={{ border: "1px solid rgba(0,132,255,0.12)" }}
              >
                <Image
                  src={AboutImage}
                  alt="Ponijeri ljeto"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.28} className="col-span-1 mt-10">
              <div
                className="tilt-card relative rounded-2xl overflow-hidden aspect-[3/4]"
                style={{ border: "1px solid rgba(0,132,255,0.12)" }}
              >
                <Image
                  src={AboutImage2}
                  alt="Ponijeri priroda"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
