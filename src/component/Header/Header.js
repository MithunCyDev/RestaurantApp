import { useState } from 'react';
import cyLogo from '../../Image/cylogo.png'
import {HiShoppingBag} from 'react-icons/hi'
import { IoIosAdd, IoIosLogOut } from 'react-icons/io'
import { motion } from "framer-motion"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {app} from '../../firebase.config';
import { actionType } from '../../Context/Reducer';
import {useStateValue} from '../../Context/StateProvider';
import { Link } from 'react-router-dom';


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
            <Link to='/'>
            <img className="sm:w-16 lg:w-24" src={cyLogo} alt="logo"></img>
            </Link>
          </div>
            <div className="mx-auto lg:block md:hidden sm:hidden">
              <ul className="flex items-center justify-center gap-[60px] ml-20">
                <Link to='/home'>
                  <motion.li whileTap={{ scale: 0.7 }} className="text-green font-semibold cursor-pointer transition-all duration-75
                  hover:text-green">Home
                  </motion.li>
                </Link>
                <Link to='/about'>
                  <motion.li whileTap={{ scale: 0.7 }} className="text-white font-semibold cursor-pointer transition-all duration-75
                  hover:text-green">About Us
                  </motion.li>
                </Link>
                <Link to='/order'>
                  <motion.li whileTap={{ scale: 0.7 }} className="text-white font-semibold cursor-pointer transition-all duration-75
                  hover:text-green">Orders
                  </motion.li>
                </Link>
                <Link to='/contact'>
                  <motion.li whileTap={{ scale: 0.7 }} className="text-white font-semibold cursor-pointer transition-all duration-75
                hover:text-green">Contact
                  </motion.li>
                </Link>
              </ul>
            </div>
            {/* Icon and user section*/}
          <motion.div whileTap={{ scale: 0.7 }} className="relative sm:ml-20">
            <HiShoppingBag className="text-[25px] text-white cursor-pointer transition-all
            duration-150"/>
            <span className="absolute w-6 h-6 bg-green rounded-full text-white
            flex justify-center items-center -top-2.5 left-3.5">3</span>
          </motion.div>
          <div className="w-24 ml-12" onClick={login}  >
            {user? <motion.img 
            whileTap={{ scale: 0.7 }} 
            className="relative w-[35px] h-[35px] ml-12 cursor-pointer rounded-full" 
            src={ user.photoURL } alt="profile"/>
             : <motion.button whileTap={{ scale: 0.9 }}
             className="py-2 px-6 bg-green text-white font-medium rounded-md">
              SignIn</motion.button> }
            
            {/* <p className="absolute text-white font-medium ml-12 mt-1 text-[13px]">{user.displayName}</p> */}

            {/* Set menu and verify admin email */}
            {Menu &&  (
                <motion.div 
                initial={{ opacity:0, scale: 0.6 }}
                animate={{ opacity:1, scale: 1 }}
                exit={{ opacity:0, scale: 0.6 }}
                className="bg-notblack absolute flex flex-col mt-6 -ml-[55px] justify-center rounded-md">
                {user && user.email === 'rajcy1@gmail.com' && (
                    <Link to='/createitems'>
                      {/* New Items add section */}
                    <motion.p whileTap={{ scale: 0.9 }} 
                      onClick={ ()=> setMenu(false)} 
                      className="flex text-white text-[14px] font-semibold px-10 py-2 cursor-pointer bg-green transition-all duration-100">Items
                      <IoIosAdd className="text-white text-[20px] ml-1 " />
                    </motion.p>
                    </Link>
                )}
                {/* Mobile menu */}
                <ul className="flex flex-col justify-center lg:hidden ">
                  <Link to='/home'>
                    <motion.li whileTap={{ scale: 0.9 }} className="text-white cursor-pointer text-[14px] px-4 py-2 transition-all duration-75
                    hover:bg-soda">Home
                    </motion.li>
                  </Link>
                  <Link to='/about'>
                    <motion.li whileTap={{ scale: 0.9 }} className="text-white cursor-pointer text-[14px] px-4 py-2 transition-all duration-75
                    hover:bg-soda">About Us
                    </motion.li>
                  </Link>
                  <Link to='/order'>
                    <motion.li whileTap={{ scale: 0.9 }} className="text-white cursor-pointer text-[14px] px-4 py-2 transition-all duration-75
                  hover:bg-soda">Orders
                    </motion.li>
                  </Link>
                  <Link to='/contact'>
                    <motion.li whileTap={{ scale: 0.9 }} className="text-white cursor-pointer text-[14px] px-4 py-2 transition-all duration-75
                  hover:bg-soda">Contact
                    </motion.li>
                  </Link>
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
