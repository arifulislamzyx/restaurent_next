"use client";
import axios from "axios";
import React, { useState } from "react";
import { ConfirmSwal } from "../../components/alert/confirmSwal";
import { useRouter } from "next/navigation";
import { SuccessSwal } from "@/components/alert/successSwal";
import Loading from "@/components/ui/loading";

const ContactForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const sendContactEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    const mailData = {
      email,
      subject,
      message,
    };

    try {
      const res = await axios.post("/api/contactEmail", mailData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status === 201) {
        SuccessSwal({
          title: "Email Send Succeffully",
        });
        (e.target as HTMLFormElement).reset();
        router.push("/");
      } else {
        ConfirmSwal({
          title: "Error Sending Email",
          text: "You unable to send mail",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
        });
      }
    } catch (err) {
      console.error("Error Sending Email", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" bg-white py-10">
      <form
        onSubmit={sendContactEmail}
        className="space-y-4 w-full md:w-1/2 mx-auto p-6 rounded-lg shadow-lg"
      >
        <h3 className="text-xl md:text-2xl text-center">Contact Us</h3>
        <input
          type="email"
          placeholder="YOUR EMAIL"
          name="email"
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="Subject"
          name="subject"
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <textarea
          placeholder="YOUR MESSAGE"
          name="message"
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 h-32"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          {loading ? <Loading /> : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
