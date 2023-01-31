/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import movieApp from '../assets/portfolio/movieApp.png';
import employeeApp from '../assets/portfolio/employeeApp.png';
import currencyApp from '../assets/portfolio/currencyApp.png';
import githubApp from '../assets/portfolio/githubApp.png';
import toDoApp from '../assets/portfolio/toDoApp.png';
import translateApp from '../assets/portfolio/translateApp.png';

const Portfolio = () => {

  const portfolios = [
    {
      id:1,
      src: movieApp,
      title:"Movie App",
      demo:"https://movierecommendationapp.netlify.app",
      code:"https://github.com/TalipOrdu/Movie_RecommendationV2"
    },
    {
      id:2,
      src: employeeApp,
      title:"Employee App",
      demo:"https://employeedemo1.netlify.app",
      code:"https://github.com/TalipOrdu/EmployeeAppWithJSONServer"
    },
    {
      id:3,
      src: currencyApp,
      title:"Currency App",
      demo:"https://currencyconverterdemo1.netlify.app",
      code:"https://github.com/TalipOrdu/Currency_Converter_withApi"
    },
    {
      id:4,
      src: githubApp,
      title:"GitHub App",
      demo:"https://githubapidemo.netlify.app",
      code:"https://github.com/TalipOrdu/Github_Users_information_withGithubRESTAPI"
    },
    {
      id:5,
      src: toDoApp,
      title:"ToDo App",
      demo:"https://todolistprojectdemo1.netlify.app",
      code:"https://github.com/TalipOrdu/ToDoList-Project"
    },
    {
      id:6,
      src: translateApp,
      title:"Translate App",
      demo:"https://translatorapi.netlify.app",
      code:"https://github.com/TalipOrdu/Translator_withAPI"
    },
    
    
  ]

  return (
    <div name="portfolio" className=" bg-gradient-to-b from-black via-black to-gray-800 w-full text-white sm:w-full ">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full ">

        <div className="pb-4 ml-12 md:mt-28">
          <h2 className="text-4xl font-bold flex justify-start ">Portfolio</h2>
          <p className="py-6 ">You can take a look of my works</p>
        </div>

        <div  className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:p-0">

        {
          portfolios.map(({id,src,title,demo,code})=>(
          
            <div key={id} className=" shadow-lg shadow-gray-500 rounded-lg ">
            
              <img src={src} alt="" className="w-full rounded-md duration-200 hover:scale-105 h-44" />
              <h4 className="py-4 text-xl font-bold flex justify-center ">{title}</h4>

            <div className="flex items-center justify-center ">
              <a href={demo} target="_blank" rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:bg-green-700 border-2 rounded-md border-green-400 flex justify-center" >Demo</a>
              <a href={code} target="_blank" rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:bg-green-700 border-2 rounded-md border-green-400 flex justify-center" >Code</a>
            </div>
            
          </div>
          ))
        }
        </div>


        
      </div>
    </div>
  )
}

export default Portfolio