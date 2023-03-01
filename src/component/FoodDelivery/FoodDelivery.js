import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import galarry1 from "../../Image/galarry1.jpg";
import galarry2 from "../../Image/galarry2.jpg";
import galarry3 from "../../Image/galarry3.jpg";
import galarry4 from "../../Image/galarry4.jpg";
import galarry5 from "../../Image/galarry5.jpg";
import galarry6 from "../../Image/galarry6.jpg";

import { FoodDeliverItems } from "./FoodDeliverItems";
import { motion } from "framer-motion";

export const FoodDelivery = () => {
  return (
    <section className="bg-black w-full h-full">
      <div className="sm:px-[20px] lg:px-[70px] sm:mt-10 lg:py-28 flex lg:flex-row sm:flex-col justify-between items-center sm:gap-8 lg:gap-6">
        
        {/* Image Section */}
        <div className="overflow-hidden">
          <div className=" sm:w-[335px] md:w-[700px] lg:w-[600px] h-auto ">
            <div className="-m-1 flex flex-wrap md:-m-2">
              <div className="flex w-1/2 flex-wrap">
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={galarry1}
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={galarry2}
                  />
                </div>
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={galarry3}
                  />
                </div>
              </div>
              <div className="flex w-1/2 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={galarry4}
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={galarry5}
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={galarry6}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="text-green font-semibold lg:text-[45px] sm:text-[30px]">
          Everyday 
          </h1>
          <span className="text-white font-semibold lg:text-[60px] sm:text-[38px] -mt-3">
          Something Different!
          </span>
          <p className="text-white">
          We make healthy eating taste delicious! We deliver healthy upscale meals, all around Oahu.
            <br></br> Meals are fresh and delivered 3 times per week.  We have Keto,
            Paleo<br></br> and Vegetarian   options available. Over 200 healthy adaptations from favorite dishes around the world.
          </p>

          <div className="mt-8 ">
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="lg:py-4 lg:px-12 sm:py-3 sm:px-8 rounded-full font-semibold bg-green text-white"
            >
              Read More
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};
