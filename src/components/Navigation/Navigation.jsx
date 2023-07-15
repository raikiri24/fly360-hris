import React from 'react';
import { IoMdNotifications } from 'react-icons/io';
import { RxAvatar } from 'react-icons/rx';
import Logo from '../../assets/nav-icon-home.svg';

function Navigation() {
  return (
    <nav className="font-custom bg-[#66A7A3] px-20 py-4">
      <div className="flex justify-between items-center">
        <div className="text-white text-lg">
          <a href="/">
            <img src={Logo} alt="" className="h-12" />
          </a>
        </div>

        <div className="flex gap-10 items-center">
          <span className="text-white text-2xl">
            <IoMdNotifications />
          </span>
          <div className="flex gap-3 bg-[#00A59B] p-4 rounded-lg shadow-sm">
            <span className="text-white text-lg">
              <RxAvatar />
            </span>
            <span className="text-white text-sm">Paul Leandro Lanot</span>
          </div>
        </div>
      </div>
      <div>
        <ul className="flex gap-10 text-white text-lg">
          <a href="/login">
            <button className="hover:text-[#00A59B]">Login</button>
          </a>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
