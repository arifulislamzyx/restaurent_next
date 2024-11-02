import Sidebar from "@/sections/dashboard/sidebar";
import DashboardNav from "@/sections/layouts/DashboardNav";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="block z-10 md:hidden">
        <DashboardNav />
      </div>

      <div className="container mx-auto flex flex-col md:flex-row gap-10 mt-4">
        <div className="hidden md:flex">
          <Sidebar />
        </div>

        <main className="flex-grow p-4">{children}</main>
      </div>
    </>
  );
};

export default Layout;
