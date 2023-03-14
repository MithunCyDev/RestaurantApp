import React, { useState } from "react";
import {
  IoIosArrowRoundBack,
  IoIosArrowUp,
  IoIosArrowDown,
} from "react-icons/io";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { motion } from "framer-motion";
import { useStateValue } from "../../Context/StateProvider";
import { actionType } from "../../Context/Reducer";
import notFound from "../../Image/notFound.jpg";

export const CartContainer = () => {
  const [CartDown, setCartDown] = useState(true);

  const [{ foodCart, cartItems }, dispatch] = useStateValue();

  //Show cart Function
  const showCart = () => {
    dispatch({
      type: actionType.SET_FOOD_CART,
      foodCart: !foodCart,
    });
  };

  //localstorangClear function

  const localstorangClear = () => {
    localStorage.removeItem("cartItems");
    dispatch({
      type: actionType.SET_CART_ITEMS,
      cartItems: [], // after Click i will pass empty array
    });
  };

  // const [mainPrice, setMainPrice] = useState(1)

  // const price = cartItems.map((i)=>(i.price))
  // const subTotal = parseFloat(price);
  return (
    <motion.section
      initial={{ opacity: 0, x: 300 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 300 }}
      className=" border-l border-dark font-[poppins] bg-black z-[9999] lg:w-[400px] md:w-[380px] sm:w-full h-screen flex flex-col fixed top-0 right-0"
    >
      <div className="flex justify-between items-center pt-10 pb-4 px-6 ">
        <motion.div onClick={showCart} whileTap={{ scale: 0.8 }}>
          <IoIosArrowRoundBack className="text-white text-3xl cursor-pointer" />
        </motion.div>
        <motion.button
          onClick={() => localstorangClear()}
          whileTap={{ scale: 0.8 }}
          className="text-gray px-3 py-1 rounded-lg bg-dark cursor-pointer"
        >
          Clear
        </motion.button>
      </div>

      <div>
        <div className="pb-4 px-6">
          <div
            className={
              CartDown
                ? "lg:h-[450px] sm:h-[230px] overflow-y-scroll scrollbar-hide"
                : "w-full lg:h-[680px] sm:h-[550px]"
            }
          >
            {cartItems &&
              cartItems.map((items) => (
                <div
                  key={items.id}
                  className="bg-dark h-24 rounded-md relative flex justify-between items-center mt-5"
                >
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    className="w-auto h-24 py-4 px-3"
                    src={items.imageURL}
                    alt=""
                  />
                  <div className="flex flex-col">
                    <p className="text-md text-white font-semibold">
                      {items.title}
                    </p>
                    <p className="text-md text-green font-semibold">
                      {items.price}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 px-4">
                    <motion.div whileTap={{ scale: 0.7 }}>
                      <AiOutlinePlus className="text-white text-sm cursor-pointer" />
                    </motion.div>
                    <p className="text-white text-lg font-semibold">
                      {items.qty}
                    </p>
                    <motion.div whileTap={{ scale: 0.7 }}>
                      <AiOutlineMinus className="text-white text-sm cursor-pointer" />
                    </motion.div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        

        {/* Cart Price Section */}
        <div
          className={
            CartDown
              ? "bg-dark w-full h-full rounded-t-2xl flex flex-col"
              : "hidden h-0 w-0"
          }
        >
          <div className="flex justify-center items-center mt-2">
            <IoIosArrowDown
              onClick={() => setCartDown(false)}
              className=" text-gray text-xl cursor-pointer hover:text-green"
            />
          </div>
          <div className="py-10 px-6">
            <div className="flex justify-between mb-6">
              <p className="text-gray font-semibold">Sub Total</p>
              <p className="text-green font-semibold">25$</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray font-semibold">Delivery</p>
              <p className="text-green font-semibold">2.5$</p>
            </div>
            <div className="border-b border-gray opacity-30 mt-8"></div>
            <div className="flex justify-between mt-8">
              <p className="text-white font-semibold">Total</p>
              <p className="text-green font-semibold">17.5$</p>
            </div>
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="bg-green w-full h-10 font-semibold text-white rounded-full mt-14"
            >
              Check Out
            </motion.button>
          </div>
        </div>
        <div
          onClick={() => setCartDown(true)}
          className={
            CartDown
              ? " hidden"
              : " border-t border-gray border-opacity-50 cursor-pointer flex justify-center items-center bg-dark h-20 lg:mt-24 sm:py-2 bottom-0 w-full sticky rounded-t-2xl"
          }
        >
          <IoIosArrowUp className="text-gray text-xl cursor-pointer hover:text-green" />
        </div>
      </div>
    </motion.section>
  );
};
