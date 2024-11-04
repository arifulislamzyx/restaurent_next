"use client";
import * as React from "react";
import Link from "next/link";
import foodKing from "../../../public/foodKing.png";
import { useState, useEffect, useMemo } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/Redux/Store/Store";
import { fetchCartItems } from "@/Redux/Slice/CartSlice";
import { ICart } from "@/types/cart";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);
  const { data: session, status } = useSession();
  const dispatch = useDispatch<AppDispatch>();
  const {
    carts: { cartItems },
    isLoading,
    isError,
    error,
  } = useSelector((state: RootState) => state.carts);

  const userEmail = session?.user.email;

  useEffect(() => {
    if (userEmail) {
      dispatch(fetchCartItems(userEmail));
    }
  }, [dispatch, userEmail]);

  const getCartItems = cartItems?.map((item: ICart) => item.items);

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
    <nav className="border-b-2 pb-2">
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
            <div className="relative flex items-center gap-6">
              <Link href="/cart" className="flex">
                <ShoppingCart size={20} />
                <p>
                  {getCartItems?.length > 0 && (
                    <span className="absolute -top-2  bg-orange-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {getCartItems.length}
                    </span>
                  )}
                </p>
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
          <div className="relative grid grid-cols-1 p-4">
            {session?.user ? (
              <div>
                <Link href="/cart" className="py-2 hover:bg-slate-100 rounded">
                  <ShoppingCart size={20} />
                  <p>
                    {getCartItems?.length > 0 && (
                      <span className="absolute top-1  bg-orange-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {getCartItems.length}
                      </span>
                    )}
                  </p>
                </Link>
                <div className="text-center space-y-4 mt-4">
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
                  <Button
                    onClick={handleLogout}
                    className="w-full text-center text-white bg-orange-500 px-4 py-2 rounded-xl  "
                  >
                    Logout
                  </Button>
                </div>
              </div>
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
        <div className="absolute top-14 text-center space-y-2 right-10  grid grid-cols-1 p-5 rounded-lg shadow-2xl z-10\">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/cart">Cart Items</Link>
          <Link href="/dasboard/profile">Profile</Link>

          <form className=" text-white bg-orange-500 px-6 py-2 rounded-xl cursor cursor-pointer">
            <Button onClick={handleLogout}>Logout</Button>
          </form>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
