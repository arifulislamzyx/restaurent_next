"use client";
import * as React from "react";
import Link from "next/link";
import foodKing from "../../public/foodKing.png";
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
    <nav className="">
      <div className="container relative mx-auto flex justify-between items-center p-4">
        <Link href={"/"} className="flex items-center">
          <Image src={foodKing} width={120} height={80} alt="FoodKing" />
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <SearchInput openSearch={openSearch} search={search} />
          <NavItems
            session={session}
            getCartItems={getCartItems}
            toggleProfile={toggleProfile}
          />
        </div>

        <Button
          onClick={openMobileMenu}
          className="md:hidden p-2 focus:outline-none z-50"
          aria-label={openMenu ? "Close Menu" : "Open Menu"}
        >
          {openMenu ? <X size={24} /> : <AlignJustify size={24} />}
        </Button>
      </div>
      <div className="absolute right-1 top-2">
        {openMenu && (
          <div className="md:hidden">
            <MobileNav
              getCartItems={getCartItems}
              toggleProfile={toggleProfile}
              handleLogout={handleLogout}
              session={session}
            />
          </div>
        )}
      </div>

      {profileMenu && (
        <div className="absolute top-16 right-4 z-50">
          <Dropdown handleLogout={handleLogout} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
