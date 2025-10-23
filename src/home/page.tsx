import CurrentWeather from "@/components/currentWeather";
import Github from "@/components/github";
import Quote from "@/components/quote";
import Todolist from "@/components/to-dolist";
import { Header } from "@/shared/Header";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center transition-colors bg-gray-100 dark:bg-gray-900 text-center px-6">
      <Header />

      <p className="text-gray-600 dark:text-gray-400 max-w-lg mt-6">
        A React + TypeScript dashboard that displays real-time developer info
        weather, GitHub stats, motivational quotes, and a personal to-do list.
      </p>

      <div className="bg-gray-200 dark:bg-gray-800 rounded-lg shadow-lg mt-6 p-6">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          <CurrentWeather />
          <Github />
          <Quote />
          <Todolist />
        </div>
      </div>
    </div>
  );
}
