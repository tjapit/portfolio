"use client";

import { backendSkillsData, frontendSkillsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import SectionSubheading from "./section-subheading";
import LiFadeIn from "./li-fade-in";

export default function Skills() {
  const { ref } = useSectionInView({ sectionName: "Skills", threshold: 0 });

  return (
    <section
      ref={ref}
      id="skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>
      <div className="flex flex-col gap-6 sm:flex-row">
        <div className="flex flex-col">
          <SectionSubheading>Front-End</SectionSubheading>
          <ul
            className="p-5
          flex flex-wrap justify-center gap-2 
          text-lg text-gray-800 
          "
          >
            {frontendSkillsData.map((skill, i) => (
              <LiFadeIn key={i} index={i}>
                {skill}
              </LiFadeIn>
            ))}
          </ul>
        </div>
        <div className="flex flex-col">
          <SectionSubheading>Back-End</SectionSubheading>
          <ul
            className="p-5
          flex flex-wrap justify-center gap-2 
          text-lg text-gray-800 
          "
          >
            {backendSkillsData.map((skill, i) => (
              <LiFadeIn key={i} index={i}>
                {skill}
              </LiFadeIn>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
