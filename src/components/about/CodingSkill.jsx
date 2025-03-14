import React from "react";
import { codingskill } from "../../utils/codingskill";

const CodingSkill = () => {
  return (
    <div className="space-y-[10px]">
      <div className="text-[30px] text-black">Coding Skill</div>
      <div className="grid grid-cols-2 gap-1">
        {codingskill.map((item, index) => {
          return (
            <div key={index} className="text-black text-[19px]">
              • {item.text}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CodingSkill;
