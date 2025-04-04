import React from "react";
import { PiStarFill } from "react-icons/pi";
import { education } from "../../utils/education";
import FadeInWhenVisible from "../motion/FadeInWhenVisible ";

const AboutEducation = () => {
  return (
    <FadeInWhenVisible>
      <div className="maincontainer pt-[86px]">
        <div className="p-[50px] mt-[100px]   md:mt-[0px]">
          <div className="font-PermanentMarker text-center md:text-start text-white text-[70px] pl-[25px]">
            Education
          </div>
          <div className="space-y-[10px]">
            {education.map((item, index) => {
              return (
                <div key={index} className="">
                  <div className="p-[10px] grid grid-cols-[0.5fr_1fr_3fr] rounded-[10px] hover:bg-white/10 hover:translate-x-1 duration-700 cursor-no-drop">
                    <div className="text-[30px] flex justify-center">
                      <PiStarFill className="text-red-400" />
                    </div>
                    <div className="text-white font-thai text-[20px] leading-[20px]">
                      {item.year}
                    </div>
                    <div className="text-white font-thai text-[20px] leading-[20px]">
                      {item.title}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </FadeInWhenVisible>
  );
};

export default AboutEducation;
