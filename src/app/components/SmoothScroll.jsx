"use client";
import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration:    1.1,
      easing:      (t) => 1 - Math.pow(1 - t, 4), // easeOutQuart — feels physical
      smoothWheel: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    // Expose on window so other components can call lenis.scrollTo()
    window.__lenis = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  return <>{children}</>;
}
