"use client";
import { MenuItem } from "@/types/menuItems";
import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/Redux/Store/Store";
import { fetchMenu } from "@/Redux/Slice/MenuSlice";
import Loading from "@/components/ui/loading";
import SingleMenu from "@/components/menu/singleMenu/MenuCard";
import SimilarProducts from "@/components/menu/singleMenu/SimilarProducts";

const Page = ({ params }: { params: any }) => {
  const { id } = params;
  const [menuItem, setMenuItem] = useState<MenuItem | null>(null);
  const { data: session } = useSession();
  const email = session?.user?.email;
  const dispatch = useDispatch<AppDispatch>();
  const { menu, isError } = useSelector((state: RootState) => state.menus);

  useEffect(() => {
    dispatch(fetchMenu());
  }, [dispatch]);

  useEffect(() => {
    axios(`/api/menu/${id}`)
      .then((res) => {
        res;
        setMenuItem(res.data);
      })
      .catch((err) => console.error("Error fetching product:", err));
  }, [id]);

  const filterMenu: MenuItem[] = menu.filter(
    (item: MenuItem) => item.category === menuItem?.category
  );

  if (menu.length == 0 || !menuItem || filterMenu === null) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <Loading />
      </div>
    );
  }
  if (isError) {
    return <p>Error Fetching Menus</p>;
  }

  return (
    <div>
      <SingleMenu menuItem={menuItem} email={email} />

      <SimilarProducts filteredMenu={filterMenu} email={email} />
    </div>
  );
};

export default Page;
