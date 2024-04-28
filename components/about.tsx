"use client";

import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="mb-28 max-w-[45rem] text-center leading-8 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Aerospace Engineering</span>, I decided to
        pursue my passion for programming. I enrolled in a coding bootcamp and
        learned <span className="font-medium">full-stack web development</span>{" "}
        with <u>React</u> as frontend and <u>Go</u> as backend. My{" "}
        <em>favorite</em> part of programming is the problem-solving aspect. I{" "}
        <b>love</b> the feeling of finally figuring out a solution to a problem
        that's been bugging me for a while. I love to get involved. My core
        stack is{" "}
        <span className="font-medium">
          React in TypeScript, Go + Gin, Redis, and PostgreSQL
        </span>
        . I'm also familiar with{" "}
        <em>Tailwind, Docker, and deploying apps to a Linux server</em>. I'm
        always looking to learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <em>When I'm not coding</em>, I enjoy tinkering with my IDE config,{" "}
        <a
          href="https://neovim.io/"
          target="_blank"
          rel="noopener"
          className="relative group text-rose-600 hover:bg-gradient-to-r hover:from-[#2857a1] hover:to-[#3ab952] hover:text-transparent hover:bg-clip-text duration-300"
        >
          Neovim
          <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-[#2857a1] to-[#3ec63f] transition-all duration-300"></span>
        </a>
        , adding new plugins to boost my accessibility and productivity,
        journaling, yoga, meditation, and exercise. I also very much enjoy{" "}
        <span className="font-medium">learning new things</span>. My favorite
        has recently been learning more about myself and mental health through{" "}
        <a
          href="https://www.youtube.com/@HealthyGamerGG"
          target="_blank"
          rel="noopener"
          className="relative group text-rose-600 hover:text-[#3ec63f] transition-all duration-300"
        >
          HealthyGamerGG
          <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-[#3ec63f] transition-all duration-300"></span>
        </a>
        . And when I'm not doing that, I love to learn about new commands on the{" "}
        <em>command line</em> so that I can compose them into one, giant{" "}
        <b>super-command</b>! My all time favorite has to be{" "}
        <a
          href="https://github.com/junegunn/fzf"
          target="_blank"
          rel="noopener"
          className="group text-rose-600 transition-all"
        >
          <code className="p-2 group-hover:hover:bg-[#3f3f3f] group-hover:italic rounded-xl">
            <span className="group-hover:text-rose-600 group-hover:pr-2 transition-all duration-300">
              &gt;
            </span>
            <span className="group-hover:text-[#b0e1bd]">fz</span>
            <span className="group-hover:text-[#e9e9e9]">f</span>
          </code>
        </a>
      </p>
    </motion.section>
  );
}
