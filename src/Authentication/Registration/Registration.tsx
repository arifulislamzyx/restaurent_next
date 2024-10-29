"use client";
import React from "react";
import SocialLogin from "../Login/SocialLogin";
import axios from "axios";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import Button from "@/components/buttons/Button";

const Registration = () => {
  const router = useRouter();

  const handleRegistration = async (e) => {
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
      console.log("user data", userData);

      const res = await axios
        .post("api/registration", userData, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log("res sent", res);
          if (res.status === 201) {
            console.log("User registration successful:", res.data);
            router.push("/");
          } else {
            Swal.fire({
              title: "Please Login to Order Products",
              text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Login Now",
            }).then((res) => {
              if (res.isConfirmed) {
                window.location.href = "/sign-in";
              }
            });
          }
        });
    } catch (e) {
      console.error("find error while fetchingdata", e.message);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-white py-5 ">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-2xl ">
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Welcome Back
        </h2>
        <form
          onSubmit={handleRegistration}
          className="space-y-4 border-t-2 border-slate-50"
        >
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
            Register
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
          <a href="/sign-in" className="text-blue-500 hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Registration;
