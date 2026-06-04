"use client";
import { useState, useEffect } from "react";
import { FaSnowflake } from "react-icons/fa";
import { WiCloud } from "react-icons/wi";

export default function WeatherDisplay({ scrolled = true }) {
  const [temp,    setTemp]    = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Kakanj?unitGroup=metric&key=U8SUTXBXQPRVHGMC37QCQQYFU&contentType=json"
    )
      .then((r) => r.json())
      .then((d) => setTemp(d.currentConditions?.temp ?? null))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (loading || temp === null) return null;

  const snowy = temp <= 2;
  const color = "rgba(0,47,90,0.7)";
  const bg    = "rgba(0,132,255,0.08)";
  const border= "rgba(0,132,255,0.15)";

  return (
    <div
      className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium select-none transition-all duration-300"
      style={{ background: bg, border: `1px solid ${border}`, color }}
    >
      {snowy
        ? <FaSnowflake className="text-brand-mid" style={{ fontSize: 10 }} />
        : <WiCloud style={{ fontSize: 14, color: "#4fa8ff" }} />
      }
      <span>{Math.round(temp)}°C</span>
    </div>
  );
}
