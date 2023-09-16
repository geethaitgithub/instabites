import React from 'react';
import instabitesLogo from "../Images/instabitesLogo.png";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import useOnlineStatus from "../Utils/hooks/useOnlineStatus";
import {  useSelector } from 'react-redux';

const  Header = () => {
    const [isLoggedIn,setIsLoggedIn] = useState(true);
    const onlineStatus = useOnlineStatus();
    //subscribing to the store using useSelector
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);
    
  return (
    <div className="Header flex justify-between border border-grey shadow-md bg-sky-900">
        <div className = "logo-container h-20 ">
            <img className='h-full w-full' src={instabitesLogo} alt="headerLogo"></img>
        </div>
        <div >
            <ul className="flex  p-2 m-2 font-bold text-grey">
                <li className=" pl-2 m-2"><span className="animate-pulse font-bold px-1 bg-white rounded-full">{onlineStatus ? "🔴 live" : "❗offline"}</span> </ li>
                <li className=" pl-2 m-2"><Link to="home"><span className=' px-2  text-md text-orange-600 hover:border hover:border-orange-600 hover:bg-orange-600 hover:text-white'>Home</span> </Link> </ li>
                <li className=" pl-2 m-2"><Link to="about"><span className=' px-2  text-md text-orange-600 hover:border hover:border-orange-600 hover:bg-orange-600 hover:text-white'>About</span> </Link> </ li>
                <li className=" pl-2 m-2"><Link to="contact"><span className=' px-2  text-md text-orange-600 hover:border hover:border-orange-600 hover:bg-orange-600 hover:text-white'>Contact</span></Link>  </ li>
                <li className=" pl-2 m-2"><Link to="cart"><span className=' px-2  text-md text-orange-600 hover:border hover:border-orange-600 hover:bg-orange-600 hover:text-white'>Cart ({cartItems.length} items)</span> </Link> </ li>

            </ul>

        </div>
        </div>
  )
};

export default Header;