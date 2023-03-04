import React, { useEffect, useState } from 'react'
import {ThreeDots } from 'react-loader-spinner';
import App from '../App';
import  logo from '../Image/CyFood.png';

export const Spiner = () => {
   // Loader Animation
    const [ loading, setLoading] = useState(false);
    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }, []);
  
      return (
        <>
          {loading ? (
            <div className=" w-full h-screen bg-black flex flex-col justify-center items-center">
              <img className='lg:w-64 sm:w-48' src={logo} alt='logo'/>
              <ThreeDots width="70" color="#9aca3c" />
            </div>
          ) : (
            <App />
          )}
        </>
      );
}
