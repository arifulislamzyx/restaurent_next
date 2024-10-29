import { auth } from "@/Authentication/auth";
import Navbar from "@/sections/layouts/Navbar";
import React, { ReactNode } from "react";

const Session = async () => {
  const session = await auth();

  console.log("auth", session);

  return (
    <div>
      <Navbar session={session} />
    </div>
  );
};

export default Session;
