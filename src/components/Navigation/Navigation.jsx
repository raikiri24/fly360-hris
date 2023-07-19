import React, { useState } from 'react';
import { IoMdNotifications } from 'react-icons/io';
import { RxAvatar } from 'react-icons/rx';

import Logo from '../../assets/nav-icon-home.svg';
import { motion } from 'framer-motion';

import UserDropdown from '../Dropdowns/UserDropdown';

const Navigation = () => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

  return (
    <nav className="font-custom bg-[#66A7A3] px-10 py-4 ">
      <div className="flex justify-between items-center">
        <div className="text-white text-lg">
          <img src={Logo} alt="" className="h-12" />
        </div>

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
              <span className="text-white text-2xl">
                <RxAvatar />
              </span>
            </motion.button>
            {dropdownIsOpen && <UserDropdown />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
