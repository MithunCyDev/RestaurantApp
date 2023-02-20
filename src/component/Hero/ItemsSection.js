import React from 'react'
import {FaHamburger} from 'react-icons/fa'
import {GiFullPizza} from 'react-icons/gi'
import {CiIceCream} from 'react-icons/ci'
import {GiChickenOven} from 'react-icons/gi'


export const ItemsSection = () => {
  return (
    <div className="w-full">
      <div className="flex flex-wrap items-center justify-center pb-4 mt-2 lg:gap-20 sm:gap-10">
        <div className="backdrop-blur-md  text-white flex justify-center items-center p-2 sm:w-32 sm:h-12 lg:w-72 lg:h-28 
            rounded-lg drop-shadow-md border-r-2 border-l-2 border-green ">
            <div className="lg:py-4 lg:px-4 sm:py-1 sm:px-1 bg-green rounded-full">
            <FaHamburger className="lg:text-[30px] sm:text-[15px]" />
            </div>
          <p className="font-semibold lg:text-[16px] sm:text-[12px] lg:ml-6 sm:ml-2">Fast Food</p>
        </div>

        <div className="backdrop-blur-md text-white flex justify-center items-center  p-2 sm:w-32 sm:h-12 lg:w-72 lg:h-28  
        rounded-lg drop-shadow-md border-r-2 border-l-2 border-green ">
            <div className="lg:py-4 lg:px-4 sm:py-1 sm:px-1 bg-green rounded-full">
            <GiFullPizza className="lg:text-[30px] sm:text-[15px]" />
            </div>
          <p className="font-semibold lg:text-[16px] sm:text-[12px] lg:ml-6 sm:ml-2">Hor Pizza</p>
        </div>

        <div className="backdrop-blur-md text-white flex justify-center items-center  p-2 sm:w-32 sm:h-12 lg:w-72 lg:h-28 
        rounded-lg drop-shadow-md border-r-2 border-l-2 border-green ">
            <div className="lg:py-4 lg:px-4 sm:py-1 sm:px-1 bg-green rounded-full">
            <CiIceCream className="lg:text-[30px] sm:text-[15px]" />
            </div>
          <p className="font-semibold lg:text-[16px] sm:text-[12px] lg:ml-6 sm:ml-2">Ice Cream</p>
        </div>

        <div className="backdrop-blur-md text-white flex justify-center items-center  p-2 sm:w-32 sm:h-12 lg:w-72 lg:h-28 
        rounded-lg drop-shadow-md border-r-2 border-l-2 border-green ">
            <div className="lg:py-4 lg:px-4 sm:py-1 sm:px-1 bg-green rounded-full">
            <GiChickenOven className="lg:text-[30px] sm:text-[15px]" />
            </div>
          <p className="font-semibold lg:text-[16px] sm:text-[12px] lg:ml-6 sm:ml-2">Chicken</p>
        </div>
      </div>
    </div>
    
  )
}
