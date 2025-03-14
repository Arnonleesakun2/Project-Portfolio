import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  );
};

export default Layout;
