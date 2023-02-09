import { React, useState } from 'react';
import { IconContext } from 'react-icons/lib';
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi';
import { BsPlusSquareDotted } from 'react-icons/bs';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import HR from '../../assets/hr.jpg';
const Announcement = () => {
  //HR, IT, FINANCE, ACCOUNTING,ADMIN,EXECUTIVES
  const [name, setName] = useState('Full Name');
  const [datePosted, setDatePosted] = useState('Feb 7 20:24');
  const [hideAnnouncement, setHideAnnouncement] = useState(true);
  return (
    <div className="border-b-2">
      <div className="flex gap-3 justify-center my-4 text-white">
        <div className=" h-48 w-32 border-4 rounded-lg bg-emerald-700 relative cursor-pointer">
          <div className="absolute bottom-0 w-full text-center pb-4 pt-4 bg-sky-700 bg-opacity-30 rounded-md">
            <IconContext.Provider value={{ color: 'white', size: '60px' }}>
              <div className="cursor-pointer mx-auto w-max mb-4">
                <BsPlusSquareDotted />
              </div>
            </IconContext.Provider>
            <span>ADD TO YOUR STORY</span>
          </div>
        </div>
        <div
          className=" h-48 w-32 border-4 rounded-lg bg-emerald-700  relative cursor-pointer"
          onClick={() => {
            setName('Human Resource');
            setHideAnnouncement(false);
          }}>
          <div className="absolute bottom-0 w-full text-center py-2 bg-sky-700 bg-opacity-40 rounded-md">
            <span>HR</span>
          </div>
        </div>
        <div
          className=" h-48 w-32 border-4 rounded-lg bg-emerald-700  relative cursor-pointer "
          onClick={() => {
            setName('Human Resource');
            setHideAnnouncement(false);
          }}>
          <div className="absolute bottom-0 w-full text-center py-2 bg-sky-700 bg-opacity-40 rounded-md ">
            <span>IT</span>
          </div>
        </div>

        <div
          className=" h-48 w-32 border-4 rounded-lg bg-emerald-700 relative max-2xl:hidden cursor-pointer"
          onClick={() => {
            setName('Human Resource');
            setHideAnnouncement(false);
          }}>
          <div className="absolute bottom-0 w-full text-center py-2 bg-sky-700 bg-opacity-40 rounded-md">
            <span>Executives</span>
          </div>
        </div>

        <div className="grid place-items-center">
          <IconContext.Provider value={{ color: '#19647E', size: '60px' }}>
            <div className="cursor-pointer">
              <HiOutlineDotsCircleHorizontal />
            </div>
          </IconContext.Provider>
        </div>
      </div>
      <div className={hideAnnouncement ? 'hidden' : 'block text-white w-full justify-center'}>
        <div className=" h-[800px] w-full border-4 rounded-lg bg-emerald-700 relative ">
          <img src={HR} alt="" className="h-full w-full " />
          <div className="absolute top-0 w-full text-left py-2 px-8 bg-zinc-500 bg-opacity-40 flex justify-between rounded-md">
            <div>
              <span className="text-2xl">{name}</span> <br />
              <span className="text-l">Posted: {datePosted}</span>
            </div>
            <div>
              <IconContext.Provider value={{ color: 'white', size: '60px' }}>
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    setHideAnnouncement(true);
                  }}>
                  <AiOutlineCloseCircle />
                </div>
              </IconContext.Provider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
