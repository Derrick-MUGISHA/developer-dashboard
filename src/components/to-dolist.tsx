import { useState, useContext } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Trash2 } from "lucide-react";
import { ThemeContext } from "@/context/ThemeContext";

export default function Todolist() {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.theme || "light";
  const isDark = theme === "dark";

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <Card
      className={`w-full max-w-md rounded-xl shadow-lg p-4 transition-colors duration-300 
        ${isDark ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"}`}
    >
      <CardHeader className="pb-2">
        <CardTitle
          className={`text-left text-2xl font-bold ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          To-Do List
        </CardTitle>
      </CardHeader>

      <CardContent>
        {/* Input + Add button */}
        <div className="flex flex-col mb-4 space-y-3">
          <input
            type="text"
            placeholder="Add new task"
            className={`w-full p-3 text-lg border rounded-md outline-none transition-colors
              ${
                isDark
                  ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
              }`}
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
          />
          <button
            className={`w-full py-3 text-lg rounded-md font-semibold transition-colors
              ${
                isDark
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              }`}
            onClick={addTask}
          >
            Add Task
          </button>
        </div>

        {/* Task list */}
        <div
          className={`${
            tasks.length > 1 ? "max-h-60 overflow-y-auto" : ""
          } space-y-3`}
        >
          <ul>
            {tasks.map((t, index) => (
              <li
                key={index}
                className={`flex justify-between items-center p-3 text-lg rounded-md transition-colors
                  ${isDark ? "bg-gray-700" : "bg-gray-200"}`}
              >
                <span>{t}</span>
                <button
                  onClick={() => deleteTask(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
