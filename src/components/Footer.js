import React from 'react'
import {FaTwitter, FaInstagram, FaGithub, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
        <div className="py-[40px] w-full h-[80px] px-4 flex justify-center items-center gap-8 bg-gray-700 text-white">
        <h1 className="font-bold text-3xl">My contacts:</h1>
        <a href="https://twitter.com/seyuan1111"><FaTwitter className="text-blue-500 cursor-pointer" size={30}/></a>
        <a href="https://www.instagram.com/seyuan111/"><FaInstagram className="cursor-pointer text-rose-500" size={30}/></a>
        <a href="https://github.com/seyuan111"><FaGithub className="text-white cursor-pointer" size={30}/></a>
        <a href="https://www.linkedin.com/in/sean-yuan-7965b5123/"><FaLinkedin className="text-blue-300 cursor-pointer" size={30}/></a>
        <p className="font-bold">Ysean54@yahoo.com</p>
    </div>
    </div>
  )
}

export default Footer