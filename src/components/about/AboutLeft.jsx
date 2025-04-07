import React from "react";
import resume from "/img/resume.pdf";
import cv from "/img/CV.pdf";
import FadeInWhenVisible from "../motion/FadeInWhenVisible ";
import { Button } from "../ui/button";
const AboutLeft = () => {
  return (
    <FadeInWhenVisible>
      <div
        className="font-PermanentMarker text-[80px] font-semibold text-black"
        style={{
          textShadow: "0 0 5px #fff, 0 0 2px #fff, 0 0 2px #fff, 0 0 5px #fff",
        }}
      >
        Hello,
      </div>
      <div
        className="font-PermanentMarker text-[80px] font-semibold text-white"
        style={{
          textShadow: "0 0 5px #fff, 0 0 2px #fff, 0 0 2px #fff, 0 0 5px #fff",
        }}
      >
        <span className="text-black">I'm  Pop!</span>
      </div>
      <div className="font-thai text-[19px] font-medium text-white leading-[23px]">
        ผมเป็นนักศึกษามหาวิทยาลัยเจ้าพระยา คณะบริหารและการจัดการ
        สาขาคอมพิวเตอร์ธุรกิจ มีความหลงใหลในเทคโนโลยี การพัฒนาเว็บไซต์
        และระบบสารสนเทศทางธุรกิจ เชี่ยวชาญด้านการเขียนโปรแกรม ออกแบบระบบ
        และวิเคราะห์ข้อมูล พร้อมเรียนรู้และพัฒนาอย่างต่อเนื่อง
        เพื่อสร้างโซลูชันที่มีประสิทธิภาพและตอบโจทย์ธุรกิจ
      </div>
      <div className="flex gap-3 mt-8">
        <Button className="cursor-pointer">
          <a href={resume} target="_blank" className="font-shortstack">
            View Resume
          </a>
        </Button>
        <Button className="cursor-pointer">
          <a href={cv} target="_blank" className="font-shortstack">
            View CV
          </a>
        </Button>
      </div>
    </FadeInWhenVisible>
  );
};

export default AboutLeft;
