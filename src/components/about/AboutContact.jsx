import React from "react";
import Picture from "../../assets/img/Profiles.png";
import { contact } from "../../utils/contact";
import { Link } from "react-router";
import { MdOutlineArrowOutward } from "react-icons/md";

const AboutContact = () => {
  return (
    <div className="w-[90%] sm:w-[70%] absolute z-[9] top-[40px]">
      <img className="w-full h-[400px] " src={Picture} alt="" />
      <div className="bg-black">
        <div className="py-[15px] px-[30px] break-word">
          <div className="font-PermanentMarker text-[40px] text-white">
            Contact...
          </div>
          <div className="mt-[10px] space-y-[10px]">
            {contact.map((item, index) => {
              return (
                <div
                  key={index}
                  className="font-shortstack flex items-center gap-[10px] text-white "
                >
                  <div className="">{item.icon}</div>
                  {item.link ? (
                    <Link className="relative hover:translate-x-1 duration-700" target="_blank" to={item.link}>
                      {item.data} <MdOutlineArrowOutward className="absolute right-[-15px] top-[2px] " />
                    </Link>
                  ) : (
                    <span className="">
                      {item.data}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContact;
