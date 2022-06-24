import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Typed from "react-typed";
function Home() {
  return (
    <div className="w-full h-screen  px-2">
      {/* container */}
      <div className="max-w-[1000px] mx-auto flex flex-col h-full justify-center ">
        <p className="text-pink-400">Hi, my name is</p>
        <h1 className="text-3xl sm:text-6xl font-bold text-teal-300">
          Nguyen Hoang Trung
        </h1>

        <Typed
          strings={["I'm a Front End Developer"]}
          typeSpeed={50}
          className="text-3xl sm:text-6xl font-bold text-teal-300/70"
        />

        <p className="text-gray-300 py-4 max-w-[600px]">
          I'm a front-end developer specializing in ReactJS. Currently, I'm
          focused on building responsive website aplication with API.
        </p>
        <div>
          <button className="group text-white flex px-6 py-3 my-2 items-center border-2 hover:bg-pink-700 hover:border-pink-700 duration-300 ">
            View Work{" "}
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
