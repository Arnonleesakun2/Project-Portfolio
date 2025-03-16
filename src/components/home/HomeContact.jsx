import React from "react";
import { follow } from "../../utils/follow";


const HomeContact = () => {
  return (
    <div className="absolute font-shortstack z-100 p-[30px] top-[670px] right-[5px] md:top-[300px] md:right-[200px] text-white bg-[#FFA500]">
      {follow.map((item, index) => {
        return (
          <div key={index} className="">
            <span>{item.title}</span>
            {item.des}
          </div>
        );
      })}
    </div>
  );
};

export default HomeContact;
