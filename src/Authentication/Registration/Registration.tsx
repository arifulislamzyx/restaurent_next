"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Button from "@/components/buttons/Button";
import SocialLogin from "../SocailLogin/SocialLogin";
import Link from "next/link";
import { AlertSwal } from "@/components/alert/alertSwal";
import { IAUser } from "@/types/user";
import Loading from "@/components/ui/loading";
import { AlertSwal2 } from "@/components/alert/alertSwal2";

const Registration = () => {
  const router = useRouter();
  const [res, setRes] = useState<IAUser>({});

  const handleRegistration = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const name = formData.get("name");
      const email = formData.get("email");
      const password = formData.get("password");

      const userData = {
        name,
        email,
        password,
      };

      await axios
        .post("/api/registration", userData, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          setRes(res.data);

          //please check browser log after registration you will get the OTP for verification, Resend Is required to verify own domain therefore you have to do it
          console.log("Reggistered User", res);

          if (res.status === 201) {
            AlertSwal2({
              title: "User Registered Successfully",
            });

            if (typeof window !== "undefined") {
              localStorage.setItem("verify-email", res.data.email);
            }
            router.push("/registration/verifyEmail");
          } else {
            AlertSwal({
              title: "Please Login to Order Products",
              text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonText: "Login Now",
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              redirectUrl: "/sign-in",
            });
          }
        });
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 409) {
        AlertSwal({
          title: "User Already Exists",
          text: "Please Login",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Login Now",
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          redirectUrl: "/sign-in",
        });
      }
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-white py-5 ">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-2xl ">
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Welcome Back
        </h2>
        <form onSubmit={handleRegistration} className="space-y-4 ">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-orange-300"
            />
          </div>

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
              id="email"
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
            {res ? <p>Register</p> : <Loading></Loading>}
          </Button>
        </form>

        <div className="flex items-center justify-between">
          <hr className="w-full border-gray-300" />
          <span className="px-2 text-gray-500">OR</span>
          <hr className="w-full border-gray-300" />
        </div>

        <SocialLogin />

        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link href="/sign-in" className="text-blue-500 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
