import React, {useState} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {

  const [nav, setNav] = useState(false)

  return (
    <div className="flex justify-between items-center w-full h-20 text-white px-4 bg-gray-700/80 fixed">
        <div className="cursor-pointer justify-center items-center">
            <h1 className="tracking-[5px] text-2xl ml-2 font-outline">Sean Yuan</h1>
        </div>

        <ul className="hidden md:flex font-regular">
            <li className="px-5 cursor-pointer hover:text-blue-400 hover:duration-300">HOME</li>
            <li className="px-5 cursor-pointer hover:text-blue-400 hover:duration-300">ABOUT</li>
            <li className="px-5 cursor-pointer hover:text-blue-400 hover:duration-300">PROJECTS</li>
            <li className="px-5 cursor-pointer hover:text-blue-400 hover:duration-300">CONTACTS</li>
        </ul>

        <div onClick={() => setNav(!nav)} className="md:hidden cursor-pointer pr-4 z-10 text-white">
          {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>

        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white">
          <li className="px-5 py-5 text-3xl cursor-pointer hover:text-blue-400 hover:duration-300">HOME</li>
          <li className="px-5 py-5 text-3xl cursor-pointer hover:text-blue-400 hover:duration-300">ABOUT</li>
          <li className="px-5 py-5 text-3xl cursor-pointer hover:text-blue-400 hover:duration-300">PROJECTS</li>
          <li className="px-5 py-5 text-3xl cursor-pointer hover:text-blue-400 hover:duration-300">CONTACTS</li>
        </ul>
        )}

    </div>
  )
}

export default Navbar