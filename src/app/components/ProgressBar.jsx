"use client";
import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);
  const springProgress = useSpring(0, { stiffness: 120, damping: 25 });

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const pct = Math.min(Math.max((scrollTop / total) * 100, 0), 100);
      setProgress(pct);
      springProgress.set(pct);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [springProgress]);

  return (
    <div className="progress-bar-track">
      <motion.div
        className="progress-bar-fill"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
