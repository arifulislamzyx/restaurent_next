"use client";

import { Provider } from "react-redux";
import store from "@/Redux/Store/Store";
import AuthProvider from "@/Provider/AuthProvider";

export default function ClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <Provider store={store}>{children}</Provider>
    </AuthProvider>
  );
}
