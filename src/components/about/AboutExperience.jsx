import React from "react";
import { experince } from "../../utils/Experience";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FadeInWhenVisible from "../motion/FadeInWhenVisible ";

const AboutExperience = () => {
  return (
    <FadeInWhenVisible>
      <div className="maincontainer mt-20 md:mt-80">
        <div className="">
          <Card className="hover:border-pink-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-pink-500/20">
            <CardHeader>
              <CardTitle className="text-4xl font-PermanentMarker bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
                Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {experince.map((item, index) => {
                return (
                  <div 
                    key={index} 
                    className="p-4 rounded-lg"
                  >
                    <div className="font-thai text-[22px] text-white leading-[25px] font-semibold">
                      {item.position}
                    </div>
                    <div className="font-thai text-[20px] mt-1 text-yellow-300/90 leading-[25px] font-medium">
                      {item.company}
                    </div>
                    <div className="mt-3">
                      {item.description.map((des, index) => {
                        return (
                          <div
                            key={index}
                            className="font-thai mt-2 text-[17px] leading-[23px] text-white/80"
                          >
                            • {des}
                          </div>
                        );
                      })}
                    </div>
                    <div className="font-thai text-[16px] mt-4 text-pink-400 leading-[20px] font-medium">
                      {item.date}
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
