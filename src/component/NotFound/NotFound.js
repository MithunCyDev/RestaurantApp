import React, { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";

export const NotFound = () => {
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
        <div className="flex flex-col justify-center items-center bg-dark w-full h-screen gap-2">
          <span className="text-6xl text-green font-bold">Sorry!</span>
          <h1 className="text-white text-4xl font-medium">404 Error</h1>
          <span className="text-4xl">😢</span>
        </div>
      )}
    </>
  );
};
