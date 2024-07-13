"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../src/sections/layouts/Navbar";
import Footer from "../src/sections/layouts/Footer";
import { Metadata } from "@/types/metadata";
import { Provider } from "react-redux";
import store from "@/Redux/Store/Store";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Restaurent Next",
  description: "Order Your Favourite Food Online",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
          <Navbar />
          <div className="container">
            <Provider store={store}>{children}</Provider>
          </div>
          <Footer />
        </ClerkProvider>
      </body>
    </html>
  );
}
