import React from "react";
import { education } from "../../utils/education";
import FadeInWhenVisible from "../motion/FadeInWhenVisible ";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutEducation = () => {
  return (
    <FadeInWhenVisible>
      <div className="maincontainer pt-200 md:pt-40">
        <Card className="hover:border-pink-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-pink-500/20">
          <CardHeader>
            <CardTitle className="text-4xl font-PermanentMarker bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
              Education
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {education.map((item, index) => {
              return (
                <div
                  key={index}
                  className="p-4 rounded-lg"
                >
                  <div className="font-thai text-[22px] leading-[25px] font-semibold text-white">
                    {item.title}
                  </div>
                  <div className="font-thai text-[16px] mt-2 leading-[25px] text-white/80">
                    {item.des}
                  </div>
                  <div className="font-thai text-[16px] mt-2 leading-[20px] text-pink-400">
                    {item.year}
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>
    </FadeInWhenVisible>
  );
};

export default AboutEducation;
