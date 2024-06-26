"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import Link from "next/link";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView({ sectionName: "Home" });
  const { setActiveSection, setLastClicked } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/tim.jpg"
              alt="Tim portrait"
              width="240"
              height="240"
              priority={true}
              className="object-cover rounded-full border-[.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-2 right-2 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <b>Hello, I'm Tim.</b> I'm a <b>full-stack developer</b> with{" "}
        <b>3 years</b> of experience. I enjoy building <em>sites & apps</em>. My
        focus is <u>React & Go.</u>
      </motion.h1>

      <motion.div
        className="px-4 
        flex flex-col items-center justify-center gap-2 
        text-lg font-medium
        sm:flex-row
        "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#connect"
          className="group px-7 py-3 flex items-center gap-2 bg-gray-900 
          text-white rounded-full outline-none 
          dark:bg-white dark:text-gray-900
          focus:scale-110 
          hover:scale-110 
          hover:bg-gray-950 
          active:scale-105 
          transition
          "
          onClick={() => {
            setActiveSection("Connect");
            setLastClicked(Date.now());
          }}
        >
          Connect with me{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          href="/CV.pdf"
          className="group px-7 py-3 flex items-center gap-2 bg-white 
          borderBlack rounded-full outline-none 
          dark:bg-white/10 dark:text-white/60 dark:hover:text-white
          focus:scale-110 
          hover:scale-110
          active:scale-105 
          transition
          "
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          href="https://linkedin.com/in/timothyjapit"
          target="_blank"
          rel="noopener"
          className="p-4 flex items-center gap-2 bg-white text-gray-700 
          rounded-full outline-none cursor-pointer borderBlack
          dark:bg-white/10 dark:text-white/60 dark:hover:text-white
          focus:scale-[1.15] 
          hover:scale-[1.15] hover:text-gray-950
          active:scale-105 
          transition
          "
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/tjapit"
          target="_blank"
          rel="noopener"
          className="p-4 flex items-center gap-2 bg-white text-gray-700 
          rounded-full outline-none cursor-pointer borderBlack
          dark:bg-white/10 dark:text-white/60 dark:hover:text-white
          focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 
          active:scale-105 
          transition
          "
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
