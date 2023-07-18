import React from 'react';
import Logo1 from '../../assets/nav-icon-home.svg';
import LoginForm from '../../components/Forms/LoginForm';

const Login = () => {
  return (
    <div className="flex h-screen">
      <div className="flex flex-col justify-center items-center bg-white w-1/2">
        <h1 className="text-black uppercase drop-shadow-3xl sm:text-4xl text-2xl text-left mb-2">
          Welcome Back
        </h1>
        <p className="text-gray-500 text-left mb-6">Hello, please enter your credentials!</p>

        <div className="flex flex-col justify-center items-center bg-white w-1/2">
          <LoginForm />
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2"></div>
          <div className="flex-grow"></div>
          <a href="/" className="text-red-600 text-sm">
            Forgot Password?
          </a>
        </div>
      </div>
      <div className="bg-teal-500 w-1/2 flex justify-center items-center ">
        <a href="/">
          <img src={Logo1} alt="Large Logo" className="w-96 h-96" />
        </a>
      </div>
    </div>
  );
};

export default Login;
