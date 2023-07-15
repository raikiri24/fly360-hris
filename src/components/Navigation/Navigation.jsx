import React, { useState } from 'react';
import { IoMdNotifications } from 'react-icons/io';
import { RxAvatar } from 'react-icons/rx';
import { HiSwitchHorizontal } from 'react-icons/hi';
import { BiLogOut } from 'react-icons/bi';
import { VscSettings } from 'react-icons/vsc';
import Logo from '../../assets/nav-icon-home.svg';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const [accountsIsOpen, setAccountsIsOpen] = useState(false);
  return (
    <nav className="font-custom bg-[#66A7A3] px-10 py-4 ">
      <div className="flex justify-between items-center">
        <div className="text-white text-lg">
          <img src={Logo} alt="" className="h-12" />
        </div>

        <div className="flex gap-10 items-center">
          <motion.button
            whileHover={{ scale: 1.0 }}
            whileTap={{ scale: 0.9 }}
            className="rounded-lg shadow-sm cursor-pointer relative">
            <span className="text-white text-2xl">
              <IoMdNotifications />
            </span>
            <div className=" rounded-full h-2 w-2 bg-red-800 absolute top-0 right-0"></div>
          </motion.button>

          <div className="  relative">
            <motion.button
              whileHover={{ scale: 1.0 }}
              whileTap={{ scale: 0.9 }}
              className="flex gap-3 bg-[#00A59B] p-4 rounded-lg shadow-sm cursor-pointer"
              onClick={() => setDropdownIsOpen(!dropdownIsOpen)}>
              <span className="text-white text-lg">
                <RxAvatar />
              </span>
              <span className="text-white text-sm">Paul Leandro Lanot</span>
            </motion.button>

            {dropdownIsOpen && (
              <div className="absolute bg-white py-2  w-48 left-0 top-12 shadow-xl z-50 rounded-br-lg rounded-bl-lg">
                <ul>
                  <li
                    className="px-2 py-2 grid grid-cols-5 gap-2 justify-center items-center cursor-pointer"
                    onClick={() => setAccountsIsOpen(!accountsIsOpen)}>
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-[#088585] hover:shadow-xl rounded-full w-6 h-6 col-span-1 flex justify-center items-center">
                      <HiSwitchHorizontal className="text-white" />
                    </motion.button>
                    <span className="col-span-4">Switch Account</span>
                  </li>
                  {accountsIsOpen && (
                    <div>
                      <li className="px-2 py-2 hover:bg-gray-700 hover:text-white flex ml-5 items-center gap-2 text-xs cursor-pointer">
                        <span>
                          <RxAvatar />
                        </span>
                        Paul Leandro Lanot
                      </li>
                      <li className="px-2 py-2 hover:bg-gray-700 hover:text-white flex ml-5 items-center gap-2 text-xs cursor-pointer">
                        <span>
                          <RxAvatar />
                        </span>
                        Paul Leandro Lanot
                      </li>
                    </div>
                  )}

                  <li className="px-2 py-2 hover:bg-gray-200 flex items-center gap-2 text-teal-900 cursor-pointer">
                    <VscSettings />
                    Settings
                  </li>
                  <li className="px-2 py-2 hover:bg-gray-200  flex items-center gap-2 text-amber-700 cursor-pointer">
                    <BiLogOut />
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
