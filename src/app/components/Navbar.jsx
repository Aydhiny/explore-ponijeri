"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import kakanj from "../images/kakanj.png";
import Tree from "../images/tree.png";
import { usePathname } from "next/navigation";
import WeatherDisplay from "./WeatherDisplay";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { path: "/", label: "Početna" },
  { path: "/skiing", label: "Skijanje" },
  { path: "/restaurants", label: "Restorani" },
  { path: "/lodging", label: "Smještaj" },
  { path: "/blog", label: "Blog" },
  { path: "/about", label: "O nama" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (path) => pathname === path;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 shadow-lg shadow-blue-900/10"
            : "py-4"
        }`}
        style={{
          background: scrolled
            ? "rgba(220, 240, 255, 0.75)"
            : "rgba(215, 237, 255, 0.55)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.3)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Desktop */}
          <div className="hidden md:flex items-center justify-between">
            {/* Logo + Weather */}
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2 group">
                <div className="relative">
                  <Image
                    alt="Ponijeri logo"
                    src={kakanj}
                    height={30}
                    width={30}
                    className="-rotate-12 group-hover:rotate-0 transition-transform duration-300"
                  />
                </div>
                <span className="font-playwrite-hr text-main-color-dark-green text-sm font-bold hidden lg:block tracking-wide">
                  Ponijeri
                </span>
              </Link>
              <div className="w-px h-5 bg-main-color-dark-green/20 mx-1" />
              <WeatherDisplay />
            </div>

            {/* Nav Links */}
            <ul className="flex items-center gap-1">
              {NAV_LINKS.map(({ path, label }) => (
                <li key={path}>
                  <Link
                    href={path}
                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                      isActive(path)
                        ? "text-main-color-dark-green"
                        : "text-main-color-dark-green/70 hover:text-main-color-dark-green"
                    }`}
                  >
                    {isActive(path) && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: "rgba(0, 132, 255, 0.12)",
                          border: "1px solid rgba(0, 132, 255, 0.2)",
                        }}
                        transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                      />
                    )}
                    <span className="relative z-10">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right decoration */}
            <Image
              alt="tree"
              src={Tree}
              height={28}
              width={28}
              className="rotate-12 opacity-70"
            />
          </div>

          {/* Mobile */}
          <div className="flex md:hidden items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image alt="logo" src={kakanj} height={28} width={28} className="-rotate-12" />
              <span className="font-playwrite-hr text-main-color-dark-green text-sm font-bold">
                Ponijeri
              </span>
            </Link>

            <WeatherDisplay />

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="p-2 rounded-xl transition-colors"
              style={{ background: menuOpen ? "rgba(0,132,255,0.1)" : "transparent" }}
            >
              <div className={`hamburger-icon ${menuOpen ? "open" : ""}`}>
                <div className="line line-1" />
                <div className="line line-2" />
                <div className="line line-3" />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-[60px] left-3 right-3 z-40 rounded-2xl overflow-hidden"
            style={{
              background: "rgba(220, 240, 255, 0.88)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1px solid rgba(255,255,255,0.4)",
              boxShadow: "0 16px 48px rgba(0,47,90,0.18)",
            }}
          >
            <ul className="flex flex-col py-3">
              {NAV_LINKS.map(({ path, label }, i) => (
                <motion.li
                  key={path}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={path}
                    className={`flex items-center px-6 py-3 text-sm font-medium transition-all duration-150 ${
                      isActive(path)
                        ? "text-main-color-lighter-green bg-blue-50/60 font-bold"
                        : "text-main-color-dark-green hover:bg-white/40"
                    }`}
                  >
                    {isActive(path) && (
                      <span className="w-1.5 h-1.5 rounded-full bg-main-color-lighter-green mr-3 flex-shrink-0" />
                    )}
                    {label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
