import React from 'react'
import {FaHamburger} from 'react-icons/fa'
import {GiFullPizza} from 'react-icons/gi'
import {CiIceCream} from 'react-icons/ci'
import {GiChickenOven} from 'react-icons/gi'


export const ItemsSection = () => {
  return (
      <div className="flex items-center justify-center pb-4 mt-2 gap-20">
        <div className="backdrop-blur-md text-white flex justify-center items-center w-64 h-28 
        rounded-lg drop-shadow-md border-r-2 border-l-2 border-green ">
            <div className="py-6 px-6 bg-green rounded-full">
            <FaHamburger className="text-[30px]" />
            </div>
          <p className="font-semibold ml-6">Fast Food</p>
        </div>

        <div className="backdrop-blur-md text-white flex justify-center items-center w-60 h-28 
        rounded-lg drop-shadow-md border-r-2 border-l-2 border-green ">
            <div className="py-6 px-6 bg-green rounded-full">
            <GiFullPizza className="text-[30px]" />
            </div>
          <p className="font-semibold ml-6">Hor Pizza</p>
        </div>

        <div className="backdrop-blur-md text-white flex justify-center items-center w-60 h-28 
        rounded-lg drop-shadow-md border-r-2 border-l-2 border-green ">
            <div className="py-6 px-6 bg-green rounded-full">
            <CiIceCream className="text-[30px]" />
            </div>
          <p className="font-semibold ml-6">Ice Cream</p>
        </div>

        <div className="backdrop-blur-md text-white flex justify-center items-center w-60 h-28 
        rounded-lg drop-shadow-md border-r-2 border-l-2 border-green ">
            <div className="py-6 px-6 bg-green rounded-full">
            <GiChickenOven className="text-[30px]" />
            </div>
          <p className="font-semibold ml-6">Chicken</p>
        </div>
      </div>
    
  )
}
