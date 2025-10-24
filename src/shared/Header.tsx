import { useContext } from "react";
import { Sun, Moon } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";

export const Header = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) return null;
  const { theme, toggleTheme } = themeContext;

  return (
    <header className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-500 w-1/2 rounded-lg shadow-md">
      <h1 className="text-xl font-bold text-gray-800 dark:text-white">
        Developer Dashboard
      </h1>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 transition-all"
      >
        {theme === "light" ? (
          <Moon className="w-5 h-5 text-gray-900" />
        ) : (
          <Sun className="w-5 h-5 text-yellow-400" />
        )}
      </button>
    </header>
  );
};
