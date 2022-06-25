import React from "react";

function About() {
  return (
    <div name="about" className=" w-full h-screen text-teal-400 ">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[800px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-700">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm Trung, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p className="text-pink-300">
              As a front-end developer, with the desire to work in a
              professional environment to be able to apply the knowledge learned
              via my college and projects.
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default About;
