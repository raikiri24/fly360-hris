import React from 'react';
import Survey from '../Survey/Survey';
import { IconContext } from 'react-icons/lib';
import { RxAvatar } from 'react-icons/rx';
import Announcement from '../Announcement/Announcement';
import { ImAttachment } from 'react-icons/im';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiRepost } from 'react-icons/bi';
import { VscFeedback } from 'react-icons/vsc';
import { BsEmojiHeartEyes, BsEmojiLaughing, BsEmojiSunglasses } from 'react-icons/bs';
const Whatsnew = () => {
  return (
    <div className=" w-1/3 mx-auto">
      <div className=" bg-white flex flex-col px-20 max-lg:px-0 drop-shadow-lg rounded-lg">
        <Announcement />
        <Survey />
        <form action="">
          <div id="post" className="justify-center mt-6 py-3 flex gap-7">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              <IconContext.Provider value={{ color: '#3C6997', size: '60px' }}>
                <div className="cursor-pointer">
                  <RxAvatar />
                </div>
              </IconContext.Provider>
            </label>
            <div className="w-full relative">
              <input
                id="message"
                className="  border-x-zinc-500 block p-2.5 w-full h-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 outline-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your thoughts here..."></input>
              <IconContext.Provider value={{ color: 'gray', size: '30px' }}>
                <div className="cursor-pointer absolute right-4 top-5">
                  <ImAttachment />
                </div>
              </IconContext.Provider>
            </div>
            <button
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-bold hover:text-white py-2 px-4  hover:border-transparent rounded"
              type="submit">
              Publish
            </button>
          </div>
        </form>
      </div>
      <div className="mt-10" id="post-box">
        <div className="bg-white p-10 drop-shadow-lg rounded-lg">
          <IconContext.Provider value={{ color: '#3C6997', size: '60px' }}>
            <div className="cursor-pointer flex place-items-center gap-4">
              <RxAvatar />
              <div className="flex flex-col">
                <span className=" font-extrabold text-xl text-slate-700"> Paul Leandro Lanot</span>
                <span className=" font-extrabold text-sm text-slate-400">Just Now</span>
              </div>
            </div>
            <div id="content" className="text-lg ">
              <span>Hello</span>

              <div className=" border-b-4 border-t-4">
                <IconContext.Provider value={{ color: 'gray', size: '30px' }}>
                  <div className=" flex gap-10 justify-center">
                    <div className="flex place-items-center gap-2 cursor-pointer">
                      <AiOutlineHeart /> <span>React</span>
                    </div>
                    <button
                      className=" bg-transparent hover:bg-blue-500 text-blue-700 font-bold hover:text-white py-1 px-3  hover:border-transparent rounded"
                      type="submit">
                      Feedback
                    </button>
                    <button
                      className=" bg-transparent hover:bg-blue-500 text-blue-700 font-bold hover:text-white py-1 px-3  hover:border-transparent rounded"
                      type="submit">
                      Repost
                    </button>
                  </div>
                </IconContext.Provider>
              </div>
              <div className="flex mt-2 py-6">
                <div className="w-full relative">
                  <input
                    id="message"
                    className="  border-x-zinc-500 block p-2.5 w-full h-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 outline-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write your thoughts here..."></input>
                </div>
              </div>
            </div>
          </IconContext.Provider>
        </div>
      </div>
      <div className="mt-10" id="post-box">
        <div className="bg-white p-10 drop-shadow-lg rounded-lg">
          <IconContext.Provider value={{ color: '#3C6997', size: '60px' }}>
            <div className="cursor-pointer flex place-items-center gap-4">
              <RxAvatar />
              <div className="flex flex-col">
                <span className=" font-extrabold text-xl text-slate-700"> Paul Leandro Lanot</span>
                <span className=" font-extrabold text-sm text-slate-400">Just Now</span>
              </div>
            </div>
            <div id="content" className="text-lg relative">
              <span>Hello</span>

              <div className=" border-b-4 border-t-4">
                <div className=" flex gap-10 justify-center">
                  <IconContext.Provider value={{ color: 'gray', size: '30px' }}>
                    <button
                      className="flex place-items-center gap-2 bg-transparent hover:bg-blue-500  font-bold hover:text-white py-1 px-3  hover:border-transparent rounded"
                      type="submit">
                      <AiOutlineHeart />
                      React
                      <div className="flex gap-6 rounded-full border px-6 py-2 absolute bottom-36 left-4 bg-sky-500 ">
                        <IconContext.Provider value={{ color: 'white', size: '20px' }}>
                          <div className="hover:bg-slate-800 rounded-full p-2">
                            <AiOutlineHeart />
                          </div>
                          <div className="hover:bg-slate-800 rounded-full p-2">
                            <BsEmojiHeartEyes />
                          </div>
                          <div className="hover:bg-slate-800 rounded-full p-2">
                            <BsEmojiLaughing />
                          </div>
                          <div className="hover:bg-slate-800 rounded-full p-2">
                            <BsEmojiSunglasses />
                          </div>
                        </IconContext.Provider>
                      </div>
                    </button>
                  </IconContext.Provider>
                  <IconContext.Provider value={{ color: 'gray', size: '30px' }}>
                    <button
                      className="flex place-items-center gap-2 bg-transparent hover:bg-blue-500  font-bold hover:text-white py-1 px-3  hover:border-transparent rounded"
                      type="submit">
                      <VscFeedback /> Feedback
                    </button>
                  </IconContext.Provider>
                  <IconContext.Provider value={{ color: 'gray', size: '30px' }}>
                    <button
                      className=" flex place-items-center gap-2 bg-transparent hover:bg-blue-500  font-bold hover:text-white py-1 px-3  hover:border-transparent rounded"
                      type="submit">
                      <BiRepost /> Repost
                    </button>
                  </IconContext.Provider>
                </div>
              </div>
              <div className="flex mt-2 py-6">
                <div className="w-full relative">
                  <input
                    id="message"
                    className="  border-x-zinc-500 block p-2.5 w-full h-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 outline-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write your thoughts here..."></input>
                </div>
              </div>
            </div>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default Whatsnew;
