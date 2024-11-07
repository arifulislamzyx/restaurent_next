import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../src/sections/layouts/Navbar";
import Footer from "../src/sections/layouts/Footer";
import { Metadata } from "@/types/metadata";
import ClientProvider from "@/Provider/ClientProvide";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
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
        <ClientProvider>
          <div className="container">{children}</div>
          <Footer />
        </ClientProvider>
      </body>
    </html>
  );
}
