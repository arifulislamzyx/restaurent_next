"use client";
import { fetchCartItems } from "@/Redux/Slice/CartSlice";
import { AppDispatch, RootState } from "@/Redux/Store/Store";
import { useSession } from "next-auth/react";
import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IACartwithEmail } from "@/types/cart";
import axios from "axios";
import { useRouter } from "next/navigation";
import Loading from "@/components/ui/loading";
import { Chceckout } from "@/components/proceed-to-checkout/Checkout";
import { Item } from "@/components/proceed-to-checkout/Item";
import { MenuItem } from "@/types/menuItems";

const Page: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    carts: { cartItems },
    isLoading,
    isError,
    error,
  } = useSelector((state: RootState) => state.carts);
  const { data: session } = useSession();
  const router = useRouter();
  const userEmail = session?.user?.email;

  useEffect(() => {
    if (userEmail) {
      dispatch(fetchCartItems(userEmail));
    }
  }, [dispatch, userEmail]);

  const getCartItems = useMemo(() => {
    return cartItems?.map((item: IACartwithEmail) => item.items);
  }, [cartItems]);

  const total = getCartItems?.reduce((acc: number, item: MenuItem) => {
    const itemPrice = item?.price || 0;
    const itemQuantity = item?.quantity || 0;
    return acc + itemPrice * itemQuantity;
  }, 0);

  const handleDelete = async (itemId: string) => {
    try {
      const response = await axios.delete("/api/deleteCartItem", {
        data: {
          itemId,
          userEmail,
        },
      });

      if (response.status === 200) {
        if (userEmail) {
          dispatch(fetchCartItems(userEmail));
        }
      } else {
        console.error("Failed to delete item:", response.data.message);
      }
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handlePayment = () => {
    router.push(`/dashboard/payment?amount=${total}`);
  };

  if (isLoading) {
    return (
      <p className="flex items-center justify-center h-screen">
        <Loading />
      </p>
    );
  }

  if (isError) {
    return <p className="text-red-500">Error fetching cart items {error}</p>;
  }

  if (total === 0) {
    return (
      <p className="flex items-center justify-center h-screen">
        Your cart is empty!
      </p>
    );
  }

  return (
    <div className="flex flex-col md:flex-row gap-4  py-5">
      <div className="w-full ">
        <p className="py-4 text-base md:text-lg border-b-2 border-black mb-4">
          Cart Items:
        </p>

        <div className="grid grid-cols-1 gap-4">
          {getCartItems?.map((item: MenuItem) => (
            <Item key={item._id} item={item} handleDelete={handleDelete} />
          ))}
        </div>
      </div>

      <div className="w-full md:w-2/6 ">
        {total == 0 ? (
          <Loading />
        ) : (
          <Chceckout total={total} handlePayment={handlePayment} />
        )}
      </div>
    </div>
  );
};

export default Page;
