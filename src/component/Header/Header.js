import React, { useState } from 'react'
import cyLogo from '../../Image/cylogo.png'
import avatar from '../../Image/avatar.png';
import {HiShoppingBag} from 'react-icons/hi'
import { motion } from "framer-motion"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {app} from '../../firebase.config';
import { actionType } from '../../Context/Reducer';
import {useStateValue} from '../../Context/StateProvider';


export const Header = () => {
  // Google Auth provider
  const firebaseAuth = getAuth(app)
  const provider = new GoogleAuthProvider();

  const [ {user}, dispatch] = useStateValue()

  const login = async ()=>{
    const {user: {refreshToken, providerData}} = await signInWithPopup(firebaseAuth, provider);
    dispatch({
      type : actionType.SET_USER,
      user : providerData[0],
    })
    localStorage.setItem("user", JSON.stringify(providerData[0]));
    }
   

  return (
    <div>
        <div className="flex w-full h-[90px] fixed top-0 left-0 z-[999] drop-shadow-sm 
        shadow-white bg-black opacity-90 items-center sm:px-[30px] lg:px-[70px] justify-center md:justify-between 
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
          <motion.div whileTap={{ scale: 0.9 }}>
          <img className="w-[35px] h-[35px] text-green ml-16 cursor-pointer rounded-full" 
          onClick={login} src={user? user.photoURL : avatar } alt="profile"/>
          </motion.div>
        </div>
        
    </div>
  )
}
