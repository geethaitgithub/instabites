import React from 'react'
import { QUOTELOGO_URL } from '../Utils/Constants'

const Quote = () => {
  return (
    <div className=' max-w-[1640px] mx-auto p-4'>
        <div className=' max-h-[500px] relative  text-white '>
            <div className=' absolute  w-full h-full flex flex-col justify-center bg-black/40 '>
                <h1 className='px-4 sm:text-5xl md:text-6xl lg:text-7xl text-4xl font-bold'>The <span className=" text-orange-600">Best</span> </h1>
                <h1 className='px-4 sm:text-5xl md:text-6xl lg:text-7xl text-4xl font-bold'><span className=" text-orange-600">Foods</span> Delivered  </h1>
            </div>
            <img className=' w-full object-cover max-h-[400px]' src={QUOTELOGO_URL} alt="/"></img>
        </div>
    </div>
  )
};

export default Quote;