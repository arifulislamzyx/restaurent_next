"use client";
import React from "react";
import Sidebar from "@/sections/dashboard/sidebar";

const DashboardPage = () => {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="pt-5">
        <Sidebar />
      </div>

      <div className="text-left">
        <h3>Here is Dashboard content</h3>
        <h3>Hello, your current active session is</h3>
      </div>
    </div>
  );
};

export default DashboardPage;
