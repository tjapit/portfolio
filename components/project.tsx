"use client";

import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // [animation start: start of the target (ref) meets the end of the viewport,
    // animation end: end of the target (ref) meets the end of the viewport]
    offset: ["start end", "end end"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section
        className="relative max-w-[42rem] bg-gray-100 border 
      border-black/5 rounded-xl overflow-hidden sm:pr-8 sm:h-[20rem] 
      group-even:pl-8 hover:bg-gray-200 transition duration-500"
      >
        <div
          className="pt-4 pb-7 px-5 h-full flex flex-col 
          sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] group-even:ml-[18rem]"
        >
          <h3 className="text-2xl">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
          <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
            {tags.map((tag, i) => (
              <li
                key={i}
                className="px-3 py-1 bg-black/[.7] text-[.7rem] uppercase 
              tracking-wider text-white rounded-full"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt={`Project ${title}`}
          quality={95}
          className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl 
        transition
        duration-300
        group-even:right-[initial] 
        group-even:-left-40 

        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2
        group-hover:scale-105

        group-even:group-hover:translate-x-3
        group-even:group-hover:-translate-y-3
        group-even:group-hover:rotate-2
        "
        />
      </section>
    </motion.div>
  );
}
