"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import kakanj from "../images/kakanj.png";
import { usePathname } from "next/navigation";
import WeatherDisplay from "./WeatherDisplay";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { path: "/",           label: "Početna"   },
  { path: "/skiing",     label: "Skijanje"  },
  { path: "/restaurants",label: "Restorani" },
  { path: "/lodging",    label: "Smještaj"  },
  { path: "/blog",       label: "Blog"      },
  { path: "/about",      label: "O nama"    },
];

export default function Navbar() {
  const [open,     setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const active = (p) => pathname === p;

  return (
    <>
      {/* ── Bar ─────────────────────────────────────────────── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          padding: scrolled ? "10px 0" : "18px 0",
          background: scrolled
            ? "rgba(244,249,255,0.82)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(0,47,90,0.08)" : "none",
          boxShadow: scrolled ? "0 4px 30px rgba(0,47,90,0.06)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <Image
              src={kakanj}
              alt="logo"
              width={28}
              height={28}
              className="transition-transform duration-300 group-hover:rotate-6"
              style={{ filter: scrolled ? "none" : "brightness(0) invert(1)" }}
            />
            <span
              className="font-display text-sm font-bold tracking-wide hidden sm:block"
              style={{ color: scrolled ? "#002F5A" : "rgba(255,255,255,0.9)" }}
            >
              Ponijeri
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {LINKS.map(({ path, label }) => (
              <Link
                key={path}
                href={path}
                className="relative px-4 py-2 text-[13px] font-medium rounded-full transition-all duration-200"
                style={{
                  color: active(path)
                    ? "#0084FF"
                    : scrolled
                      ? "rgba(0,47,90,0.75)"
                      : "rgba(255,255,255,0.8)",
                }}
              >
                {active(path) && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: scrolled
                        ? "rgba(0,132,255,0.10)"
                        : "rgba(255,255,255,0.15)",
                      border: `1px solid ${scrolled ? "rgba(0,132,255,0.2)" : "rgba(255,255,255,0.2)"}`,
                    }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.45 }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </Link>
            ))}
          </nav>

          {/* Right slot */}
          <div className="flex items-center gap-3">
            <WeatherDisplay scrolled={scrolled} />

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Menu"
              className="md:hidden p-1"
            >
              <div className={`hamburger ${open ? "open" : ""}`}>
                <span
                  className="ham-line"
                  style={{ background: scrolled ? "#002F5A" : "rgba(255,255,255,0.9)" }}
                />
                <span
                  className="ham-line"
                  style={{ background: scrolled ? "#002F5A" : "rgba(255,255,255,0.9)" }}
                />
                <span
                  className="ham-line"
                  style={{ background: scrolled ? "#002F5A" : "rgba(255,255,255,0.9)" }}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile menu ─────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mob"
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[62px] left-3 right-3 z-40 rounded-2xl py-2 overflow-hidden"
            style={{
              background: "rgba(244,249,255,0.92)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1px solid rgba(0,47,90,0.1)",
              boxShadow: "0 20px 60px rgba(0,47,90,0.12)",
            }}
          >
            {LINKS.map(({ path, label }, i) => (
              <motion.div
                key={path}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
              >
                <Link
                  href={path}
                  className="flex items-center gap-3 px-5 py-3 text-sm font-medium transition-colors"
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
