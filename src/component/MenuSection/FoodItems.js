import React from 'react'
import { motion } from 'framer-motion'
import { HiShoppingBag } from 'react-icons/hi'

export const FoodItems = (flag) => {
  return (
    
    <div className={`flex lg:gap-10 sm:gap-4 ${flag ? "overflow-x-scroll" : "overflow-x-hidden"}`}>
      <div className=" relative flex justify-between items-center my-6 px-4 bg-gray-dark bg-opacity-60 w-[290px] h-[180px] rounded-lg">
        <div whileTap={{ scale: 0.7 }} className="flex items-center">
            <motion.img className=" w-28 h-auto object-contain absolute" whileHover={{scale: 1.1,}} 
            src="https://firebasestorage.googleapis.com/v0/b/resturantapp-864c1.appspot.com/o/Images%2F1676916674245-food7.png?alt=media&token=ed8c1ab8-9937-4cc3-b49e-35b631e002f8" alt="Food"/>
        </div>
        <div className="flex flex-col text-right">
            <HiShoppingBag className=" absolute bg-green w-10 h-10 p-2 rounded-full 
            text-white cursor-pointer top-6 right-4 hover:bg-notblack"/>
            <p className="text-white text-md font-semibold mt-16 ml-5">Chicken Curry</p>
            <p className="text-green text-md font-medium ml-16 mb-2">Price: 10$</p>
            <div className='bg-green bg-opacity-30 text-white rounded-full ml-11'>
                <p className='py-1 px-4 text-sm'>Available</p>
            </div>
        </div>
      </div>
    </div>
  )
}
