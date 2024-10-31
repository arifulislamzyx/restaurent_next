"use client";
import Button from "@/components/buttons/Button";
import { MenuItem } from "@/types/menuItems";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Progress } from "@/components/ui/progress";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/Redux/Store/Store";
import { fetchMenu } from "@/Redux/Slice/MenuSlice";
import { useKeenSlider } from "keen-slider/react";
import { motion } from "framer-motion";
import "keen-slider/keen-slider.min.css";
import { productAnm, showSlideProduct } from "@/animation/varients";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { truncateText } from "@/utils/TruncateText";

const Page = ({ params }) => {
  const { id } = params;
  const [menuItem, setMenuItem] = useState<MenuItem | null>(null);
  const { data: session, status } = useSession();
  const email = session?.user?.email;
  const [cartData, setCartData] = useState<MenuItem | null>(null);
  const [progress, setProgress] = useState(0);
  const [textLength, setTextLength] = useState(40);

  const dispatch = useDispatch<AppDispatch>();
  const { menu, isLoading, isError } = useSelector((state) => state.menus);

  useEffect(() => {
    dispatch(fetchMenu());
  }, [dispatch]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 90 ? prev + 10 : prev));
    }, 300);
    axios(`/api/menu/${id}`)
      .then((res) => {
        res;
        setMenuItem(res.data);
        clearInterval(interval);
        setProgress(100);
      })
      .catch((err) => console.error("Error fetching product:", err));
    clearInterval(interval);

    return () => clearInterval(interval);
  }, [id]);

  const handleAddItems = async (items: MenuItem) => {
    setCartData(items);

    if (session?.user) {
      try {
        const res = await axios.post(
          "/api/carts",
          { items, email },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (res.status == 200) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Items is Added",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } catch (error: any) {
        if (error.response && error.response.status === 409) {
          Swal.fire({
            position: "top-end",
            icon: "info",
            title: "This item is already in your cart.",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Something went wrong while adding the item.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    } else {
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
    }
  };

  const filterMenu = menu.filter(
    (item) => item.category === menuItem?.category
  );

  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: {
      perView: 4,
      spacing: 15,
    },
  });

  if (menu.length == 0 || !menuItem || filterMenu === null) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <p>Loading...</p>
        <Progress value={progress} className="w-[60%]" />
      </div>
    );
  }

  return (
    <div>
      <div className="container mx-auto py-10 flex items-center gap-8 border-b-2">
        <Image
          src={menuItem?.image}
          alt={menuItem?.name}
          width={400}
          height={400}
          className="rounded"
        />
        <div className="w-2/6 space-y-4">
          <h1 className="text-2xl font-bold">{menuItem?.name}</h1>
          <p className="mt-4 ">{menuItem?.recipe}</p>
          <p className="mt-2 text-xl font-semibold">${menuItem?.price}</p>
          <Button
            onClick={() => handleAddItems(menuItem?._id)}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add to Cart
          </Button>

          <p>
            <span className="text-base md:text-lg font-bold">Category: </span>
            {menuItem?.category}
          </p>
        </div>
      </div>

      <motion.div
        variants={productAnm}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 md:gap-4 lg:gap-8 mt-5 py-4  keen-slider"
        ref={sliderRef}
      >
        {filterMenu.map((menu: MenuItem) => (
          <div
            className=" shadow-xl hover:shadow-2xl rounded-xl  keen-slider__slide"
            key={menu._id}
          >
            <motion.div
              key={menu._id}
              variants={showSlideProduct}
              className="w-full  hover:scale-105 transition-all max-w-[300px] overflow-hidden bg-white"
            >
              <Image
                width={300}
                height={150}
                src={menu.image}
                alt={menu.name}
                className="rounded-t-xl transition duration-700 ease-in-out transform hover:scale-105"
              />
              <div className="py-5">
                <div className="px-3">
                  <Link href={`/menus/${menu._id}`}>
                    <h4 className="text-sm font-bold md:text-base lg:text-lg mb-2 cursor-pointer">
                      {menu.name}
                    </h4>
                  </Link>
                  <p className="mb-2">
                    {truncateText(menu.recipe, textLength)}
                  </p>
                </div>
                <div className="flex justify-between px-3">
                  <p className="font-bold">${menu.price}</p>
                  <Button
                    onClick={() => handleAddItems(menu._id)}
                    className="flex items-center gap-1 text-xs font-bold rounded-full p-1 shadow-2xl bg-slate-50 hover:bg-orange-600 hover:rounded-full hover:p-1 hover:text-white"
                  >
                    <ShoppingCart size={15} /> Add
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Page;
