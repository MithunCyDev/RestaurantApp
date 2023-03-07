import React, { useEffect, useState } from "react";
import { useStateValue } from "../../Context/StateProvider";
import { actionType } from "../../Context/Reducer";
import { saveItem, getAllFoodItems } from "../../Utils/FirebaseFunction";
import { MdOutlineFastfood, MdDelete } from "react-icons/md";
import { BsCurrencyDollar } from "react-icons/bs";
import { items } from "../MenuSection/Menuitems";
import { Loader } from "./Loader";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { storage } from "../../firebase.config";
import { motion } from "framer-motion";
import Spiner2 from '../../Spiner/Spiner2'

export const CreateItems = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [alart, setAlart] = useState(false);
  const [field, setField] = useState(false);
  const [loading, setLoading] = useState(false);
  const [Name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imageAsset, setImageAsset] = useState(null);
  const [category, setCategory] = useState(null);
  const [{ foodItems }, dispatch] = useStateValue();

  const uploadImage = (e) => {
    setLoading(true);
    const imageUpload = e.target.files[0];
    console.log(imageUpload);
    const storageRef = ref(storage, `Images/${Date.now()}-${imageUpload.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageUpload);

    uploadTask.on(
      "state change",
      (snapshot) => {
        const uploadProgress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        console.log(error);
        setField(true);
        setErrorMessage("Error While Uploading, Try Again");
        setAlart(false);
        setTimeout(() => {
          setField(false);
          setLoading(false);
        }, 4000);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageAsset(downloadURL);
          setLoading(false);
          setField(true);
          setErrorMessage("Image upload Successfully");
          setAlart(true);
          setTimeout(() => {
            setField(false);
          }, 4000);
        });
      }
    );
  };

  const deleteImage = () => {
    setLoading(true);
    const deleteRef = ref(storage, imageAsset);
    deleteObject(deleteRef).then(() => {
      setImageAsset(null);
      setLoading(false);
      setField(true);
      setErrorMessage("Image Deleted Successfully");
      setAlart(true);
      setTimeout(() => {
        setField(false);
      }, 4000);
    });
  };

  const saveDetails = () => {
    setLoading(true);
    try {
      if (!Name || !imageAsset || !price || !category) {
        setField(true);
        setErrorMessage("Required fields can't be empty");
        setAlart(false);
        setLoading(false);
        setTimeout(() => {
          setField(false);
        }, 4000);
      } else {
        const data = {
          id: `${Date.now()}`,
          title: Name,
          imageURL: imageAsset,
          category: category,
          qty: 1,
          price: price,
        };
        saveItem(data);
        setLoading(false);
        setField(true);
        setErrorMessage("Data Update Successfully");
        setAlart(true);
        //Call Clear Function
        clearField();
        setTimeout(() => {
          setField(false);
        }, 4000);
      }
    } catch (error) {
      console.log(error);
      setField(true);
      setErrorMessage("Error While Uploading, Try Again");
      setAlart(false);
      setTimeout(() => {
        setField(false);
        setLoading(false);
      }, 4000);
    }
    fetchData();
  };
  //Clear All Input field
  const clearField = () => {
    setImageAsset(null);
    setCategory("");
    setName("");
    setPrice("");
  };

  //fetch data from firebase database
  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  // Loader animation
  const [pageLoading, setPageLoading] = useState(false);
  useEffect(() => {
    setPageLoading(true);
    setTimeout(() => {
      setPageLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {pageLoading ? (
        <Spiner2/>
      ) : (
        <div className="w-full h-screen bg-dark flex flex-col justify-center items-center">
          <div className=" px-4 gap-3 lg:w-[800px] lg:h-[600px] sm:h-[550px] md:w-[600px] sm:w-[320px] mt-20 bg-graylight flex flex-col justify-center items-center rounded-md relative">
            {/* Alart Field and Message */}
            {field && (
              <p
                className={`w-full  py-2 rounded-md text-center text-lg font-semibold
                ${alart === false ? "bg-red text-white" : "bg-green text-white"}`}
              >
                {errorMessage}
              </p>
            )}

            <div className="w-full flex justify-center items-center">
              <input
                type="text"
                required
                placeholder="Give me a name"
                className="outline-none relative w-full py-2 px-11 bg-dark text-white rounded-md font-semibold"
                value={Name}
                onChange={(e) => setName(e.target.value)}
              />
              <MdOutlineFastfood className=" text-gray absolute left-8 text-[20px]"></MdOutlineFastfood>
            </div>

            {/* Upload Section */}
            <div className="flex group items-center justify-center rounded-md bg-dark w-full sm:h-[250px] lg:h-[350px]  ">
              {loading ? (
                <Loader className="text-[50px] " />
              ) : (
                <>
                  {!imageAsset ? (
                    <label
                      className="flex flex-col items-center justify-center w-full h-[250px]
                 bg-dark text-white rounded-lg cursor-pointer"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                          aria-hidden="true"
                          className="w-10 h-10 mb-3 text-gray"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          ></path>
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold text-lg text-gray">
                            Click to upload
                          </span>
                        </p>
                        <p className="text-xs text-gray dark:text-gray-400">
                          PNG, JPG or GIF
                        </p>
                      </div>
                      <input
                        id="dropzone-file"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={uploadImage}
                      />
                    </label>
                  ) : (
                    // Image section
                    <div className=" w-full relative flex justify-center items-center ">
                      <img
                        src={imageAsset}
                        alt="uploadImage"
                        className=" object-contain overflow-hidden lg:h-[190px] lg:w-auto sm:h-[150px] sm:w-[160px] mx-auto"
                      />
                      <button className="py-3 px-3 bg-red absolute rounded-full z-20 hover:bg-redflower lg:top-[150px] sm:top-[110px] lg:right-20 sm:right-6">
                        <MdDelete
                          onClick={deleteImage}
                          className="text-white text-xl"
                        />
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
            {/* Select items Section */}
            <select
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-dark py-2 px-4 outline-none text-gray rounded-md font-semibold transition-all duration-150"
            >
              <option value="other">Select Category</option>
              {/* Map on all Items */}
              {items.map((item) => (
                <option
                  key={item.id}
                  value={item.useParamName}
                  className="bg-dark text-gray font-medium hover:bg-black"
                >
                  {item.name}{" "}
                </option>
              ))}
            </select>
            <div className="w-full flex lg:flex-row gap-3 sm:flex-col ">
              <input
                type="text"
                placeholder="Set Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className=" outline-none bg-dark py-2 px-10 text-white w-full rounded-md relative font-semibold"
              />
              <BsCurrencyDollar className="text-gray text-md absolute flex mt-3 items-center mx-4" />
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={saveDetails}
                className=" bg-green text-white px-14 py-2  rounded-md"
              >
                Add
              </motion.button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
