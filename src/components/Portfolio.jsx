import React from "react";
import Ecommerce from "../assets/portfolio/Ecommerce.png";
import hotel from "../assets/portfolio/hotel.png";
import incomeTax from "../assets/portfolio/incomeTax.png";
import movieSearch from "../assets/portfolio/movieSearch.png";
import todo from "../assets/portfolio/todo.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: incomeTax,
      Demo: "https://prajeet-ato.netlify.app/",
      Code: "https://github.com/Prajeett/ato_tax_calculation",
    },

    {
      id: 2,
      src: hotel,
      Demo: "https://tajalehotels.netlify.app/",
      Code: "https://github.com/Prajeett/hotel/",
    },
    {
      id: 3,
      src: todo,
      Demo: "https://prajeet-todo.netlify.app/",
      Code: "https://github.com/Prajeett/to-do-list",
    },
    {
      id: 4,
      src: movieSearch,
      Demo: "https://react-api-movie-search.netlify.app/",
      Code: "https://github.com/Prajeett/search-movie-react",
    },
    {
      id: 5,
      src: Ecommerce,
      Demo: "https://prajeet-ecommerce.netlify.app/",
      Code: "https://github.com/Prajeett/React-Ecommerce",
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black via-black to-gray-800 text-white md:h-screen pt-10 md:pt-0"
    >
      <div className="max-w-screen-lg px-8 py-6 mx-auto flex flex-col justify-centre w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold border-gray-500 inline border-b-4">
            Portfolio
          </p>
          <p className="py-6">Check out my work here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 sm:px-0 ">
          {portfolios.map(({ id, src, Demo, Code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
