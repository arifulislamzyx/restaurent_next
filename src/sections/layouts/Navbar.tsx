"use client";
import * as React from "react";
import Link from "next/link";
import foodKing from "../../../public/foodKing.png";
import { useState } from "react";

import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { Component } from "@/types/types";
import { UserButton, useAuth } from "@clerk/nextjs";

const Navbar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState("false");

  const { userId } = useAuth();

  return (
    <nav>
      <div
        className={`container md:flex md:justify-between md:pt-5 lg:flex lg:justify-between lg:pt-5`}
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
          {/* <div>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <Image
                              src={foodKing}
                              width={50}
                              height={50}
                              alt="foodking"
                            ></Image>
                            <div className="mb-2 mt-4 text-lg font-medium">
                              FoodKing
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Beautifully designed components built with Radix
                              UI and Tailwind CSS.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/docs" title="Introduction">
                        Re-usable components built using Radix UI and Tailwind
                        CSS.
                      </ListItem>
                      <ListItem href="/docs/installation" title="Installation">
                        How to install dependencies and structure your app.
                      </ListItem>
                      <ListItem
                        href="/docs/primitives/typography"
                        title="Typography"
                      >
                        Styles for headings, paragraphs, lists...etc
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Documentation
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div> */}
          {userId ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <div className="flex gap-4">
              <Link
                href="/sign-in"
                className="p-2 hover:bg-slate-100 hover:rounded-xl"
              >
                Sign In
              </Link>
              <Link
                href="/sign-up"
                className="p-2 hover:bg-slate-100 hover:rounded-xl"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
      {/* //responsive menu */}
      <button className="p-2 absolute top-2 right-1  focus:outline-none md:hidden lg:hidden">
        {openMenu ? (
          <RxCross1></RxCross1>
        ) : (
          <GiHamburgerMenu className="font-bold"></GiHamburgerMenu>
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
