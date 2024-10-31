"use client";
import * as React from "react";
import Link from "next/link";
import foodKing from "../../../public/foodKing.png";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  AlignJustify,
  ArrowRightToLine,
  ShoppingCart,
  User,
  UserRoundCog,
  X,
} from "lucide-react";
import Button from "@/components/buttons/Button";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);
  const { data: session, status } = useSession();

  const toggleProfile = (e) => {
    e.preventDefault();

    setProfileMenu(!profileMenu);
  };

  const openMobileMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleLogout = () => {
    signOut({ callbackUrl: "/" });
  };

  return (
    <nav>
      <div
        className={`container  md:flex md:justify-between md:pt-5 lg:flex lg:justify-between lg:pt-5`}
      >
        <Link href={"/"}>
          <Image
            src={foodKing}
            width={150}
            height={100}
            alt="foobking"
            className="relative"
          ></Image>
        </Link>
        <div className="hidden md:flex md:items-center">
          {session?.user ? (
            <div className="flex items-center gap-6">
              <Link href="/dashboard/cartItems">
                <ShoppingCart size={20} />
                {/* {carts?.cartItems?.length} */}
              </Link>
              {session?.user?.image ? (
                <Image
                  src={session?.user?.image}
                  alt="profileImage"
                  width={40}
                  height={40}
                  className="relative rounded-full cursor-pointer"
                  onClick={toggleProfile}
                />
              ) : (
                <User />
              )}
            </div>
          ) : (
            <div className="flex gap-4 ">
              <Link
                href="/sign-in"
                className="p-2 hover:bg-slate-100 hover:rounded-xl flex items-center gap-1"
              >
                <ArrowRightToLine size={16} />
                Sign In
              </Link>
              <Link
                href="/registration"
                className="p-2 hover:bg-slate-100 hover:rounded-xl flex items-center gap-1"
              >
                <UserRoundCog size={16} />
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
      <Button
        onClick={openMobileMenu}
        className="fixed p-2  top-2 right-1  focus:outline-none md:hidden lg:hidden z-50"
      >
        {openMenu ? (
          <X size={20} />
        ) : (
          <AlignJustify size={20} className="font-bold"></AlignJustify>
        )}
      </Button>
      {openMenu && (
        <div className="absolute top-16 right-0 bg-white border rounded shadow-md z-50 w-40">
          <div className="grid grid-cols-1 p-4">
            {session?.user ? (
              <>
                <Link
                  href="/dashboard/cartItems"
                  className="py-2 hover:bg-slate-100 rounded"
                >
                  <ShoppingCart size={20} />
                </Link>
                <div className="flex items-center gap-2">
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
                  <Button onClick={handleLogout} className="w-full text-left">
                    Logout
                  </Button>
                </div>
              </>
            ) : (
              <>
                <Link
                  href="/sign-in"
                  className="py-2 hover:bg-slate-100 rounded"
                >
                  Sign In
                </Link>
                <Link
                  href="/registration"
                  className="py-2 hover:bg-slate-100 rounded"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
      {profileMenu && (
        <div className="absolute top-14 right-10  grid grid-cols-1 p-5 rounded-lg shadow-2xl">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/dasboard/cartItems">Cart Items</Link>
          <form className=" bg-gradient-to-t bg-orange-600 px-5 py-2 cursor cursor-pointer">
            <Button onClick={handleLogout}>Logout</Button>
          </form>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
