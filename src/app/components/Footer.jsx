import { FaFacebookF, FaInstagram, FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import kakanj from "../images/kakanj.png";

const NAV = [
  { href: "/about",       label: "O nama"    },
  { href: "/skiing",      label: "Skijanje"  },
  { href: "/restaurants", label: "Restorani" },
  { href: "/lodging",     label: "Smještaj"  },
  { href: "/blog",        label: "Blog"      },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #030810 0%, #020609 100%)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 pt-16 pb-8">

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div
                className="p-2 rounded-xl"
                style={{ background: "rgba(0,132,255,0.12)", border: "1px solid rgba(0,132,255,0.18)" }}
              >
                <Image src={kakanj} alt="logo" width={22} height={22} className="-rotate-12 opacity-80" />
              </div>
              <span className="font-display text-white text-base font-bold">Explore Ponijeri</span>
            </Link>
            <p className="text-white/30 text-[13px] leading-relaxed max-w-xs">
              Planinsko izletište na 1200m nadmorske visine — skijanje, priroda i gostoprimstvo u srcu Bosne.
            </p>
            <div className="flex gap-2.5 pt-1">
              {[
                { href: "https://www.facebook.com/p/Ponijeri-Kakanj-100054256310829/", Icon: FaFacebookF, label: "Facebook" },
                { href: "https://www.instagram.com/visit.ponijeri/",                   Icon: FaInstagram,  label: "Instagram" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <Icon className="text-white/50 text-sm hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-white/40 text-[10px] font-semibold tracking-[0.22em] uppercase mb-5">Navigacija</h4>
            <ul className="space-y-2.5">
              {NAV.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/40 hover:text-white/80 text-[13px] transition-colors duration-150"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white/40 text-[10px] font-semibold tracking-[0.22em] uppercase mb-5">Kontakt</h4>
            <ul className="space-y-3">
              <li>
                <span className="flex items-start gap-2.5 text-[13px] text-white/40">
                  <FaMapMarkerAlt className="text-brand mt-0.5 flex-shrink-0 text-xs" />
                  Ponijeri, Općina Kakanj<br />72240, BiH
                </span>
              </li>
              <li>
                <a href="tel:+38732771800" className="flex items-center gap-2.5 text-[13px] text-white/40 hover:text-white/70 transition-colors">
                  <FaPhone className="text-brand flex-shrink-0 text-xs" />
                  +387 32 771 800
                </a>
              </li>
              <li>
                <a href="mailto:opcinaka@bih.net.ba" className="flex items-center gap-2.5 text-[13px] text-white/40 hover:text-white/70 transition-colors">
                  <FaEnvelope className="text-brand flex-shrink-0 text-xs" />
                  opcinaka@bih.net.ba
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p className="text-white/20 text-[11px]">
            © {new Date().getFullYear()} Općina Kakanj. Sva prava zadržana.
          </p>
          <p className="text-white/15 text-[11px]">Ponijeri, Bosna i Hercegovina</p>
        </div>
      </div>
    </footer>
  );
}
