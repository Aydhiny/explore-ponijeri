"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import opcina from "../images/opcina-kakanj.png";
import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";
const backgroundImage = new URL("../images/ponijeri.jpg", import.meta.url);

export default function Header() {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    // Only run this on the client
    const generateSnowflakes = () => {
      const numOfSnowflakes = 20;
      const snowflakeArray = [];
      const snowflakeColors = ["#ffffff", "#a9d6e8", "#b0b0b0"]; // White, Light Blue, Grey

      for (let i = 0; i < numOfSnowflakes; i++) {
        snowflakeArray.push({
          left: `${Math.random() * 100}%`, // Randomize starting position
          animationDuration: `${Math.random() * 5 + 5}s`, // Randomize duration
          animationDelay: `${Math.random() * 5}s`, // Randomize delay
          size: `${Math.random() * 10 + 5}px`, // Randomize size
          color:
            snowflakeColors[Math.floor(Math.random() * snowflakeColors.length)], // Random color
        });
      }

      setSnowflakes(snowflakeArray);
    };

    generateSnowflakes();
  }, []);

  return (
    <div
      className="w-full h-screen cursor-default shadow-2xl relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Snow effect */}
      <div className="absolute inset-0 z-0 snow-container">
        {snowflakes.map((snowflake, index) => (
          <div
            key={index}
            className="snowflake"
            style={{
              left: snowflake.left,
              animationDuration: snowflake.animationDuration,
              animationDelay: snowflake.animationDelay,
              width: snowflake.size,
              height: snowflake.size,
              backgroundColor: snowflake.color,
            }}
          />
        ))}
      </div>

      {/* Content in the center */}
      <div className="absolute inset-0 items-center justify-center flex flex-col z-10">
        <motion.div
          className="text-center items-center flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.p
            className="text-main-color-lighter-green text-2xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Dobrodošli
          </motion.p>
          <motion.h1
            className="text-8xl m-4 font-playwrite-hr font-semibold text-gray-600"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            EXPLORE{" "}
            <span className="text-main-color-lighter-green">PONIJERI</span>
          </motion.h1>
          <motion.div
            className="mt-4 h-1 w-1/3 mx-auto bg-gradient-to-t from-main-color-lighter-green via-blue-500 to-blue-700 rounded-full"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "33%" }}
            transition={{ delay: 0.7, duration: 1 }}
          />
          <motion.div
            className="flex m-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1 }}
          >
            <motion.button
              className="text-white border-b-2 mr-8 hover:bg-black hover:text-white transition-all duration-150 hover:border-none border-white rounded-sm font-bold shadow-xl px-8 py-3 bg-blue-600 bg-opacity-60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 1 }}
            >
              Obilazak
            </motion.button>
            <motion.button
              className="text-white border-2 hover:border-none hover:bg-main-color-lighter-green transition-all duration-150 hover:text-main-color-dark-green bg-[#ffffff28] backdrop-blur-md border-white rounded-sm font-bold shadow-xl px-8 py-3 bg-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              O nama
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 1 }}
          >
            <Image
              alt="opcina"
              src={opcina}
              className="cursor-pointer mt-8 hover:bg-white hover:shadow-lg transition-all duration-150 bg-gradient-to-t rounded-full p-4 from-[#a7cdffe5] to-[#cfe2ff85] backdrop-blur-sm border-b-4 border-y-main-color-lighter-green border-opacity-35"
              height={300}
              width={300}
            />
          </motion.div>
        </motion.div>
        <div className="text-white p-4 absolute bottom-0 left-0">
          <div className="flex items-center text-center">
            <FaLocationDot className="mr-2 text-white size-10" />
            <p>Ponijeri, Kakanj</p>
          </div>
        </div>
      </div>

      {/* Snow CSS */}
      <style jsx>{`
        .snow-container {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 1;
        }

        .snowflake {
          position: absolute;
          top: -10px;
          background-color: #ffffff;
          border-radius: 50%;
          animation: fall 5s infinite linear;
          opacity: 0;
        }

        @keyframes fall {
          0% {
            transform: translateY(-100px);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
