import React from 'react'

const Contact = () => {
  return (
    <div className="h-screen w-full bg-gray-700 text-white">
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
            <div className="p-8">
                <p className="text-3xl font-bold inline border-b-4 border-gray-500">Contact</p>
                <p className="py-6">Please Email me on the bottom</p>
            </div>

            <div className="pl-[30px]">
                <form action="" className="flex flex-col w-full md:w-1/2">
                    <input type="text" name="name" placeholder="Enter Your Name" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"></input>
                    <input type="text" name="email" placeholder="Enter Your Email" className="p-2 my-5 bg-transparent border-2 rounded-md text-white focus:outline-none"></input>    
                    <textarea placeholder="Enter Message Here" name="message" rows="10" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"></textarea>
                    <button className="text-white mt-5 mx-auto px-6 py-3 my-2 flex items-center rounded-md bg-blue-500 hover:bg-black hover:duration-200">Send Email</button> 
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact