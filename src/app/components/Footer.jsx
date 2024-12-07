import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="p-10 md:p-20">
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
              <a href="#about" className="hover:text-blue-500">
                O nama
              </a>
            </li>
            <li className="mb-2">
              <a href="#services" className="hover:text-blue-500">
                Slike
              </a>
            </li>
            <li className="mb-2">
              <a href="#contact" className="hover:text-blue-500">
                Restorani
              </a>
            </li>
            <li className="mb-2">
              <a href="#gallery" className="hover:text-blue-500">
                Prebivališta
              </a>
            </li>
            <li className="mb-2">
              <a href="#gallery" className="hover:text-blue-500">
                Aktivnosti
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-2xl font-semibold mb-5">Pratite nas</h2>
          <div className="flex space-x-5">
            <a
              href="#"
              className="text-blue-500 hover:text-blue-600"
              aria-label="Facebook"
            >
              <FaFacebookF size={28} />
            </a>
            <a
              href="#"
              className="text-blue-500 hover:text-blue-600"
              aria-label="Instagram"
            >
              <FaInstagram size={28} />
            </a>
            <a
              href="#"
              className="text-blue-500 hover:text-blue-600"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center border-t border-gray-300 pt-5">
        <p className="text-sm text-gray-600">
          © 2024 Općina Kakanj. Sva prava zadržana.
        </p>
      </div>
    </div>
  );
}
