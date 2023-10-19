import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import logo from "../assets/logo.JPG";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const Links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-black fixed px-4">
      <div>
        <a href="/">
          <img
            className="rounded-sm cursor-pointer h-16 w-15 pt-2 "
            src={logo}
            alt="img description"
          />
        </a>
      </div>

      <ul className="hidden md:flex">
        {Links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-125 duration-200 hover:text-zinc-50 "
          >
            <Link to={link} smooth duration={800}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        onClick={() => {
          window.scrollBy(0, 800);
          setNav(!nav)}}
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 ">
          {Links.map(({ id, link }) => (
            <li
              key={id}
              className="cursor-pointer capitalize py-6 text-4xl px-4"
            >
              <Link
                onClick={() => {
              
                  setNav(!nav)}}
                to={link}
                smooth
                duration={800}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
