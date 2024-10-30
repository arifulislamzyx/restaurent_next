import { auth } from "@/Authentication/auth";
import Navbar from "@/sections/layouts/Navbar";
import React, { ReactNode } from "react";

const Session = async ({ children }) => {
  const session = await auth();

  console.log("auth", session);

  return (
    <div>
      {/* <h1>{session?.user?.email}</h1> */}
      <Navbar session={session} />
      {children}
    </div>
  );
};

export default Session;
