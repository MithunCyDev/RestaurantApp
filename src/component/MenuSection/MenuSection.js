import React from 'react'


export const MenuSection = () => {
  const div = [1, 2, 3, 4, 5, 6]

  const items = [
    {name : 'IceCream', id: 1 },
    {name : 'Chicken' , id: 2},
    {name : 'Pizza' , id: 3},
    {name : 'First Food' , id: 4},
    {name : 'Special Food' , id: 5},
    {name : 'Lunch Item' , id: 6},
  ]
   
  return (
    <div className="w-full h-full z-[99] relative backdrop-blur-lg flex overflow-scroll gap-4 px-[70px] py-24">
        
       { items.map((div)=> (div = <div key={items.id} className="w-[300px] h-[200px] backdrop-blur-lg shadow-xl hover:scale-105 rounded-lg 
        min-w-[250px] flex justify-center items-center cursor-pointer">{items.name}</div>) )}

    </div>
    
  )
}
