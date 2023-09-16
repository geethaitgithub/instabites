import React from 'react'
import food from "../Images/onlinefoodorder.png";

const About = () => {
  return (
    <div className=' '>
        <div className='  relative ' >
            <div className=' absolute  w-full h-full flex flex-col justify-center bg-black/40 '>
                <h1 className='px-4 sm:text-2xl md:text-3xl lg:text-4xl  font-bold'> <span className=" text-white">We provde quality food on time.</span> </h1>
                <h1 className='px-4 sm:text-2xl md:text-3xl lg:text-4xl  font-bold'><span className=" text-orange-600">Welcome to The World Of Tasty & Fresh Food
          </span>   </h1>
          <h4 className='px-4 sm:text-2xl md:text-3xl lg:text-4xl  font-bold'> <span className=" text-white">"Better you will feel if you eat a <span className="text-orange-600 animate-pulse bg-orange-300 rounded-lg">INSTABITES</span> healthy
            meal"</span> </h4>

            </div>
            <img className=' w-full object-cover max-h-[400px]' src={food} alt="/"></img>
        </div>

      </div>
  )
}

export default About