"use client";
import React, { useEffect } from "react";
import { ClerkLoading, useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Sidebar from "@/sections/dashboard/sidebar";

const DashboardPage = () => {
  const { isLoaded, userId, sessionId } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !userId) {
      router.push("/sign-in");
    }
  }, [isLoaded, userId, router]);

  if (!isLoaded) {
    return (
      <div className="h-screen flex items-center justify-center">
        <ClerkLoading />
      </div>
    );
  }

  return (
    <div className="w-full flex justify-between items-center">
      <div className="pt-5">
        <Sidebar />
      </div>

      <div className="text-left">
        <h3>Here is Dashboard content</h3>
        <h3>
          Hello, {userId}, your current active session is {sessionId}
        </h3>
      </div>
    </div>
  );
};

export default DashboardPage;
