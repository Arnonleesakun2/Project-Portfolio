import React from "react";
import { Link } from "react-router";
import { project } from "../../utils/project";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Card, CardContent } from "@/components/ui/card";

import "react-photo-view/dist/react-photo-view.css";
import FadeInWhenVisible from "../motion/FadeInWhenVisible ";

const ProjectContent = () => {
  return (
    <div className="w-[80%] py-[50px] mx-auto pt-[100px]">
      <div className="text-4xl font-PermanentMarker bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent mb-8">
        Projects
      </div>
      <div className="space-y-[30px]">
        {project.map((item, index) => {
          return (
            <FadeInWhenVisible key={index}>
              <Card className="hover:border-pink-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-pink-500/20">
                <CardContent className="p-6">
                  <div className="sm:flex gap-6">
                    <div className="sm:w-[30%] mb-4 sm:mb-0">
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
                              className="w-full h-[180px] rounded-lg cursor-pointer object-cover shadow-md"
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
                    <div className="sm:w-[65%] space-y-4">
                      <h3 className="font-shortstack text-white text-2xl font-semibold border-b border-white/10 pb-3">
                        {item.title}
                      </h3>
                      
                      <div className="space-y-2">
                        <h4 className="text-sm uppercase tracking-wider text-pink-400 font-semibold">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {item.icon.map((icon, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full text-white hover:bg-white/20 transition-colors duration-300"
                            >
                              <span className="text-lg">{icon}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-1.5">
                        {item.des.map((des, index) => {
                          return (
                            <div key={index} className="font-thai text-white/80 flex items-start gap-2">
                              <span className="text-yellow-400 mt-1">•</span>
                              <span>{des}</span>
                            </div>
                          );
                        })}
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-3 pt-4">
                        {item.demo ? (
                          <Link
                            className="font-shortstack text-black py-2 px-4 bg-gradient-to-r from-amber-200 to-amber-300 rounded-md hover:from-amber-300 hover:to-amber-400 transition-all duration-300 shadow-md flex items-center gap-2"
                            to={item.demo}
                            target="_blank"
                          >
                            <span className="text-lg">🔗</span> View Demo
                          </Link>
                        ) : null}
                        
                        {item.github[0] ? (
                          <div className="flex gap-2">
                            {item.github.map((git, index) => {
                              return (
                                <Link
                                  key={index}
                                  className="font-shortstack text-white py-2 px-4 bg-white/10 border border-white/20 rounded-md hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
                                  to={git}
                                  target="_blank"
                                >
                                  <span className="text-lg">⚙️</span> Github
                                </Link>
                              );
                            })}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeInWhenVisible>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectContent;
