import React, { useEffect, useState } from 'react'
import { itemsArray } from '../Hero/ItemsArray';
import { BsArrowRightCircle} from 'react-icons/bs'
import { useStateValue } from '../../Context/StateProvider';
import { FoodCart } from './FoodCart';

export const Menu = () => {

  const [{foodItems}, dispatch] = useStateValue();

  const [ filter , setFilter] = useState("Chicken");

  useEffect(()=>{

  },[filter])

  return (
    <section className='w-full sm:my-14 flex flex-col bg-black '>
        <div className='bg-gray-dark lg:py-20 lg:pt-20 sm:py-10 -mb-6 sm:px-[20px] lg:px-[70px]'>
          <div className='flex justify-center'>
            <div className='lg:mb-10 sm:-mb-8'>
              <h1 className='text-white font-medium lg:text-[50px] sm:text-[23px]'>Our Menu
              <span className='text-green ml-2 font-bold'>Section</span>
              </h1>
              <div className='flex justify-center'>
                <div className="lg:w-40 sm:w-32 h-[2px] mt-2 bg-green"/>
              </div>
            </div>
          </div>
          <div className='text-white mt-20 mb-6 lg:hidden'>
            <p className='flex items-center text-white'>Scroll
              <BsArrowRightCircle className='ml-2 text-green text-lg'/>
            </p>
          </div>
          
          <div className='flex items-center lg:justify-center lg:py-10 lg:gap-10 sm:gap-4 cursor-pointer scroll-smooth overflow-x-scroll scrollbar-hide
          transition-all duration-300'>
            {itemsArray.map((items)=> (
              <div
              key={items.id}
              onClick={ ()=> setFilter( items.name)}
              className={`${ filter === items.name ? "bg-green" : "bg-black"} bg-opacity-80 lg:min-w-[200px] lg:min-h-[70px]
              sm:min-w-[160px] sm:min-h-[60px] rounded-md text-white
              flex justify-center items-center transition-all duration-100`}>
                <h1 className='lg:text-md sm:text-sm font-semibold'> {items.name} </h1>
                <div className={`${ filter === items.name ? "bg-white text-green" : "bg-green"} ml-3 py-2 px-2 rounded-full`}>
                  <items.icon className='w-6 h-6'/>
                </div>
              </div>
            ))}
          </div>
          
        </div>
        <div className='w-full lg:mt-20 sm:mt-20  '>
            <FoodCart flag={false} data={foodItems?.filter(n=> n.category === filter)} />
        </div>
    </section>
  )
}
