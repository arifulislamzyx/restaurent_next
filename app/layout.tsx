"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../src/sections/layouts/Navbar";
import Footer from "../src/sections/layouts/Footer";
import { Metadata } from "@/types/metadata";
import { Provider } from "react-redux";
import store from "@/Redux/Store/Store";
import Head from "next/head";
import AuthProvider from "@/Provider/AuthProvider";

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
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={inter.className}>
        <Navbar />
        <div className="container">
          <AuthProvider>
            <Provider store={store}>{children}</Provider>
          </AuthProvider>
        </div>
        <Footer />
      </body>
    </html>
  );
}
