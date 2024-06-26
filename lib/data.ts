import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import passioImg from "@/public/passio.png";
import flaskmigImg from "@/public/flaskmig.png";
import mimymutImg from "@/public/mimymut.png";
import rtdtImg from "@/public/rtdt.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Connect",
    hash: "#connect",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated University",
    location: "Raleigh, NC",
    description:
      "I graduated from NC State University with a Bachelors in Aerospace Engineering, and decided to pursue programming as a career and landed on web development.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Sealabs ID Digital Academy",
    location: "Jakarta, ID",
    description:
      "I enrolled in a bootcamp training as a full-stack developer. The stack included React, TypeScript, Tailwind on the front-end and Go, Gin, Gorm, Redis, and PostgreSQL on the backend.",
    icon: React.createElement(FaReact),
    date: "2022",
  },
  {
    title: "Front-End Developer",
    location: "Jakarta, ID",
    description:
      "After the bootcamp, I was hired by Shopee to work as a front-end developer for 1 year.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Jakarta, ID",
    description:
      "I'm currently working as a freelance full-stack webdev, my main stack is React & Go. I'm open to full-time opportunities.",
    icon: React.createElement(CgWorkAlt),
    date: "2023-Present",
  },
] as const;

export const projectsData = [
  {
    title: "Mimymut",
    description:
      " Brand portfolio for Mimymut, a shop that sells hand-woven tote bags. [UNDER CONSTRUCTION]",
    tags: [
      "React",
      "TypeScript",
      "Tailwind",
      "Go",
      "Gin",
      "PostgreSQL",
      "Docker",
    ],
    imageUrl: mimymutImg,
  },
  {
    title: "MIG Absence",
    description:
      "Absence/Activity recorder for employees. People can check-in/out, record their tasks, and manage or edit their existing tasks.",
    tags: ["Python", "Flask", "SQLite"],
    imageUrl: flaskmigImg,
  },
  {
    title: "Passio",
    description:
      "Full-stack dating app. Users can match with other users and plan dates on available dating venues.",
    tags: ["React", "JS", "Tailwind", "Go", "Gin", "PostgreSQL"],
    imageUrl: passioImg,
  },
  {
    title: "RTDT",
    description:
      "CLI program in Python to communicate wirelessly to a rover to send commands (i.e. move, steer, show status, take picture, ftp) through TCP.",
    tags: ["Python", "Linux", "Networking", "Embedded Systems"],
    imageUrl: rtdtImg,
  },
] as const;

export const backendSkillsData = [
  "Go",
  "Gin",
  "Gorm",
  "Redis",
  "PostgreSQL",
  "Python",
  "Django",
  "Flask",
  "SQLite",
  "Docker",
] as const;

export const frontendSkillsData = [
  "HTML",
  "CSS",
  "JS",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Redux",
  "Framer Motion",
] as const;
