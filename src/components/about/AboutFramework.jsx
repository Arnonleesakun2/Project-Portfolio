import React from "react";
import { framework } from "../../utils/framework";
import logo1 from "/img/axios.svg";
import logo2 from "/img/clerk.svg";
import logo3 from "/img/daisyui.svg";
import logo4 from "/img/jquery.svg";
import logo5 from "/img/laravel.svg";
import logo6 from "/img/nodedotjs.svg";
import logo7 from "/img/prisma.svg";
import logo8 from "/img/react.svg";
import logo9 from "/img/shadcnui.svg";
import logo10 from "/img/stripe.svg";
import logo11 from "/img/tailwindcss.svg";
import logo12 from "/img/zod.svg";
import Marquee from "react-fast-marquee";

const AboutFramework = () => {
  let logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo11,
    logo12,
  ];
  return (
    <div className="py-18">
      <div className="font-PermanentMarker text-black text-[40px] font-semibold text-center">
        Framework and Library
      </div>
      <div className="flex flex-wrap gap-[30px] mt-5">
        <Marquee
          pauseOnHover={true}
          direction="right"
          gradient={true}
          gradientColor="orange"
          speed={50}
          loop={0}
        >
          {logos.map((item, index) => {
            return (
              <img
                key={index}
                className="h-[100px] w-[100px] object-contain mx-[20px]"
                src={item}
                alt={`logo-${index}`}
              />
            );
          })}
        </Marquee>
      </div>
    </div>
  );
};

export default AboutFramework;
