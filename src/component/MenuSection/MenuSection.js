import React from 'react'
import { items } from './Menuitems'


export const MenuSection = () => {

  return (
    <div className="w-full h-full z-[99] relative backdrop-blur-lg flex overflow-scroll gap-4 px-[70px] py-24">
        
       { items.map((div)=> (div = <div key={items.id} className="w-[300px] h-[200px] backdrop-blur-lg shadow-xl hover:scale-105 rounded-lg 
        min-w-[250px] flex justify-center items-center cursor-pointer">{items.name}</div>) )}

    </div>
    
  )
}
