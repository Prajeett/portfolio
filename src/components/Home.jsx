import React from "react";
import heroImage from "../assets/heroImage.JPG";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen  w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-2xl sm:text-4xl font-bold text-white min-w-max">
            I am a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-lg">
            Please feel free to look around Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Excepturi temporibus quod nisi
            delectus quam blanditiis quia possimus! Corporis ad, quam officiis
            iure, eos quaerat expedita, eius ipsa sint veniam eum!
          </p>

          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md cursor-pointer bg-gradient-to-br from-purple-600 to-blue-500 ">
              Portfolio
              <span className="group-hover:rotate-90 duration-200 ml-2">
                <HiOutlineArrowNarrowRight  size={20}/>
              </span>
            </button>
          </div>
        </div>

        <div>
          <img
            src={heroImage}
            alt="profile"
            className=" mx-auto rounded-full w-2/3 md:max-w-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
