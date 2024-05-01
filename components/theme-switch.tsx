"use client";

import { useThemeContext } from "@/context/theme-context";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button
      className="fixed bottom-5 right-5 
      w-[3rem] h-[3rem]
      flex items-center justify-center
      bg-white/80 backdrop-blur-sm borderBlack rounded-full shadow-2xl outline-black
      hover:scale-125 active:scale-105 transition-all
      dark:bg-gray-950/80 dark:border-white/10 dark:hover:text-white
      "
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
