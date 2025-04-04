import { FaReact } from "react-icons/fa";
import { SiSqlite } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { SiDaisyui } from "react-icons/si";
import { DiJqueryLogo } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { SiPrisma } from "react-icons/si";
import { SiClerk } from "react-icons/si";
import { FaCcStripe } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import FigmaToReact1 from "/img/Project1.png";
import carplan1 from "/img/carplan1.png";
import carplan2 from "/img/carplan2.png";
import carplan3 from "/img/carplan3.png";
import carplan4 from "/img/carplan4.png";
import carplan5 from "/img/carplan5.png";
import camping1 from "/img/camping1.png";
import camping2 from "/img/camping2.png";
import camping3 from "/img/camping3.png";
import camping4 from "/img/camping4.png";
import camping5 from "/img/camping5.png";
import camping6 from "/img/camping6.png";
import social1 from "/img/social1.png";
import social2 from "/img/social2.png";
import social3 from "/img/social3.png";

export const project = [
  {
    image: [FigmaToReact1],
    title: "Figma to React",
    icon: [<FaReact />, <RiTailwindCssFill />],
    des: "โปรเจคนี้เป็นการแปลง ดีไซน์จาก Figma เป็นเว็บแอปพลิเคชันด้วย React.js โดยใช้ Tailwind CSS ในการออกแบบสไตล์ และ Deploy บน Netlify เพื่อให้สามารถเข้าถึงและใช้งานได้ง่าย",
    demo: "https://project1-figmatoreact.netlify.app",
    github: ["https://github.com/Arnonleesakun2/Project1-FigmatoReact"],
  },
  {
    image: [carplan1, carplan2, carplan3, carplan4, carplan5],
    title: "ระบบสารสนเทศการวางแผนการเดินรถ",
    icon: [
      <FaLaravel />,
      <RiTailwindCssFill />,
      <DiMysql />,
      <SiDaisyui />,
      <DiJqueryLogo />,
    ],
    des: "โปรเจคนี้เป็นแอปพลิเคชัน CRUD พัฒนาด้วย Laravel ใช้ Tailwind CSS และ DaisyUI ในการออกแบบ UI มีฟีเจอร์การสร้างและพิมพ์รายงานในรูปแบบ PDF ผู้ใช้สามารถดูข้อมูลในตารางและพิมพ์ออกมาได้ โปรเจคนี้ได้ถูกโฮสต์บน HostNeverDie ทำให้สามารถใช้งานได้จริง โดยในการพัฒนาโปรเจคนี้ฉันได้ฝึกฝนหลายทักษะ เช่น การเขียนโปรแกรมด้วย PHP และการใช้ Laravel ในการพัฒนาเว็บแอปพลิเคชัน การออกแบบและพัฒนา UI/UX ด้วย Tailwind CSS และ DaisyUI การออกแบบฐานข้อมูลและสร้างความสัมพันธ์ของข้อมูลใน Relational Database การสร้างและจัดการ PDF จากข้อมูลในฐานข้อมูล การทำงานในสภาพแวดล้อมการพัฒนาเว็บจริงโดยการโฮสต์แอปพลิเคชันบนเซิร์ฟเวอร์จริง โปรเจคนี้ช่วยให้ฉันเรียนรู้และพัฒนาทักษะการพัฒนาเว็บแอปพลิเคชัน, การออกแบบฐานข้อมูล, และการสร้างรายงาน PDF ซึ่งเป็นทักษะที่มีประโยชน์ในการพัฒนาแอปพลิเคชันในงานธุรกิจจริง",
    demo: "",
    github: ["https://github.com/Arnonleesakun2/Project-carplan-laravel"],
  },
  {
    image: [camping1, camping2, camping3, camping4, camping5, camping6],
    title: "Project-Camping",
    icon: [
      <FaReact />,
      <FaNodeJs />,
      <RiTailwindCssFill />,
      <SiPrisma />,
      <DiMysql />,
      <SiClerk />,
      <FaCcStripe />,
      <SiDaisyui />,
    ],
    des: "โปรเจคนี้เป็นระบบจอง Camping ที่กำลังอยู่ในระหว่างการพัฒนา ที่ทำตาม Youtube BY รอยไถ พัฒนา เป็นเว็บแอปพลิเคชันที่ใช้ CRUD โดยมีการนำไลบรารีต่างๆ มาใช้เพื่อเพิ่มประสิทธิภาพ เช่น Clerk สำหรับระบบล็อกอิน Stripe สำหรับระบบชำระเงิน Prisma สำหรับการจัดการฐานข้อมูล และใช้ Node.js เป็นฝั่ง Backend ในการพัฒนาโปรเจคนี้ได้เรียนรู้เกี่ยวกับการออกแบบ Folder Structure ที่เป็นระเบียบและง่ายต่อการดูแล การจัดการ API และการแยก Component เพื่อให้โค้ดสามารถขยายและบำรุงรักษาได้ง่ายขึ้น",
    demo: "",
    github: ["https://github.com/Arnonleesakun2/Project-Camping"],
  },
  {
    image: "",
    title: "Project-Todolist",
    icon: [<FaReact />, <RiTailwindCssFill />, <FaLaravel />, <SiSqlite />],
    des: "Project-Todolist เป็นโปรเจคเล็กๆ ที่มีการเพิ่ม ลบ รายการใน To-Do List โดยใช้ React ด้านหน้าบ้านและ Laravel ด้านหลังบ้าน โดยใช้ SQLite เป็นฐานข้อมูล",
    demo: "",
    github: ["https://github.com/Arnonleesakun2/Project-Todolist"],
  },
  {
    image: [social1, social2, social3],
    title: "Project-Social",
    icon: [<FaReact />, <RiTailwindCssFill />, <SiClerk />, <FaNodeJs  />,<SiExpress />,<SiMongodb />],
    des: "Project-Social เป็นโปรเจกต์โซเชียลมีเดียขนาดเล็กที่พัฒนาด้วย Stack สมัยใหม่ มีระบบยืนยันตัวตนผ่าน Clerk สามารถสร้างโพสต์ ลบโพสต์ กด Like ดูข้อมูลผู้ใช้ รวมถึงระบบลงทะเบียนและล็อกอินอย่างปลอดภัย",
    demo: "https://project-social.netlify.app/",
    github: ["https://github.com/Arnonleesakun2/Project-Social"],
  },
];
