import React from "react";
import {
  FaNodeJs,
  FaReact,
  FaJsSquare,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import { SiDatadog, SiPostman, SiPostgresql } from "react-icons/si";

const About = () => {
  return (
    <div
      name="about"
      className="dark:text-gray-500 dark:bg-gray-700 w-full bg-gray-100 py-[100px] md:py-[300px] 2xl:py-[400px] text-gray-600"
    >
      <div className="container w-full h-full px-5 mx-auto flex flex-col justify-center items-center">
        <section className="text-left w-full">
          <h2 className="text-3xl md:text-4xl font-bold inline border-b-4 border-teal-200">
            About
          </h2>
          <section className="max-w-[1000px]">
            <p className="text-lg pt-6 pb-2">
              Quality Assurance Engineer based in BC, Canada, with full-stack
              development experience.
            </p>
            <p className="pt-2 pb-4">
              Before tech, I worked as a master electrician, estimator and
              electrical project manager. Tech started as a hobby, driven by
              curiosity, and grew into a full career transition. I'm currently a
              QA Engineer at ChowNow, where I focus on product quality and a
              reliable user experience.
            </p>
            <p className="pt-2 pb-4">
              Through personal projects, I’ve built full-stack web applications
              with React, Node.js, Express and SQL. That background shapes how I
              approach testing end to end and tracking down the root cause of
              issues.
            </p>
            <p className="pt-2 pb-4">
              I keep learning through my work and side projects. My favourite so
              far is the Halo Infinite project below, which I built with another
              developer. When I’m not working, you’ll usually find me golfing,
              working out, hiking, swimming, or gaming with friends.
            </p>
            <p className="pt-2 pb-2">
              These are some of the technologies I've worked with.
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
                <FaNodeJs size={25} />
                <p className="pl-2">Node.js</p>
              </div>
              <div className="flex items-center">
                <SiPostgresql size={25} />
                <p className="pl-2">SQL</p>
              </div>
              <div className="flex items-center">
                <FaGitAlt size={25} />
                <p className="pl-2">Git</p>
              </div>
              <div className="flex items-center">
                <SiPostman size={25} />
                <p className="pl-2">Postman</p>
              </div>
              <div className="flex items-center">
                <SiDatadog size={25} />
                <p className="pl-2">DataDog</p>
              </div>
            </ul>
          </section>
        </section>
      </div>
    </div>
  );
};

export default About;
