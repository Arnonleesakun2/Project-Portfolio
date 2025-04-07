import React from "react";
import { experince } from "../../utils/Experience";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FadeInWhenVisible from "../motion/FadeInWhenVisible ";

const AboutExperience = () => {
  return (
    <FadeInWhenVisible>
      <div className="maincontainer mt-20 md:mt-80">
        <div className="">
          <Card className="">
            <CardHeader>
              <CardTitle className="text-4xl font-PermanentMarker">
                Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              {experince.map((item, index) => {
                return (
                  <div key={index} className="mb-2">
                    <div className="font-thai text-[22px] text-black leading-[25px] font-semibold">
                      {item.date}
                    </div>
                    <div className="font-thai text-[22px] mt-1 text-black leading-[25px] font-semibold">
                      {item.title}
                    </div>
                    <div className="font-thai mt-2 text-[17px] leading-[23px] text-black/90">
                      {item.description}
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>
      </div>
    </FadeInWhenVisible>
  );
};

export default AboutExperience;
