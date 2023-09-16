import React from 'react';
import { useRouteError } from 'react-router-dom';
import IMGERROR from "../Images/ErrorImage.png"


const Error = () => {
    const err = useRouteError();
    //console.log(err);
  return (
    <div>
    <div className='  relative ' >
        <div className=' absolute  w-full h-full flex flex-col justify-center bg-black/40 '>
            <h1 className='px-4 sm:text-2xl md:text-3xl lg:text-4xl  font-bold'> <span className=" text-white"> {err.status}</span> </h1>
            <h1 className='px-4 sm:text-2xl md:text-3xl lg:text-4xl  font-bold'><span className=" text-orange-600">{err.statusText}</span>   </h1>
        </div>
        <img className=' w-full object-cover max-h-[400px]' src={IMGERROR} alt="/"></img>
    </div>
</div>

  )
}

export default Error