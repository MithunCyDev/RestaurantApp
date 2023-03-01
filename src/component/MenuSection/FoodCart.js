import React from 'react'
import { motion } from 'framer-motion'
import { HiShoppingBag } from 'react-icons/hi'
import  './FoodCart.css';

export const FoodCart = ({flag, data, listRef} ) => {
  return (
    
    <div ref={listRef} className={`sm:px-[20px] lg:px-[70px] lg:py-10  w-full flex transition-all duration-500 lg:gap-10 sm:gap-4 ${flag ? " scroll scroll-smooth scrollbar-hide " 
    : " lg:overflow-x-hidden sm:overflow-x-scroll scrollbar-hide lg:flex-wrap lg:justify-center"}`}>
      {data && data.map((items)=>(
        <div key={items.id} className="relative flex justify-between items-center px-4 shadow bg-dark min-w-[300px] min-h-[180px] rounded-lg">
          <div className="flex items-center">
              <motion.img className=" w-28 h-32 object-contain absolute" whileHover={{scale: 1.1,}} 
              src={items.imageURL} alt="Food"/>
          </div>
          <div className="flex flex-col text-right">
              <HiShoppingBag className=" absolute bg-green w-10 h-10 p-2 rounded-full 
              text-white cursor-pointer top-6 right-4 hover:bg-notblack"/>
              <h1 className="text-white text-md font-semibold mt-16 ml-5">{items.title}</h1>
              <p className="text-green text-md font-medium ml-16 mb-2">Price: {items.price}</p>
              <div className='bg-green w-24 bg-opacity-30 text-white rounded-full ml-24'>
                <p className='py-1 px-4 text-sm'>Available</p>
              </div>
          </div>
      </div>
      ))}
    </div>
  )
};
