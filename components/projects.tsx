"use client";

import React, { useEffect, useRef } from "react";
import { projectsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import Project from "./project";
import { motion, useInView } from "framer-motion";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const { setActiveSection, lastClicked } = useActiveSectionContext();

  useEffect(() => {
    if (isInView && Date.now() - lastClicked > 1000)
      setActiveSection("Projects");
  }, [isInView, lastClicked]);

  return (
    <motion.section
      ref={ref}
      id="projects"
      className="scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.2,
      }}
    >
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </motion.section>
  );
}
