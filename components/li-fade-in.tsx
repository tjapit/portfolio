import { ReactNode } from "react";
import { motion } from "framer-motion";

type LiFadeInProps = {
  index: number;
  children: ReactNode;
};
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function LiFadeIn({ children, index }: LiFadeInProps) {
  return (
    <motion.li
      className="px-5 py-3 bg-white borderBlack rounded-full shadow-md
                                dark:bg-black dark:text-white"
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
    >
      {children}
    </motion.li>
  );
}
