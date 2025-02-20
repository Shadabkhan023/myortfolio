import React from "react";

import pic from "../assets/images/photo.jpg";

import { GrLinkedin } from "react-icons/gr";
import { FaSquareGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { LuInstagram } from "react-icons/lu";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a&nbsp; </h1>
              {/* <span >Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify ">
              Results-driven B.Tech (CSE-DS) student with a strong
              foundation in Data Structures & Algorithms, C++, and Full-Stack
              Web Development. Passionate about building scalable applications
              and solving complex programming challenges. Proficient in React,
              Node.js, MySQL, MongoDB, and experienced in collaborative
              development using Git GitHub. Seeking an internship to apply
              technical skills in a real-world environment.
            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0 mt-4">
              <div className="  space-y-2">
                <h1 className="font-bold text-2xl text-center mt-10 text-green-500 ">
                  Available on
                </h1>
                <div className="flex space-x-6 justify-center mt-5">
                  <a
                    href="https://www.linkedin.com/in/shadab-khan-18a896271"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GrLinkedin className="text-blue-500 text-3xl md:text-4xl hover:text-blue-300 hover:scale-110 transition-transform duration-300" />
                  </a>
                  <a
                    href="https://github.com/Shadabkhan023"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaSquareGithub className="hover:text-gray-500 text-3xl md:text-4xl hover:text-gray-300 hover:scale-110 transition-transform duration-300" />
                  </a>
                  <a
                    href="https://leetcode.com/u/Shadabkhan_023"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiLeetcode className="text-yellow-400 text-3xl md:text-4xl hover:text-yellow-300 hover:scale-110 transition-transform duration-300" />
                  </a>
                  <a href="mailto:shadabkhan2004@gmail.com">
                    <MdEmail className="text-red-500 text-3xl md:text-4xl hover:text-red-400 hover:scale-110 transition-transform duration-300" />
                  </a>
                  <a
                    href="https://www.instagram.com/shadabkhan_023/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LuInstagram className="text-pink-500 text-2xl md:text-4xl hover:text-pink-400 hover:scale-110 transition-transform duration-300" />
                  </a>
                </div>
              </div>
              <div className=" space-y-2">
                <h1 className="font-bold text-2xl text-center mt-10 text-green-500">
                  Currently working on
                </h1>
                <div className="flex space-x-6 justify-center mt-5">
                  <SiMongodb className="text-green-500 text-3xl md:text-4xl hover:text-green-400 hover:scale-110 transition-transform duration-300 border-2 border-green-500 rounded-full p-2" />
                  <SiExpress className="text-gray-300 text-3xl md:text-4xl hover:text-gray-400 hover:scale-110 transition-transform duration-300 border-2 border-gray-500 rounded-full p-2" />
                  <FaReact className="text-blue-500 text-3xl md:text-4xl hover:text-blue-400 hover:scale-110 transition-transform duration-300 border-2 border-blue-500 rounded-full p-2" />
                  <FaNodeJs className="text-green-400 text-3xl md:text-4xl hover:text-green-300 hover:scale-110 transition-transform duration-300 border-2 border-green-400 rounded-full p-2" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center w-full md:w-1/2 md:ml-48 md:mt-20 mt-5  order-1">
            <img
              src={pic}
              className="rounded-full w-[400px] h-[400px]  md:rounded-full md:w-[450px] md:h-[500px] object-cover shadow-[0_6px_20px_rgba(255,255,255,0.9)] hover:scale-105 transition-transform duration-300"
              alt=""
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;
