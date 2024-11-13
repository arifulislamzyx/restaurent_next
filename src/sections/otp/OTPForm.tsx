"use client";
import axios from "axios";

const OTPForm = () => {
  const sendOtp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.currentTarget);
      const email = formData.get("email") as string;
      const otp = formData.get("otp") as string;

      const Otp = {
        email,
        otp,
      };

      const res = await axios.post("/api/sendOtp", Otp, {
        headers: {
          "Content-Type": "application/json",
        },
      });
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
          type="email"
          name="email"
          placeholder="YOUR EMAIL"
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
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
