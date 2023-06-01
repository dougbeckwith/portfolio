import React from "react";
import {
  FaNodeJs,
  FaReact,
  FaJsSquare,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiPostgresql
} from "react-icons/si";

const About = () => {
  return (
    <div
      name="about"
      className="dark:text-gray-500 dark:bg-gray-700 w-full bg-gray-100 py-[100px] md:py-[300px] 2xl:py-[400px] text-gray-600">
      <div className="container w-full h-full px-5 mx-auto flex flex-col justify-center items-center">
        <section className="text-left w-full">
          <h2 className="text-3xl md:text-4xl font-bold inline border-b-4 border-teal-200">
            About
          </h2>
          <section className="max-w-[1000px]">
            <p className="text-lg pt-6 pb-2">
              Web Developer based in BC, Canada.
            </p>
            <p className="pt-2 pb-4">
              Software Development started out as a hobby for me. I enjoyed it
              so much I decided to make a career change. I’m currently building
              web apps using React and Node.js. Each new project I create, I
              learn something new that improves my developer skills.
            </p>
            <p className="pt-2 pb-4">
              My favorite project so far is The Halo Infinite project below that
              I built with another software developer. When I'm not working,
              you'll typically find me either golfing, hitting the gym, or
              enjoying gaming sessions with my friends.
            </p>
            <p className="pt-2 pb-2">
              These are the technologies I've worked with.
            </p>
            <ul className="flex gap-5 flex-wrap text-teal-200">
              <div className="flex items-center">
                <FaHtml5 size={25} />
                <p className="pl-2">HTML</p>
              </div>
              <div className="flex items-center">
                <FaCss3Alt size={25} />
                <p className="pl-2">CSS</p>
              </div>
              <div className="flex items-center">
                <FaJsSquare size={25} />
                <p className="pl-2">JavaScript</p>
              </div>
              <div className="flex items-center">
                <FaReact size={25} />
                <p className="pl-2">React</p>
              </div>
              <div className="flex items-center">
                <SiTailwindcss size={25} />
                <p className="pl-2 w-[140px]">Tailwind CSS</p>
              </div>
              <div className="flex items-center">
                <FaNodeJs size={25} />
                <p className="pl-2">Node.js</p>
              </div>
              <div className="flex items-center">
                <SiExpress size={25} />
                <p className="pl-2">Express</p>
              </div>
              <div className="flex items-center">
                <SiPostgresql size={25} />
                <p className="pl-2">PostgreSQL</p>
              </div>
              <div className="flex items-center">
                <SiMongodb size={25} />
                <p className="pl-2">MongoDB</p>
              </div>
              <div className="flex items-center">
                <FaGitAlt size={25} />
                <p className="pl-2">Git</p>
              </div>
            </ul>
          </section>
        </section>
      </div>
    </div>
  );
};

export default About;
