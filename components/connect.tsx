"use client";

import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";

export default function Connect() {
  const { ref } = useSectionInView({
    sectionName: "Connect",
    threshold: "some",
  });

  return (
    <motion.section
      ref={ref}
      id="connect"
      className="w-[min(100%,38rem)] mb-28 scroll-mt-28 sm:mb-40 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Connect with Me</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a
          href="mailto:timothy.japit@gmail.com"
          className="group relative text-rose-600 hover:text-rose-400"
        >
          timothy.japit@gmail.com
          <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-rose-400 transition-all duration-300"></span>
        </a>{" "}
        or through this form,
      </p>

      <form
        action={async (formData) => {
          await sendEmail(formData);
        }}
        className="mt-10 flex flex-col"
      >
        <input
          name="senderEmail"
          type="email"
          placeholder="Your Email"
          className="h-14 px-4 rounded-lg borderBlack outline-black"
          maxLength={500}
          required
        />
        <textarea
          name="message"
          className="h-52 my-3 p-4 rounded-lg borderBlack outline-black"
          placeholder="Your message"
          maxLength={5000}
          required
        ></textarea>
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 
          h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none 
          transition-all
          focus:scale-110 
          hover:scale-110 
          hover:bg-gray-950
          active:scale-105 
          "
        >
          Submit{" "}
          <FaPaperPlane
            className="text-xs opacity-70 
            transition-all 
            group-hover:translate-x-1
            group-hover:-translate-y-1
            "
          />
        </button>
      </form>
    </motion.section>
  );
}
