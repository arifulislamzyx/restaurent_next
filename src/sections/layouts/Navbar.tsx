"use client";
import * as React from "react";
import Link from "next/link";
import foodKing from "../../../public/foodKing.png";
import { useState } from "react";
import Image from "next/image";
import { UserButton, useAuth } from "@clerk/nextjs";
import {
  AlignJustify,
  ArrowRightToLine,
  ShoppingCart,
  UserRoundCog,
  X,
} from "lucide-react";

const Navbar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const openMobileMenu = () => {
    setOpenMenu(!openMenu);
  };

  const { userId } = useAuth();

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
          {userId ? (
            <div className="flex items-center gap-6">
              <ShoppingCart size={20} />
              <UserButton afterSignOutUrl="/" />
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
                href="/sign-up"
                className="p-2 hover:bg-slate-100 hover:rounded-xl flex items-center gap-1"
              >
                <UserRoundCog size={16} />
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
      <button
        onClick={openMobileMenu}
        className="fixed p-2  top-2 right-1  focus:outline-none md:hidden lg:hidden z-50"
      >
        {openMenu ? (
          <X size={20} />
        ) : (
          <AlignJustify size={20} className="font-bold"></AlignJustify>
        )}
      </button>
      {openMenu && (
        <div className="md:hidden grid">
          {userId ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
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
          )}
        </div>
      )}
    </nav>
  );
};

// const ListItem = React.forwardRef(
//   ({ className, title, children, ...props }, ref) => {
//     return (
//       <li>
//         <NavigationMenuLink asChild>
//           <a
//             ref={ref}
//             className={cn(
//               "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
//               className
//             )}
//             {...props}
//           >
//             <div className="text-sm font-medium leading-none">{title}</div>
//             <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//               {children}
//             </p>
//           </a>
//         </NavigationMenuLink>
//       </li>
//     );
//   }
// );
// ListItem.displayName = "ListItem";

export default Navbar;
