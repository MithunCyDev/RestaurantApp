import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { actionType } from "../../Context/Reducer";
import { useStateValue } from "../../Context/StateProvider";
import { app } from "../../firebase.config";
import { motion } from "framer-motion";

export const AlartLogin = () => {
  const [{ user }, dispatch] = useStateValue();
  const [alartClose, setAlartClose] = useState(false);
  // there is no user alert for signin
  useEffect(() => {
    if (user === undefined || null) {
      setTimeout(() => {
        setAlartClose(true);
      }, 10000);
    }
    if (user !== null) {
      setAlartClose(false);
    }
  }, [user]);

  //Google Login
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  //Google Auth function
  const login = async () => {
    if (!user) {
      const {
        user: { providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    }
  };

  return (
    <div
      className={
        alartClose
          ? "w-full h-screen z-[99999] fixed flex justify-center items-center"
          : "hidden"}>
      <div className="bg-black bg-opacity-90 w-full h-screen flex flex-col gap-4 justify-center items-center relative">
        <h1 className="text-white lg:text-xl sm:text-md font-semibold">
          Please SignIn/SignUp First
        </h1>
        <motion.button // google Button
          onClick={login}
          whileTap={{ scale: 0.9 }}
          className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
        >
          <svg
            className="w-4 h-4 mr-2 -ml-1"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
          >
            <path
              fill="currentColor"
              d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
            ></path>
          </svg>
          Sign in with Google
        </motion.button>
      </div>
      <AiOutlineClose
        onClick={() => setAlartClose(false)}
        className="absolute top-10 right-10 text-white text-2xl cursor-pointer hover:text-green"
      />
    </div>
  );
};
