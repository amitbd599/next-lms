import React from "react";
import {
  FaEnvelope,
  FaFacebookSquare,
  FaFax,
  FaHistory,
  FaInstagramSquare,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitterSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='footer bg-[#000000] w-full pt-20'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-12 gap-10'>
          <div className='col-span-4'>
            <div className='img__file'>
              <img
                className='w-[200px]'
                src='Assets/Images/logo_white.png'
                alt=''
              />
            </div>
            <div className='mt-4'>
              <p className='text-white text-sm leading-relaxed'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt fuga commodi, ea ullam illo soluta inventore!
                Praesentium doloribus laboriosam, ad soluta excepturi.
              </p>
            </div>
            <div className='mt-4'>
              <div className='flex gap-2'>
                <a href='#' className='p-0.5'>
                  <FaFacebookSquare className='text-[25px] text-white hover:text-[#F16126] ease-in-out duration-300' />
                </a>
                <a href='#' className='p-0.5'>
                  <FaTwitterSquare className='text-[25px] text-white hover:text-[#F16126] ease-in-out duration-300' />
                </a>
                <a href='#' className='p-0.5'>
                  <FaLinkedin className='text-[25px] text-white hover:text-[#F16126] ease-in-out duration-300' />
                </a>
                <a href='#' className='p-0.5'>
                  <FaInstagramSquare className='text-[25px] text-white hover:text-[#F16126] ease-in-out duration-300' />
                </a>
              </div>
            </div>
          </div>
          <div className='col-span-2'>
            <div className='mb-3'>
              <h3 className='text-white text-[22px] font-medium'>Categories</h3>
            </div>
            <div>
              <ul>
                <li>
                  <Link
                    className='py-1 block text-white hover:text-[#F16126] text-sm ease-in-out duration-300'
                    to={"/"}
                  >
                    All Courses
                  </Link>
                </li>
                <li>
                  <Link
                    className='py-1 block text-white hover:text-[#F16126] text-sm ease-in-out duration-300'
                    to={"/"}
                  >
                    Data Structure{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    className='py-1 block text-white hover:text-[#F16126] text-sm ease-in-out duration-300'
                    to={"/"}
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    className='py-1 block text-white hover:text-[#F16126] text-sm ease-in-out duration-300'
                    to={"/"}
                  >
                    Electrical Machines
                  </Link>
                </li>
                <li>
                  <Link
                    className='py-1 block text-white hover:text-[#F16126] text-sm ease-in-out duration-300'
                    to={"/"}
                  >
                    Software{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    className='py-1 block text-white hover:text-[#F16126] text-sm ease-in-out duration-300'
                    to={"/"}
                  >
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    className='py-1 block text-white hover:text-[#F16126] text-sm ease-in-out duration-300'
                    to={"/"}
                  >
                    Affiliates Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    className='py-1 block text-white hover:text-[#F16126] text-sm ease-in-out duration-300'
                    to={"/"}
                  >
                    Graphic Design
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className='col-span-3'>
            <div className='mb-3'>
              <h3 className='text-white text-[22px] font-medium'>Gallery</h3>
            </div>
            <div className='grid grid-cols-3 gap-2'>
              <span>
                <img
                  className='w-[100px]'
                  src='/Assets/Images/blogs/Blog_1.png'
                  alt=''
                />
              </span>
              <span>
                <img
                  className='w-[100px]'
                  src='/Assets/Images/blogs/Blog_2.png'
                  alt=''
                />
              </span>
              <span>
                <img
                  className='w-[100px]'
                  src='/Assets/Images/blogs/Blog_3.png'
                  alt=''
                />
              </span>
              <span>
                <img
                  className='w-[100px]'
                  src='/Assets/Images/blogs/Blog_4.png'
                  alt=''
                />
              </span>
              <span>
                <img
                  className='w-[100px]'
                  src='/Assets/Images/blogs/Blog_5.png'
                  alt=''
                />
              </span>
              <span>
                <img
                  className='w-24'
                  src='/Assets/Images/blogs/Blog_6.png'
                  alt=''
                />
              </span>
            </div>
          </div>
          <div className='col-span-3'>
            <div className='mb-3'>
              <h3 className='text-white text-[22px] font-medium'>Contact Us</h3>
            </div>
            <div>
              <ul>
                <li className='py-1 text-white text-sm flex gap-2 items-start mb-2'>
                  <span>
                    <FaPhoneAlt className='text-[#F16126] text-[18px]' />
                  </span>
                  <span>545 - 123 - 467</span>
                </li>
                <li className='py-1 text-white text-sm flex gap-2 items-start mb-2'>
                  <span>
                    <FaEnvelope className='text-[#F16126] text-[18px]' />
                  </span>
                  <span>info@nextlms.com</span>
                </li>
                <li className='py-1 text-white text-sm flex gap-2 items-start mb-2'>
                  <span>
                    <FaMapMarkerAlt className='text-[#F16126] text-[18px]' />
                  </span>
                  <span>New South London, UK</span>
                </li>
                <li className='py-1 text-white text-sm flex gap-2 items-start mb-2'>
                  <span>
                    <FaFax className='text-[#F16126] text-[18px]' />
                  </span>
                  <span>864-223-0252</span>
                </li>
                <li className='py-1 text-white text-sm flex gap-2 items-start mb-2'>
                  <span>
                    <FaHistory className='text-[#F16126] text-[18px]' />
                  </span>
                  <span> Sun - Fri 10:00AM - 9:30PM Sunday - CLOSED</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='container mx-auto border-t border-t-[#E9ECEF] mt-12 py-5'>
        <div className=' text-center'>
          <div>
            <p className='text-white text-xs'>
              © Copyrights 2022 NextLMS Designed By Amit Biswas. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
