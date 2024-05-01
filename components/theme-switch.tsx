"use client";

import { Theme } from "@/lib/types";
import { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;

    if (localTheme) {
      setTheme(localTheme);

      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");

      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  return (
    <button
      className="fixed bottom-5 right-5 
      w-[3rem] h-[3rem]
      flex items-center justify-center
      bg-white/80 backdrop-blur-sm borderBlack rounded-full shadow-2xl
      hover:scale-125 active:scale-105
      transition-all
      "
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
