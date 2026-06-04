"use client";
import { useRef } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

export function MovingBorder({ children, duration = 3500, className, containerClassName }) {
  const pathRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useAnimationFrame((time) => {
    const path = pathRef.current;
    if (!path) return;
    const len = path.getTotalLength();
    const pt  = path.getPointAtLength(((time / duration) % 1) * len);
    x.set(pt.x - 50);
    y.set(pt.y - 50);
  });

  return (
    <div className={cn("relative overflow-hidden rounded-2xl p-px", containerClassName)}>
      {/* Travelling glow dot */}
      <div className="absolute inset-0 overflow-hidden rounded-[inherit]" aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute w-full h-full"
          preserveAspectRatio="none"
        >
          <rect ref={pathRef} fill="none" width="100%" height="100%" rx="16" ry="16" />
        </svg>
        <motion.div
          className="absolute w-[100px] h-[100px] rounded-full"
          style={{
            x,
            y,
            background:
              "radial-gradient(circle, rgba(0,132,255,0.9) 0%, rgba(79,168,255,0.35) 40%, transparent 70%)",
          }}
        />
      </div>

      {/* Card surface */}
      <div
        className={cn("relative z-10 rounded-[calc(1rem-1px)]", className)}
        style={{
          background: "rgba(6,13,26,0.95)",
          border: "1px solid rgba(255,255,255,0.04)",
        }}
      >
        {children}
      </div>
    </div>
  );
}
