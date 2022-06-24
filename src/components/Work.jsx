import React from "react";
import { works } from "./variable";

function Work() {
  return (
    <div name="work" className="w-full md:h-screen text-teal-400">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-700">
            Work
          </p>
          <p className="py-6">Checkout some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          {works.map((work) => (
            <div
              key={work.title}
              style={{ backgroundImage: `url(${work.image})` }}
              className="shadow-lg shadow-pink-500/25 group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* Hover Efect */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  React JS Application
                </span>
                <div className="pt-8 text-center">
                  <a href={work.url} target="_blank" rel="noreferrer">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href={work.source} target="_blank" rel="noreferrer">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;
