import React from "react";
import { FaArrowRight, FaCalendarCheck, FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";

const Blog = ({ item }) => {
  return (
    <div className='itemContainer relative flex justify-center '>
      <div className=' px-4 py-4  rounded-lg ease-in-out duration-300 w-full'>
        <div className='img__file  rounded-md w-full  relative'>
          <img src='Assets/Images/blogs/Blog_1.png' alt='' />
          <div className='text__file shadow-lg  absolute top-[50%] rounded-lg left-[50%] translate-x-[-50%] bg-white w-[calc(100%-25px)]  h-auto'>
            <div className='py-6 px-5'>
              <div className='flex justify-between  '>
                <div className='flex gap-1.5 items-baseline'>
                  <span>
                    <FaUserTie className='text-[#F16126] text-base' />
                  </span>
                  <span className='text-sm'>Admin</span>
                </div>
                <div className='flex gap-1.5 items-baseline'>
                  <span>
                    <FaCalendarCheck className='text-[#F16126] text-base' />
                  </span>
                  <span className='text-sm'>{item.date}</span>
                </div>
              </div>
              <div className='mt-4 '>
                <h2 className='text-[#333] text-[22px] font-semibold leading-7'>
                  {item.title}
                </h2>
                <p className='des text-sm mt-2'>{item.des.slice(0, 55)} ...</p>
                <div className="relative  mt-2 inline-block after:content-[''] after:ease-in-out after:duration-300 after:absolute after:left-0 after:bottom-[-5px] after:w-0 after:hover:w-full after:h-[3px] after:bg-[#F16126] after:rounded-lg">
                  <button className='relative my__btn_2 flex gap-2 items-center text-base  font-semibold hover:text-[#F16126]'>
                    Read More <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
