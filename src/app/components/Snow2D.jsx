"use client";
import { useEffect, useRef } from "react";

// Soft circular snow particles — pure 2D canvas, zero WebGL / Three.js
export default function Snow2D() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width  = W;
    canvas.height = H;

    // Pre-render a single soft-circle sprite to reuse every frame
    const SZ = 12;
    const sprite = document.createElement("canvas");
    sprite.width = sprite.height = SZ;
    const sc  = sprite.getContext("2d");
    const sg  = sc.createRadialGradient(SZ/2, SZ/2, 0, SZ/2, SZ/2, SZ/2);
    sg.addColorStop(0,   "rgba(255,255,255,1)");
    sg.addColorStop(0.5, "rgba(220,238,255,0.7)");
    sg.addColorStop(1,   "rgba(200,228,255,0)");
    sc.fillStyle = sg;
    sc.fillRect(0, 0, SZ, SZ);

    const COUNT = Math.min(Math.floor((W * H) / 7000), 260);

    const p = Array.from({ length: COUNT }, () => ({
      x:     Math.random() * W,
      y:     Math.random() * H,
      r:     0.5 + Math.random() * 1.4,   // much smaller
      vy:    0.3 + Math.random() * 0.65,
      phase: Math.random() * Math.PI * 2,
      alpha: 0.15 + Math.random() * 0.32, // much more subtle
    }));

    let frame, t = 0;

    const tick = () => {
      ctx.clearRect(0, 0, W, H);
      t += 0.007;

      for (const q of p) {
        q.y += q.vy;
        q.x += Math.sin(t * 0.4 + q.phase) * 0.38;
        if (q.y > H + 6) { q.y = -6;    q.x = Math.random() * W; }
        if (q.x > W + 6) { q.x = -6;  }
        if (q.x < -6)    { q.x = W + 6; }

        ctx.globalAlpha = q.alpha;
        const d = q.r * 2;
        ctx.drawImage(sprite, q.x - q.r, q.y - q.r, d, d);
      }

      ctx.globalAlpha = 1;
      frame = requestAnimationFrame(tick);
    };

    tick();

    const onResize = () => {
      W = window.innerWidth; H = window.innerHeight;
      canvas.width = W; canvas.height = H;
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="absolute inset-0 z-[4] pointer-events-none"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
