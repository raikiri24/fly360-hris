import React from 'react';
import Logo from '../../assets/nav-icon-home.svg';
import { FaLocationDot } from 'react-icons/fa6';
import { ImFacebook2 } from 'react-icons/im';
import { TiSocialInstagram } from 'react-icons/ti';
import { ImYoutube2 } from 'react-icons/im';

const Footer = () => {
  return (
    <div className="bg-[#088585] mt-10 text-white p-10 ">
      <div>
        <div className="flex gap-20">
          <img src={Logo} alt="" className=" h-40" />
          <div className="flex flex-col">
            <div className="flex gap-40">
              <div className="flex justify-center items-center gap-5">
                <span>Stay Connected</span>
                <div>
                  <input
                    type="text"
                    placeholder="Email Address"
                    className="px-4 py-2 rounded-lg text-black outline-none"
                  />
                  <button className="px-4 py-2 bg-[#012D2D] -mx-5 rounded-tr-lg rounded-br-lg">
                    Sign-up
                  </button>
                </div>
              </div>
              <div>
                <span>Web Development</span>
                <ul className="ml-20">
                  <li>UI / UX Design</li>
                  <li>Front-end Development</li>
                  <li>Back-end Development</li>
                  <li>API Integration</li>
                </ul>
              </div>
              <div>
                <span>Projects</span>
                <ul className="ml-20">
                  <li>Document Tracking System</li>
                  <li>HRIS Management</li>
                  <li>Point of Sales System</li>
                </ul>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div className="mt-10 flex flex-col gap-8">
          <div className="flex gap-2 items-center justify-center">
            <FaLocationDot />
            <div className="flex gap-5 items-center">
              <span className="font-bold">Fly Studio</span>
              <span className=" text-sm text-gray-300">
                Block 4 Lot 48 Literature St. Teachers Village, Pasig, 1611 Metro Manila
              </span>
            </div>
          </div>
          <div>
            <div className="flex gap-10 justify-center items-center text-2xl">
              <span>
                <ImFacebook2 />
              </span>
              <span>
                <TiSocialInstagram />
              </span>
              <span>
                <ImYoutube2 />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
