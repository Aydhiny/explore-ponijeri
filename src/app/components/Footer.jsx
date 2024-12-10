import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import LinkImage from "../images/kakanj.png";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="p-10 bg-blue-50 text-gray-600 md:p-20">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
        {/* Contact Information */}
        <div className="mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-playwrite-hr font-bold mb-5">
            Kontakt informacije
          </h1>
          <p className="text-lg">Općina Kakanj</p>
          <p className="text-lg">72240</p>
          <p className="text-lg">Mobilni tel: +387 123 456 789</p>
        </div>

        {/* Navigation Links */}
        <div className="mb-10 md:mb-0">
          <h2 className="text-2xl font-semibold mb-5">Brzi linkovi</h2>
          <ul>
            <li className="mb-2">
              <Link href="/about" className="hover:text-blue-500">
                O nama
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/skijanje" className="hover:text-blue-500">
                Skijanje
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/restorani" className="hover:text-blue-500">
                Restorani
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/prebivalista" className="hover:text-blue-500">
                Prebivališta
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/blog" className="hover:text-blue-500">
                Aktivnosti
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-2xl font-semibold mb-5">Pratite nas</h2>
          <div className="flex space-x-5">
            <a
              href="https://www.facebook.com/p/Ponijeri-Kakanj-100054256310829/?locale=hr_HR"
              className="text-blue-500 hover:text-blue-600"
              aria-label="Facebook"
            >
              <FaFacebookF size={28} />
            </a>
            <a
              href="https://www.instagram.com/visit.ponijeri/?hl=en"
              className="text-blue-500 hover:text-blue-600"
              aria-label="Instagram"
            >
              <FaInstagram size={28} />
            </a>
            <a
              href="https://kakanj.gov.ba/"
              className="text-blue-500 hover:text-blue-600"
              aria-label="Website"
            >
              <Image alt="image" src={LinkImage} height={25} width={25} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center pt-8">
        <p className="text-sm text-gray-600">
          © 2024 Općina Kakanj. Sva prava zadržana.
        </p>
      </div>
    </div>
  );
}
