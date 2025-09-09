import React from "react";
import { skills } from "../utils/Tools";
import ToolCard from "./ToolCard";
const Tools = () => {
  return (
    <section
      id="skills"
      className="scroll-mt-[12vh] py-20 flex flex-col gap-8 justify-center items-center lg:px-[6rem] px-[1rem] sm:px-[2rem]"
    >
      <div className="text-center">
        <p className="ovo">Technical Skills</p>
        <p className="ovo text-3xl">What I Know</p>
      </div>
      <div className="w-full">
        <div className="flex md:gap-15 gap-10 lg:gap-20 justify-center items-center flex-wrap">
          {skills.map((skill, index) => (
            <ToolCard key={index} icon={skill.icon} label={skill.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
