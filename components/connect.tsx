"use client";

import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitButton from "./submit-button";
import toast from "react-hot-toast";
import { useRef } from "react";

export default function Connect() {
  const { ref } = useSectionInView({
    sectionName: "Connect",
    threshold: "some",
  });
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (formData: FormData) => {
    const { error } = await sendEmail(formData);

    if (error) {
      toast.error(error);
      return;
    }

    if (textAreaRef.current) {
      textAreaRef.current.value = "";
    }
    toast.success("Email sent successfully!");
  };

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

      <p className="-mt-6 text-gray-700 dark:text-white/75">
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
        action={handleSubmit}
        className="mt-10 flex flex-col dark:text-black"
      >
        <input
          name="senderEmail"
          type="email"
          placeholder="Your Email"
          className="h-14 px-4 rounded-lg borderBlack outline-black
          dark:bg-white dark:bg-opacity-60 dark:focus:bg-opacity-100 dark:outline-none
          dark:placeholder:text-white/60
          transition-all
          "
          maxLength={500}
          required
        />
        <textarea
          ref={textAreaRef}
          name="message"
          className="h-52 my-3 p-4 rounded-lg borderBlack outline-black
          dark:bg-white dark:bg-opacity-60 dark:focus:bg-opacity-100 dark:outline-none
          dark:placeholder:text-white/60
          transition-all
          "
          placeholder="Your message"
          maxLength={5000}
          required
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
}
