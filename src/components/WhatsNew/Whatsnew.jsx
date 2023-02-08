import React from 'react';
import Survey from '../Survey/Survey';
import { IconContext } from 'react-icons/lib';
import { RxAvatar } from 'react-icons/rx';
import Announcement from '../Announcement/Announcement';
const Whatsnew = () => {
  return (
    <div className="w-9/12 mx-auto">
      <div className=" bg-white flex flex-col px-20 max-lg:px-0">
        <Announcement />
        <Survey />
        <div className="justify-center mt-6 py-3 flex gap-7">
          <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            <IconContext.Provider value={{ color: 'gray', size: '60px' }}>
              <div className="cursor-pointer">
                <RxAvatar />
              </div>
            </IconContext.Provider>
          </label>
          <input
            id="message"
            className="  border-x-zinc-500 block p-2.5 w-75 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 outline-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."></input>
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-bold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Whatsnew;
