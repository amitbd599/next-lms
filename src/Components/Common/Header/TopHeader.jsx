import React from "react";
import {
  FaFolderOpen,
  FaUserTie,
  FaPhoneAlt,
  FaEdit,
  FaUserEdit,
} from "react-icons/fa";
const TopHeader = () => {
  return (
    <div className='top__header w-full h-[40px] bg-[#002147]'>
      <div className='container mx-auto   h-full flex justify-between items-center'>
        <div className='flex items-center h-full gap-4'>
          <div className='flex items-center gap-4'>
            <div className='flex gap-2 items-center'>
              <span>
                <FaFolderOpen className='text-[18px] text-primary' />
              </span>
              <span className='text-white text-[14px] font-normal'>
                Total Course: 23400
              </span>
            </div>
            <div className='flex items-center'>
              <span className='text-slate-400 text-[14px] mb-0.5'>|</span>
            </div>
            <div className='flex gap-2 items-center'>
              <span>
                <FaUserTie className='text-[18px] text-primary' />
              </span>
              <span className='text-white text-[14px] font-normal'>
                Total Teacher: 320
              </span>
            </div>
            <div className='flex items-center'>
              <span className='text-slate-400 text-[14px] mb-0.5'>|</span>
            </div>
            <div className='flex gap-2 items-center'>
              <span>
                <FaPhoneAlt className='text-[18px] text-primary' />
              </span>
              <span className='text-white text-[14px] font-normal'>
                Hot Line : +88 0181 234567
              </span>
            </div>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <div>
            <button className='flex items-center gap-1.5  ease-in-out duration-200 px-3 py-2 rounded-md'>
              <span>
                <FaEdit className='text-white ' />
              </span>
              <span className='text-white text-sm font-medium'>Register</span>
            </button>
          </div>
          <div>
            <button className='flex items-center gap-2 px-3 py-2 rounded-md'>
              <span>
                <FaUserEdit className='text-white' />
              </span>
              <span className='text-white text-sm font-medium'>Login</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
