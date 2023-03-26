import React from 'react'

const About = () => {
  return (
    <div name="about" className="h-screen w-full bg-gray-700 text-white font-regular">
        
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <h1 className="text-3xl font-bold inline border-b-4 border-gray-500">About</h1>
            </div>

            <p className="text-xl mt-20">Hello, my name is Sean Yuan and I am a Software Engineer. I have been coding in diverse computer languages. My skillset includes languages like Javascript, React, Node, Express, HTML, and CSS. I love meeting new people and connecting with them. I have experience working with various members to build applications.</p>
        </div>
    </div>
  )
}

export default About