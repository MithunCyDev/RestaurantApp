import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import aboutBg from "../../Image/AboutBg.jpg";
import { ThreeDots } from "react-loader-spinner";
import Spiner2 from "../../Spiner/Spiner2";
import { Footer } from "../Footer/Footer";

export const About = () => {
  // Loader Animation
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <Spiner2 />
      ) : (
        <section className="w-full sm:h-full lg:h-full flex flex-col bg-black lg:pt-24 sm:pt-20 ">
          <div>
            <div className="2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-6">
              <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                  <h1 className="text-3xl lg:text-5xl font-bold leading-9 text-green pb-4">
                    About Us
                  </h1>
                  <p className="font-normal text-base leading-6 text-white ">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum.In the first
                    place we have granted to God, and by this our present
                    charter confirmed for us and our heirs forever that the
                    English Church shall be free, and shall have her rights
                    entire, and her liberties inviolate; and we will that it be
                    thus observed; which is apparent from It is a long
                    established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout. The
                    point of using Lorem Ipsum.In the first place we have
                    granted to God, and by this our present charter confirmed
                    for us and our heirs forever that the English Church shall
                    be free, and shall have her rights entire, and her liberties
                    inviolate; and we will that it be thus observed; which is
                    apparent from distracted by the readable content of a page
                    when looking at its layout. The point of using Lorem
                    Ipsum.In the first place we have granted to God, and by this
                    our present charter confirmed for us and our heirs forever
                    that the English Church shall be free, and shall have her
                    rights entire, and her liberties inviolate; and we will that
                    it be thus observed; which is apparent.
                    Any Request Please Contact Us?
                  </p>
                  <Link to="/contact">
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      className="flex relative font-[poppins] sm:mt-8 mt-12 lg:py-4 lg:px-12 sm:py-3 sm:px-8
                 text-white font-semibold rounded-full bg-green drop-shadow-lg shadow-notblack
                 "
                    >
                      Contact Us
                    </motion.button>
                  </Link>
                </div>
                <div className="w-full lg:w-8/12">
                  <img
                    className="w-full h-full rounded-lg"
                    src={aboutBg}
                    alt="A group of People"
                  />
                </div>
              </div>

              <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                  <h1 className="text-3xl lg:text-5xl font-bold leading-9 text-green pb-4">
                    Our Starting Story
                  </h1>
                  <p className="font-normal text-base leading-6 text-white ">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum.In the first
                    place we have granted to God, and by this our present
                    charter confirmed for us and our heirs forever that the
                    English Church shall be free, and shall have her rights
                    entire, and her liberties inviolate; and we will that it be
                    thus observed.
                  </p>
                </div>
                <div className="w-full lg:w-8/12 lg:pt-8">
                  <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                    <div className="p-4 pb-6 flex justify-center flex-col items-center">
                      <img
                        className="md:block hidden"
                        src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png"
                        alt="Alexa featured Img"
                      />
                      <img
                        className="md:hidden block"
                        src="https://i.ibb.co/zHjXqg4/Rectangle-118.png"
                        alt="Alexa featured Img"
                      />
                      <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                        Alexa
                      </p>
                    </div>
                    <div className="p-4 pb-6 flex justify-center flex-col items-center">
                      <img
                        className="md:block hidden"
                        src="https://i.ibb.co/fGmxhVy/Rectangle-119.png"
                        alt="Olivia featured Img"
                      />
                      <img
                        className="md:hidden block"
                        src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png"
                        alt="Olivia featured Img"
                      />
                      <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                        Olivia
                      </p>
                    </div>
                    <div className="p-4 pb-6 flex justify-center flex-col items-center">
                      <img
                        className="md:block hidden"
                        src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png"
                        alt="Liam featued Img"
                      />
                      <img
                        className="md:hidden block"
                        src="https://i.ibb.co/C5MMBcs/Rectangle-120.png"
                        alt="Liam featued Img"
                      />
                      <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                        Liam
                      </p>
                    </div>
                    <div className="p-4 pb-6 flex justify-center flex-col items-center">
                      <img
                        className="md:block hidden"
                        src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png"
                        alt="Elijah featured img"
                      />
                      <img
                        className="md:hidden block"
                        src="https://i.ibb.co/ThZBWxH/Rectangle-121.png"
                        alt="Elijah featured img"
                      />
                      <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                        Elijah
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Footer/>
          </div>

          {/* <img className="fixed w-[800px] opacity-25" src={foodbg} alt="bgimage" /> */}
        </section>
      )}
    </>
  );
};
