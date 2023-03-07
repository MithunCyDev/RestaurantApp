import React, { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";

export const Contact = () => {
  // Loader Animation
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <div className=" w-full h-screen bg-black flex justify-center items-center">
          <ThreeDots width="80" color="#9aca3c" />
        </div>
      ) : (
        <div className="w-full sm:h-full lg:h-screen flex flex-col bg-black lg:pt-24 sm:pt-20">
          <div className=" z-10 sm:px-[20px] lg:px-[70px] w-full h-[150px] bg-green2 flex justify-center items-center border-b-2 border-green">
            <h1 className="text-white text-xl">Contact</h1>
          </div>
        </div>
      )}
    </>
  );
};
