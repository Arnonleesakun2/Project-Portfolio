import React from "react";
import { softwareskill } from "../../utils/sorfwareskill";

const SoftwareSkill = () => {
  return (
    <div className="space-y-[10px]">
      <div className="text-[25px] text-black ">Software Skills</div>
      <div className="grid grid-cols-3 gap-2 w-[70%]">
        {softwareskill.map((item,index) => {
          return (
            <div key={index} className="text-[40px] hover:scale-110 duration-700 cursor-no-drop">
              {item.icon}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SoftwareSkill;
