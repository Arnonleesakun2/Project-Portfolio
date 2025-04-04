import React from "react";
import AboutContact from "./AboutContact";
import AboutBirthdayBubble from "./AboutBirthdayBubble";
import AboutCountryBubble from "./AboutCountryBubble";
import AboutMarkBubble from "./AboutMarkBubble";
import FadeInWhenVisible from "../motion/FadeInWhenVisible ";

const AboutRight = () => {
  return (
    <FadeInWhenVisible>
      <div className="flex justify-center relative">
        {/* รูปกับคอนแทํก */}
        <AboutContact />
        {/* bubbleวันเกิด */}
        <AboutBirthdayBubble />
        {/* bubbleประเทศ */}
        <AboutCountryBubble />
        {/* ลายน้ำ */}
        <AboutMarkBubble />
      </div>
    </FadeInWhenVisible>
  );
};

export default AboutRight;
