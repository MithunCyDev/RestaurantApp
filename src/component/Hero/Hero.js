import React from 'react'
import foodImage1 from '../../Image/food1.png'
import foodImage2 from '../../Image/food2.png'
import foodImage3 from '../../Image/food4.png'
import foodImage4 from '../../Image/food6.png'
import foodbg from '../../Image/v.png'
import { motion, useTime, useTransform} from "framer-motion"




export const Hero = () => {
  const time = useTime();
  const rotate = useTransform(time, [0, 40000], [0, 360], { clamp: false });
  return (
    <div className=" w-full h-full bg-black font-[poppins] sm:px-[30px] lg:px-[70px] ">
    {/* Hero section text */}
      <div className=" lg:flex-row md:flex-col sm:flex-col flex lg:justify-between relative  ">
          <div className="flex flex-col justify-center  flex-warp z-20 sm:mt-[120px] lg:my-[120px]">
              <h2 className="lg:text-[80px] md:text-[40px] sm:text-[30px] font-bold text-green">Order Tasty &</h2>
              <h1 className="text-white lg:text-[110px] md:text-[90px] sm:text-[55px] font-extrabold">Fresh Food</h1>
              <h2 className="text-white lg:text-[60px] md:text-[60px] sm:text-[40px]  mb-4 font-bold ">Anytime</h2>
              <p className="text-white">Lorem ipsum dolor consectetur adipisicing elit. Accusamus voluptate<br></br> labore suscipit facilis sunt voluptatum dolores, doloremque placeat repudiandae?</p>
              <motion.div
              whileTap={{ scale: 0.9 }}>
                <button className="transition-all duration-150 font-[poppins] sm:mt-8 mt-12 py-4 px-12
                 text-white font-semibold rounded-full bg-green drop-shadow-lg shadow-notblack
                 hover:bg-notblack ">Order Now
                </button>
              </motion.div>
          </div>
          
          {/* Image Section  */}
         <div className="flex flex-col lg:gap-10 md:gap-10 sm:gap-4 sm:px-[5px] sm:py-[50px] lg:my-[110px] z-10">
            <div className="flex lg:gap-10 sm:gap-4 md:gap-10">
              <motion.img style={{ rotate }} className="lg:w-[300px] md:w-[220px] sm:w-[140px] h-auto object-contain " src={foodImage1} alt="this is img"></motion.img>
              <motion.img style={{ rotate }} className="lg:w-[300px] md:w-[220px] sm:w-[140px] h-auto object-contain " src={foodImage2} alt="this is img"></motion.img>
            </div>
            <div className="flex lg:gap-10 sm:gap-4 md:gap-10">
              <motion.img style={{ rotate }} className="lg:w-[300px] md:w-[220px] sm:w-[140px] h-auto object-contain " src={foodImage3} alt="this is img"></motion.img>
              <motion.img style={{ rotate }} className="lg:w-[300px] md:w-[220px] sm:w-[140px] h-auto object-contain " src={foodImage4} alt="this is img"></motion.img>
            </div>
         </div>
         <img className="fixed w-[1000px] h-auto mx-auto opacity-20 object-scale-down " src={foodbg} alt="background"></img>
      </div>
    </div>
  )
}
