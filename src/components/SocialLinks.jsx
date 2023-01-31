import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const SocialLinks = () => {

    const links = [
        {
            id:1,
            child:(
                <>
                Linkedin <FaLinkedin size={35}/>
                </>
            ),
            href: 'https://www.linkedin.com/in/talipordu/' 
        },
        {
            id:2, 
            child:(
                <>
                GitHub <FaGithub size={35}/>
                </>
            ),
            href: 'https://github.com/TalipOrdu',
            style: "ml-[-75px]  hover:bg-black" 
        },
        {
            id:3,
            child:(
                <>
                Instagram <FaInstagram size={37}/>
                </>
            ),
            href: 'https://www.instagram.com/talip.012/',
            style: "w-36-[10px] font-xs hover:bg-black" 
        },
        {
            id:4,
            child:(
                <>
                send Mail <HiOutlineMail size={35}/>
                </>
            ),
            href: 'mailto:ordu.talip007@gmail.com' 
        },
        {
            id:5,
            child:(
                <>
                Resume <BsFillPersonLinesFill size={35}/>
                </>
            ),
            href: '/resume.pdf',
            download: true
        }
    ]
  return (
    <div className="flex flex-col top-[200px]  left-0 fixed">
        <ul>

            {links.map(({id,child,href,style,download}) => (
                <li key={id} className={"flex justify-between items-center  w-40 h-14 px-4 mb-1 bg-purple-500 ml-[-100px] hover:ml-[-8px] hover:bg-purple-900 rounded-md duration-300 "}>
                
                <a href={href} className=" flex justify-between items-center w-full text-white" download={download} target="_blank" rel="noreferrer"> 
                {child}
                </a> 
            </li>
            ))}

            
        </ul>
    </div>
  )
}

export default SocialLinks