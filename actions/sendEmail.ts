"use server";

import { validateString } from "@/lib/utils";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  try {
    await resend.emails.send({
      from: "Portfolio Connect <onboarding@resend.com>",
      to: "timothy.japit@gmail.com",
      subject: "Message from Portfolio Connect form",
      reply_to: String(senderEmail),
      text: String(message),
    });
  } catch (e) {
    console.error(e);
  }
};
