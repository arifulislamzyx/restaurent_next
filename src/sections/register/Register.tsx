"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FormEvent, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register: React.FC = () => {
  const handleRegistration = (e) => {
    e.preventDefault();

    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const password = form.password.value;

    const userData = {
      firstName,
      lastName,
      email,
      password,
    };
  };

  return (
    <div className="container mx-auto w-96 h-96 md:shadow-2xl my-5 p-5">
      <ToastContainer />
      <div>
        <h2 className="text-2xl font-bold text-center my-4">Registration</h2>
        <h3 className="text-sm text-center mb-4">
          Please Register to{" "}
          <span className="text-base font-semibold text-orange-600">
            FoodKing
          </span>
        </h3>
      </div>

      <form onSubmit={handleRegistration}>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            id=""
            placeholder="First Name"
            className="border-black border-2 rounded-md px-2"
          />
          <input
            type="text"
            name="lastName"
            id=""
            placeholder="Last Name"
            className="border-black border-2 rounded-md px-2"
          />
        </div>
        <div className="grid grid-cols-1 mb-4">
          <input
            type="text"
            name="email"
            id=""
            className="border-black border-2 rounded-md my-2 px-2"
            placeholder="Enter Your Email"
          />
          <input
            type="password"
            name="password"
            id=""
            className="border-black border-2 rounded-md px-2"
            placeholder="Enter Your Password"
          />
        </div>

        <div className="flex justify-between">
          <div>
            <input type="checkbox" name="checkbox" id="" />{" "}
            <label htmlFor="">Remamber Me</label>
          </div>
          <p>Forget Password</p>
        </div>

        <div className="text-center my-2">
          <button
            type="submit"
            className="rounded-lg bg-purple-600 px-4 py-2 mb-2 text-white"
          >
            Registration
          </button>

          <h2>
            Don't Have an Account?{" "}
            <span className="font-bold">
              <Link href={"/login"}>Log In</Link>
            </span>
          </h2>
        </div>
      </form>
    </div>
  );
};

export default Register;
