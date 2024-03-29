import React, { useEffect } from 'react';
import Logo1 from '../../assets/nav-icon-home.svg';
import LoginForm from '../../components/Forms/LoginForm';
import { HiChatBubbleLeftRight } from 'react-icons/hi2';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="relative font-noir">
      <img
        src={Logo1}
        alt="Logo"
        className="w-16 h-16 absolute top-4 left-4 rounded-lg bg-[#66A7A3] p-2 shadow-lg hidden lg:block"
      />
      <div className="flex h-screen ">
        <div className="flex flex-col justify-center items-center bg-white w-1/2 max-lg:w-full ">
          <img
            src={Logo1}
            alt="Large Logo"
            className="w-24 h-24 rounded-lg mb-6 max-lg:bg-[#66A7A3] p-2 shadow-lg hidden max-lg:block"
          />
          <h1 className="text-black uppercase drop-shadow-3xl sm:text-4xl text-2xl font-bold mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-500  mb-6">Hello, please enter your credentials!</p>

          <div className="flex flex-col justify-center items-center bg-white w-1/2 max-lg:w-full ">
            <LoginForm />
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-2"></div>
            <div className="flex-grow"></div>
            <Link to="/forgot-password" className="text-red-600 text-sm">
              Forgot Password?
            </Link>
          </div>
        </div>
        <div className="bg-[#66A7A3] w-1/2 flex justify-center items-center max-lg:hidden">
          <a href="/">
            <img src={Logo1} alt="Large Logo" className="object-fill w-96" />
          </a>
        </div>
      </div>
      <motion.button
        whileHover={{ scale: 1.0 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-10 right-10 h-16 w-16 bg-[#177E8C] rounded-full flex justify-center items-center text-white">
        <span className="text-white text-2xl">
          <HiChatBubbleLeftRight className="text-3xl" />
        </span>
      </motion.button>
    </div>
  );
};

export default Login;
