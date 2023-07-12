import React from 'react';
import { IoMdNotifications } from 'react-icons/io';
import { RxAvatar } from 'react-icons/rx';
import Logo from '../../assets/nav-icon-home.svg';

const Navigation = () => {
  return (
    <nav className="font-custom bg-[#66A7A3] px-10 py-4">
      <div className="flex justify-between items-center">
        <div className="text-white text-lg">
          <img src={Logo} alt="" className="h-12" />
        </div>

        <div className="flex gap-10 items-center">
          <span className="text-white text-2xl">
            <IoMdNotifications />
          </span>
          <div className="flex gap-3 bg-[#00A59B] p-4 rounded-lg shadow-sm cursor-pointer relative">
            <span className="text-white text-lg">
              <RxAvatar />
            </span>
            <span className="text-white text-sm">Paul Leandro Lanot</span>
            <div className="absolute bg-white py-2  w-60 -left-14 top-14 shadow-xl z-50">
              <ul>
                <li className="px-6 py-2 hover:bg-gray-700 hover:text-white">Paul Leandro Lanot</li>
                <li className="px-6 py-2 hover:bg-gray-700 hover:text-white">Logout</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
