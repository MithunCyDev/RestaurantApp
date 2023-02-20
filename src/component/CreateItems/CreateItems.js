import React, { useState } from 'react'
import { MdOutlineFastfood, MdDelete } from 'react-icons/md'
import { BsCurrencyDollar } from 'react-icons/bs'
import { items } from '../MenuSection/Menuitems'
import { Loader } from './Loader'
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import {storage} from '../../firebase.config'


export const CreateItems = () => {
  const [errorMessage, setErrorMessage] = useState(null)
  const [alart, setAlart] = useState(false)
  const [field, setField] = useState(false)
  const [loading, setLoading] = useState (false)
  const [ Name, setName] = useState("")
  const [ selectItem, setSelectItem] = useState("")
  const [ price, setPrice] = useState("")
  const [imageAsset, setImageAsset] = useState(null)
  const [category, setCategory] = useState(null)

  const uploadImage = (e)=>{
    setLoading(true)
    const imageUpload = e.target.files[0];
    const storageRef = ref(storage, `Images/${Date.now()}-${imageUpload.name}`)
    const uploadTask = uploadBytesResumable(storageRef, imageUpload);

    uploadTask.on(
    "state change", 
    (snapshot)=>{
      const uploadProgress = (snapshot.bytesTransferred/snapshot.totalBytes) * 100;
    }, 
    (error)=>{
      console.log(error)
      setField(true);
      setErrorMessage("Error While Uploading, Try Again");
      setAlart(false);
      setTimeout(()=>{
        setField(false);
        setLoading(false);
      },4000);
    }, 
    ()=>{
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=>{
        setImageAsset(downloadURL);
        setLoading(false);
        setField(true);
        setErrorMessage("Image upload Successfully");
        setAlart(true);
        setTimeout(()=>{
          setField(false)
        },4000)
      })
    })
  }

  const deleteImage = ()=>{
    setLoading(true)
    const deleteRef = ref(storage, imageAsset);
    deleteObject(deleteRef).then(()=>{
      setImageAsset(null)
      setLoading(false)
      setField(true);
        setErrorMessage("Image Deleted Successfully");
        setAlart(true);
        setTimeout(()=>{
          setField(false)
        },4000)
    })
  }

  const addImage = ()=>{
    
  }

  return (
    <div className="w-full h-screen bg-notblack flex flex-col justify-center items-center">
      <div className=" px-4 gap-3 lg:w-[800px] lg:h-[600px] sm:h-[550px] md:w-[600px] sm:w-[320px] mt-20 bg-black flex flex-col justify-center items-center rounded-md relative">
        {/* Alart Field and Message */}
        {field && (
          <p className={`w-full  py-2 rounded-md text-center text-lg font-semibold
          ${alart === false
          ? "bg-red text-white"
          : "bg-green text-white"}`}>
            {errorMessage}
          </p>
        )}

        <div className="w-full flex justify-center items-center">
          <input type="text" placeholder='Give me a name'
          className="outline-none relative w-full py-2 px-11 bg-notblack text-white rounded-md font-semibold"
          value={Name}
          onChange={(e)=> setName(e.target.value)}
          />
          <MdOutlineFastfood className=" text-gray absolute left-8 text-[20px]"></MdOutlineFastfood>
        </div>

        {/* Upload Section */}
        <div class="flex group items-center justify-center rounded-md bg-notblack w-full sm:h-[250px] lg:h-[350px]  ">
            {loading? <Loader className="text-[50px] "/> : <>
              {!imageAsset ? 
              (
                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-[250px] bg-notblack text-white rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" 
                  fill="none" stroke="currentColor" viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" 
                  stroke-linejoin="round" stroke-width="2" 
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                  </svg>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span class="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">PNG, JPG or GIF</p>
                </div>
                  <input 
                  id="dropzone-file" 
                  type="file" accept='image/*' 
                  class="hidden" 
                  onChange={uploadImage}
                  />
              </label>):
              // Image section
              <div className=" w-full relative flex justify-center items-center ">
                <img src={imageAsset} alt='uploadImage' className=" object-contain overflow-hidden h-[150px] w-[160px] mx-auto"/>
                <button className="py-3 px-3 bg-red absolute rounded-full z-20 lg:top-[150px] sm:top-[110px] lg:right-20 sm:right-6" >
                  <MdDelete 
                  onClick={deleteImage}
                  className="text-white text-xl"/>
                </button>
              </div>
              }
            </>
            }
        </div> 
        {/* Select items Section */}
          <select 
           className="w-full bg-notblack py-2 px-4 outline-none text-gray rounded-md font-semibold transition-all duration-150">
            <option value='other'>Select Category</option>
            {/* Map on all Items */}
            {items.map((item)=> ( <option 
            key={item.id}
            value={item.useParamName}
            onChange={(e)=> setCategory(e.target.value)}
            className="bg-notblack text-gray font-medium hover:bg-black"
            >{item.name} </option>))}
          </select>
          <div className="w-full flex lg:flex-row gap-3 sm:flex-col ">
            <input 
            type='text' placeholder='Set Price'
            value={price}
            onChange={(e)=> setPrice(e.target.value)} 
            className=" outline-none bg-notblack py-2 px-10 text-white w-full rounded-md relative font-semibold"/>
            <BsCurrencyDollar
            className="text-gray text-md absolute flex mt-3 items-center mx-4"
            />
            <button 
            onClick={addImage}
            className=" transition-all duration-150 bg-green text-white px-14 py-2  rounded-md hover:bg-notblack">Add</button>
          </div>
          
      </div>
    </div>
  )
}
