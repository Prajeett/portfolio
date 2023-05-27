import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          {" "}
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/prajeet-basnet-0187311a6/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Prajeett",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:basnet.prajeet@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/PrajeetBasnetResume1.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div
      name="contact"
      className="w-full h-full bg-gradient-to-b from-black to-gray-800 text-white pt-10 md:pt-10"
    >
      <div className="pb-8">
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">
            Submit the form below to get in touch with me
            <p className="text-sm italic text-slate-500">

              Disclaimar: You will get redirected to getform.io after submitting
              the form!
            </p>
          </p>
        </div>
        <div className="flex justify-center items-center px-4 md:px-0">
          <form
            action="https://getform.io/f/2f5cae13-420b-49d1-8720-2259444058ec"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="Email"
              name="name"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              placeholder="Enter your message"
            ></textarea>

            <button className="text-white w-fit px-6 py-3 my-8 flex items-center rounded-md cursor-pointer bg-gradient-to-br from-purple-600 to-blue-500 mx-auto hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
        <div className=" md:hidden flex  items-center h-full w-full ma">
          <ul className="flex min-w-full justify-evenly items-end">
            {links.map(({ id, child, style, href, download }) => (
              <li key={id} className={"items-center" + { style }}>
                <a
                  href={href}
                  download={download}
                  target="_blank"
                  rel="noreferrer"
                >
                  <> {child}</>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
