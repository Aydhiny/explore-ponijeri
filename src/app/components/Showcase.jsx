"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
const backgroundImage = new URL("../images/ponijeri.png", import.meta.url);
export default function VideoSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full h-screen cursor-default relative bg-cover shadow-2xl bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Content in the center */}
      <div className="absolute inset-0 items-center justify-center flex flex-col z-10">
        {isVisible && (
          <>
            <motion.h1
              className="text-6xl mb-8 font-playwrite-hr font-bold text-main-color-lighter-green text-center"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Naši <span className="text-gray-600">Ponijeri</span>
            </motion.h1>

            <motion.div
              className="relative w-full h-[60%] max-w-5xl rounded-xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              <iframe
                src="https://www.youtube.com/embed/2l4idGxkm_M"
                title="Naši Ponijeri Video"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
}
