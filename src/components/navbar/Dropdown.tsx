import Link from "next/link";
import Button from "../buttons/Button";

export const Dropdown = ({ handleLogout }) => (
  <div className="absolute top-14 text-center space-y-2 right-10  grid grid-cols-1 p-5 rounded-lg shadow-2xl z-10\">
    <Link href="/dashboard">Dashboard</Link>
    <Link href="/cart">Cart</Link>
    <Link href="/dashboard/profile">Profile</Link>

    <form className=" text-white bg-orange-500 px-6 py-2 rounded-xl cursor cursor-pointer">
      <Button onClick={handleLogout}>Logout</Button>
    </form>
  </div>
);
