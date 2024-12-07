"use client";
import React from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

const backgroundImage = new URL("../images/ponijeri.jpg", import.meta.url);

export default function Header() {
  const particlesInit = async (engine) => {
    console.log("Initializing particles...");
    await loadFull(engine);
    console.log("Particles loaded successfully.");
  };

  const particlesOptions = {
    background: {
      color: {
        value: "#00000000", // Transparent background
      },
    },
    fpsLimit: 60,
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5,
      },
      size: {
        value: 3,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        outMode: "bounce",
        attract: {
          enable: false,
        },
      },
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
        onClick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
      },
    },
    detectRetina: true,
  };

  return (
    <div
      className="w-full h-[100vh] relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 z-0"
      />

      {/* Content in the center */}
      <div className="absolute inset-0 items-center justify-center flex flex-col z-10">
        <div className="text-center items-center flex flex-col">
          <p className="text-main-color-lighter-green text-2xl">Dobrodošli</p>
          <h1 className="text-5xl font-spicy-rice md:text-8xl lg:text-9xl font-semibold text-gray-600">
            EXPLORE{" "}
            <span className="text-main-color-lighter-green">PONIJERI</span>
          </h1>
          <div className="mt-4 h-1 w-1/3 mx-auto bg-gradient-to-t from-main-color-lighter-green via-blue-500 to-main-color-dark-green rounded-full"></div>
          <div className="flex m-4">
            <button className="text-main-color-dark-green border-b-2 mr-8 hover:bg-black hover:text-white transition-all duration-150 hover:border-none border-main-color-dark-green rounded-sm font-bold shadow-xl px-8 py-3 bg-main-color-lighter-green">
              Obilazak
            </button>
            <button className="text-gray-600 border-2 hover:border-none hover:bg-main-color-lighter-green transition-all duration-150 hover:text-main-color-dark-green border-gray-600 rounded-sm font-bold shadow-xl px-8 py-3 bg-none">
              O nama
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
