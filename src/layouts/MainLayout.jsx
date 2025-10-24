import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className=" flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-1 w-full">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
