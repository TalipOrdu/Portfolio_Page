import React from 'react'
import myImage from '../assets/heroImage.jpg';
import {AiOutlineArrowDown} from 'react-icons/ai'
import {Link} from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className="text-white w-full h-screen bg-gradient-to-b from-black to bg-gray-800 ">

        <div className=" mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
          
          <div className=" mt-44 ml-4">
            <img src={myImage} alt="my Profile" className="rounded-2xl mx-auto w-2/3 md:w-full "/>
          </div>

          <div className="flex flex-col justify-center h-full md:justify-center px-4 ">
            
            <h2 className="text-3xl sm:text-5xl items-center font-bold mt-16">I'm a Front-end Developer</h2>
            
            <p className="text-gray-400 text-lg py-4 max-w-md">
              I'm a Computer Engineering student at Erciyes University. 
              I love to work with Web application using technologies like JavaScript, React, TailWind, NodeJS. 
            </p>
            <div>
              <Link to="portfolio" smooth duration={500}  className="w-fit px-6 py-3 my-2 text-lg flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-700 cursor-pointer">
                Portfolio 
                <span className="ml-1">
                  <AiOutlineArrowDown size={20} />
                </span>
              </Link>
            </div>
          </div>
          
          
        </div>
    </div>
  )
}

export default Home