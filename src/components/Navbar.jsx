import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
function Navbar() {
  const [nav, setNav] = useState(true);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 text-pink-500 text-xl">
      <div>
        <img src={Logo} alt="logo" className="w-[50px]" />
      </div>
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Works</li>
        <li>Contact</li>
      </ul>
      {/* Hamburger  */}
      <div onClick={handleClick} className="md:hidden z-20">
        {nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          nav
            ? "hidden"
            : "bg-[#191919] absolute w-full top-0 left-0 h-screen flex flex-col items-center justify-center z-10"
        }
      >
        <li className="py-6 text-2xl">Home</li>
        <li className="py-6 text-2xl">About</li>
        <li className="py-6 text-2xl">Skills</li>
        <li className="py-6 text-2xl">Works</li>
        <li className="py-6 text-2xl">Contact</li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 ">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]">
            <a
              className="flex justify-between w-full items-center text-gray-200 "
              href="https://github.com/hoangtrung2000"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          {/* <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-cyan-500">
            <a
              className="flex justify-between w-full items-center text-gray-200 "
              href="/"
            >
              Mail <HiOutlineMail size={30} />
            </a>
          </li> */}
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-indigo-500">
            <a
              className="flex justify-between w-full items-center text-gray-200 "
              href="/"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
