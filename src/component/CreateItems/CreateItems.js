import React, { useState } from 'react'
import { MdOutlineFastfood } from 'react-icons/md'


export const CreateItems = () => {

  const [ Name, setName] = useState("")

  return (
    <div className="w-full h-screen bg-notblack flex flex-col justify-center items-center">
      <div className=" w-[500px] min-w-[350px] h-[500px] bg-black flex flex-col justify-center items-center rounded-md relative">
        
        <div className="w-full flex justify-center items-center px-4">
          <input type="text" placeholder='Give me a name'
          className=" relative w-full py-2 px-11 bg-notblack text-white rounded-md font-semibold"
          value={Name}
          onChange={(e)=> setName(e.target.value)}
          />
          <MdOutlineFastfood className=" text-gray absolute left-8 text-[20px]"></MdOutlineFastfood>
        </div>

        {/* Upload Section */}
        <div class="flex items-center justify-center w-full p-4 ">
            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 bg-notblack text-white rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">PNG, JPG or GIF</p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" />
            </label>
        </div> 

      </div>
    </div>
  )
}
