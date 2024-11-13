import Image from "next/image";
import Button from "../buttons/Button";
import { Trash2 } from "lucide-react";
import { ICheckOutProps } from "@/types/CheckOut";

export const Item: React.FC<ICheckOutProps> = ({ item, handleDelete }) => (
  <div>
    <div className="flex items-center justify-evenly gap-6  bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden p-4">
      <Image
        className=" object-cover rounded"
        src={item?.image ?? ""}
        alt={item?.name ?? ""}
        width={60}
        height={60}
      />

      <h2 className="text-lg w-full text-gray-800">{item?.name}</h2>
      <p className="text-gray-600 mt-1">${item?.price}</p>

      <Button
        className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
        onClick={() => handleDelete && item?._id && handleDelete(item?._id)}
      >
        <Trash2 />
      </Button>
    </div>
  </div>
);
