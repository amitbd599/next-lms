import React from "react";
import { FaCalendarCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import blogData from "../../Database/blogData";
const Sidebar = () => {
  return (
    <div className='sidebar'>
      {/* Categories */}
      <div className='categories border px-6 py-5 rounded-lg'>
        <div>
          <div>
            <h2 className='text-[30px] inline-block font-semibold relative after:absolute after:content-[""] after:w-full after:h-[4px] after:bg-[#F16126] after:bottom-[-4px] after:left-0 after:rounded-lg'>
              Categories
            </h2>
          </div>
          <div className='mt-6'>
            <ul>
              <li className='border-b mb-3 pb-1'>
                <Link
                  className='py-1 block hover:text-[#F16126] ease-in-out duration-200'
                  to={"/"}
                >
                  Business Studies (3)
                </Link>
              </li>
              <li className='border-b mb-3 pb-1'>
                <Link
                  className='py-1 block hover:text-[#F16126] ease-in-out duration-200'
                  to={"/"}
                >
                  Computer Engineering (3)
                </Link>
              </li>
              <li className='border-b mb-3 pb-1'>
                <Link
                  className='py-1 block hover:text-[#F16126] ease-in-out duration-200'
                  to={"/"}
                >
                  Medical & Health (3)
                </Link>
              </li>
              <li className='border-b mb-3 pb-1'>
                <Link
                  className='py-1 block hover:text-[#F16126] ease-in-out duration-200'
                  to={"/"}
                >
                  Software (3)
                </Link>
              </li>
              <li className='border-b mb-3 pb-1'>
                <Link
                  className='py-1 block hover:text-[#F16126] ease-in-out duration-200'
                  to={"/"}
                >
                  Web Development (3)
                </Link>
              </li>
              <li>
                <Link
                  className='py-1 block hover:text-[#F16126] ease-in-out duration-200'
                  to={"/"}
                >
                  Uncategorized (3)
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Latest Post*/}
      <div className='categories border px-6 py-5 rounded-lg mt-10'>
        <div>
          <div>
            <h2 className='text-[30px] inline-block font-semibold relative after:absolute after:content-[""] after:w-full after:h-[4px] after:bg-[#F16126] after:bottom-[-4px] after:left-0 after:rounded-lg'>
              Latest Post
            </h2>
          </div>
          <div className='mt-8'>
            <ul>
              {blogData.slice(0, 5).map((item, index) => (
                <li key={index} className='mb-6'>
                  <div className='flex gap-3 w-full'>
                    <div className='w-4/12'>
                      <img
                        className='w-[120px] rounded-lg'
                        src={item.thumbnail}
                        alt=''
                      />
                    </div>
                    <div className='w-8/12'>
                      <Link
                        to={"/"}
                        className='text-[16px] text-[#333] leading-[20px] font-medium hover:text-[#F16126] ease-in-out duration-300'
                      >
                        {item.title}
                      </Link>
                      <div className='flex gap-2 items-center mt-1'>
                        <span>
                          <FaCalendarCheck />
                        </span>
                        <span className='font-normal text-sm'>{item.date}</span>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Tag */}
      <div className='categories border px-6 py-5 rounded-lg mt-10'>
        <div>
          <div>
            <h2 className='text-[30px] inline-block font-semibold relative after:absolute after:content-[""] after:w-full after:h-[4px] after:bg-[#F16126] after:bottom-[-4px] after:left-0 after:rounded-lg'>
              Tag
            </h2>
          </div>
          <div className='mt-8'>
            <div className=''>
              <ul>
                <li className='inline-block mb-7 mr-2'>
                  <Link
                    className='border text-[15px] border-[#E9ECEF] px-3 py-2 rounded-md hover:bg-[#F16126] hover:text-white hover:border-[#F16126] ease-in-out duration-300'
                    to={"/"}
                  >
                    JavaScript
                  </Link>
                </li>
                <li className='inline-block mb-7 mr-2'>
                  <Link
                    className='border text-[15px] border-[#E9ECEF] px-3 py-2 rounded-md hover:bg-[#F16126] hover:text-white hover:border-[#F16126] ease-in-out duration-300'
                    to={"/"}
                  >
                    PHP
                  </Link>
                </li>
                <li className='inline-block mb-7 mr-2'>
                  <Link
                    className='border text-[15px] border-[#E9ECEF] px-3 py-2 rounded-md hover:bg-[#F16126] hover:text-white hover:border-[#F16126] ease-in-out duration-300'
                    to={"/"}
                  >
                    Java
                  </Link>
                </li>
                <li className='inline-block mb-7 mr-2'>
                  <Link
                    className='border text-[15px] border-[#E9ECEF] px-3 py-2 rounded-md hover:bg-[#F16126] hover:text-white hover:border-[#F16126] ease-in-out duration-300'
                    to={"/"}
                  >
                    TypeScript
                  </Link>
                </li>
                <li className='inline-block mb-7 mr-2'>
                  <Link
                    className='border text-[15px] border-[#E9ECEF] px-3 py-2 rounded-md hover:bg-[#F16126] hover:text-white hover:border-[#F16126] ease-in-out duration-300'
                    to={"/"}
                  >
                    Marketing
                  </Link>
                </li>
                <li className='inline-block mb-7 mr-2'>
                  <Link
                    className='border text-[15px] border-[#E9ECEF] px-3 py-2 rounded-md hover:bg-[#F16126] hover:text-white hover:border-[#F16126] ease-in-out duration-300'
                    to={"/"}
                  >
                    Graphic Design
                  </Link>
                </li>
                <li className='inline-block mb-7 mr-2'>
                  <Link
                    className='border text-[15px] border-[#E9ECEF] px-3 py-2 rounded-md hover:bg-[#F16126] hover:text-white hover:border-[#F16126] ease-in-out duration-300'
                    to={"/"}
                  >
                    Agency
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
