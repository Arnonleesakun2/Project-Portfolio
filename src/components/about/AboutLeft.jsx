import React from "react";
import { Link } from "react-router";
import PDF from "/img/resume.pdf"

const AboutLeft = () => {
  return (
    <div className="">
      <div className="font-PermanentMarker text-[80px] font-semibold text-white">
        Hello,
      </div>
      <div className="font-PermanentMarker text-[80px] font-semibold text-white">
        I'm Pop !
      </div>
      <div className="font-thai text-[19px] font-medium text-white leading-[23px]">
        ผมเป็นนักศึกษามหาวิทยาลัยเจ้าพระยา คณะบริหารและการจัดการ
        สาขาคอมพิวเตอร์ธุรกิจ มีความหลงใหลในเทคโนโลยี การพัฒนาเว็บไซต์
        และระบบสารสนเทศทางธุรกิจ เชี่ยวชาญด้านการเขียนโปรแกรม ออกแบบระบบ
        และวิเคราะห์ข้อมูล พร้อมเรียนรู้และพัฒนาอย่างต่อเนื่อง
        เพื่อสร้างโซลูชันที่มีประสิทธิภาพและตอบโจทย์ธุรกิจ
      </div>
      <div className="mt-[20px] hover:translate-x-[10px] duration-700">
        <a
          href={PDF}
          target="_blank"
          className="font-shortstack px-[20px] py-[10px] bg-black text-white rounded-[7px] font-semibold"
        >
          View Resume
        </a>
      </div>
    </div>
  );
};

export default AboutLeft;
