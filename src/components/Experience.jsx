import React from "react";
import html from "../assets/experience/html.png";
import css from "../assets/experience/css.png";
import javascript from "../assets/experience/javascript.png";
import react from "../assets/experience/react.png";
import node from "../assets/experience/node.png";
import github from "../assets/experience/github.png";
import tailwind from "../assets/experience/tailwind.png";
import php from "../assets/experience/php.png";
import bootstrap from "../assets/experience/bootstrap.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
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
      src: react,
      title: "React",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: node,
      title: "NodeJs",
      style: "shadow-green-500",
    },
    {
      id: 6,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
        id: 7,
        src: bootstrap,
        title: "BootStrap",
        style: "shadow-purple-500",
    },
    {
      id: 8,
      src: tailwind,
      title: "TailWind",
      style: "shadow-teal-500",
    },
    {
      id: 9,
      src: php,
      title: "PHP",
      style: "shadow-violet-500",
    },

  ];
  return (
    <div
      name="experience"
      className=" bg-gradient-to-b from-gray-800 to-black w-full h-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full  text-white">
        <div>
          <p className="text-4xl font-bold p-2 pb-4 ml-12 md:mt-28">
            Experience
          </p>
          <p className="py-6 px-4 ml-12">I've worked with these technologies</p>
        </div>

        <div className=" w-full grid grid-cols-2 md:grid-cols-3 gap-8 text-center px-12 sm:p-0 h-full">
          
          {techs.map(({ id, src, title, style }) => (
            
            <div key={id} className={`shadow-lg hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img key={id} src={src} alt="" className="mx-auto w-20" />
              <p className="mt-4 flex justify-center">{title}</p>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Experience;
