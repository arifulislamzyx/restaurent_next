import Image from "next/image";
import AddToCartButton from "../AddToCartButton";
import { IASingleMenu } from "@/types/types";

const SingleMenu: React.FC<IASingleMenu> = ({ menuItem, email }) => (
  <div className="container mx-auto py-10 flex items-center gap-8 border-b-2">
    <Image
      src={menuItem?.image ?? ""}
      alt={menuItem?.name ?? ""}
      width={400}
      height={400}
      className="rounded"
    />
    <div className="w-2/6 space-y-4">
      <h1 className="text-2xl font-bold">{menuItem?.name}</h1>
      <p className="mt-4 ">{menuItem?.recipe}</p>
      <p className="mt-2 text-xl font-semibold">${menuItem?.price}</p>
      <AddToCartButton
        className="flex items-center gap-1 bg-blue-600 px-4 py-2 rounded text-white hover:bg-opacity-70 transition-all  "
        item={menuItem}
        email={email}
      />

      <p>
        <span className="text-base md:text-lg font-bold">Category: </span>
        {menuItem?.category}
      </p>
    </div>
  </div>
);

export default SingleMenu;
