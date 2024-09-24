"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = ({ params }) => {
  const { id } = params;
  const [menuItem, setMenuItem] = useState(null);

  console.log(params);

  useEffect(() => {
    axios(`api/menu/${id}`)
      .then((res) => {
        res;

        setMenuItem(res.data);
      })
      .catch((err) => console.error("Error fetching product:", err));
  }, [id]);

  return <div>Page for item with ID: {id}</div>;
};

export default Page;
