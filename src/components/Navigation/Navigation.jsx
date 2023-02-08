import React from 'react';
import NavIcon from '../../assets/nav-icon-home.svg';
import { IconContext } from 'react-icons';
import { GrNotification } from 'react-icons/gr';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { RxAvatar } from 'react-icons/rx';

const Navigation = () => {
  return (
    <nav className="bg-[#66A7A3] flex place-items-center justify-between px-12">
      <img src={NavIcon} alt="" className=" cursor-pointer" />
      <ul className="list-none flex space-x-4 pt-4 place-items-center">
        <li>
          <IconContext.Provider value={{ color: 'white', size: '32px' }}>
            <div className="relative cursor-pointer">
              <BiMessageSquareDetail />
              <div className="__notification w-4 h-4 bg-red-600 rounded-full absolute right-0 top-0"></div>
            </div>
          </IconContext.Provider>
        </li>
        <li>
          <IconContext.Provider value={{ color: 'white', size: '32px' }}>
            <div className="relative cursor-pointer">
              <GrNotification className="icon" />
              <div className="__notification w-4 h-4 bg-red-600 rounded-full absolute right-0 top-0"></div>
            </div>
          </IconContext.Provider>
        </li>
        <li>
          <IconContext.Provider value={{ color: 'white', size: '60px' }}>
            <div className="cursor-pointer">
              <RxAvatar />
            </div>
          </IconContext.Provider>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
