import React from "react";
import Scroll from "../layout/Scroll";

//framermotion
import { motion } from "framer-motion";
import ProjectContent from "../components/project/ProjectContent";

const Project = () => {
  return (
    <>
      <Scroll />
      <motion.div
        className=""
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 2 }}
      >
        <div className="bg-black min-h-[115vh] sm:min-h-screen">
          <div className="maincontainer pt-[86px]">
           <ProjectContent/>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Project;
