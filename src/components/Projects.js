import React from 'react'
import PharmRx from '../assets/PharmRx.png'
import WickedWines from '../assets/WickedWines.png'
import TravCation from '../assets/TravCation.png'
import Todo from '../assets/Todo.png'
import Connect from '../assets/Connect.png'
import Snake from '../assets/Snake.png'

const Projects = () => {
  return (
    <div name="projects" className="bg-gray-700 text-white w-full md:h-screen">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-[40px]">
                <h1 className="text-3xl font-bold inline border-b-4 border-gray-500">My Projects</h1>
            </div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-8">
            <div className="rounded-md">
                <img src={PharmRx} className="rounded-md"></img>
                <div className="flex items-center justify-center">
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"><a href="https://github.com/seyuan111/PharmRx">GitHub</a></button>
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"><a href="https://pharm-rx.vercel.app/">Project</a></button>
                </div>
            </div>

            <div className="rounded-md">
                <img src={WickedWines} className="rounded-md"></img>
                <div className="flex items-center justify-center">
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"><a href="https://github.com/seyuan111/WickedWines">Github</a></button>
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"><a href="https://wicked-wines.vercel.app/">Project</a></button>
                </div>
            </div>

            <div className="rounded-md">
            <img src={TravCation} className="rounded-md"></img>
            <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"><a href="https://github.com/seyuan111/Trav-Cation">Github</a></button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"><a href="https://trav-cation-525f318oe-seyuan111.vercel.app/">Project</a></button>
            </div>
            </div>

            <div className="rounded-md">
            <img src={Todo} className="rounded-md"></img>
            <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"><a href="https://github.com/seyuan111/ReactTodo">Github</a></button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"><a href="http://create-react-123.herokuapp.com/">Project</a></button>
            </div>
            </div>

            <div className="rounded-md">
            <img src={Connect} className="rounded-md"></img>
            <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"><a href="https://github.com/seyuan111/Connect-4">Github</a></button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"><a href="https://connect4app.netlify.app/">Project</a></button>
            </div>
            </div>

            <div className="rounded-md">
            <img src={Snake} className="rounded-md"></img>
            <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"><a href="https://github.com/seyuan111/SnakeGame">Github</a></button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"><a href="https://thesnakegame1.netlify.app/">Project</a></button>
            </div>
            </div>
        
        </div>
        </div>
    </div>
  )
}

export default Projects