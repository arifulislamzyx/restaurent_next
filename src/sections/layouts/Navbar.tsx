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
import { doLogout } from "../../../app/actions";
import Button from "@/components/buttons/Button";
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/Redux/Store/Store";
import { fetchSession } from "@/Redux/Slice/SessionSlice";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  // const dispatch = useDispatch<AppDispatch>();
  // const session = useSelector((state) => state.session.user);

  // useEffect(() => {
  //   dispatch(fetchSession());
  // }, []);
  // const session = useSession();
  // console.log("session", session);

  const openMobileMenu = () => {
    setOpenMenu(!openMenu);
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
        <div className=" hidden md:flex md:items-center">
          <div className="flex items-center gap-6">
            <ShoppingCart size={20} />
            <User />
          </div>

          <div className="flex gap-4 ">
            <Link
              href="/sign-in"
              className="p-2 hover:bg-slate-100 hover:rounded-xl flex items-center gap-1"
            >
              <ArrowRightToLine size={16} />
              Sign In
            </Link>
            <Link
              href="/sign-up"
              className="p-2 hover:bg-slate-100 hover:rounded-xl flex items-center gap-1"
            >
              <UserRoundCog size={16} />
              Sign Up
            </Link>
          </div>
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
        <div className="md:hidden grid">
          <div className="grid">
            <Link
              href="/login"
              className="p-2 hover:bg-slate-100 hover:rounded-xl"
            >
              Login
            </Link>
            <Link
              href="/registration"
              className="p-2 hover:bg-slate-100 hover:rounded-xl"
            >
              SignUp
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
