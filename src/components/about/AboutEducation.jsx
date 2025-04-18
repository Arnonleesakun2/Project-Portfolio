import React from "react";
import { education } from "../../utils/education";
import FadeInWhenVisible from "../motion/FadeInWhenVisible ";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const AboutEducation = () => {
  return (
    <FadeInWhenVisible>
      <div className="maincontainer pt-200 md:pt-40">
        <Card>
          <CardHeader>
            <CardTitle className="text-4xl font-PermanentMarker">
              Education
            </CardTitle>
          </CardHeader>
          <CardContent>
            {education.map((item, index) => {
              return (
                <div key={index} className="mb-2">
                    <div className="font-thai text-[22px] leading-[25px] font-semibold text-white">
                      {item.year}
                    </div>
                    <div className="font-thai text-[18px] mt-1 leading-[25px] text-white/80">
                      {item.title}
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
