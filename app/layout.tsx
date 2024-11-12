import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../src/sections/layouts/Footer";
import ClientProvider from "@/Provider/ClientProvide";

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
