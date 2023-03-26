import React from 'react'
import MyPhoto from '../assets/picture.jpg'

const Home = () => {
  return (
    <div name="home" className="bg-gray-700 h-screen w-full text-white">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
                <h1 className="text-3xl font-bold font-regular">Hello, My name is Sean Yuan and <br></br>I am a full stack developer</h1>
                <p className="text-gray-200 py-4 max-w-md font-regular">I am a Software Engineer in New York. I am proficient in both frontend and backend development. I have knowledge in HTML, CSS, Javascript, Node, MongoDB, and React. As a software Engineer, I love to connect with others, build my networks, and build projects with group members.</p>
                <div>
                    <button className="w-fit px-6 py-3 my-2 flex items-center rounded-md bg-blue-500 hover:bg-black hover:duration-200"><a href="https://docs.google.com/document/d/1Fn0YlAT7r5QCfNNefyHRsO0xpyC1PYDCkxxhIImHUzY/edit#">Resume</a></button>
                </div>    
            </div>
            <img src={MyPhoto} className="rounded-md mx-auto w-1/3 h-[1/3]"></img>
        </div>
    </div>
  )
}

export default Home