import React from "react";

import hotel from "../assets/portfolio/hotel.png";
import todo from "../assets/portfolio/CRUD.png";
import netflix from "../assets/portfolio/netflix.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: netflix,
      headings: "Netflix Clone",
      description:
        "Netflix Clone having subscription, login, register and other features using React, Redux/Toolkit, Firebase, Google Auth and Stripe",
      Demo: "https://prajeet-netflix-clone.netlify.app/",
      Code: "https://github.com/Prajeett/React-Netflix-clone",
    },
    {
      id: 2,
      src: todo,
      headings: "CRUD App",
      description: "CRUD app having drag and drop, create, read, update and delete features using Typescript and React",
      Demo: "https://prajeet-crudapp.netlify.app/",
      Code: "https://github.com/Prajeett/typescript-react-CRUD",
    },
    {
      id: 3,
      src: hotel,
      headings: "Hotel Website",
      description: "Hotel Webapp using vanillaJS",
      Demo: "https://tajalehotels.netlify.app/",
      Code: "https://github.com/Prajeett/hotel/",
    },

    

  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black via-black to-gray-800 text-white md:h-full pt-3 md:pt-0"
    >
      <div className="max-w-screen-lg px-8 py-6 mx-auto flex flex-col justify-centre w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold border-gray-500 inline border-b-4">
            Portfolio
          </p>
          <p className="py-6">Check out my work here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 sm:px-0">
          {portfolios.map(({ id, src, Demo, Code, headings, description }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg px-1">
              <h1 className="pb-3 text-center font-bold">{headings}</h1>
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={Demo} target="_blank" rel="noreferrer">
                  {" "}
                  <button className="w1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-slate-900 rounded-full">
                    Demo
                  </button>
                </a>

                <a href={Code} target="_blank" rel="noreferrer">
                  {" "}
                  <button className="w1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-slate-900 rounded-full">
                    Code
                  </button>
                </a>
              </div>
              <h5 className="text-center text-xs px-3 pb-1 text-slate-600">
                {description}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
