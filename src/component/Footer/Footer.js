import React from 'react'
import logo from '../../Image/CyFood.png'
import {AiFillTwitterCircle, AiFillInstagram} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {IoLogoLinkedin} from 'react-icons/io'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <section className='bg-gray-dark w-full h-full lg:py-8 sm:py-6 text-white flex flex-col'>
      <div className='sm:px-[20px] lg:px-[70px]'>
      
        <div className='flex flex-col justify-center items-center py-4 text-center'>
          <img src={logo} alt='logo' className='w-52 mb-4'/>
          <p className='text-gray lg:text-md sm:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat odit explicabo voluptates
            quos ducimus omnis officia, laudantium reprehenderit facere<br></br>cum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat odit explicabo voluptates
            quos ducimus omnis cum officia,officia.
          </p>
          <div className='flex justify-center items-center gap-4 mt-6 lg:mb-10 sm:mb-6'>
            <Link to='/notFound'>
              <AiFillInstagram className='w-6 h-6 text-green hover:text-white cursor-pointer'/>
            </Link>
            <Link to='/notFound'>
              <AiFillTwitterCircle className='w-6 h-6 text-green hover:text-white cursor-pointer'/>
            </Link>
            <Link to='/notFound'>
              <BsFacebook className='w-5 h-5 text-green hover:text-white cursor-pointer'/>
            </Link>
            <a href='https://www.linkedin.com/in/mithun-cy-4060491b1/'>
              <IoLogoLinkedin className='w-6 h-6 text-green hover:text-white cursor-pointer'/>
            </a>
          </div>
        </div>
        <div className='lg:text-[17px] sm:text-[11px] flex justify-center items-center bg-dark py-4 px-4 rounded-md'>
              <h1>Copyright 2023 <span className='text-green font-semibold'> Developed by ©MithunCy</span></h1>
        </div>
      </div>
    </section>
  )
}
