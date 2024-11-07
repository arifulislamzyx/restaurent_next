import {
  ArrowRightToLine,
  ShoppingCart,
  User,
  UserRoundCog,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SearchInput } from "../search/input";

export const NavItems = ({ session, getCartItems, toggleProfile }) => (
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
);
