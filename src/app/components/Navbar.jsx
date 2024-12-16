"use client";
import Link from "next/link";
import React, { useState } from "react";
import Tree from "../images/tree.png";
import kakanj from "../images/kakanj.png";
import Image from "next/image";
import { FaCloudRain, FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <div className="p-4 w-full xl:static fixed top-0 z-50 bg-gradient-to-l from-[#a7cdfff5] to-[#cfe2ffc2] backdrop-blur-md shadow-md border-b-2 border-opacity-35 border-y-main-color-lighter-green">
      {/* Desktop Navbar */}
      <ul className="hidden md:flex justify-between items-center text-main-color-dark-green text-sm">
        <div className="flex cursor-pointer items-center">
          <Link href="/">
            <Image
              alt="kakanj"
              className="mr-6 -rotate-12"
              src={kakanj}
              height={26}
              width={26}
            />
          </Link>
          <div className="flex items-center">
            <FaCloudRain className="size-6 mr-2" />
            <p>-3 °C</p>
          </div>
        </div>
        <div className="flex">
          {[
            { path: "/", label: "Početna" },
            { path: "/skiing", label: "Skijanje" },
            { path: "/restaurants", label: "Restorani" },
            { path: "/lodging", label: "Prebivališta" },
            { path: "/blog", label: "Blog" },
            { path: "/about", label: "O nama" },
          ].map(({ path, label }) => (
            <li
              key={path}
              className={`mx-4 transition-all duration-150 ${
                isActive(path)
                  ? "text-blue-950 font-bold"
                  : "hover:text-blue-950"
              }`}
            >
              <Link href={path}>{label}</Link>
            </li>
          ))}
        </div>
        <Image
          alt="tree"
          className="ml-6 rotate-12"
          src={Tree}
          height={26}
          width={26}
        />
      </ul>

      {/* Mobile Navbar */}
      <div className="flex md:hidden justify-between items-center">
        <Image
          alt="kakanj"
          className="-rotate-12"
          src={kakanj}
          height={26}
          width={26}
        />
        <div
          className="text-main-color-dark-green cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gradient-to-l from-[#a7cdff] to-[#cfe2ff] backdrop-blur-md shadow-lg">
          <ul className="flex flex-col items-center py-4 text-main-color-dark-green text-sm space-y-3">
            {[
              { path: "/", label: "Početna" },
              { path: "/skiing", label: "Skijanje" },
              { path: "/restaurants", label: "Restorani" },
              { path: "/lodging", label: "Prebivališta" },
              { path: "/blog", label: "Blog" },
              { path: "/about", label: "O nama" },
            ].map(({ path, label }) => (
              <li
                key={path}
                className={`transition-all duration-150 ${
                  isActive(path) ? "text-black font-bold" : "hover:text-black"
                }`}
              >
                <Link href={path}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
