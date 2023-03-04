import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import aboutBg from "../../Image/AboutBg.jpg";
import { ThreeDots } from "react-loader-spinner";

export const About = () => {

  // Loader Animation
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div className=" w-full h-screen bg-black flex justify-center items-center">
          <ThreeDots width="80" color="#9aca3c" />
        </div>
      ) : (
        <section className="w-full sm:h-full lg:h-screen flex flex-col bg-black lg:pt-24 sm:pt-20 ">
          <div>
            <div className=" z-10 sm:px-[20px] lg:px-[70px] w-full lg:h-[200px] sm:h-[100px] bg-green flex justify-center items-center border-b-2 border-green">
              <h1 className="text-dark lg:text-5xl sm:text-4xl font-bold">
                About us
              </h1>
            </div>

            <div className="flex lg:flex-row sm:flex-col justify-between">
              <div className="z-10 sm:px-[20px] lg:px-[70px] py-10">
                <h1 className="lg:text-4xl sm:text-3xl text-green font-bold mb-4">
                  We make healthy eating taste delicious! We deliver healthy
                  upscale meals
                </h1>
                <p className="text-white text-xl">
                  Are you hungry? Did you have a long and stressful day?
                  Interested in getting a cheesy pizza delivered to<br></br>{" "}
                  your office or looking to avoid the weekly shop? Then
                  foodpanda Bangladesh is the right destination for you!
                  <br></br> foodpanda offers you a long and detailed list of the
                  best restaurants and shops near you to help make<br></br> your
                  everyday easier. Our online food <br></br>
                  delivery service has it all, whether you fancy a juicy burger
                  from Takeout, fresh sushi from Samdado <br></br>or peri peri
                  chicken from Nando's,<br></br> CyFood Bangladesh has over 2000
                  restaurants available from Dhaka to Chittagong through to
                  Sylhet. Did you<br></br>
                  know you can order your groceries<br></br> and more from
                  foodpanda, too? Check out CyFood shops for favourite partners
                  like Unimart, Suborno, Shwapno,<br></br> Bengal Meat, and much
                  more. Sit back and relax
                </p>
                <div className="">
                  <Link to="/contact">
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      className=" font-[poppins] sm:mt-8 mt-12 lg:py-4 lg:px-12 sm:py-3 sm:px-8
                text-white font-semibold rounded-full bg-green drop-shadow-lg shadow-notblack
                  "
                    >
                      Contact Us
                    </motion.button>
                  </Link>
                </div>
              </div>

              <div className=" flex items-center sm:px-[20px] lg:px-[70px]">
                <img className="w-[800px] rounded-lg" src={aboutBg} alt="" />
              </div>
            </div>
          </div>

          {/* <img className="fixed w-[800px] opacity-25" src={foodbg} alt="bgimage" /> */}
        </section>
      )}
    </>
  );
};
