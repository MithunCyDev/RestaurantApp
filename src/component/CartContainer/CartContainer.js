import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { motion } from "framer-motion";

export const CartContainer = () => {
  return (
    <section className=" border-l border-dark font-[poppins] bg-black z-[9999] lg:w-[400px] md:w-[380px] sm:w-full h-screen flex flex-col fixed top-0 right-0">
      <div className="py-10 px-6">
        <div className="flex justify-between items-center">
          <motion.div whileTap={{ scale: 0.8 }}>
            <IoIosArrowRoundBack className="text-white text-3xl cursor-pointer" />
          </motion.div>
          <motion.p
            whileTap={{ scale: 0.8 }}
            className="text-white px-3 py-1 rounded-lg bg-dark cursor-pointer"
          >
            Clear
          </motion.p>
        </div>
        <div className="lg:h-[450px] sm:h-[200px] overflow-y-scroll scrollbar-hide">
          <div className="bg-dark h-24 rounded-md relative flex justify-between items-center mt-8">
            <motion.img
              whileHover={{ scale: 1.1 }}
              className="w-auto h-24 py-4 px-3"
              src="https://firebasestorage.googleapis.com/v0/b/resturantapp-864c1.appspot.com/o/Images%2F1676916832757-food9.png?alt=media&token=8d29c129-3a48-4c9f-9cbe-58feff8a542a"
              alt=""
            />
            <div className="flex flex-col">
              <p className="text-md text-white font-semibold">Special Curry</p>
              <p className="text-md text-green font-semibold">$15</p>
            </div>
            <div className="flex items-center gap-3 px-4">
              <motion.div whileTap={{ scale: 0.7 }}>
                <AiOutlinePlus className="text-white text-sm cursor-pointer" />
              </motion.div>
              <p className="text-white text-lg font-semibold">1</p>
              <motion.div whileTap={{ scale: 0.7 }}>
                <AiOutlineMinus className="text-white text-sm cursor-pointer" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-dark w-full h-full rounded-t-xl flex flex-col">
        <div className="py-10 px-6">
          <div className="flex justify-between mb-10">
            <p className="text-gray font-semibold">Sub Total</p>
            <p className="text-green font-semibold">15$</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray font-semibold">Delivery</p>
            <p className="text-green font-semibold">2.5$</p>
          </div>
          <div className="border-b border-gray opacity-30 py-5"></div>
          <div className="flex justify-between mt-10">
            <p className="text-white font-semibold">Total</p>
            <p className="text-green font-semibold">17.5$</p>
          </div>
          <motion.button 
          whileTap={{scale:0.9}}
          className="bg-green w-full h-10 font-semibold text-white rounded-full mt-14">
            Check Out
          </motion.button>
        </div>
      </div>
    </section>
  );
};
