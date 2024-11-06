import React from "react";
import { MenuItem } from "@/types/menuItems";
import { ShoppingCart } from "lucide-react";
import Swal from "sweetalert2";
import axios from "axios";
import Button from "../buttons/Button";
import { AddToCartButtonProps } from "@/types/types";

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  item,
  email,
  className,
}) => {
  const handleAddItems = async () => {
    if (!email) {
      Swal.fire({
        title: "Please Login to Order Products",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now",
      }).then((res) => {
        if (res.isConfirmed) {
          window.location.href = "/sign-in";
        }
      });
      return;
    }

    try {
      const res = await axios.post(
        "/api/carts",
        { items: item, email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      Swal.fire({
        position: "top-end",
        icon: res.status === 200 ? "success" : "info",
        title:
          res.status === 200
            ? "Your Items is Added"
            : "This item is already in your cart.",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Something went wrong while adding the item.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <Button onClick={handleAddItems} className={className}>
      <ShoppingCart size={15} /> Add
    </Button>
  );
};

export default AddToCartButton;
