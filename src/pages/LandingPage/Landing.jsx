import React from 'react';
import { HiChatBubbleLeftRight } from 'react-icons/hi2';
import { motion } from 'framer-motion';
import LandingImg from '../../assets/Fly360Landing.png';
import SideLanding from '../../assets/side-landing.png';
const Landing = () => {
  return (
    <div className="relative px-2 py-10">
      <div className=" rounded-lg h-full w-full bg-gray-100  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 shadow-md">
        <div className="flex justify-between py-6 px-10">
          <div className="py-20 gap-5 flex flex-col">
            <img src={LandingImg} alt="" />
            <p className="text-white drop-shadow-2xl text-xl font-bold italic text-center">
              YOUR COMPLETE WANDER ON HRIS
            </p>
            <div className="flex justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.0 }}
                whileTap={{ scale: 0.9 }}
                className="rounded-full border py-2 px-4 bg-[#177E8C]">
                <span className="text-white text-xl font-bold">Dashboard</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.0 }}
                whileTap={{ scale: 0.9 }}
                className="rounded-full border py-2 px-4 bg-[#8FBEBB]">
                <span className="text-white text-xl font-bold">Learn More</span>
              </motion.button>
            </div>
          </div>
          <div>
            <img src={SideLanding} alt="" />
          </div>
        </div>
      </div>
      <motion.button
        whileHover={{ scale: 1.0 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-10 right-10 h-16 w-16 bg-[#177E8C] rounded-full flex justify-center items-center text-white">
        <span className="text-white text-2xl">
          <HiChatBubbleLeftRight className="text-3xl" />
        </span>
      </motion.button>
    </div>
  );
};

export default Landing;
