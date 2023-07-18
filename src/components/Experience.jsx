import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import SASS from "../assets/SASS.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import netlify from "../assets/netlify.png";
import postgresql from "../assets/postgresql.png";
import postman from "../assets/postman.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML5",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS3",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: SASS,
      title: "SASS",
      style: "shadow-pink-600",
    },

    {
      id: 7,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: netlify,
      title: "Netlify",
      style: "shadow-green-400",
    },
    {
      id: 9,
      src: postgresql,
      title: "PostgreSQL",
      style: "shadow-blue-400",
    },
    {
      id: 10,
      src: postman,
      title: "Postman",
      style: "shadow-orange-400 sm:pt-4",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black pt-10 md:pt-16 h-full w-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 inline border-gray-500">
            Experience
          </p>
          <p className="py-6">
            These are the technologies and Tools I have worked on
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="logos" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
