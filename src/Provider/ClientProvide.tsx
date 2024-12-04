"use client";

import { Provider } from "react-redux";
import store from "@/Redux/Store/Store";
import AuthProvider from "@/Provider/AuthProvider";
import Navbar from "@/layouts/Navbar";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function ClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.addEventListener("resize", handleResize);
  }, []);

  const path = "/dashboard";
  return (
    <AuthProvider>
      <Provider store={store}>
        {!(isMobile && pathName === path) && <Navbar />}
        {children}
      </Provider>
    </AuthProvider>
  );
}
