import React from 'react'
import { CiDeliveryTruck } from 'react-icons/ci'
import pizzabg from '../../Image/Pizzabg.png'

export const FoodDelivery = () => {
  return (
    <section className='bg-black w-full h-full'>
        <div className='sm:px-[20px] lg:px-[70px] flex justify-between items-center'>
            <div className='py-14'>
                <img src={pizzabg} alt="pizzabg" className='w-[500px] h-auto'/>
            </div>
            <div className='flex flex-col'>
                <h1
                 className='text-green font-bold text-[40px]'>Sit at home</h1>
                 <span className='text-white font-semibold text-[50px] -mt-3'>We will take care</span>
                 <p className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic officia asperiores nisi quae perspiciatis 
                    <br></br>voluptates. Odit veniam inventore amet alias voluptates distinctio delectus. Corporis, sunt consequatur.
                 </p>
                
                {/* Icon Section */}
                 <div className='flex flex-col items-center gap-3'>
                    <div className='bg-green w-16 h-16 flex justify-center items-center rounded-full'>
                       <CiDeliveryTruck className='w-12 h-12 py-1 px-1'/>
                    </div>
                    <div className=''>
                    <p className='text-white font-semibold text-xl'>Fast Delivery</p>
                    </div>
                 </div>
                {/* Button */}
                 <div className='mt-8'>
                    <button className='py-3 px-8 rounded-full bg-green text-white'>Read More</button>
                 </div>
            </div>
           
        </div>
    </section>
  )
}
