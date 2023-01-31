import React from 'react'
import foodImage from '../../Image/food.png'


export const Hero = () => {
  
  return (
    <>
    {/* Hero section */}
      <div className="w-full h-full p-20 bg-white flex flex-row justify-between ">
          <div className="flex flex-col justify-center flex-warp px-10">
              <h1 className="text-[30px] font-[Pacifico] font-bold text-green">This is</h1>
              <span className="text-notblack text-[110px] font-[Archivo Black] font-extrabold ">DELICIOUS</span>
              <span className="text-green font-[Pacifico] text-[70px] font-bold ">Food Place.</span>
              <p className="text-notblack">Lorem ipsum dolor amet, consectetur adipisicing elit. Accusamus voluptate pariatur<br></br> labore suscipit facilis sunt voluptatum dolores, doloremque cum itaque, placeat repudiandae?</p>
              <div>
                <button data-aos="zoom-in" className="font-[poppins] mt-12 py-4 px-12 text-white rounded-full bg-green hover:bg-notblack">Order Page</button>
              </div>
          </div>
          <div className="flex items-center px-10">
            <img className="w-[700px] h-auto" src={foodImage} alt="this is img"></img>
          </div>
         
      </div>
    </>
  )
}
