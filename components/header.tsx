"use client";

import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import type { SectionName } from "@/lib/types";

export default function Header() {
  const { activeSection, setActiveSection, setLastClicked } =
    useActiveSectionContext();

  const handleClick = (name: SectionName) => {
    setActiveSection(name);
    setLastClicked(Date.now());
  };

  return (
    <header className="z-50 relative">
      <motion.div
        className="fixed top-0 left-1/2  h-[4.5rem] w-full 
        rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 
        shadow-lg shadow-black/[.03] backdrop-blur-[0.5rem] 
        sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full
        dark:bg-gray-950/75 dark:border-black/40 
        "
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav
        className="py-2 flex fixed top-[.15rem] left-1/2 h-12 -translate-x-1/2 
        sm:top-[1.7rem] sm:h-[initial] sm:py-0"
      >
        <ul
          className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 
          text-[.9rem] font-medium text-gray-500 
          sm:w-[initial] sm:flex-nowrap sm:gap-5"
        >
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="relative h-3/4 flex items-center justify-center
              "
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={link.hash}
                className={clsx(
                  "p-3 flex w-full items-center justify-center hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                  {
                    "text-gray-950 dark:text-gray-200":
                      activeSection === link.name,
                  },
                )}
                onClick={() => handleClick(link.name)}
              >
                {link.name}

                {activeSection === link.name && (
                  <motion.span
                    className="absolute bg-gray-100 rounded-full inset-0 -z-10
                    dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
