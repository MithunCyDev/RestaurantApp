import React from 'react'
import {FaHamburger} from 'react-icons/fa'
import {GiFullPizza, GiChickenOven} from 'react-icons/gi'
import {CiIceCream} from 'react-icons/ci'

export const ItemsSection = () => {

   const itemsArray =[
    {
      name: 'Fast Food',
      icon: FaHamburger,
      id : '1',
    },
    {
      name: 'Hot Pizza',
      icon: GiFullPizza,
      id :'2',
    },
    {
      name: 'Chicken',
      icon: GiChickenOven,
      id : '3',
    },
    {
      name: 'Ice Cream',
      icon: CiIceCream,
      id : '4',
    }, 
  ]
  
  return (
    <div className="w-full py-10">
      <div className="flex flex-wrap items-center justify-center  lg:gap-20 sm:gap-10">
        
        {itemsArray.map((items)=>(
          <div key={items.id} className="bg-dark  text-white flex justify-center items-center p-2 sm:w-32 sm:h-12 lg:w-72 lg:h-24 
            rounded-lg drop-shadow-md border-r-2 border-l-2 border-green ">
            <div className="lg:py-4 lg:px-4 sm:py-1 sm:px-1 bg-green rounded-full">
            <items.icon className="lg:text-[30px] sm:text-[15px]" />
            </div>
            <p className="font-semibold lg:text-[16px] sm:text-[12px] lg:ml-6 sm:ml-2" >{items.name}</p>
          </div>
        ))}
      </div>
    </div>
    
  )
}
