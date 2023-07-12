import React from 'react';
import { BsShieldLockFill } from 'react-icons/bs';

const HRISNavigation = () => {
  return (
    <div className="mt-20 font-custom">
      <div className="grid grid-cols-9 gap-4 px-10">
        {/* RO */}
        <div className="bg-r-o bg-cover relative col-span-3">
          <div className="bg-opacity-40 py-40 items-center  flex justify-center bg-[#706E6E]">
            <span className="text-white font-bold">Recruitment and Onboarding</span>
          </div>
          <div className="top-0 absolute bg-black h-full w-full items-center flex justify-center opacity-60">
            <span className="text-white text-6xl">
              <BsShieldLockFill />
            </span>
          </div>
        </div>

        {/* CB */}
        <div className="bg-c-b bg-cover relative col-span-4">
          <div className="bg-opacity-40 py-40 items-center  flex justify-center bg-[#706E6E]">
            <span className="text-white font-bold">Compensation & Benefits</span>
          </div>
          <div className="top-0 absolute bg-black h-full w-full items-center flex justify-center opacity-60">
            <span className="text-white text-6xl">
              <BsShieldLockFill />
            </span>
          </div>
        </div>

        {/* PT */}
        <div className="bg-p-t bg-cover relative col-span-2">
          <div className="bg-opacity-40 py-40 items-center  flex justify-center bg-[#706E6E]">
            <span className="text-white font-bold">Payroll & Timekeeping</span>
          </div>
          <div className="top-0 absolute bg-black h-full w-full items-center flex justify-center opacity-60">
            <span className="text-white text-6xl">
              <BsShieldLockFill />
            </span>
          </div>
        </div>

        {/* TD  */}
        <div className="bg-t-d bg-cover relative col-span-4">
          <div className="bg-opacity-40 py-40 items-center  flex justify-center bg-[#706E6E]">
            <span className="text-white font-bold">Training & Development</span>
          </div>
          <div className="top-0 absolute bg-black h-full w-full items-center flex justify-center opacity-60">
            <span className="text-white text-6xl">
              <BsShieldLockFill />
            </span>
          </div>
        </div>

        {/* ER */}
        <div className="bg-e-r bg-cover relative col-span-2">
          <div className="bg-opacity-40 py-40 items-center  flex justify-center bg-[#706E6E]">
            <span className="text-white font-bold">Employee Relations</span>
          </div>

          <div className="  top-0  absolute bg-black h-full w-full items-center flex justify-center opacity-60">
            <span className="text-white text-6xl">
              <BsShieldLockFill />
            </span>
          </div>
        </div>

        {/* EE */}
        <div className="bg-e-e bg-cover relative col-span-3">
          <div className="bg-opacity-40 py-40 items-center  flex justify-center bg-[#706E6E]">
            <span className="text-white font-bold">Employee Engagements</span>
          </div>
          <div className="top-0 absolute bg-black h-full w-full items-center flex justify-center opacity-60">
            <span className="text-white text-6xl">
              <BsShieldLockFill />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRISNavigation;
