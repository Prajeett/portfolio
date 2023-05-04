import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black via-black to-gray-800 text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-centre w-full h-full">
        <div className="pb-8">

        <p className="text-4xl font-bold border-gray-500 inline border-b-4">Portfolio</p>
        <p className="py-6">Check out my work here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img src={reactWeather} alt="" />
            <div>
              <button>Demo</button>
              <button>Code</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
