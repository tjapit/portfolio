import { projectsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import React from "react";
import Image from "next/image";

export default function Projects() {
  return (
    <section>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

type ProjectProps = (typeof projectsData)[number];

function Project({ title, description, tags, imageUrl }: ProjectProps) {
  return (
    <section
      className="group relative mb-3 max-w-[42rem] bg-gray-100 border 
      border-black/5 overflow-hidden sm:pr-8 sm:h-[20rem] sm:mb-8 last:mb-0 
      even:pl-8 hover:bg-gray-200 transition duration-500"
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
  );
}
