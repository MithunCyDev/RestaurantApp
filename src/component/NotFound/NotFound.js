import React from 'react'

export const NotFound = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-dark w-full h-screen gap-2'>
        <span className='text-5xl text-green font-bold'>Sorry!</span>
        <h1 className='text-white text-lg font-medium'>Data Not Found</h1>
        <span className='text-4xl'>😢</span>
    </div>
  )
}
