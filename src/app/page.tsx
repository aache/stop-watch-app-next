"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [isCounting, setIsCounting] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isCounting) return;

    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isCounting]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200 text-gray-800">
      <h1 className="text-4xl font-bold mb-8">⏱️ React Stopwatch</h1>

      <div className="text-6xl font-mono font-semibold bg-white px-8 py-4 rounded-2xl shadow-lg mb-6">
        {count}
      </div>

      <button
        className={`px-6 py-3 text-lg rounded-full shadow-md transition-all duration-200 ${
          isCounting
            ? "bg-red-500 hover:bg-red-600 text-white"
            : "bg-green-500 hover:bg-green-600 text-white"
        }`}
        onClick={() => setIsCounting((prev) => !prev)}
      >
        {isCounting ? "Stop" : "Start"}
      </button>
      <button
        className="ml-4 px-6 py-3 text-lg bg-gray-300 hover:bg-gray-400 rounded-full shadow-md transition-all duration-200"
        onClick={() => {
          setIsCounting(false);
          setCount(0);
        }
      }
      >
        Reset
      </button>
    </div>
  );
}
