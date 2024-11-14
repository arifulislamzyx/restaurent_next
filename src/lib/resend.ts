import { IContactEmail } from "@/types/contactEmail";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const SendOtpEmail = async ({
  email,
  otp,
}: {
  email: string;
  otp: string;
}) => {
  try {
    await resend.emails.send({
      from: "arifulislam@me.com",
      to: email,
      subject: "Your OTP Code",
      html: `<p>Your OTP Code is <strong>${otp}</strong> </p>`,
    });
  } catch (error) {
    console.error(`Error Sending OTP Email ${error}`);
    throw error;
  }
};

export const SendContactEmail = async ({
  email,
  subject,
  message,
}: IContactEmail) => {
  if (!email) {
    throw new Error("Recipient email is required.");
  }
  if (!subject) {
    throw new Error("Subject is required");
  }

  try {
    await resend.emails.send({
      from: "arifulislamzyx@gmail.com",
      to: "arifulislamzyx@gmail.com",
      subject: subject,
      html: `<p><strong>From:</strong>  ${email} </p><p>${message}</p>`,
    });
  } catch (error) {
    console.error(`Error Sending Contact Email ${error}`);
  }
};
