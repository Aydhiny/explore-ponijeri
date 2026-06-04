"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import kakanj from "../images/kakanj.png";
import { usePathname } from "next/navigation";
import WeatherDisplay from "./WeatherDisplay";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { FiMenu, FiX } from "react-icons/fi";

const LINKS = [
  { path: "/",            label: "Početna"   },
  { path: "/skiing",      label: "Skijanje"  },
  { path: "/restaurants", label: "Restorani" },
  { path: "/lodging",     label: "Smještaj"  },
  { path: "/blog",        label: "Blog"      },
  { path: "/about",       label: "O nama"    },
];

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [navVisible,  setNavVisible]  = useState(true);
  const [open,        setOpen]        = useState(false);
  const lastY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => {
      const y = window.scrollY;
      if (y <= 60) {
        setScrolled(false);
        setNavVisible(true);
      } else {
        setScrolled(true);
        if (y > lastY.current + 6 && y > 220) setNavVisible(false);
        if (y < lastY.current - 6)            setNavVisible(true);
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const active = (p) => pathname === p;

  return (
    <>
      {/* ── Full-width transparent header (hero state) ───────── */}
      <AnimatePresence>
        {!scrolled && (
          <motion.header
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-10 py-6 flex items-center justify-between"
          >
            <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
              <Image
                src={kakanj} alt="Ponijeri" width={30} height={30}
                style={{ filter: "brightness(0) invert(1)" }}
                className="group-hover:scale-105 transition-transform duration-300"
              />
              <span className="text-white font-display text-sm font-bold tracking-[0.18em] uppercase hidden sm:block">
                Ponijeri
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-0.5">
              {LINKS.map(({ path, label }) => (
                <Link
                  key={path}
                  href={path}
                  className={cn(
                    "relative px-4 py-2 text-[13px] font-medium rounded-full transition-colors duration-200",
                    active(path) ? "text-white" : "text-white/60 hover:text-white"
                  )}
                >
                  {active(path) && (
                    <motion.span
                      layoutId="top-pill"
                      className="absolute inset-0 rounded-full bg-white/14"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <WeatherDisplay scrolled={false} />
              <button
                onClick={() => setOpen(o => !o)}
                className="md:hidden text-white/80 hover:text-white p-1.5 transition-colors"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {open
                    ? <motion.span key="x"  initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}><FiX size={20} /></motion.span>
                    : <motion.span key="m"  initial={{ rotate: 90, opacity: 0 }}  animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}><FiMenu size={20} /></motion.span>
                  }
                </AnimatePresence>
              </button>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* ── Floating pill (scrolled state) ───────────────────── */}
      <AnimatePresence>
        {scrolled && navVisible && (
          <motion.div
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0,   opacity: 1 }}
            exit={{ y: -80,    opacity: 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 30 }}
            className="fixed top-4 inset-x-4 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 z-50 sm:w-auto sm:max-w-2xl w-[calc(100%-2rem)]"
          >
            <div
              className="flex items-center gap-2 px-3 py-2.5 rounded-full"
              style={{
                background: "rgba(244,249,255,0.88)",
                backdropFilter: "blur(28px)",
                WebkitBackdropFilter: "blur(28px)",
                border: "1px solid rgba(0,47,90,0.09)",
                boxShadow: "0 4px 30px rgba(0,47,90,0.11), inset 0 1px 0 rgba(255,255,255,0.9)",
              }}
            >
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2 flex-shrink-0 px-1">
                <Image src={kakanj} alt="Ponijeri" width={22} height={22} />
                <span className="text-brand-dark font-display font-bold text-[11px] tracking-[0.2em] uppercase hidden sm:block">
                  Ponijeri
                </span>
              </Link>

              <div className="w-px h-5 bg-brand-dark/10 hidden md:block mx-1" />

              {/* Desktop links */}
              <nav className="hidden md:flex items-center gap-0.5 flex-1 justify-center">
                {LINKS.map(({ path, label }) => (
                  <Link
                    key={path}
                    href={path}
                    className={cn(
                      "relative px-3 py-1.5 text-[12px] font-semibold rounded-full transition-colors duration-150",
                      active(path) ? "text-brand" : "text-brand-dark/50 hover:text-brand-dark"
                    )}
                  >
                    {active(path) && (
                      <motion.span
                        layoutId="pill-active"
                        className="absolute inset-0 rounded-full"
                        style={{ background: "rgba(0,132,255,0.09)", border: "1px solid rgba(0,132,255,0.18)" }}
                        transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
                      />
                    )}
                    <span className="relative z-10">{label}</span>
                  </Link>
                ))}
              </nav>

              {/* Right */}
              <div className="flex items-center gap-2 ml-auto flex-shrink-0">
                <WeatherDisplay scrolled={true} />
                <button
                  onClick={() => setOpen(o => !o)}
                  className="md:hidden text-brand-dark/70 hover:text-brand-dark p-1 transition-colors"
                  aria-label="Toggle menu"
                >
                  <AnimatePresence mode="wait">
                    {open
                      ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}><FiX size={18} /></motion.span>
                      : <motion.span key="m" initial={{ rotate: 90, opacity: 0 }}  animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}><FiMenu size={18} /></motion.span>
                    }
                  </AnimatePresence>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Mobile menu ─────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1,  y: 0,   scale: 1    }}
            exit={{ opacity: 0,     y: -10, scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-x-3 z-40 rounded-2xl overflow-hidden"
            style={{
              top: scrolled ? "78px" : "74px",
              background: "rgba(244,249,255,0.97)",
              backdropFilter: "blur(28px)",
              WebkitBackdropFilter: "blur(28px)",
              border: "1px solid rgba(0,47,90,0.09)",
              boxShadow: "0 20px 60px rgba(0,47,90,0.14)",
            }}
          >
            {LINKS.map(({ path, label }, i) => (
              <motion.div
                key={path}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0  }}
                transition={{ delay: i * 0.04 }}
              >
                <Link
                  href={path}
                  className="flex items-center gap-3 px-5 py-3.5 text-[13px] font-semibold border-b border-brand-dark/5 last:border-0 transition-colors"
                  style={{ color: active(path) ? "#0084FF" : "#002F5A" }}
                >
                  {active(path) && (
                    <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                  )}
                  <span className={active(path) ? "" : "ml-4"}>{label}</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
