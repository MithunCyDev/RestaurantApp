import React, { useState } from 'react'
import { HiShoppingBag } from 'react-icons/hi'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import { motion } from 'framer-motion'
import { useStateValue } from '../../Context/StateProvider'
import {FoodCart} from './FoodCart'
import { useRef } from 'react'
import { Menu } from './Menu'
import { FoodDelivery } from '../FoodDelivery/FoodDelivery'



export const MenuSection = () => {

  const [move, setMove] = useState(false);
  const [ slideNumber, setSlideNumber] = useState(0);
  const [{foodItems}, dispatch] = useStateValue();
  const listRef = useRef();
  
  // Slider Function
  const handleClick = (direction)=>{
    let distance = listRef.current.getBoundingClientRect().x ;
    setMove(true)
    if(direction === "left" && slideNumber > 0){
      setSlideNumber(slideNumber - 1)
      
      listRef.current.style.transform = `translateX(${193 + distance}px)`
    }
    if(direction === "right" && slideNumber < 3){
      setSlideNumber(slideNumber + 1)
      listRef.current.style.transform = `translateX(${-193 + distance}px)`
    }
  }

  return (
    <div className="w-full h-full z-[99] bg-black relative flex flex-col gap-4 overflow-hidden">
      <div className="flex justify-between w-full lg:py-20 sm:py-8 sm:pt-14 sm:px-[20px] lg:px-[70px]">
        {/* Text section */}
        <div>
          <h1 className='text-white font-medium lg:text-[50px] sm:text-[23px]'>Our Fresh and
          <span className='text-green ml-2 font-bold'>Special Food</span>
          </h1>
          <div className="lg:w-50 sm:w-28 h-[2px] mt-2 bg-green"/>
        </div>
        {/* Arrow Icon Section */}
        <div className="flex gap-4 sm:mt-20 lg:mt-0">
          <MdOutlineArrowForwardIos className="text-white lg:block md:hidden sm:hidden bg-green w-10 h-8 py-2 px-2 rounded-md
          hover:bg-notblack transition-all duration-100 cursor-pointer"
          onClick={()=>handleClick("left")} style={{backgroundColor: !move && "black"}}
          />
          <MdOutlineArrowForwardIos className="rotate-180 text-white lg:block md:hidden sm:hidden bg-green w-10 h-8 py-2 px-2 rounded-md
          hover:bg-notblack transition-all duration-100 cursor-pointer"
          onClick={()=>handleClick("right")}
          />
        </div>
      </div>

     <FoodCart listRef={listRef} flag={true} data={foodItems?.filter((n)=>n.category === "Chicken")}/>
    <FoodDelivery></FoodDelivery>
     <Menu></Menu>
    </div>
  )
};
