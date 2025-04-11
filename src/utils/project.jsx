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
import { RiNextjsFill } from "react-icons/ri";
import { RiSupabaseFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
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
import blog from "/img/simpleblog.png";
import employee1 from "/img/employee1.png";
import employee2 from "/img/employee2.png";
import employee3 from "/img/employee3.png";

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
    icon: [<FaReact />,<SiShadcnui />, <RiTailwindCssFill />, <FaLaravel />, <SiSqlite />],
    des: "Project-Todolist เป็นโปรเจคเล็กๆ ที่มีการเพิ่ม ลบ รายการใน To-Do List โดยใช้ React ด้านหน้าบ้านและ Laravel ด้านหลังบ้าน โดยใช้ SQLite เป็นฐานข้อมูล",
    demo: "",
    github: ["https://github.com/Arnonleesakun2/Project-Todolist"],
  },
  {
    image: [social1, social2, social3],
    title: "Project-Social",
    icon: [
      <FaReact />,
      <SiShadcnui />,
      <RiTailwindCssFill />,
      <SiClerk />,
      <FaNodeJs />,
      <SiExpress />,
      <SiMongodb />,
    ],
    des: "Project-Social เป็นโปรเจกต์โซเชียลมีเดียขนาดเล็กที่พัฒนาด้วย Stack สมัยใหม่ มีระบบยืนยันตัวตนผ่าน Clerk สามารถสร้างโพสต์ ลบโพสต์ กด Like ดูข้อมูลผู้ใช้ รวมถึงระบบลงทะเบียนและล็อกอินอย่างปลอดภัย",
    demo: "https://project-social.netlify.app/",
    github: ["https://github.com/Arnonleesakun2/Project-Social"],
  },
  {
    image: [blog],
    title: "Project-SimpleBlog",
    icon: [
      <RiNextjsFill />,
      <SiShadcnui />,
      <RiTailwindCssFill />, 
      <SiClerk />,
      <SiTypescript />,
      <RiSupabaseFill />,
      <SiPostgresql />,
    ],
    des: "โปรเจ็ค Simple-Blog เป็นเว็บบล็อกขนาดเล็กที่ให้ฟีเจอร์ในการเพิ่ม, แก้ไข, และลบบล็อกโพสต์ โดยใช้เทคโนโลยีที่ทันสมัยในการพัฒนาและจัดการข้อมูล ดังนี้ Next.js ใช้เป็นเฟรมเวิร์กหลักในการพัฒนาเว็บไซต์ ShadcnUI ใช้ในการออกแบบ UI ของเว็บไซต์ให้ดูสวยงามและทันสมัย PostgreSQL และ Supabase ใช้ PostgreSQL ในการจัดเก็บข้อมูลของบล็อกโพสต์ และ Supabase เป็นบริการฐานข้อมูล Clerk ใช้ในการจัดการผู้ใช้และการยืนยันตัวตน (Authentication) Render ใช้ในการ deploy โปรเจ็คให้พร้อมใช้งานบนเว็บไซต์",
    demo: "https://project-simpleblog.onrender.com/",
    github: ["https://github.com/Arnonleesakun2/Project-SimpleBlog"],
  },
  {
    image: [employee1, employee2, employee3],
    title: "Employee-Management-System",
    icon: [<FaReact />, <SiShadcnui />, <RiTailwindCssFill />, <FaNodeJs />,<SiExpress/>,<RiSupabaseFill />,<SiPostgresql />],
    des: "เว็บแอปพลิเคชันขนาดเล็กสำหรับจัดการข้อมูลพนักงาน ประกอบด้วยฟีเจอร์ เช่น การสมัครพนักงาน การดูและลบข้อมูลพนักงาน การคำนวณเงินเดือน และการสร้างรายงาน",
    demo: "https://employeemn.netlify.app/",
    github: ["https://github.com/Arnonleesakun2/Employee-Management-System"],
  },
];
