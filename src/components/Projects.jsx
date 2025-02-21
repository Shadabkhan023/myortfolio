import React from "react";
import laptop from "../assets/images/laptop.png";
import airbnb from "../assets/images/airbnb.png";
import myntra from "../assets/images/myntra.png";
import comingsoon from "../assets/images/ComingSoon.avif";
import hpp from "../assets/images/hpp.png";
import netflix from "../assets/images/netflix.png";



function Projects() {
  const cardItem = [
    { id: 1, logo: hpp,  name: "HousePricePrediction" , link : " https://mysite-0a68.onrender.com" ,  Code:"https://github.com/Shadabkhan023/HousePricePrediction.git" , info: " web-based house price prediction system built using Django, HTML, and CSS, with a trained machine learning model for price estimation." },
    { id: 2, logo: airbnb,  name: "AirBnBClone" , link : "https://airbnbclone-vswe.onrender.com " ,  Code:"https://github.com/Shadabkhan023/airbnbclone.git" , info: "Airbnb clone using backend technologies, incorporating essential functionalities like adding a home and marking homes as favorites." },
    { id: 3, logo: myntra, name: "MyntraClone" , link : " https://myntraclone-frontend-2o6p.onrender.com",  Code:"https://github.com/Shadabkhan023/myntraClone.git" , info: "Myntra clone using React.js for the frontend and a local Node.js server for managing data. The project dynamically fetches product details."},
    { id: 4, logo: netflix, name: "Netflix Movie Recommendation" , link : "https://movierecommendationmodel.onrender.com ", Code:"https://github.com/Shadabkhan023/movierecommendationmodel.git" , info: "Netflix movie recommendation model that suggests personalized movies based on user preferences using machine learning."}
   ];

  return (
    <div name="Projects" className="max-w-screen-xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center text-green-500 mb-10">Projects</h1>
      <div className="relative flex flex-col items-center md:flex md:flex-row md:gap-10 md:grid md:grid-cols-2">
        
        {cardItem.map(({ id, logo, name, link, Code, info }, index) => (
          <div
            key={id}
            className={`relative flex items-center w-full max-w-3xl mb-10 `}
          >
           
            <div className="bg-zinc-800 rounded-xl p-5 flex flex-col min-w-[30rem] min-h-[22rem] items-center">
  
  {/* Image Section (80%) */}
  
  <div className="flex-[4] flex justify-center items-center w-full h-full relative">
    {/* Laptop Image */}
    <img src={laptop} className="w-[80%] h-[80%] object-contain" alt="Laptop" />

    {/* Container for screen overlay */}
    <div className="absolute top-[0%] left-[16%] w-[67%] h-[93.5%] overflow-hidden">
        {/* ReactJS Image (Fully Covering Laptop Screen) */}
        <img 
          src={logo} 
          className="w-full h-full object-cover rounded-md" 
          alt="ReactJS on Laptop Screen" 
        />
    </div>
</div>





  {/* Name & Buttons Section (20%) */}
  <div className="flex-[1] flex flex-col space-x-12 w-full space-y-2">
  <h2 className="text-2xl font-semibold mb-2 mt-4 ml-10 text-white">{name}</h2>
  <p className="mr-5 text-sm max-h-16 overflow-hidden text-ellipsis">
  {info}
</p>

  <div className="flex space-x-3">
       
       <a href={link}>
        <button class="bg-blue-500 text-white px-4 py-2 rounded mt-2">Go Live</button>
          </a>
        <a href={Code}>
        <button className="bg-zinc-600 hover:bg-sky-700 text-white font-bold px-4 py-2 mt-2 rounded">
        Source code
      </button>
        </a>
    </div>
  </div>

</div>



          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
