"use client";
import * as React from "react";
import Link from "next/link";
import foodKing from "../../../public/foodKing.png";
import { useState, useEffect } from "react";
import Image from "next/image";
import { AlignJustify, X } from "lucide-react";
import Button from "@/components/buttons/Button";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/Redux/Store/Store";
import { fetchCartItems } from "@/Redux/Slice/CartSlice";
import { ICart } from "@/types/cart";
import { NavItems } from "@/components/navbar/NavItems";
import { Dropdown } from "@/components/navbar/Dropdown";
import { MobileNav } from "@/components/navbar/MobileNav";
import { SearchInput } from "@/components/search/input";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [profileMenu, setProfileMenu] = useState<boolean>(false);
  const [search, setSearch] = useState<boolean>(false);
  const { data: session } = useSession();

  const dispatch = useDispatch<AppDispatch>();
  const {
    carts: { cartItems },
  } = useSelector((state: RootState) => state.carts);

  const userEmail = session?.user.email;

  useEffect(() => {
    if (userEmail) {
      dispatch(fetchCartItems(userEmail));
    }
  }, [dispatch, userEmail]);

  const getCartItems = cartItems?.map((item: ICart) => item.items);

  const toggleProfile = () => {
    setProfileMenu(!profileMenu);
  };

  const openMobileMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleLogout = () => {
    signOut({ callbackUrl: "/" });
  };

  const openSearch = () => {
    setSearch(!search);
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
        <div className="flex items-center gap-6">
          <SearchInput openSearch={openSearch} search={search} />

          <NavItems
            session={session}
            getCartItems={getCartItems}
            toggleProfile={toggleProfile}
          />
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
        <MobileNav
          getCartItems={getCartItems}
          toggleProfile={toggleProfile}
          handleLogout={handleLogout}
          session={session}
        />
      )}
      {profileMenu && <Dropdown handleLogout={handleLogout} />}
    </nav>
  );
};

export default Navbar;
