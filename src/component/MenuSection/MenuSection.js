import React from 'react'


export const MenuSection = () => {
  const div = [1, 2, 3, 4, 5, 6]

  const items = {
    firstIteam : "Ice Cream",
    secIteam : "Chicken",
    thardIteam : "Chicken",
    fourIteam : "Chicken",
    fiveIteam : "Chicken",
    sixIteam : "Chicken",
  };
  
  return (
    <div className="w-full h-full z-[99] relative backdrop-blur-lg flex overflow-scroll gap-4 px-[70px] py-24">
        
       { div.map((div)=> (div = <div className="w-[300px] h-[200px] backdrop-blur-lg shadow-xl hover:scale-105 rounded-lg 
        min-w-[250px] flex justify-center items-center cursor-pointer">{items.firstIteam}</div>) )}

    </div>
    
  )
}
