import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Typed from "react-typed";
import { Link } from "react-scroll";

function Home() {
  return (
    <div name="home" className="w-full h-screen  px-2">
      {/* container */}
      <div className="max-w-[1000px] mx-auto flex flex-col h-full justify-center ">
        <p className="text-pink-400">Hi, my name is</p>
        <h1 className="text-3xl sm:text-6xl font-bold text-teal-300">
          Nguyen Hoang Trung
        </h1>

        <Typed
          strings={["I'm a Front End Developer"]}
          typeSpeed={50}
          onComplete={(self) => self.cursor.remove()}
          className="text-3xl sm:text-6xl font-bold text-teal-300/70"
        />

        <p className="text-gray-300 py-4 max-w-[600px]">
          I'm a front-end developer specializing in ReactJS. Currently, I'm
          focused on building responsive website aplication.
        </p>
        <div>
          <button className="group text-white px-6 py-3 my-2 border-2 hover:bg-pink-700 hover:border-pink-700 duration-300 ">
            <Link
              className="flex items-center "
              to="work"
              smooth={true}
              duration={500}
            >
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
