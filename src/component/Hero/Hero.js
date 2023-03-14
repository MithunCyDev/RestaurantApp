import { useState, CSSProperties, useEffect } from "react";
import foodImage1 from "../../Image/food1.png";
import foodImage2 from "../../Image/food2.png";
import foodImage3 from "../../Image/food4.png";
import foodImage4 from "../../Image/food6.png";
import foodbg from "../../Image/v.png";
import { motion, useTime, useTransform } from "framer-motion";
import { ItemsSection } from "./ItemsSection";
import { MenuSection } from "../MenuSection/MenuSection";
import { Footer } from "../Footer/Footer";
import { Link } from "react-router-dom";
import { MobileApp } from "../MobileApp/MobileApp";
import { AiOutlineClose } from "react-icons/ai";
import { useStateValue } from "../../Context/StateProvider";
import { actionType } from "../../Context/Reducer";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../../firebase.config";

export const Hero = () => {
  const time = useTime();
  const rotate = useTransform(time, [0, 40000], [0, 360], { clamp: false });
  const [{ user }, dispatch] = useStateValue();
  const [alartClose, setAlartClose] = useState(false);

  // there is no user alert for signin
  useEffect(() => {
    if (user === undefined || null) {
      setTimeout(() => {
        setAlartClose(true);
      }, 10000);
    } 
    if( user !== null){
      setAlartClose(false)
    }
  }, [user]);

//Google Login
  const firebaseAuth = getAuth(app); 
  const provider = new GoogleAuthProvider();
  //Google Auth function
  const login = async () => {
    if (!user) {
      const {
         user: { providerData },} = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    }
  };

  return (
    <section className=" w-full h-full bg-black font-[poppins]">
      
      {/* Alart Message after 10sec */}
      <div
        className={
          alartClose
            ? "w-full h-screen z-[99999] fixed flex justify-center items-center"
            : "hidden"}>
        <div className="bg-black bg-opacity-90 w-full h-screen flex flex-col gap-4 justify-center items-center relative">
          <h1 className="text-white lg:text-2xl sm:text-lg font-semibold">
            Please SignIn/SignUp First
          </h1>
          <motion.button // google Button
          onClick={login}
          whileTap={{scale:0.9}}
            className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
          >
            <svg
              className="w-4 h-4 mr-2 -ml-1"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
            >
              <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              ></path>
            </svg>
            Sign in with Google
          </motion.button>
        </div>
        <AiOutlineClose
          onClick={() => setAlartClose(false)}
          className="absolute top-10 right-10 text-white text-2xl cursor-pointer hover:text-green"/>
      </div>

      <div className="">
        {/* Hero section text */}
        <div className=" lg:flex-row md:flex-col sm:flex-col flex lg:justify-between relative sm:px-[20px] lg:px-[70px] ">
          <div className="flex flex-col justify-center flex-warp z-20 sm:mt-[120px] lg:my-[120px]">
            <h2 className="lg:text-[80px] md:text-[40px] sm:text-[30px] lg:-mb-4 sm:-mt-2 font-bold text-green">
              Order Tasty &
            </h2>
            <motion.h1 className="text-white lg:text-[130px] md:text-[100px] sm:text-[55px] font-extrabold">
              Fresh Food
            </motion.h1>
            <h2 className="text-white lg:text-[60px] md:text-[60px] sm:text-[40px] lg:-mt-4 sm:-mt-2 mb-4 font-bold ">
              Anytime
            </h2>
            <p className="text-white">
              Lorem ipsum dolor consectetur adipisicing elit. Accusamus
              voluptate<br></br> labore suscipit facilis sunt voluptatum
              dolores, doloremque placeat repudiandae?
            </p>
            <div className="flex items-center gap-6">
              <Link to="/order">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="flex relative font-[poppins] sm:mt-8 mt-12 lg:py-4 lg:px-12 sm:py-3 sm:px-8
                 text-white font-semibold rounded-full bg-green drop-shadow-lg shadow-notblack
                 "
                >
                  Order Page
                </motion.button>
              </Link>
            </div>
          </div>

          {/* Image Section  */}
          <div className="flex flex-col items-center lg:gap-10 md:gap-10 sm:gap-4 sm:py-[50px] lg:my-[98px] z-10">
            <div className="flex lg:gap-10 sm:gap-4 md:gap-10">
              <motion.img
                style={{ rotate }}
                className="lg:w-[300px] md:w-[220px] sm:w-[140px] h-auto object-contain "
                src={foodImage1}
                alt="this is img"
              ></motion.img>
              <motion.img
                style={{ rotate }}
                className="lg:w-[300px] md:w-[220px] sm:w-[140px] h-auto object-contain "
                src={foodImage2}
                alt="this is img"
              ></motion.img>
            </div>
            <div className="flex lg:gap-10 sm:gap-4 md:gap-10">
              <motion.img
                style={{ rotate }}
                className="lg:w-[300px] md:w-[220px] sm:w-[140px] h-auto object-contain "
                src={foodImage3}
                alt="this is img"
              ></motion.img>
              <motion.img
                style={{ rotate }}
                className="lg:w-[300px] md:w-[220px] sm:w-[140px] h-auto object-contain "
                src={foodImage4}
                alt="this is img"
              ></motion.img>
            </div>
          </div>
          <img
            className="fixed lg:w-[1000px] lg:h-auto sm:w-[500px] mx-auto opacity-20 object-scale-down "
            src={foodbg}
            alt="background"
          />
        </div>
        <ItemsSection />
        <MenuSection />
        <MobileApp />
        <Footer></Footer>
      </div>
    </section>
  );
};
