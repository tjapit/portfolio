import { useActiveSectionContext } from "@/context/active-section-context";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import type { SectionName } from "./types";

type useSectionInViewProps = {
  sectionName: SectionName;
  threshold?: number | "some" | "all";
};

export function useSectionInView({
  sectionName,
  threshold = 0.75,
}: useSectionInViewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: threshold });
  const { setActiveSection, lastClicked } = useActiveSectionContext();

  useEffect(() => {
    if (isInView && Date.now() - lastClicked > 1000)
      setActiveSection(sectionName);
  }, [isInView, lastClicked]);

  return {
    ref,
  };
}
