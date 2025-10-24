// src/components/CurrentWeather.tsx
import { useContext, useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ThemeContext } from "@/context/ThemeContext";
import { useWeather } from "@/hooks/useWeather";

export default function CurrentWeather() {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.theme || "light";
  const isDark = theme === "dark";

  const { data, loading } = useWeather();
  const [time, setTime] = useState(new Date());

    useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date()); 
    }, 1000);

    return () => clearInterval(timer); 
  }, []);

  return (
    <Card
      className={`w-full max-w-md rounded-xl shadow-lg p-4 transition-colors duration-300 
        ${isDark ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"}`}
    >
      <CardHeader className="pb-2">
        <CardTitle className={`text-left text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
          Current Weather
        </CardTitle>
      </CardHeader>

      <CardContent>
        {loading || !data ? (
          <p className={isDark ? "text-gray-300" : "text-gray-700"}>Loading weather...</p>
        ) : (
          <>
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-start">
                <img src={data.icon} alt="Weather Icon" className="w-20 h-20" />
              </div>
              <p className={`text-5xl font-bold ${isDark ? "text-white" : "text-gray-800"}`}>
                {data.temperature}°C
              </p>
            </div>

            <div className={`flex justify-between mt-6 border-t pt-3 ${isDark ? "border-gray-700 text-gray-300" : "border-gray-300 text-gray-700"}`}>
              <div className="text-left">
                <p>Wind: {data.wind} km/h</p>
                <p>Humidity: {data.humidity}%</p>
              </div>
              <div className="text-right">
                 <p>Time: {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                <p>Location: {data.city}</p>
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}
