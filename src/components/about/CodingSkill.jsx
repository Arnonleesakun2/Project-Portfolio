import React from "react";
import { codingskill } from "../../utils/codingskill";

const CodingSkill = () => {
  return (
    <div className="space-y-[10px]">
      <div className="text-[30px] text-black">Coding Skill</div>
      <div className="grid grid-cols-2 gap-1">
        {codingskill.map((item, index) => {
          return (
            <div key={index} >
              <button className="text-white text-[19px] bg-black p-2 rounded-[15px]">{item.text}</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CodingSkill;
