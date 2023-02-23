import React from 'react'
import { HiShoppingBag } from 'react-icons/hi'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import { motion } from 'framer-motion'
import { FoodItems } from './FoodItems'

export const MenuSection = () => {

  return (
    <div className="w-full h-full z-[99] bg-black relative flex flex-col overflow-x-scroll-hidden gap-4">
      <div className="flex justify-between w-full lg:my-20 sm:my-10">
        {/* Text section */}
        <div>
          <h1 className='text-white font-medium lg:text-[30px] sm:text-[23px]'>Our Fresh and
          <span className='text-green ml-2 font-bold'>Healthy Food</span>
          </h1>
          <div className="lg:w-40 sm:w-16 h-[2px] mt-2 bg-green"/>
        </div>
        {/* Arrow Icon Section */}
        <div className="flex gap-4 sm:mt-20 lg:mt-0">
          <MdOutlineArrowForwardIos className="text-white bg-green w-10 h-8 py-2 px-2 rounded-md
          hover:bg-notblack transition-all duration-150"/>
          <MdOutlineArrowForwardIos className="rotate-180 text-white bg-green w-10 h-8 py-2 px-2 rounded-md
          hover:bg-notblack transition-all duration-150"/>
        </div>
      </div>

      <FoodItems flag={true} ></FoodItems>
      
    </div>
    
  )
}
