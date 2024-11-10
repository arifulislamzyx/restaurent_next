"use client";
import React, { useState } from "react";
import SocialLogin from "@/Authentication/SocailLogin/SocialLogin";
import { useRouter } from "next/navigation";
import Button from "@/components/buttons/Button";
import Link from "next/link";
import { credenTialsSignIn } from "../../actions";

const Page = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await credenTialsSignIn(new FormData(e.currentTarget));

      if (response == undefined) {
        setError("User Not Found");
      } else {
        router.push("/dashboard");
      }
    } catch (err) {
      setError("Check your Credentials ");
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-white py-5">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-2xl">
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Welcome Back
        </h2>

        {error && <p className="text-sm text-red-600 text-center">{error}</p>}

        <form onSubmit={handleSignIn} className="space-y-4 ">
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
          Don&apos;t have an account?{" "}
          <Link href="/registration" className="text-blue-500 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Page;
