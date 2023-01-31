import React from "react";


const About = () => {
  return (
    <div
      name="about"
      className="pt-20 bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className=" max-w-screen-lg p-8 mx-auto flex flex-col justify-center w-full ">
        <div className="pb-8 h-full">
          <p className="text-4xl font-bold  flex justify-center items-center">
            About
          </p>
        </div>
        <p className="text-xl mt-10">
          Hi, my name is Talip and I am 23 years old. I can
          find different solutions about issues. I am always open to innovations.
          I'm interested in Web Development and Web Design. I can learn
          something new quickly. I'm doing research on Web 3.0, Metaverse,
          Cryptocurrency, NFT.
        </p>
        <br />

        <p className="text-xl">
          I'm interested in Music, Excercise, Swimming, Movies and Reading.
          I like to work with new technologies.
          These days I'm working on React and TailWind.  
        </p>
        <p className="text-5xl font-signature flex items-center justify-center p-4 mt-8">People die but ideas never die</p>
        <p className="text-xl font-signature flex items-end justify-end ">Mustafa Kemal Atatürk</p>
      </div>
    </div>
  );
};

export default About;
