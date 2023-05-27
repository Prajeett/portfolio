import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className=" p-4  max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 pt-10 md:pt-0">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="md:text-xl md:mt-20">
          Hello and welcome to my portfolio! My name is{" "}
          <span className="font-highlight">Prajeet</span>, and I am a passionate
          Full Stack developer. My journey into development started with a
          curiosity for how things work. As I delved deeper into the world of
          coding, I discovered the power of creating beautiful, intuitive
          interfaces that enhance user experiences.
        </p>

        <br />
        <p className="md:text-xl">
          {" "}
          I specialize in building responsive and user-friendly websites and
          applications. What sets me apart as a developer is my focus on the
          user. I believe that the best products are those that are designed
          with the user in mind, and I strive to create intuitive and accessible
          designs that meet the needs of both the client and the end-user. In
          addition to my technical skills, I am a strong communicator and
          collaborator. I believe that successful projects are built on a
          foundation of trust and teamwork, and I enjoy working closely with
          clients to ensure that their vision is brought to life. When I'm not
          coding, you can find me swimming on the beaches. I believe in giving
          back and using my skills to make a positive impact in the world. Thank
          you for taking the time to learn more about me. I look forward to the
          opportunity to work with you .
        </p>
      </div>
    </div>
  );
};

export default About;
