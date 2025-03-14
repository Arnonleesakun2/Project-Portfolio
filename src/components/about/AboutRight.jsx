import React from "react";
import AboutContact from "./AboutContact";
import AboutBirthdayBubble from "./AboutBirthdayBubble";
import AboutCountryBubble from "./AboutCountryBubble";
import AboutMarkBubble from "./AboutMarkBubble";

const AboutRight = () => {
  return (
    <div className="flex justify-center relative">
      {/* รูปกับคอนแทํก */}
      <AboutContact/>
      {/* bubbleวันเกิด */}
      <AboutBirthdayBubble/>
      {/* bubbleประเทศ */}
      <AboutCountryBubble/>
      {/* ลายน้ำ */}
      <AboutMarkBubble/>
    </div>
  );
};

export default AboutRight;
