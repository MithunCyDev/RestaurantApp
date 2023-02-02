import React from 'react'
import cyLogo from '../../Image/cylogoBlack.png';
import {HiShoppingBag, HiUserCircle} from 'react-icons/hi'
import { motion } from "framer-motion"

export const Header = () => {
  return (
    <div>
        <div className="flex w-full h-[90px] fixed top-0 left-0 z-[999] drop-shadow-sm shadow-white bg-white items-center px-[70px] justify-center font-[poppins]">
          <div className="w-[110px] min-w-[70px]">
            <img src={cyLogo} alt="logo"></img>
          </div>
            <div className="mx-auto">
              <ul className="flex items-center justify-center gap-[60px]">
                <li className="text-green font-semibold cursor-pointer transition-all duration-75
                hover:text-green">Home</li>
                <li className="text-notblack font-semibold cursor-pointer transition-all duration-75
                hover:text-green">About Us</li>
                <li className="text-notblack font-semibold cursor-pointer transition-all duration-75
                hover:text-green">Orders</li>
                <li className="text-notblack font-semibold cursor-pointer transition-all duration-75
                hover:text-green">Contact</li>
              </ul>
            </div>
            {/* Icon and user section*/}
          <div className="relative">
            <HiShoppingBag className="text-[25px] text-notblack cursor-pointer transition-all
            duration-150 "/>
            <span className="absolute w-6 h-6 bg-green rounded-full text-white
            flex justify-center items-center -top-2.5 left-3.5">3</span>
          </div>
          <div>
          <HiUserCircle
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-[35px] h-[35px] text-green ml-20 cursor-pointer
          hover:text-notblack"/>
          </div>
        </div>
        
    </div>
  )
}
