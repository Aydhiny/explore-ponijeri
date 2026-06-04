import React from "react";
import { FaFacebookF, FaInstagram, FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import kakanj from "../images/kakanj.png";

const NAV_LINKS = [
  { path: "/about", label: "O nama" },
  { path: "/skiing", label: "Skijanje" },
  { path: "/restaurants", label: "Restorani" },
  { path: "/lodging", label: "Smještaj" },
  { path: "/blog", label: "Blog" },
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #0a1628 0%, #001f3f 40%, #002F5A 100%)",
      }}
    >
      {/* Top glow line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,132,255,0.4), transparent)" }}
      />

      {/* Background radial */}
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,132,255,0.07) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-16 pb-8 relative z-10">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {/* Brand column */}
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-3">
              <div
                className="p-2 rounded-xl"
                style={{ background: "rgba(0,132,255,0.15)", border: "1px solid rgba(0,132,255,0.2)" }}
              >
                <Image alt="Ponijeri logo" src={kakanj} height={28} width={28} className="-rotate-12" />
              </div>
              <span className="font-playwrite-hr text-white text-lg font-bold">Explore Ponijeri</span>
            </Link>

            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Planinsko izletište na 1200m nadmorske visine. Skijanje, planinarenje,
              gastronomija i smještaj u srcu bosanske prirode.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/p/Ponijeri-Kakanj-100054256310829/?locale=hr_HR"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2.5 rounded-xl transition-all duration-200 hover:scale-110"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <FaFacebookF className="text-white/70 hover:text-white text-sm" />
              </a>
              <a
                href="https://www.instagram.com/visit.ponijeri/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2.5 rounded-xl transition-all duration-200 hover:scale-110"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <FaInstagram className="text-white/70 hover:text-white text-sm" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-5">
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest">
              Navigacija
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map(({ path, label }) => (
                <li key={path}>
                  <Link
                    href={path}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span
                      className="w-1 h-1 rounded-full bg-main-color-lighter-green opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-5">
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest">
              Kontakt
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/50">
                <FaMapMarkerAlt className="text-main-color-lighter-green mt-0.5 flex-shrink-0" />
                <span>Ponijeri, Općina Kakanj<br />72240, Bosna i Hercegovina</span>
              </li>
              <li>
                <a
                  href="tel:+38732771800"
                  className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors"
                >
                  <FaPhone className="text-main-color-lighter-green flex-shrink-0" />
                  +387 32 771 800
                </a>
              </li>
              <li>
                <a
                  href="mailto:opcinaka@bih.net.ba"
                  className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors"
                >
                  <FaEnvelope className="text-main-color-lighter-green flex-shrink-0" />
                  opcinaka@bih.net.ba
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Općina Kakanj. Sva prava zadržana.
          </p>
          <p className="text-white/20 text-xs">
            Explore Ponijeri — Kakanj, BiH
          </p>
        </div>
      </div>
    </footer>
  );
}
