import React from "react";
import Navigation from "../Navigation/Navigation";
import "./login.css";
import NavIcon from "../../assets/nav-icon.svg";
const Login = () => {
  return (
    <div className="h-screen">
      <img src={NavIcon} alt="" />
      <div className="grid place-items-center">
        <div className="bg-login h-96">
          <div className="flex flex-col text-white  mt-48">
            <div className=" p-1 border-l-4">
              <label htmlFor="" className="mr-10">
                Username:
              </label>
              <input
                type="text"
                name=""
                id=""
                className=" w-80 text-slate-600 outline-none  p-2 drop-shadow-lg rounded-sm"
              />
            </div>
            <div className="p-1 mt-4 border-l-4">
              <label htmlFor="" className="mr-10">
                Password:
              </label>
              <input
                type="text"
                name=""
                id=""
                className="w-80 ml-1 text-slate-600  outline-none p-2 drop-shadow-lg rounded-sm"
              />
            </div>
          </div>
          <div className="grid h-max place-items-center mt-8  ">
            <button
              type="submit"
              className="px-6 py-1 bg-green-700 text-white rounded-lg"
            >
              Login
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-center text-white text-6xl">
            Your complete wander on HRIS.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Login;
