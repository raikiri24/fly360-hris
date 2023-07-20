import React, { useEffect, useState } from 'react';
import { IoMdNotifications } from 'react-icons/io';
import { RxAvatar } from 'react-icons/rx';
import { AiOutlineDown } from 'react-icons/ai';
import { useLogin } from '../../context/LoginContext';
import Logo from '../../assets/nav-icon-home.svg';
import { motion } from 'framer-motion';

import UserDropdown from '../Dropdowns/UserDropdown';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const { isAuthenticated, userName, userImg } = useLogin();

  return (
    <nav className="font-custom bg-[#66A7A3] px-10 py-4 ">
      <div className="flex justify-between items-center">
        <div className="text-white text-lg">
          <img src={Logo} alt="" className="h-12" />
        </div>

        {isAuthenticated() && (
          <div className="flex gap-10 items-center justify-center">
            <motion.button
              whileHover={{ scale: 1.0 }}
              whileTap={{ scale: 0.9 }}
              className="rounded-lg shadow-sm cursor-pointer relative">
              <span className="text-white text-2xl">
                <IoMdNotifications />
              </span>
              <div className=" rounded-full h-2 w-2 bg-red-800 absolute top-0 right-0"></div>
            </motion.button>

            <div className="relative flex justify-center">
              <motion.button
                whileHover={{ scale: 1.0 }}
                whileTap={{ scale: 0.9 }}
                className="rounded-lg shadow-sm cursor-pointer"
                onClick={() => setDropdownIsOpen(!dropdownIsOpen)}>
                <div className="text-white text-2xl relative">
                  {!userImg && <RxAvatar />}
                  {userImg && <img src={userImg} className=" h-8 w-8 rounded-full" />}
                  <div>
                    <AiOutlineDown className="border-2 border-gray-700 bg-gray-600 rounded-full text-base absolute bottom-0 right-0" />
                  </div>
                </div>
              </motion.button>
              {dropdownIsOpen && (
                <UserDropdown useLogin={useLogin} user={userName} userImg={userImg} />
              )}
            </div>
          </div>
        )}

        {!isAuthenticated() && (
          <Link to="/login" className="text-white">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
