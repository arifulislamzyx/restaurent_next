import { ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "../buttons/Button";
import { MobileNavProps } from "@/types/MobileNav";

export const MobileNav = ({
  session,
  getCartItems,
  handleLogout,
  toggleProfile,
}: MobileNavProps) => (
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
          <Link href="/sign-in" className="py-2 hover:bg-slate-100 rounded">
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
);
