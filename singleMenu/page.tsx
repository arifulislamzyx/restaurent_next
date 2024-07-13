"use client";
import { data } from "autoprefixer";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Metadata } from "@/types/metadata";
import Image from "next/image";

const ModalsX: React.FC = ({ params }: any) => {
  const [ModalsX] = params;
  const [menus, setMenus] = useState<Metadata | null>(null);

  useEffect(() => {
    if (ModalsX) {
      fetch(`/api/menu/${ModalsX}`)
        .then((res) => res.json())
        .then((data) => setMenus(data))
        .catch((err) => err);
    }
  }, [ModalsX]);
  return (
    <div>
      <Image alt={menus.name} src={menus.image}></Image>
      <h2>Here is Modals</h2>
    </div>
  );
};

export default ModalsX;

import React from "react";

const page = () => {
  return <div>page</div>;
};

export default page;
