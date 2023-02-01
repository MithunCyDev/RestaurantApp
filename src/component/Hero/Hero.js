import React from 'react'
import foodImage from '../../Image/food4.png'


export const Hero = () => {
  
  return (
    <>
    {/* Hero section */}
      <div className="w-full h-full p-24 bg-white font-[poppins] flex justify-between ">
      <img className="w-full h-auto fixed object-contain opacity-80" src={foodImage} alt="this is img"></img>
          <div className="flex flex-col justify-center flex-warp z-20 px-10 py-12 pt-24">
              <h1 className="text-[80px] font-bold text-green">Order Tasty &</h1>
              <span className="text-notblack text-[115px] font-extrabold tracking-wide">Fresh Food</span>
              <span className="text-notblack  text-[60px] mb-4 font-bold ">Anytime</span>
              <p className="text-notblack">Lorem ipsum dolor amet, consectetur adipisicing elit. Accusamus voluptate pariatur<br></br> labore suscipit facilis sunt voluptatum dolores, doloremque placeat repudiandae?</p>
              <div className="">
                <button className="transition-all duration-150 font-[poppins] mt-12 py-4 px-12
                 text-white rounded-full bg-green drop-shadow-lg shadow-notblack
                 hover:bg-notblack ">Order Now</button>
              </div>
          </div>
          {/* <div className="flex items-center px-10 ">
          <span className="bg-green w-24 h-24 rounded-full absolute
            flex items-center justify-center text-white text-sm left-[350px] top-[130px]">Testy food</span>
            <span className="bg-green w-32 h-32 rounded-full absolute
            flex items-center justify-center text-white text-lg left-[290px]">Testy food</span>
            
          </div> */}
         
      </div>
    </>
  )
}
