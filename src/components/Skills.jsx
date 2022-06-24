import React from "react";
import { skills } from "./variable";
function Skills() {
  return (
    <div name="skill" className="w-full h-screen text-teal-400">
      {/* Container */}
      <div className=" max-w-[1000px] mx-auto p-4 flex flex-col w-full h-full justify-center">
        <div>
          <p className="font-bold inline border-b-4 border-pink-700 text-4xl">
            Skills
          </p>
          <p className="py-4">These are the technologies I've work with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 text-center gap-4 py-8">
          {/* List skills */}

          {skills.map((skill) => (
            <div
              key={skill.title}
              className="shadow-md shadow-pink-500/25  hover:scale-110 duration-500"
            >
              <img className="w-20 mx-auto" src={skill.url} alt={skill.title} />
              <p className="my-4">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
