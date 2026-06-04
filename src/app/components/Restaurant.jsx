"use client";
import Image from "next/image";
import Medena from "../images/medena.jpeg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { LuDonut } from "react-icons/lu";
import { IoPricetagOutline } from "react-icons/io5";
import { GiFoodChain } from "react-icons/gi";

const CHIPS = [
  { icon: LuDonut,           label: "Tradicionalni uštipci" },
  { icon: IoPricetagOutline, label: "Povoljne cijene"       },
  { icon: GiFoodChain,       label: "Raznovrsna hrana"      },
];

export default function Restaurant() {
  const [ref, inView] = useInView({ threshold: 0.12, triggerOnce: true });

  return (
    <section
      style={{ background: "linear-gradient(180deg, #ffffff 0%, #f4f9ff 100%)" }}
      className="py-24 sm:py-32"
    >
      <div ref={ref} className="max-w-7xl mx-auto px-6 sm:px-10 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="tilt-card rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(0,132,255,0.1)", boxShadow: "0 20px 60px rgba(0,47,90,0.1)" }}
            >
              <Image src={Medena} alt="Medena Dolina" width={700} height={500} className="w-full object-cover" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <p className="text-brand text-[11px] font-semibold tracking-[0.22em] uppercase">
              Restoran
            </p>
            <h2
              className="font-display font-bold text-brand-dark leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
            >
              Medena Dolina{" "}
              <span className="text-gradient">Ponijeri</span>
            </h2>
            <div className="h-px w-16 bg-brand opacity-30" />
            <p className="text-gray-500 leading-relaxed text-[15px]">
              Medena Dolina Ponijeri nudi deset moderno opremljenih apartmana s pogledom
              na predivne krajolike Ponijera koji oduzimaju dah u svako doba godine.
            </p>
            <p className="text-gray-500 leading-relaxed text-[15px]">
              Restoran u sklopu kompleksa pravo je kulinarska oaza — tradicionalna
              kuhinja s lokalnim namirnicama i moderna gastronomija.
            </p>
            <div
              className="grid grid-cols-3 gap-3 rounded-2xl p-4"
              style={{ background: "rgba(0,132,255,0.05)", border: "1px solid rgba(0,132,255,0.09)" }}
            >
              {CHIPS.map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center text-center gap-2 py-2">
                  <Icon className="text-2xl text-brand" />
                  <span className="text-xs font-medium text-brand-dark leading-tight">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
