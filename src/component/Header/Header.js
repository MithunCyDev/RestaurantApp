import cyLogo from '../../Image/cylogo.png'
import avatar from '../../Image/avatar.png';
import {HiShoppingBag} from 'react-icons/hi'
import { IoIosAdd, IoIosLogOut } from 'react-icons/io'
import { motion } from "framer-motion"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {app} from '../../firebase.config';
import { actionType } from '../../Context/Reducer';
import {useStateValue} from '../../Context/StateProvider';
import { Link } from 'react-router-dom';
import { useState } from 'react';


export const Header = () => {

  const [Menu, setMenu] = useState(false)
  // Google Auth provider
  const firebaseAuth = getAuth(app)
  const provider = new GoogleAuthProvider();
//custom hook for user
  const [ {user}, dispatch] = useStateValue()
//Google Auth function
  const login = async ()=>{
      if (!user){
        const {user: {refreshToken, providerData}} = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type : actionType.SET_USER,
        user : providerData[0],
      })
      localStorage.setItem("user", JSON.stringify(providerData[0]));
      } else{
        setMenu(!Menu);
      }
    }
   
    const logOut = ()=>{
      setMenu(false)
      localStorage.clear()

      dispatch({
        type : actionType.SET_USER,
        user : null
      })
    }
  return (
    <div>
        <div className="flex w-full h-[90px] fixed top-0 left-0 z-[999] drop-shadow-sm 
        shadow-white bg-black opacity-90 items-center sm:px-[30px] lg:px-[70px] justify-center  md:justify-between 
        sm:justify-between  font-[poppins]">

          <div className="">
            <img className="sm:w-16 lg:w-24" src={cyLogo} alt="logo"></img>
          </div>
            <div className="mx-auto lg:block md:hidden sm:hidden">
              <ul className="flex items-center justify-center gap-[60px]">
                <motion.li whileTap={{ scale: 0.9 }} className="text-green font-semibold cursor-pointer transition-all duration-75
                hover:text-green">Home</motion.li>
                <motion.li whileTap={{ scale: 0.9 }} className="text-white font-semibold cursor-pointer transition-all duration-75
                hover:text-green">About Us</motion.li>
                <motion.li whileTap={{ scale: 0.9 }} className="text-white font-semibold cursor-pointer transition-all duration-75
                hover:text-green">Orders</motion.li>
                <motion.li whileTap={{ scale: 0.9 }} className="text-white font-semibold cursor-pointer transition-all duration-75
                hover:text-green">Contact</motion.li>
              </ul>
            </div>
            {/* Icon and user section*/}
          <motion.div whileTap={{ scale: 0.9 }} className="relative sm:ml-12">
            <HiShoppingBag className="text-[25px] text-white cursor-pointer transition-all
            duration-150"/>
            <span className="absolute w-6 h-6 bg-green rounded-full text-white
            flex justify-center items-center -top-2.5 left-3.5">3</span>
          </motion.div>
          <div className="" >
            <motion.img 
            whileTap={{ scale: 0.9 }} 
            className=" w-[35px] h-[35px] text-green ml-16 cursor-pointer rounded-full" 
            onClick={login} 
            src={user? user.photoURL : avatar } alt="profile"/>

            {/* Set menu and verify admin email */}
            {Menu &&  (
                <motion.div 
                initial={{ opacity:0, scale: 0.6 }}
                animate={{ opacity:1, scale: 1 }}
                exit={{ opacity:0, scale: 0.6 }}
                className="bg-notblack absolute flex flex-col mt-6 -ml-[55px] justify-center rounded-md">
                {user && user.email === 'rajcy1@gmail.com' && (
                    <Link to={'/CreateItems'}>
                    <motion.p whileTap={{ scale: 0.9 }} className="flex text-white text-[14px] font-semibold px-10 py-2 cursor-pointer bg-green transition-all duration-100">Items
                      <IoIosAdd className="text-white text-[20px] ml-1 " />
                    </motion.p>
                    </Link>
                )}
                {/* Mobile menu */}
                <ul className="flex flex-col justify-center lg:hidden ">
                  <motion.li whileTap={{ scale: 0.9 }} className="text-white cursor-pointer text-[14px] px-4 py-2 transition-all duration-75
                  hover:bg-soda">Home</motion.li>
                  <motion.li whileTap={{ scale: 0.9 }} className="text-white cursor-pointer text-[14px] px-4 py-2 transition-all duration-75
                  hover:bg-soda">About Us</motion.li>
                  <motion.li whileTap={{ scale: 0.9 }} className="text-white cursor-pointer text-[14px] px-4 py-2 transition-all duration-75
                  hover:bg-soda">Orders</motion.li>
                  <motion.li whileTap={{ scale: 0.9 }} className="text-white cursor-pointer text-[14px] px-4 py-2 transition-all duration-75
                  hover:bg-soda">Contact</motion.li>
                </ul>

                <motion.p whileTap={{ scale: 0.9 }} 
                onClick={logOut}
                className="flex  text-white text-[14px] font-semibold px-10 py-2 cursor-pointer bg-black  transition-all duration-100">LogOut
                  <IoIosLogOut className="text-white text-[19px] ml-1" />
                </motion.p>
              </motion.div>
              )}
          </div>
        </div>
        
    </div>
  )
}
