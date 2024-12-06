"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

// Slike koje treba da se menjaju
const images = [
  new URL("../images/ponijeri.png", import.meta.url),
  new URL("../images/ponijeri2.png", import.meta.url),
  new URL("../images/ponijeri3.png", import.meta.url),
];

export default function Header() {
  const [currentImage, setCurrentImage] = useState(0);

  // Interval za promenu slika
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Promena slike na svakih 5 sekundi

    return () => clearInterval(interval); // Čisti interval kad komponenta nestane
  }, []);

  return (
    <div className="w-full h-[100vh] relative overflow-hidden">
      <div
        className="absolute inset-0 flex transition-transform duration-[1s] ease-in-out"
        style={{
          transform: `translateX(-${currentImage * 100}%)`, // Pomeri slike horizontalno
        }}
      >
        {/* Mape za prikazivanje slika */}
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
      </div>

      {/* Sadržaj u sredini */}
      <div className="absolute inset-0 items-center justify-center flex flex-col z-10">
        <div className="text-center items-center flex flex-col">
          <p className="text-main-color-lighter-green text-2xl">Dobrodošli</p>
          <h1 className="text-5xl md:text-8xl lg:text-9xl animate-pulse font-semibold text-white">
            EXPLORE{" "}
            <span className="text-main-color-lighter-green">PONIJERI</span>
          </h1>
          <div className="mt-4 h-1 w-1/3 mx-auto bg-gradient-to-t from-main-color-lighter-green via-green-500 to-main-color-dark-green rounded-full"></div>
          <div className="flex m-4">
            <button className="text-main-color-dark-green border-b-2 mr-8 hover:bg-black hover:text-white transition-all duration-150 hover:border-none border-main-color-dark-green rounded-sm font-bold shadow-xl px-8 py-3 bg-main-color-lighter-green">
              Obilazak
            </button>
            <button className="text-white border-2 hover:border-none hover:bg-main-color-lighter-green transition-all duration-150 hover:text-main-color-dark-green border-white rounded-sm font-bold shadow-xl px-8 py-3 bg-none">
              O nama
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
