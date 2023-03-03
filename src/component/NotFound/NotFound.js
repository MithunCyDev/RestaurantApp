import React from 'react'

export const NotFound = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-dark w-full h-screen gap-2'>
        <span className='text-6xl text-green font-bold'>Sorry!</span>
        <h1 className='text-white text-4xl font-medium'>404 Error</h1>
        <span className='text-4xl'>😢</span>
    </div>
  )
}
