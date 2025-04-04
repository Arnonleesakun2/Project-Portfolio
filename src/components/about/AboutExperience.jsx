import React from "react";
import { AiFillStar } from "react-icons/ai";
import { experince } from "../../utils/Experience";
import FadeInWhenVisible from "../motion/FadeInWhenVisible ";

const AboutExperience = () => {
  return (
    <div className="maincontainer">
        <div className="relative">
          <div className="absolute p-[50px] top-[-50px] md:top-[280px] md:left-[20px]  bg-black">
            <div className="font-PermanentMarker text-black text-[70px] leading-[80px]">
              Experience
            </div>
            <div className="mt-[20px] space-y-[10px] ">
              {experince.map((item, index) => {
                return (
                  <div key={index} className="flex w-full">
                    <div className="w-[10%]">
                      <div className="flex justify-center text-[30px] text-white">
                        <AiFillStar />
                      </div>
                    </div>
                    <div className="w-[90%]">
                      <div className="font-thai text-[22px] text-white leading-[25px] font-semibold">
                        {item.date}
                      </div>
                      <div className="font-thai text-[22px] mt-1 text-white leading-[25px] font-semibold">
                        {item.title}
                      </div>
                      <div className="font-thai mt-2 text-[17px] leading-[23px] text-white/90">
                        {item.description}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
    </div>
  );
};

export default AboutExperience;
