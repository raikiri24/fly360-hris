import React from 'react';
import { HiChatBubbleLeftRight } from 'react-icons/hi2';
import { motion } from 'framer-motion';
const Landing = () => {
  return (
    <div className="relative">
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
