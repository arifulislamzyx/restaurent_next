"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FormEvent, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login: React.FC = () => {
  return (
    <div className="container mx-auto w-96 h-96 md:shadow-2xl my-5 p-5">
      <ToastContainer />
      <div>
        <h2 className="text-2xl font-bold text-center my-4">Quick Login</h2>
        <h3 className="text-sm text-center mb-4">
          If you have an account with us please Login
        </h3>
      </div>

      <form>
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
            className="border-black border-2 rounded-md my-2 px-2"
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
          <button className="rounded-lg bg-purple-600 px-4 py-2 mb-2 text-white">
            Log In
          </button>

          <h2>
            Don't Have an Account?{" "}
            <span className="font-bold">
              <Link href={"/registration"}>Registration</Link>
            </span>
          </h2>
        </div>
      </form>
    </div>
  );
};

export default Login;
