import { useState, useEffect } from "react";
import type { Quote } from "@/types/quote";

export const useQuotes = () => {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuote = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch("https://dummyjson.com/quotes");
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);

        const data = await res.json();
        const quotes: Quote[] = data.quotes;

        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

        setQuote(randomQuote);
        localStorage.setItem("daily-quote", JSON.stringify(randomQuote));
      } catch (err) {
        setError((err as Error).message);
        console.error("Error fetching quote:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchQuote();
  }, []);

  return { quote, loading, error };
};
