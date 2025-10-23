// src/hooks/useWeather.ts
import { useState, useEffect } from "react";
import type { WeatherData } from "@/types/weather";

export const useWeather = () => {
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async (lat: number, lon: number) => {
      setLoading(true);
      try {
        const res = await fetch(`https://wttr.in/${lat},${lon}?format=j1`);
        const json = await res.json();
        const current = json.current_condition[0];

        const weather: WeatherData = {
          temperature: parseFloat(current.temp_C),
          description: current.weatherDesc[0].value,
          city: json.nearest_area[0].areaName[0].value,
          icon: `https://openweathermap.org/img/wn/01d.png`, // simple placeholder icon
          wind: parseFloat(current.windspeedKmph),
          humidity: parseFloat(current.humidity),
          time: current.observation_time,
        };

        setData(weather);
        localStorage.setItem("weather-current", JSON.stringify(weather));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    // Get user location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        fetchWeather(position.coords.latitude, position.coords.longitude);
      },
      (err) => {
        console.warn("Location not available, using default city Kigali.");
        console.error(err);
        fetchWeather(-1.9441, 30.0619);
      }
    );
  }, []);

  return { data, loading };
};
