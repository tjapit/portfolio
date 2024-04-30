"use server";

import { getErrorMessage, validateString } from "@/lib/utils";
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
      from: "Portfolio Connect <onboarding@resend.dev>",
      to: String(process.env.RESEND_EMAIL_TO),
      subject: "Message from Portfolio Connect form",
      reply_to: String(senderEmail),
      text: String(message),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
};
