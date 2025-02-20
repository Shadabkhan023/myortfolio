import React from "react";
import { GrLinkedin } from "react-icons/gr";
import { FaSquareGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { LuInstagram } from "react-icons/lu";
function Footer() {
  return (
    <>
      
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-6 justify-center mt-5">
                              <a
                                href="https://www.linkedin.com/in/shadab-khan-18a896271"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <GrLinkedin className="text-blue-500 text-2xl md:text-4xl hover:text-blue-300 hover:scale-105 transition-transform duration-300" />
                              </a>
                              <a
                                href="https://github.com/Shadabkhan023"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <FaSquareGithub className="text-gray-500 text-2xl md:text-4xl hover:text-gray-300 hover:scale-105 transition-transform duration-300" />
                              </a>
                              <a
                                href="https://leetcode.com/u/Shadabkhan_023"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <SiLeetcode className="text-yellow-500 text-2xl md:text-4xl hover:text-yellow-300 hover:scale-105 transition-transform duration-300" />
                              </a>
                              <a href="mailto:shadabkhan2004@gmail.com">
                                <MdEmail className="text-red-500 text-2xl md:text-4xl hover:text-red-500 hover:scale-110 transition-transform duration-300" />
                              </a>
                              <a
                                href="https://www.instagram.com/shadabkhan_023/"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <LuInstagram className="text-pink-500 text-2xl md:text-4xl hover:text-pink-300 hover:scale-110 transition-transform duration-300" />
                              </a>
                            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2025 Your Company. All rights reserved.
              </p>
              <p className="text-sm">
                 Design and Develop by : 
              </p>
              <p className="text-sm">
                 SHADAB KHAN
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
