import React from "react";
import { ShoppingCart } from "lucide-react";
import Swal from "sweetalert2";
import axios from "axios";
import Button from "../buttons/Button";
import { AddToCartButtonProps } from "@/types/types";
import { AlertSwal } from "../alert/alertSwal";

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
      AlertSwal({
        position: "top-end",
        title:
          res.status === 200
            ? "Your Items is Added"
            : "This item is already in your cart.",
        icon: res.status === 200 ? "success" : "info",
        showCancelButton: false,
        timer: 1500,
        showConfirmButton: false,
      });
    } catch {
      AlertSwal({
        position: "top-end",
        title: "Something went wrong while adding the item.",
        icon: "error",
        showCancelButton: false,
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
