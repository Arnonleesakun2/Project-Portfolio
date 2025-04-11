import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import Menu from "./Menu";

const Navbar = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        // ถ้าเลื่อนลง -> ซ่อน Navbar
        setIsVisible(false);
      } else {
        // ถ้าเลื่อนขึ้น -> แสดง Navbar
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`w-full fixed top-0 py-[20px] z-50 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
      }`}
      style={{
        backgroundColor: lastScrollY > 50 ? "rgba(0, 0, 0, 0.8)" : "transparent",
      }}
    >
      <div className="maincontainer ">
        <Logo />
      </div>
    </div>
  );
};

export default Navbar;
