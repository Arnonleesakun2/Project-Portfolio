import { techskill } from "../../utils/techskill";

const AboutTechnicalSkill = () => {
  return (
    <div className="p-[70px] ">
      <div className="font-PermanentMarker text-white text-[60px] font-semibold text-center">
        Technical Skill
      </div>
      <div className="flex flex-wrap gap-3 justify-center mt-8">
        {techskill.map((item, index) => {
          {
            return (
              <button className="flex items-center gap-2 bg-neutral-900 px-6 py-1 rounded-xl group hover:rotate-8 duration-500 border border-white/[0.50]">
                <img
                  className="w-[30px] h-[30px] group-hover:scale-110 transition-transform duration-300"
                  src={item.img}
                  alt=""
                />
                <p className="font-shortstack font-bold text-white/90 group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-yellow-500 group-hover:bg-clip-text group-hover:text-transparent duration-500">
                  {item.text}
                </p>
              </button>
            );
          }
        })}
      </div>
    </div>
  );
};

export default AboutTechnicalSkill;
