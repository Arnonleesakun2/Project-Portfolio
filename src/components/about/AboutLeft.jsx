import React from "react";
import resume from "/img/resume.pdf";
import cv from "/img/CV.pdf";
import FadeInWhenVisible from "../motion/FadeInWhenVisible ";
const AboutLeft = () => {
  return (
    <FadeInWhenVisible>
      <div
        className="font-PermanentMarker text-[80px] font-semibold text-white"
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
        I'm <span className="text-black">Pop!</span>
      </div>
      <div className="font-thai text-[19px] font-medium text-white leading-[23px]">
        ผมเป็นนักศึกษามหาวิทยาลัยเจ้าพระยา คณะบริหารและการจัดการ
        สาขาคอมพิวเตอร์ธุรกิจ มีความหลงใหลในเทคโนโลยี การพัฒนาเว็บไซต์
        และระบบสารสนเทศทางธุรกิจ เชี่ยวชาญด้านการเขียนโปรแกรม ออกแบบระบบ
        และวิเคราะห์ข้อมูล พร้อมเรียนรู้และพัฒนาอย่างต่อเนื่อง
        เพื่อสร้างโซลูชันที่มีประสิทธิภาพและตอบโจทย์ธุรกิจ
      </div>
      <div className="flex gap-3">
        <div className="mt-[20px] hover:translate-x-[10px] duration-700">
          <a
            href={resume}
            target="_blank"
            className="font-shortstack px-[20px] py-[10px] bg-black text-white rounded-[7px] font-semibold"
          >
            View Resume
          </a>
        </div>
        <div className="mt-[20px] hover:translate-x-[10px] duration-700">
          <a
            href={cv}
            target="_blank"
            className="font-shortstack px-[20px] py-[10px] bg-black text-white rounded-[7px] font-semibold"
          >
            View CV
          </a>
        </div>
      </div>
    </FadeInWhenVisible>
  );
};

export default AboutLeft;
