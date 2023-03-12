import React, { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Footer } from "../Footer/Footer";

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
        <section>
          <div className="w-full sm:h-full md:h-screen lg:h-screen flex flex-col bg-black lg:pt-24 sm:pt-10">
            <div className="bg-gradient-to-b from-deepgreen to-green h-96 w-full">
              <div className="w-full flex items-center justify-center my-12">
                <div className="absolute top-40 bg-dark shadow rounded py-12 lg:px-28 px-8">
                  <p className="md:text-3xl text-xl font-bold leading-7 text-center text-white">
                    Let’s chat and get a quote!
                  </p>
                  <div className="md:flex items-center mt-12">
                    <div className="md:w-72 flex flex-col">
                      <label className="text-base font-semibold leading-none text-white">
                        Name
                      </label>
                      <input
                        tabIndex={0}
                        arial-label="Please input name"
                        type="name"
                        className="text-base leading-none text-white p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-dark border rounded border-gray placeholder-gray-100"
                        placeholder="Please input  name"
                      />
                    </div>
                    <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                      <label className="text-base font-semibold leading-none text-white">
                        Email Address
                      </label>
                      <input
                        arial-label="Please input email address"
                        type="name"
                        className="text-base leading-none text-white p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-dark border rounded border-gray placeholder-gray-100"
                        placeholder="Please input email address"
                      />
                    </div>
                  </div>
                  <div className="md:flex items-center mt-8">
                    <div className="md:w-72 flex flex-col">
                      <label className="text-base font-semibold leading-none text-white">
                        Company name
                      </label>
                      <input
                        arial-label="Please input company name"
                        type="name"
                        className="text-base leading-none text-white p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-dark border rounded border-gray placeholder-gray-100 "
                        placeholder="Please input company name"
                      />
                    </div>
                    <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                      <label className="text-base font-semibold leading-none text-white">
                        Country
                      </label>
                      <input
                        tabIndex={0}
                        arial-label="Please input country name"
                        type="name"
                        className="text-base leading-none text-white p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-dark border rounded border-gray placeholder-gray-100"
                        placeholder="Please input country name"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="w-full flex flex-col mt-8">
                      <label className="text-base font-semibold leading-none text-white">
                        Message
                      </label>
                      <textarea
                        type="name"
                        className="h-36 text-base leading-none text-white p-3 mt-4 bg-dark border rounded border-gray placeholder-gray resize-none"
                      />
                    </div>
                  </div>
                  <p className="text-xs leading-3 text-white mt-4">
                    By clicking submit you agree to our terms of service,
                    privacy policy and how we use data as stated
                  </p>
                  <div className="flex items-center justify-center w-full">
                    <button className="mt-9 text-base font-semibold leading-none text-white py-4 px-20 bg-green rounded hover:bg-black ">
                      SUBMIT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </section>
      )}
    </>
  );
};
