import React, { useState, useEffect } from "react";
import { FaCloudRain } from "react-icons/fa";

const WeatherDisplay = () => {
  const [temperature, setTemperature] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Kakanj?unitGroup=metric&key=U8SUTXBXQPRVHGMC37QCQQYFU&contentType=json"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }

        const data = await response.json();
        const currentTemp = data.currentConditions?.temp;

        if (currentTemp !== undefined) {
          setTemperature(currentTemp);
        } else {
          throw new Error("Temperature data is unavailable");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  if (loading) {
    return <div>Učitavanje podataka...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex items-center">
      <FaCloudRain className="text-blue-500 size-6 mr-2" />
      <p>{temperature} °C</p>
    </div>
  );
};

export default WeatherDisplay;
