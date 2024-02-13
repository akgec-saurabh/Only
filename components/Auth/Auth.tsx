import React, { useContext, useEffect, useState } from "react";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import Login from "@/components/Auth/Login";
import AuthContext from "@/store/auth-context";
import Register from "@/components/Auth/Register";
import Button from "../Button";
import Border from "../Border";

const Auth = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const { isAuthOpen } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isAuthOpen]);

  const registerHandler = () => {
    setIsLoginMode(false);
  };

  const loginHandler = () => {
    setIsLoginMode(true);
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        // height: 0,
        // translateY: "-50%",
        // top: "0%",
        top: "0%",
        left: "50%",
      }}
      animate={{
        opacity: 1,
        // height: "auto",
        top: "50%",
        left: "50%",
      }}
      exit={{ opacity: 0, top: 0 }}
      transition={{ ease: [0.32, 0.72, 0, 1], duration: 0.7 }}
      className="fixed z-50 flex    max-w-4xl  -translate-x-1/2 -translate-y-1/2   justify-between overflow-hidden rounded-md"
    >
      <div className="relative h-[572px] w-[512px] bg-primary">
        <Image
          className="aspect-[2/2] object-cover grayscale-[0.4]"
          src="https://ecommm.s3.ap-south-1.amazonaws.com/auth.jpg"
          alt="Authentication Image"
          fill
        />
        <div className="absolute left-1/2 top-1/2 z-50  flex w-3/4 -translate-x-1/2 -translate-y-1/2 flex-col items-center  justify-center space-y-4 border-2 border-double border-white px-12 py-8 text-secondary">
          <h3 className="text-balance text-center text-4xl font-bold">
            {isLoginMode
              ? "Login to Your Style Haven"
              : "Create Your Account Now"}
          </h3>
          <p className="text-balance text-center text-2xl">
            {isLoginMode ? "Unlock Fashion's Secrets" : "Fashion Awaits You"}
          </p>
        </div>
      </div>

      <div className="w-[512px] bg-secondary p-10">
        <h2 className="my-8 text-center text-4xl font-bold uppercase">
          {isLoginMode ? "Login" : "Register"}
        </h2>
        {isLoginMode ? <Login /> : <Register />}
        <div className="my-2 flex items-center">
          <Border />
          <span className="text-sm text-gray-500"> or</span>
          <Border />
        </div>
        {isLoginMode ? (
          <Button onClick={registerHandler} className="w-full py-3" size="lg">
            Register
          </Button>
        ) : (
          <Button onClick={loginHandler} className="w-full py-3" size="lg">
            Login
          </Button>
        )}
      </div>
    </motion.div>
  );
};

export default Auth;
