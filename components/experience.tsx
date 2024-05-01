"use client";

import React from "react";
import { experiencesData } from "@/lib/data";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useSectionInView } from "@/lib/hooks";
import { useThemeContext } from "@/context/theme-context";

export default function Experience() {
  const { theme } = useThemeContext();
  const { ref } = useSectionInView({
    sectionName: "Experience",
    threshold: 0.75,
  });

  return (
    <section ref={ref} id="experience" className="mb-28 scroll-mt-28 sm:mb-40">
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((experience, i) => (
          <React.Fragment key={i}>
            <VerticalTimelineElement
              visible // for some reason it's not visible without this
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, .05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255,255,255,.05)",
              }}
              date={experience.date}
              icon={experience.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255,255,255,.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3>{experience.title}</h3>
              <p className="!mt-0 !font-normal !text-sm">
                {experience.location}
              </p>
              <p className="!mt-2 !font-normal text-gray-700 dark:text-white/75">
                {experience.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
