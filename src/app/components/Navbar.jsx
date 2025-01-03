"use client";
import Link from "next/link";
import React, { useState } from "react";
import Tree from "../images/tree.png";
import kakanj from "../images/kakanj.png";
import Image from "next/image";
import { FaCloudRain, FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";
import WeatherDisplay from "./WeatherDisplay";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <div className="p-4 w-full lg:static shadow-lg fixed top-0 z-50 bg-gradient-to-t from-[#e1f9ffce] to-[#aaccffc2] backdrop-blur-md border-b-2 border-opacity-35 border-y-main-color-lighter-green">
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

          <WeatherDisplay />
          {/*
        <div className="flex items-center">   
                 <p>-3 °C</p>
                 <FaCloudRain className="size-6 mr-2" />
          </div> */}
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
        <Link href="/">
          <Image
            alt="kakanj"
            className="-rotate-12"
            src={kakanj}
            height={26}
            width={26}
          />
        </Link>
        <WeatherDisplay />
        <div
          className="text-main-color-dark-green cursor-pointer relative z-20"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {/* Hamburger icon animation */}
          <div className={`hamburger-icon ${menuOpen ? "open" : ""}`}>
            <div className="line line-1"></div>
            <div className="line line-2"></div>
            <div className="line line-3"></div>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gradient-to-l from-[#a7cdff] to-[#cfe2ff] backdrop-blur-md shadow-lg slide-in">
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
