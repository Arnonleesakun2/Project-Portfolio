import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Notfound from "../pages/Notfound";
import Layout from "../layout/Layout";

const AppRoute = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoute;
