"use client";

const FLAKES = [
  { left: "4%",   size: "0.85rem", duration: "11s",  delay: "-2s",  opacity: 0.55, drift: "22px",  rotation: "280deg" },
  { left: "10%",  size: "0.55rem", duration: "16s",  delay: "-7s",  opacity: 0.35, drift: "-14px", rotation: "190deg" },
  { left: "17%",  size: "1.0rem",  duration: "13s",  delay: "-12s", opacity: 0.5,  drift: "30px",  rotation: "340deg" },
  { left: "24%",  size: "0.65rem", duration: "19s",  delay: "-4s",  opacity: 0.3,  drift: "-20px", rotation: "160deg" },
  { left: "31%",  size: "0.9rem",  duration: "14s",  delay: "-16s", opacity: 0.6,  drift: "18px",  rotation: "300deg" },
  { left: "38%",  size: "0.5rem",  duration: "21s",  delay: "-9s",  opacity: 0.28, drift: "-10px", rotation: "210deg" },
  { left: "45%",  size: "1.1rem",  duration: "12s",  delay: "-1s",  opacity: 0.5,  drift: "26px",  rotation: "260deg" },
  { left: "52%",  size: "0.7rem",  duration: "17s",  delay: "-18s", opacity: 0.4,  drift: "-16px", rotation: "140deg" },
  { left: "59%",  size: "0.85rem", duration: "10s",  delay: "-5s",  opacity: 0.55, drift: "20px",  rotation: "310deg" },
  { left: "66%",  size: "0.6rem",  duration: "22s",  delay: "-13s", opacity: 0.32, drift: "-22px", rotation: "180deg" },
  { left: "73%",  size: "1.0rem",  duration: "15s",  delay: "-3s",  opacity: 0.45, drift: "14px",  rotation: "240deg" },
  { left: "80%",  size: "0.55rem", duration: "18s",  delay: "-10s", opacity: 0.35, drift: "-18px", rotation: "200deg" },
  { left: "87%",  size: "0.9rem",  duration: "13s",  delay: "-20s", opacity: 0.5,  drift: "28px",  rotation: "320deg" },
  { left: "92%",  size: "0.7rem",  duration: "16s",  delay: "-6s",  opacity: 0.38, drift: "-12px", rotation: "170deg" },
  { left: "97%",  size: "0.8rem",  duration: "11s",  delay: "-14s", opacity: 0.52, drift: "16px",  rotation: "290deg" },
];

export default function Snowflakes() {
  return (
    <>
      {FLAKES.map((f, i) => (
        <span
          key={i}
          className="snowflake-symbol"
          aria-hidden="true"
          style={{
            left: f.left,
            "--snow-size":     f.size,
            "--snow-duration": f.duration,
            "--snow-delay":    f.delay,
            "--snow-opacity":  f.opacity,
            "--snow-drift":    f.drift,
            "--snow-rotation": f.rotation,
          }}
        >
          ❄
        </span>
      ))}
    </>
  );
}
