// src/components/Quote.tsx
import { useContext } from "react";
import { Card, CardHeader } from "./ui/card";
import { ThemeContext } from "@/context/ThemeContext";
import { useQuotes } from "@/hooks/useQuotes";
import { QuoteIcon } from "lucide-react";

export default function Quote() {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.theme || "light";
  const isDark = theme === "dark";

  const { quote, loading, error } = useQuotes();

  return (
    <Card
      className={`w-md p-6 rounded-lg shadow-md transition-colors duration-300 ${
        isDark ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <CardHeader className="text-lg font-bold mb-4 text-left">
        Motivational Quote
      </CardHeader>

      {loading ? (
        <p className={isDark ? "text-gray-300" : "text-gray-700"}>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : quote ? (
        <div className="flex flex-col space-y-3">
          <div className="flex items-start mb-2">
            <QuoteIcon
              className={`w-6 h-6 mr-2 ${isDark ? "text-gray-400" : "text-gray-500"}`}
            />
            <p className={isDark ? "text-gray-200" : "text-gray-800"}>"{quote.quote}"</p>
          </div>
          <div className={`text-sm mt-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            - {quote.author || "Unknown"}
          </div>
        </div>
      ) : (
        <p>No quote available.</p>
      )}
    </Card>
  );
}
