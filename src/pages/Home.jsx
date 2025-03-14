import React from "react";

import HomeTopic from "../components/home/HomeTopic";
import HomeContact from "../components/home/HomeContact";
import HomePicture from "../components/home/HomePicture";
import HomeText from "../components/home/HomeText";
//framermotion
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className="relative bg-[#FFA500] min-h-screen z-[-1]"
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 2 }}
    >
      <div className="maincontainer pt-[86px]">
        <div className="relative flex justify-center mt-25 lg:mt-0">
          {/* ตัวอักษรหลัก */}
          <HomeTopic />
          {/* ข้อมูลติดต่อ*/}
          <HomeContact />
          {/* ภาพ */}
          <HomePicture />
          {/* ตัวอักษรรอง */}
          <HomeText />
        </div>
      </div>
      <div className="absolute py-[80px] bg-black w-full bottom-0"></div>
    </motion.div>
  );
};

export default Home;
