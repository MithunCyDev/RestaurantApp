import React from 'react'
import foodImage1 from '../../Image/food1.png'
import foodImage2 from '../../Image/food2.png'
import foodImage3 from '../../Image/food4.png'
import foodImage4 from '../../Image/food6.png'


export const Hero = () => {
  
  return (
    <div className=" w-full h-full bg-black font-[poppins] sm:px-[30px] lg:px-[70px] ">
    {/* Hero section text */}
      <div className=" lg:flex-row md:flex-col sm:flex-col flex lg:justify-between relative  ">
          <div className="flex flex-col justify-center  flex-warp z-20 sm:mt-[120px] lg:my-[120px]">
              <h2 className="lg:text-[80px] sm:text-[30px] font-bold text-green">Order Tasty &</h1>
              <h1 className="text-white lg:text-[110px] sm:text-[50px] font-extrabold">Fresh Food</span>
              <h2 className="text-white lg:text-[60px] sm:text-[35px]  mb-4 font-bold ">Anytime</span>
              <p className="text-white">Lorem ipsum dolor amet, consectetur adipisicing elit. Accusamus voluptate pariatur<br></br> labore suscipit facilis sunt voluptatum dolores, doloremque placeat repudiandae?</p>
              <div className="">
                <button className="transition-all duration-150 font-[poppins] sm:mt-8 mt-12 py-4 px-12
                 text-white rounded-full bg-green drop-shadow-lg shadow-notblack
                 hover:bg-notblack ">Order Now</button>
              </div>
          </div>
          
          {/* Image Section  */}
         <div className="flex flex-col lg:gap-10 sm:gap-4 sm:px-[5px] sm:py-[50px] lg:my-[110px]">
            <div className="flex lg:gap-10 sm:gap-4">
              <img className="lg:w-[300px] sm:w-[140px] h-auto object-contain " src={foodImage1} alt="this is img"></img>
              <img className="lg:w-[300px] sm:w-[140px] h-auto object-contain " src={foodImage2} alt="this is img"></img>
            </div>
            <div className="flex lg:gap-10 sm:gap-4">
              <img className="lg:w-[300px] sm:w-[140px] h-auto object-contain " src={foodImage3} alt="this is img"></img>
              <img className="lg:w-[300px] sm:w-[140px] h-auto object-contain " src={foodImage4} alt="this is img"></img>
            </div>
         </div>
      </div>
    </div>
  )
}
