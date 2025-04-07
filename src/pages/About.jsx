import React from "react";
import AboutLeft from "../components/about/AboutLeft";
import AboutRight from "../components/about/AboutRight";
import AboutEducation from "../components/about/AboutEducation";
import AboutExperience from "../components/about/AboutExperience";
import AboutTechnicalSkill from "../components/about/AboutTechnicalSkill";
import Scroll from "../layout/Scroll";
//framermotion
import { motion } from "framer-motion";
import ProjectContent from "../components/project/ProjectContent";

const About = () => {
  return (
    <>
      <Scroll />
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 2 }}
      >
        <div className="bg-[#FFA500] min-h-[115vh] sm:min-h-screen">
          <div className="maincontainer pt-[86px]">
            <div className="p-[50px] md:grid md:grid-cols-2">
              <AboutLeft />
              <AboutRight />
            </div>
          </div>
        </div>
        <div className="bg-[#030305] min-h-screen">
          <div className=" md:grid md:grid-cols-2 maincontainer">
            <AboutEducation />
            <AboutExperience />
          </div>
          <ProjectContent />
          <AboutTechnicalSkill />
        </div>
      </motion.div>
    </>
  );
};

export default About;
