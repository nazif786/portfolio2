"use server";
import { Resend } from "resend";
import { getErrorMessage } from "../lib/getErrorMessage";
import ContactEmail from "../email/ContactEmail";
import React from "react";
import { error } from "console";

const resend = new Resend(process.env.RESEND_API_KEY);

const validateString = (value: unknown, maxLength: number) => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }
  return true;
};

export const sendEmail = async (formData: FormData) => {
  // console.log("running on sever1");

  const senderEmail = formData.get("senderEmail");
  const subject = formData.get("subject");
  const message = formData.get("message");

  if (!validateString(senderEmail, 100)) {
    return { error: "Invalid email" };
  }
  if (!validateString(subject, 100)) {
    return { error: "Invalid subject" };
  }
  if (!validateString(message, 500)) {
    return { error: "Invalid message" };
  }
  let data;
  try {
    data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.jav>",
      to: ["nazif.it@gmail.com"],
      reply_to: senderEmail as string,
      subject: subject as string,
      //   text: message as string,
      react: React.createElement(ContactEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });

    // return Response.json(data);
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  return { data };
};
