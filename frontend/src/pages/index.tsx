import { useState } from "react";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [input, setInput] = useState("");

  const handleGo = () => {
    console.log("Input value:", input);
  };

  return (
    <div className={`${geistSans.className} ${geistMono.className} flex min-h-screen bg-gray-50`}>
      {/* Sidebar */}
      <aside className="w-56 bg-white border-r border-gray-200 flex flex-col p-4">
        <h2 className="text-lg font-bold mb-6">ToxicRadar</h2>
        <nav className="flex flex-col gap-4">
          <button className="text-left text-gray-700 hover:text-blue-600">
            Dashboard
          </button>
          <button className="text-left text-gray-700 hover:text-blue-600">
            Data
          </button>
          <button className="text-left text-gray-700 hover:text-blue-600">
            Analysis
          </button>
          <button className="text-left text-gray-700 hover:text-blue-600">
            Settings
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col p-8 gap-6">
        <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
        <div className="bg-white rounded-lg shadow p-6 flex flex-col gap-4 min-h-[200px] justify-center items-center border border-gray-200">
          <span className="text-gray-400">No data yet</span>
        </div>
        <div className="bg-white rounded-lg shadow p-6 flex flex-col gap-4 min-h-[200px] justify-center items-center border border-gray-200">
          <span className="text-gray-400">More data or widgets coming soon</span>
        </div>
      </main>

      {/* Analysis Panel */}
      <aside className="w-80 bg-white border-l border-gray-200 flex flex-col p-4">
        <h2 className="text-lg font-bold mb-6">Analysis</h2>
        <div className="flex-1 flex flex-col gap-4">
          <div className="bg-gray-100 rounded p-4 text-gray-500 text-center">
            Analysis and insights will appear here.
          </div>
        </div>
      </aside>
    </div>
  );
}
