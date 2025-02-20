import React from "react";

function About() {
  return (
    <div name="About" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
      <br />
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>

        <br />
        <h1 className="text-green-500 font-bold text-2xl mb-6 border-l-4 border-green-500 pl-3">Education</h1>

        {/* Education Section with Progress Bar Inside */}
        <div className="w-full max-w-5xl mx-auto p-6 bg-gradient-to-b from-gray-900 to-black rounded-xl shadow-[0_6px_20px_rgba(0,255,0,0.5)] border border-gray-700 md:max-w-full relative">
          {/* Progress Bar */}
          <div className="absolute left-8 top-6 bottom-6 w-1 bg-green-500 rounded-full"></div>

          <div className="space-y-10 relative pl-16">
            {[
              {
                title: "JSS Academy of Technical Education",
                degree: "B.Tech (CSE-DS), CGPA: 8.33",
                location: "Noida, UP",
                year: "Expected 2026",
              },
              {
                title: "Vidya Sagar School",
                degree: "Class - XII, Science, 93%",
                location: "Baghpat, UP",
                year: "2021",
              },
              {
                title: "Vidya Sagar School",
                degree: "Class - X, 93%",
                location: "Baghpat, UP",
                year: "2019",
              },
            ].map((item, index) => (
              <div key={index} className="relative flex flex-col md:flex-row md:justify-between">
                {/* Connector Circle inside the div */}
                <div className="absolute left-0 top-3 w-3.5 h-3.5 bg-green-500 rounded-full shadow-lg"></div>

                {/* Left Side: Title & Degree (Shifted Right) */}
                <div className="md:w-1/2 pl-6">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="italic">{item.degree}</p>
                </div>

                {/* Right Side: Location & Year */}
                <div className="md:w-1/2 md:text-right">
                  <p className="text-white
">{item.location}</p>
                  <p className="text-white">{item.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
          <hr />
        <br />
        <br />
        <h1 className="text-green-500 font-bold text-2xl mb-6 border-l-4 border-green-500 pl-3">
  Skills & Expertise
</h1>
<div className="w-full max-w-5xl mx-auto p-6 rounded-xl md:max-w-full bg-gradient-to-b from-gray-900 to-black shadow-[0_6px_20px_rgba(0,255,0,0.5)] border border-gray-700">
  <div className="space-y-4">
    <span className="block text-white text-lg transition duration-300">
      <strong className="text-green-400">Programming Languages:</strong> C, C++
    </span>
    <span className="block text-white text-lg transition duration-300">
      <strong className="text-green-400">Data Structures & Algorithms:</strong> Proficient in DSA with C and C++
    </span>
    <span className="block text-white text-lg transition duration-300">
      <strong className="text-green-400">Web Development:</strong> HTML, CSS, JavaScript, React, Node.js, Express.js
    </span>
    <span className="block text-white text-lg transition duration-300">
      <strong className="text-green-400">Databases:</strong> MySQL, MongoDB, Hadoop
    </span>
    <span className="block text-white text-lg transition duration-300">
      <strong className="text-green-400">Tools & Frameworks:</strong> Git, GitHub, VS Code
    </span>
  </div>
</div>
      <hr />
      </div>
      <hr />
    </div>
  );
}

export default About;

