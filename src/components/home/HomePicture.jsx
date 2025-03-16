import React from "react";
import Profile from "/img/profiles.png";
const HomePicture = () => {
  return (
    <div className="absolute top-[53px] sm:top-[53px] sm:left-[200px] z-[9]">
      <img
        className="w-[325px] h-[400px] sm:w-[400px] sm:h-[450px]"
        src={Profile}
        alt=""
      />
    </div>
  );
};

export default HomePicture;
