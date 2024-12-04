"use client";
import { AlignJustify, User, X } from "lucide-react";
import React, { useState } from "react";
import foodKing from "../../public/foodKing.png";
import Image from "next/image";
import Sidebar from "../sections/dashboard/sidebar";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Button from "@/components/buttons/Button";

const DashboardNav = () => {
  const [openDashboardMenu, setOpenDashboardMenu] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);
  const { data: session } = useSession();

  const toggleDashMenu = () => {
    setOpenDashboardMenu(!openDashboardMenu);
  };

  const toggleProfile = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    setProfileMenu(!profileMenu);
  };

  const handleLogout = () => {
    signOut({ callbackUrl: "/" });
  };
  return (
    <div>
      <div className="flex  justify-between items-center pt-4 md:hidden">
        <div className="flex items-center gap-4">
          <AlignJustify
            onClick={toggleDashMenu}
            className="cursor-pointer"
            size={26}
          />
          <Image src={foodKing} width={150} height={100} alt="profileImage" />
        </div>
        <div>
          {session?.user?.image ? (
            <div className="flex items-center gap-2">
              <Image
                src={session?.user?.image}
                alt="profileImage"
                width={30}
                height={30}
                className="rounded-full"
                onClick={toggleProfile}
              />
              <p>{session?.user.name}</p>
            </div>
          ) : (
            <User />
          )}
        </div>
      </div>

      {openDashboardMenu && (
        <div className="md:hidden fixed inset-0 z-10 bg-black bg-opacity-50">
          <div className="absolute top-4 right-32 z-20">
            <X
              size={24}
              className="cursor-pointer text-black"
              onClick={() => setOpenDashboardMenu(false)}
            />
          </div>
          <div className="relative w-64 bg-white h-full">
            <Sidebar />
          </div>
        </div>
      )}

      {profileMenu && (
        <div className="absolute top-14 right-10  grid grid-cols-1 p-5 rounded-lg shadow-2xl">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/dasboard/cartItems">Cart Items</Link>
          <form className=" bg-gradient-to-t bg-orange-600 px-5 py-2 cursor cursor-pointer">
            <Button
              className="bg-orange-600 px-4 py-2 rounded"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default DashboardNav;
