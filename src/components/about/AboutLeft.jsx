import React from "react";
import resume from "/img/resume.pdf";
import cv from "/img/CV.pdf";
import FadeInWhenVisible from "../motion/FadeInWhenVisible ";
import { Button } from "../ui/button";
const AboutLeft = () => {
  return (
    <FadeInWhenVisible>
      <div className="font-PermanentMarker text-[80px] font-semibold text-white">
        Hello,
      </div>
      <div className="font-PermanentMarker text-[80px] font-semibold text-white">
        I'm{" "}
        <span className="bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
          Pop!
        </span>
      </div>
      <div className="font-thai text-[19px] font-medium text-white/90 leading-[23px] max-w-[600px]">
        "สวัสดีครับ! ผมเป็นนักศึกษาจบใหม่ที่มีความสนใจในการพัฒนาเว็บไซต์ในสายงาน
        Fullstack Developer ทั้งในด้าน Frontend และ Backend
        ผมมีความตั้งใจที่จะเรียนรู้สิ่งใหม่ ๆ
        และพร้อมที่จะพัฒนาทักษะอย่างต่อเนื่อง
        เพื่อให้สามารถสร้างสรรค์ผลงานที่มีคุณภาพ
        และเติบโตไปพร้อมกับทีมในงานที่ท้าทายครับ!"
      </div>
      <div className="flex gap-3 mt-8">
        <Button className="bg-gradient-to-r from-pink-500 to-yellow-500 hover:opacity-80 transition-opacity">
          <a
            href={resume}
            target="_blank"
            className="font-shortstack text-white"
          >
            View Resume
          </a>
        </Button>
        <Button className="bg-white/10 hover:bg-white/20 transition-colors border border-white/50">
          <a href={cv} target="_blank" className="font-shortstack text-white">
            View CV
          </a>
        </Button>
      </div>
    </FadeInWhenVisible>
  );
};

export default AboutLeft;
