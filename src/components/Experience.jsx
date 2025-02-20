import React from "react";
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import javascript from "../assets/images/javascript.png";
import c from "../assets/images/c.png";
import cpp from "../assets/images/cplus.png";
import nodejs from "../assets/images/nodejs.png";
import express from "../assets/images/express.png";
import mongodb from "../assets/images/mongo.png";
import reactjs from "../assets/images/reactjs.png";
import tailwind from "../assets/images/tailwind.png";
import { motion } from "framer-motion";

function Experience() {
  const cardItem = [
    { id: 1, logo: html, name: "HTML" },
    { id: 2, logo: css, name: "CSS" },
    { id: 3, logo: javascript, name: "JavaScript" },
    { id: 4, logo: c, name: "C" },
    { id: 5, logo: cpp, name: "CPP" },
    { id: 6, logo: nodejs, name: "NodeJS" },
    { id: 7, logo: express, name: "ExpressJS" },
    { id: 8, logo: mongodb, name: "MongoDB" },
    { id: 9, logo: reactjs, name: "React" },
    { id: 10, logo: tailwind, name: "TailwindCSS" },
  ];

  return (
    <>
  

    <div name="Experience" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      <br />
      <h1 className="text-3xl font-bold mb-5 text-center text-green-400">Experience</h1>
      <p className="text-center mb-6">I've more than 2 years of experience in below technologies.</p>
      <br />
      {/* Scrolling Wrapper */}
      <div className="relative overflow-hidden w-full mt-5">
        <motion.div
          className="flex space-x-10 w-max"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
        >
          {/* Infinite Duplication */}
          {Array(10).fill(cardItem).flat().map(({ id, logo, name }, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center border-[2px] rounded-full w-[150px] h-[150px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
            >
              <img src={logo} className="w-[100px] rounded-full" alt={name} />
              <div className="mt-2">{name}</div>
            </div>
          ))}
        </motion.div>
        <br />
      </div>
    </div>
    </>
  );
}

export default Experience;



