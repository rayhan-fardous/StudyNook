"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-8 h-8 bg-white rounded-xl shadow" />;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-1.5 rounded-full border border-black/10 bg-white/80 shadow dark:bg-gray-700 dark:border-white/20 active:scale-90 transition-transform duration-200"
    >
      <div
        className={`transition-transform duration-500 ease-out ${isDark ? "rotate-180" : "rotate-0"}`}
      >
        {isDark ? (
          <FaSun className="w-5 h-5 text-amber-500" />
        ) : (
          <FaMoon className="w-5 h-5 text-slate-700" />
        )}
      </div>
    </button>
  );
};

export default ThemeSwitch;