import React from "react";
import { Link } from "react-router";
import { project } from "../../utils/project";
import { PhotoProvider, PhotoView } from "react-photo-view";

import "react-photo-view/dist/react-photo-view.css";
import FadeInWhenVisible from "../motion/FadeInWhenVisible ";

const ProjectContent = () => {
  return (
    <div className="w-[80%] py-[50px] mx-auto pt-[300px]">
      <div className="font-shortstack font-semibold py-[20px] text-[30px] text-white">
        Project
      </div>
      <div className="space-y-[30px]">
        {project.map((item, index) => {
          return (
            <FadeInWhenVisible key={index}>
              <div className="sm:flex sm:p-[10px] p-[30px] gap-[20px] min-h-[170px] rounded-[7px] hover:bg-white/10 duration-700">
                <div className="sm:w-[30%]">
                  {item.image[0] ? (
                    <PhotoProvider
                      speed={() => 800}
                      easing={(type) =>
                        type === 2
                          ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                          : "cubic-bezier(0.34, 1.56, 0.64, 1)"
                      }
                    >
                      <PhotoView src={item.image[0]}>
                        <img
                          className="w-full h-[180px] rounded-[7px] cursor-pointer"
                          src={item.image[0]}
                          alt={`Project ${index}`}
                        />
                      </PhotoView>
                      {item.image.slice(1).map((img, imgIndex) => (
                        <PhotoView key={imgIndex} src={img} />
                      ))}
                    </PhotoProvider>
                  ) : (
                    <div className=""></div>
                  )}
                </div>
                <div className="sm:w-[70%] space-y-[10px]">
                  <div className="">
                    <p className="font-shortstack text-white text-[20px] font-semibold">
                      {item.title}
                    </p>
                  </div>
                  <div className="flex gap-[10px] text-[25px]">
                    {item.icon.map((icon, index) => (
                      <div
                        key={index}
                        className="text-white p-[4px] rounded-[7px] hover:scale-110 duration-700"
                      >
                        {icon}
                      </div>
                    ))}
                  </div>
                  <div className="font-thai  text-white">{item.des}</div>
                  <div className="flex items-center gap-2">
                    {item.demo ? (
                      <div className="">
                        <Link
                          className="font-shortstack text-black py-[9px] px-[20px] bg-amber-200 rounded-[7px]  hover:bg-amber-400  duration-700"
                          to={item.demo}
                          target="_blank"
                        >
                          View Demo
                        </Link>
                      </div>
                    ) : null}
                    <div className="flex gap-4">
                      {item.github[0] ? (
                        <div className="flex gap-2">
                          {item.github.map((git, index) => {
                            return (
                              <Link
                                key={index}
                                className="font-shortstack text-black py-[6px] px-[20px] bg-amber-50 rounded-[7px]  hover:bg-amber-200  duration-700"
                                to={git}
                                target="_blank"
                              >
                                Github
                              </Link>
                            );
                          })}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </FadeInWhenVisible>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectContent;
