import React, { useState } from 'react';
import { HiSwitchHorizontal } from 'react-icons/hi';
import { BiLogOut } from 'react-icons/bi';
import { VscSettings } from 'react-icons/vsc';
import { HiKey } from 'react-icons/hi';
import { HiOutlineMoon } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { RxAvatar } from 'react-icons/rx';
import { Tooltip, Whisper } from 'rsuite';

const TooltipComponent = () => (
  <Whisper
    trigger="hover"
    placement="left"
    preventOverflow
    speaker={<Tooltip>Switch to Admin</Tooltip>}>
    <motion.button
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      className="bg-[#088585] hover:shadow-xl rounded-full w-6 h-6 col-span-1 flex justify-center items-center">
      <HiSwitchHorizontal className="text-white" />
    </motion.button>
  </Whisper>
);

const UserDropdown = ({ useLogin, user, userImg }) => {
  const [accountsIsOpen, setAccountsIsOpen] = useState(false);
  const [activeAccount, setActiveAccount] = useState(true);

  const { handleLogout } = useLogin();
  return (
    <div className="absolute bg-[#66A7A3] py-2  w-80 right-0 top-12 shadow-xl z-50 rounded-br-lg rounded-bl-lg">
      <ul>
        <li className="px-2 " onClick={() => setAccountsIsOpen(!accountsIsOpen)}>
          <div className=" px-2 py-5 rounded-md bg-[#177E8C] grid grid-cols-5 gap-2 justify-center items-center cursor-pointer bg-opacity-30">
            <span className="col-span-4 text-white flex items-center gap-2">
              {!userImg && <RxAvatar className="text-2xl" />}
              {userImg && <img src={userImg} className="w-8 h-8 rounded-full" />}
              {user}
            </span>
            <TooltipComponent />
          </div>
        </li>
        {accountsIsOpen && (
          <div>
            <li
              className={
                activeAccount
                  ? 'bg-slate-700 text-white px-5 py-2 hover:bg-[#177E8C] hover:bg-opacity-20 flex  items-center gap-2 text-xs cursor-pointer '
                  : 'px-5 py-2 hover:bg-[#177E8C] text-white  flex ml-5 items-center gap-2 text-xs cursor-pointer '
              }>
              <span>
                <RxAvatar />
              </span>
              Super Admin Mode
            </li>
            <li className="px-5 py-2 hover:bg-[#177E8C] text-white hover:bg-opacity-20  flex  items-center gap-2 text-xs cursor-pointer">
              <span>
                <RxAvatar />
              </span>
              Admin Mode
            </li>
            <li className="px-5 py-2 hover:bg-[#177E8C]  text-white hover:bg-opacity-20 flex items-center gap-2 text-xs cursor-pointer">
              <span>
                <RxAvatar />
              </span>
              Employee Mode
            </li>
          </div>
        )}

        <li className="px-2 py-2 hover:bg-[#177E8C] hover:bg-opacity-20 flex items-center gap-2 text-white cursor-pointer">
          <span className=" rounded-full bg-[#2B646C] bg-opacity-30 p-2">
            <HiKey />
          </span>
          Change Password
        </li>
        <li className="px-2 py-2 hover:bg-[#177E8C] hover:bg-opacity-20 flex items-center gap-2 text-white cursor-pointer">
          <span className=" rounded-full bg-[#2B646C] bg-opacity-30 p-2">
            <HiOutlineMoon />
          </span>
          Display & Access
        </li>

        <li className="px-2 py-2 hover:bg-[#177E8C] hover:bg-opacity-20 flex items-center gap-2 text-white cursor-pointer">
          <span className=" rounded-full bg-[#2B646C] bg-opacity-30 p-2">
            <VscSettings />
          </span>
          Settings
        </li>
        <li
          className="px-2 py-2 hover:bg-[#177E8C] hover:bg-opacity-20 flex items-center gap-2 text-white cursor-pointer"
          onClick={() => handleLogout()}>
          <span className=" rounded-full bg-[#2B646C] bg-opacity-30 p-2">
            <BiLogOut />
          </span>
          <span className="text-amber-400">Logout</span>
        </li>
      </ul>
    </div>
  );
};

export default UserDropdown;
