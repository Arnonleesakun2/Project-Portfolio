import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Notfound from "../pages/Notfound";
import Layout from "../layout/Layout";
import Project from "../pages/Project";

const AppRoute = () => {
  const basename = 'https://ryes-portfolio.netlify.app/'; 
  return (
    <>
      <BrowserRouter basename={basename}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="project" element={<Project />} />
          </Route>
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoute;
