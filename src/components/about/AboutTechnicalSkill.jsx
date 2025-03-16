import React from "react";
import SoftwareSkill from "./SoftwareSkill";
import CodingSkill from "./CodingSkill";

const AboutTechnicalSkill = () => {
  return (
    <div className="p-[70px] mt-[220px] sm:mt-0">
      <div className="font-PermanentMarker text-black text-[60px] font-semibold">
        Technical Skill
      </div>
      <div className="grid grid-cols-2 gap-[5px] font-PermanentMarker text-white">
        <SoftwareSkill />
        <CodingSkill />
      </div>
    </div>
  );
};

export default AboutTechnicalSkill;
