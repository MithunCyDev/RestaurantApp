import React from 'react'

export const Menuitems = () => {
    const items = {
        firstIteam : "Ice Cream",
        secIteam : "Chicken",
        thardIteam : "Chicken",
        fourIteam : "Chicken",
        fiveIteam : "Chicken",
        sixIteam : "Chicken",
      };
    
  return (
    <>
        <div className="w-[300px] h-[200px] bg-white shadow-lg rounded-lg 
        min-w-[250px] flex justify-center items-center cursor-pointer">{items}</div>
    </>
  )
}
