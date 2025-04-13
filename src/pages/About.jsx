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
        <div className="relative bg-[url('/img/background.gif')] bg-center bg-cover bg-fixed bg-no-repeat min-h-screen pt-20">
          <div className="absolute inset-0 backdrop-blur-[8px] bg-black/30"></div>
          <div className="relative z-10">
            <div className="maincontainer">
              <div className="p-[50px] md:grid md:grid-cols-2">
                <AboutLeft />
                <AboutRight />
              </div>
              <div className="md:grid md:grid-cols-2 mt-[100px]">
                <AboutEducation />
                <AboutExperience />
              </div>
              <div className="">
                <ProjectContent />
                <AboutTechnicalSkill />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default About;
