import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import LinkImage from "../images/kakanj.png";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="p-5 md:p-20 bg-blue-50 text-gray-600">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-10 md:space-y-0">
        {/* Contact Information */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-6xl font-playwrite-hr font-bold mb-3 md:mb-5">
            Kontakt informacije
          </h1>
          <p className="text-base md:text-lg">Općina Kakanj</p>
          <p className="text-base md:text-lg">72240</p>
          <p className="text-base md:text-lg">Mobilni tel: +387 32 771 800</p>
        </div>

        {/* Navigation Links */}
        <div className="text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-5">
            Brzi linkovi
          </h2>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:text-blue-500">
                O nama
              </Link>
            </li>
            <li>
              <Link href="/skiing" className="hover:text-blue-500">
                Skijanje
              </Link>
            </li>
            <li>
              <Link href="/restaurants" className="hover:text-blue-500">
                Restorani
              </Link>
            </li>
            <li>
              <Link href="/lodging" className="hover:text-blue-500">
                Prebivališta
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-blue-500">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="text-center">
          <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-5">
            Pratite nas
          </h2>
          <div className="flex justify-center md:justify-start space-x-5">
            <a
              href="https://www.facebook.com/p/Ponijeri-Kakanj-100054256310829/?locale=hr_HR"
              className="text-blue-500 hover:text-blue-600"
              aria-label="Facebook"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://www.instagram.com/visit.ponijeri/?hl=en"
              className="text-blue-500 hover:text-blue-600"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://kakanj.gov.ba/"
              className="text-blue-500 hover:text-blue-600"
              aria-label="Website"
            >
              <Image alt="image" src={LinkImage} height={20} width={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center pt-5 md:pt-8">
        <p className="text-xs md:text-sm text-gray-600">
          © 2024 Općina Kakanj. Sva prava zadržana.
        </p>
      </div>
    </div>
  );
}
