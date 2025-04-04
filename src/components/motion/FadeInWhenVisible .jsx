// components/animation/FadeInWhenVisible.jsx
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer"; // ✅

const FadeInWhenVisible = ({ children }) => {
  const controls = useAnimation();
  
  // ใช้ triggerOnce: false เพื่อให้สามารถ trigger ทุกครั้งที่เข้าและออกจากมุมมอง
  const [ref, inView] = useInView({
    threshold: 0.2, // สามารถปรับค่าความเห็นขององค์ประกอบ
    triggerOnce: false, // เปลี่ยนเป็น false เพื่อให้สามารถ trigger ได้ทั้งสกอขึ่นและลง
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");  // ถ้าองค์ประกอบอยู่ในมุมมอง ให้เริ่มการแสดง
    } else {
      controls.start("hidden");   // ถ้าองค์ประกอบออกจากมุมมองให้กลับสู่สถานะเริ่มต้น
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref} // เชื่อมโยงกับ ref เพื่อให้สามารถจับการเข้า/ออกจากมุมมองได้
      initial="hidden" // เริ่มต้นด้วยสถานะ hidden
      animate={controls} // ควบคุมการเปลี่ยนแปลงของ animation
      variants={variants} // กำหนดค่า variants สำหรับการเปลี่ยนแปลง
    >
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisible;
