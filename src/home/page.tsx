import { Button } from "@/components/ui/button";

const dependencies = [
  "@radix-ui/react-slot",
  "@tailwindcss/vite",
  "class-variance-authority",
  "clsx",
  "lucide-react",
  "react",
  "react-dom",
  "tailwind-merge",
  "tailwindcss",
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-center px-6">
      <h1 className="text-4xl font-bold text-white dark:text-white mb-4">
        Developer Dashboard
      </h1>

      <p className="text-gray-400 dark:text-gray-400 max-w-lg mb-6">
        A React + TypeScript dashboard that displays real-time developer info 
        including weather, GitHub stats, motivational quotes, and a personal to-do list.
      </p>

      <Button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
        shadcn ui
      </Button>

      <footer className="mt-10 text-sm text-gray-400">
        <p>Dependencies used:</p>
        <ul className="mt-2 space-y-1">
          {dependencies.map((dep) => (
            <li key={dep}>{dep}</li>
          ))}
        </ul>
      </footer>
    </div>
  );
}
