import React from "react";
import heroImage from "../assets/heroImage.JPG";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import "./style.css"

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen  w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-2xl sm:text-4xl font-bold text-white min-w-max">
          <p>Full Stack Developer</p>

     
          </h2>
          <div className="text-gray-500 py-4 max-w-lg">
          <p  className="text-gray-300 max-w-lg">
          I <span className="change-text"></span>{" "}
          <span className="responsive">r</span>
          <span className="responsive">e</span>
          <span className="responsive">s</span>
          <span className="responsive">p</span>
          <span className="responsive">o</span>
          <span className="responsive">n</span>
          <span className="responsive">s</span>
          <span className="responsive">i</span>
          <span className="responsive">v</span>
          <span className="responsive">e</span> Web Applications.
        </p>
            Continually learning and staying up-to-date with the latest web
            development trends and technologies to deliver robust and efficient
            solutions. Dedicated to producing high-quality code that solves
            complex problems and drives business growth.
          </div>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={800}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md cursor-pointer bg-gradient-to-br from-purple-600 to-blue-500 "
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-200 ml-2">
                <HiOutlineArrowNarrowRight size={20} />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={heroImage}
            alt="profile"
            className=" mx-auto my-auto rounded-full w-2/3 md:max-w-lg "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
