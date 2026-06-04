"use client";
import Image from "next/image";
import { FaInstagram, FaBusAlt } from "react-icons/fa";
import Autobus from "../images/autobuska.jpg";
import Insta   from "../images/visit.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Card({ href, image, icon: Icon, title, sub, cta, delay }) {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });
  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className="group block"
    >
      <div
        className="rounded-2xl overflow-hidden transition-shadow duration-300 group-hover:shadow-[0_20px_60px_rgba(0,47,90,0.14)]"
        style={{ border: "1px solid rgba(0,47,90,0.08)" }}
      >
        <div className="relative h-56 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-103"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
        </div>
        <div className="p-5 bg-white">
          <div className="flex items-center gap-2 mb-1">
            <Icon className="text-brand text-sm" />
            <span className="text-brand text-xs font-semibold">{cta}</span>
          </div>
          <h3 className="font-jakarta font-bold text-brand-dark text-base">{title}</h3>
          <p className="text-gray-400 text-xs mt-1">{sub}</p>
        </div>
      </div>
    </motion.a>
  );
}

export default function Travel() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <section
      style={{ background: "linear-gradient(180deg, #ffffff 0%, #f4f9ff 100%)" }}
      className="py-24 sm:py-32"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-10" ref={ref}>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="text-center mb-12"
        >
          <p className="text-brand text-[11px] font-semibold tracking-[0.22em] uppercase mb-3">
            Povežite se s nama
          </p>
          <h2
            className="font-display font-bold text-brand-dark"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}
          >
            Visit &amp;{" "}
            <span className="text-gradient">Travel</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          <Card
            href="https://www.instagram.com/visit.ponijeri"
            image={Insta}
            icon={FaInstagram}
            title="Visit Ponijeri"
            sub="Pratite nas na Instagramu za najnovije fotografije i vijesti."
            cta="@visit.ponijeri"
            delay={0.1}
          />
          <Card
            href="https://www.instagram.com/p/DDKNvetIsgU/?hl=en"
            image={Autobus}
            icon={FaBusAlt}
            title="Autobuska linija"
            sub="Redovna linija Kakanj – Ponijeri. Provjeri raspored polazaka."
            cta="Provjeri raspored"
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
}
