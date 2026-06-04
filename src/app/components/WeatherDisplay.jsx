"use client";
import React, { useState, useEffect } from "react";
import { FaSnowflake, FaCloud } from "react-icons/fa";
import { WiThermometer } from "react-icons/wi";

const WeatherDisplay = () => {
  const [temperature, setTemperature] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Kakanj?unitGroup=metric&key=U8SUTXBXQPRVHGMC37QCQQYFU&contentType=json"
        );
        if (!res.ok) throw new Error("API error");
        const data = await res.json();
        const temp = data.currentConditions?.temp;
        if (temp === undefined) throw new Error("No temp data");
        setTemperature(temp);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchWeather();
  }, []);

  if (loading) {
    return (
      <div
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs text-gray-400"
        style={{ background: "rgba(0,132,255,0.06)", border: "1px solid rgba(0,132,255,0.1)" }}
      >
        <FaCloud className="animate-pulse text-blue-300" />
        <span>...</span>
      </div>
    );
  }

  if (error) return null;

  const isSnowy = temperature !== null && temperature <= 2;

  return (
    <div
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-main-color-dark-green"
      style={{ background: "rgba(0,132,255,0.08)", border: "1px solid rgba(0,132,255,0.15)" }}
    >
      {isSnowy
        ? <FaSnowflake className="text-blue-400 text-xs" />
        : <FaCloud className="text-blue-400 text-xs" />
      }
      <span>{temperature}°C</span>
    </div>
  );
};

export default WeatherDisplay;
