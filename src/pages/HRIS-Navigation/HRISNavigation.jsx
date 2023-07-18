import React from 'react';
import { BsShieldLockFill } from 'react-icons/bs';
import { Tooltip, Whisper } from 'rsuite';
import { motion } from 'framer-motion';
import './index.css';

const TooltipComponent = ({ title, isLocked, bg }) => (
  <Whisper
    trigger="hover"
    followCursor
    preventOverflow
    speaker={
      <Tooltip className="px-5 py-5 flex flex-col gap-5">
        <p className="text-2xl text-center">
          <span className="flex justify-center">
            <BsShieldLockFill />
          </span>
          You don't have an access
        </p>
        <p className="text-center flex flex-col gap-5">
          <span> Unlock an additional way to be more convinient.</span>
          <span>Contact us to learn more</span>
        </p>
      </Tooltip>
    }>
    {isLocked && (
      <div className={`${bg} bg-cover relative cursor-pointer`}>
        <div className="bg-opacity-40 py-40 items-center  flex justify-center bg-[#706E6E]">
          <span className="text-white font-bold">{title}</span>
        </div>
        <div className="top-0 absolute bg-black h-full w-full items-center flex justify-center opacity-60">
          <span className="text-white text-6xl">
            <BsShieldLockFill />
          </span>
        </div>
      </div>
    )}
  </Whisper>
);

const HRISNavigation = () => {
  return (
    <div className="mt-20 font-custom select-none">
      <div className="grid grid-cols-9 gap-4 px-10">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="col-span-3 box ">
          <TooltipComponent title="Recruitment and Onboarding" isLocked={true} bg="bg-r-o" />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="col-span-4  box">
          <TooltipComponent title="Compensation & Benefits" isLocked={true} bg="bg-c-b" />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="col-span-2 box">
          <TooltipComponent title="Payroll & Timekeeping" isLocked={true} bg="bg-p-t" />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="col-span-4 box">
          <TooltipComponent title="Training & Development" isLocked={true} bg="bg-t-d" />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="col-span-2 box">
          <TooltipComponent title="Employee Relations" isLocked={true} bg="bg-e-r" />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="col-span-3 box">
          <TooltipComponent title="Employee Engagement" isLocked={true} bg="bg-e-e" />
        </motion.div>
      </div>
    </div>
  );
};

export default HRISNavigation;
