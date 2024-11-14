"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { AlertSwal2 } from "../alert/alertSwal2";
import { useEffect, useState } from "react";

const OTPForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const storedEmail = localStorage.getItem("verify-email");
    setEmail(storedEmail);
  }, []);

  if (!email) {
    return <div>Email not found in local storage</div>;
  }

  const sendOtp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.currentTarget);
      const otp = formData.get("otp") as string;

      if (!otp) {
        alert("OTP is required");
        return;
      }
      const Otp = {
        email,
        otp,
      };
      const res = await axios.post("/api/verifyOtp", Otp);
      if (res.status === 201) {
        AlertSwal2({
          title: "User Verified Successfully",
          text: "The user has been verified.",
          icon: "success",
        });
        localStorage.removeItem("verify-email");
        router.push("/sign-in");
      } else if (res.data.status === 400) {
        AlertSwal2({
          title: "Invalid OTP or User Not FOund",
          text: "You entered a wrong OTP",
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };

  return (
    <div className="bg-white py-10">
      <form
        onSubmit={sendOtp}
        className="space-y-4 w-full md:w-1/2 mx-auto p-6 rounded-lg shadow-lg"
      >
        <h3 className="text-xl md:text-2xl text-center">Verify OTP</h3>

        <input
          type="text"
          name="otp"
          placeholder="OTP"
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Verify OTP
        </button>
      </form>
    </div>
  );
};

export default OTPForm;
