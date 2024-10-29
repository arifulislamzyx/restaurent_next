"use client";
import React, { useState } from "react";
import SocialLogin from "@/Authentication/Login/SocialLogin";
import { credenTialsSignIn } from "../actions";
import { useRouter } from "next/navigation";
import Button from "@/components/buttons/Button";

const Page = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const formdata = new FormData(e.currentTarget);

      const email = formdata.get("email");
      const password = formdata.get("password");
      const formData = {
        email,
        password,
      };
      console.log("formdata", formData);

      const response = await credenTialsSignIn(formData);
      console.log("res check", response);

      if (!!response.error) {
        setError(response.error.message);
      } else {
        router.push("/");
      }
    } catch (error) {
      setError("Check your Credentials");
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-white py-5">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-2xl">
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Welcome Back
        </h2>

        {error && <p className="text-sm text-red-600 text-center">{error}</p>}

        <form
          onSubmit={handleSignIn}
          className="space-y-4 border-t-2 border-slate-50"
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="password"
              required
              className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-orange-300"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              required
              className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-orange-300"
            />
          </div>

          <Button
            type="submit"
            className="w-full px-4 py-2 mt-4 text-white bg-orange-500 rounded-md hover:bg-orange-600 focus:ring focus:ring-orange-300"
          >
            Sign In
          </Button>
        </form>

        <div className="flex items-center justify-between">
          <hr className="w-full border-gray-300" />
          <span className="px-2 text-gray-500">OR</span>
          <hr className="w-full border-gray-300" />
        </div>

        <SocialLogin />

        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <a href="/registration" className="text-blue-500 hover:underline">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Page;
