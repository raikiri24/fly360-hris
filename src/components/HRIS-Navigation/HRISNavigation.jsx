import React from 'react';
import { BsShieldLockFill } from 'react-icons/bs';
import { Tooltip, Whisper } from 'rsuite';

const ROComponent = ({ placement }) => (
  <Whisper
    trigger="hover"
    placement={placement}
    controlId={`control-id-${placement}`}
    speaker={
      <Tooltip className="px-5 py-5 flex flex-col gap-5">
        <p className="text-2xl text-center">
          <div className="flex justify-center">
            <BsShieldLockFill />
          </div>
          You don't have an access
        </p>
        <p className="text-center flex flex-col gap-5">
          <span> Unlock an additional way to be more convinient.</span>{' '}
          <span>Contact us to learn more</span>
        </p>
      </Tooltip>
    }>
    <div className="bg-r-o bg-cover relative col-span-3 cursor-pointer">
      <div className="bg-opacity-40 py-40 items-center  flex justify-center bg-[#706E6E]">
        <span className="text-white font-bold">Recruitment and Onboarding</span>
      </div>
      <div className="top-0 absolute bg-black h-full w-full items-center flex justify-center opacity-60">
        <span className="text-white text-6xl">
          <BsShieldLockFill />
        </span>
      </div>
    </div>
  </Whisper>
);
const CBComponent = ({ placement }) => (
  <Whisper
    trigger="hover"
    placement={placement}
    controlId={`control-id-${placement}`}
    speaker={
      <Tooltip className="px-5 py-5 flex flex-col gap-5">
        <p className="text-2xl text-center">
          <div className="flex justify-center">
            <BsShieldLockFill />
          </div>
          You don't have an access
        </p>
        <p className="text-center flex flex-col gap-5">
          <span> Unlock an additional way to be more convinient.</span>{' '}
          <span>Contact us to learn more</span>
        </p>
      </Tooltip>
    }>
    <div className="bg-c-b bg-cover relative col-span-4 cursor-pointer">
      <div className="bg-opacity-40 py-40 items-center  flex justify-center bg-[#706E6E]">
        <span className="text-white font-bold">Compensation & Benefits</span>
      </div>
      <div className="top-0 absolute bg-black h-full w-full items-center flex justify-center opacity-60">
        <span className="text-white text-6xl">
          <BsShieldLockFill />
        </span>
      </div>
    </div>
  </Whisper>
);
const PTComponent = ({ placement }) => (
  <Whisper
    trigger="hover"
    placement={placement}
    controlId={`control-id-${placement}`}
    speaker={
      <Tooltip className="px-5 py-5 flex flex-col gap-5">
        <p className="text-2xl text-center">
          <div className="flex justify-center">
            <BsShieldLockFill />
          </div>
          You don't have an access
        </p>
        <p className="text-center flex flex-col gap-5">
          <span> Unlock an additional way to be more convinient.</span>{' '}
          <span>Contact us to learn more</span>
        </p>
      </Tooltip>
    }>
    <div className="bg-p-t bg-cover relative col-span-2 cursor-pointer">
      <div className="bg-opacity-40 py-40 items-center  flex justify-center bg-[#706E6E]">
        <span className="text-white font-bold">Payroll & Timekeeping</span>
      </div>
      <div className="top-0 absolute bg-black h-full w-full items-center flex justify-center opacity-60">
        <span className="text-white text-6xl">
          <BsShieldLockFill />
        </span>
      </div>
    </div>
  </Whisper>
);
const TDComponent = ({ placement }) => (
  <Whisper
    trigger="hover"
    placement={placement}
    controlId={`control-id-${placement}`}
    speaker={
      <Tooltip className="px-5 py-5 flex flex-col gap-5">
        <p className="text-2xl text-center">
          <div className="flex justify-center">
            <BsShieldLockFill />
          </div>
          You don't have an access
        </p>
        <p className="text-center flex flex-col gap-5">
          <span> Unlock an additional way to be more convinient.</span>{' '}
          <span>Contact us to learn more</span>
        </p>
      </Tooltip>
    }>
    <div className="bg-t-d bg-cover relative col-span-4 cursor-pointer">
      <div className="bg-opacity-40 py-40 items-center  flex justify-center bg-[#706E6E]">
        <span className="text-white font-bold">Training & Development</span>
      </div>
      <div className="top-0 absolute bg-black h-full w-full items-center flex justify-center opacity-60">
        <span className="text-white text-6xl">
          <BsShieldLockFill />
        </span>
      </div>
    </div>
  </Whisper>
);
const ERComponent = ({ placement }) => (
  <Whisper
    trigger="hover"
    placement={placement}
    controlId={`control-id-${placement}`}
    speaker={
      <Tooltip className="px-5 py-5 flex flex-col gap-5">
        <p className="text-2xl text-center">
          <div className="flex justify-center">
            <BsShieldLockFill />
          </div>
          You don't have an access
        </p>
        <p className="text-center flex flex-col gap-5">
          <span> Unlock an additional way to be more convinient.</span>{' '}
          <span>Contact us to learn more</span>
        </p>
      </Tooltip>
    }>
    <div className="bg-e-r bg-cover relative col-span-2 cursor-pointer">
      <div className="bg-opacity-40 py-40 items-center  flex justify-center bg-[#706E6E]">
        <span className="text-white font-bold">Employee Relations</span>
      </div>

      <div className="  top-0  absolute bg-black h-full w-full items-center flex justify-center opacity-60">
        <span className="text-white text-6xl">
          <BsShieldLockFill />
        </span>
      </div>
    </div>
  </Whisper>
);
const EEComponent = ({ placement }) => (
  <Whisper
    trigger="hover"
    placement={placement}
    controlId={`control-id-${placement}`}
    speaker={
      <Tooltip className="px-5 py-5 flex flex-col gap-5">
        <p className="text-2xl text-center">
          <div className="flex justify-center">
            <BsShieldLockFill />
          </div>
          You don't have an access
        </p>
        <p className="text-center flex flex-col gap-5">
          <span> Unlock an additional way to be more convinient.</span>{' '}
          <span>Contact us to learn more</span>
        </p>
      </Tooltip>
    }>
    <div className="bg-e-e bg-cover relative col-span-3 cursor-pointer">
      <div className="bg-opacity-40 py-40 items-center  flex justify-center bg-[#706E6E]">
        <span className="text-white font-bold">Employee Engagements</span>
      </div>
      <div className="top-0 absolute bg-black h-full w-full items-center flex justify-center opacity-60">
        <span className="text-white text-6xl">
          <BsShieldLockFill />
        </span>
      </div>
    </div>
  </Whisper>
);

const HRISNavigation = () => {
  return (
    <div className="mt-20 font-custom">
      <div className="grid grid-cols-9 gap-4 px-10">
        {/* RO */}
        <ROComponent placement="right" />
        {/* CB */}
        <CBComponent placement="right" />
        {/* PT */}
        <PTComponent placement="left" />
        {/* TD  */}
        <TDComponent placement="right" />
        {/* ER */}
        <ERComponent placement="right" />
        {/* EE */}
        <EEComponent placement="left" />
      </div>
    </div>
  );
};

export default HRISNavigation;
