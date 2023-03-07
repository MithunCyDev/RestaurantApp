import React from "react";
import googleButton from "../../Image/googleButton.png";
import AppleButton from "../../Image/appStore.png";
import MobileApps from "../../Image/AppMobile.png";

export const MobileApp = () => {
  return (
    <section className="bg-dark w-full h-72 ">
      <div className="flex lg:flex-row sm:flex-col lg:justify-between h-72 sm:px-[20px] lg:px-[70px]">
        <div className="flex justify-center h-72 flex-col z-50">
          <h1 className="text-green lg:text-3xl sm:text-xl mb-3 font-semibold">
            Download the Cyfood App and groceries you love
          </h1>
          <p className="text-white lg:text-md sm:text-sm">
            It's all at your fingertips the restaurants and shops you love. Find
            the right food and
            <br></br>groceries to suit your mood, and make the first bite last.
            Go ahead, download us.
          </p>
          <div className="flex gap-6 lg:mt-14 sm:mt-8">
            <a href="https://play.google.com/store/apps">
              <img
                className="lg:w-40 sm:w-32 cursor-pointer"
                src={googleButton}
                alt="google"
              />
            </a>
            <a href="https://www.apple.com/app-store/">
              <img
                className="lg:w-40 sm:w-32 cursor-pointer"
                src={AppleButton}
                alt="google"
              />
            </a>
          </div>
        </div>

        <div className="flex items-center z-[999]">
          <img
            src={MobileApps}
            alt="mobile"
            className="lg:w-[300px] sm:hidden lg:block"
          />
        </div>
      </div>
    </section>
  );
};
