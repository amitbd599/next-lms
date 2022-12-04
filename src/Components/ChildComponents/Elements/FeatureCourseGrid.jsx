import React from "react";
import { FaBook, FaGlobeAmericas, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const FeatureCourseGrid = ({ item }) => {
  return (
    <div className='itemContainer relative flex justify-center'>
      <div className=' px-4 py-4 shadow-lg hover:shadow-xl rounded-lg ease-in-out duration-300 w-full'>
        <div className='img__file overflow-hidden rounded-md  relative'>
          <img
            className='rounded-md w-full object-cover'
            src={item.thumbnail}
            alt=''
          />
        </div>
        <div className='w-[80px] h-[80px] rounded-full flex items-center justify-center bg-[#F16126] absolute z-20 right-[24px] bottom-[200px]'>
          <span className='text-white text-[22px] font-semibold'>
            ${item.price}
          </span>
        </div>

        <div className='intro__section mt-8 px-2'>
          <div className='flex gap-4'>
            <img
              className='rounded-full border-2 border-[#F16126] w-[60px] h-[60px]'
              src={item.authorImg}
              alt=''
            />
            <div className=''>
              <h4 className='text-[20px] font-medium'>{item.author}</h4>
              <div className='flex gap-2 items-center'>
                <div className='flex '>
                  <span>
                    <FaStar className='text-[#F7B519]' />
                  </span>
                  <span>
                    <FaStar className='text-[#F7B519]' />
                  </span>
                  <span>
                    <FaStar className='text-[#F7B519]' />
                  </span>
                  <span>
                    <FaStar className='text-[#F7B519]' />
                  </span>
                  <span>
                    <FaStar className='text-[#F7B519]' />
                  </span>
                </div>
                <div>
                  <p className='text-[#77838F]'>
                    {item.rate} ({item.totalRate})
                  </p>
                </div>
              </div>
              <div>
                <p className='text-[#77838F] text-sm'>{item.authorPosition}</p>
              </div>
            </div>
          </div>
        </div>
        <div className='details mt-3 mb-3 px-2'>
          <div>
            <Link
              to={"/"}
              className='text-[#333] text-[22px] font-semibold hover:text-[#F16126] ease-in-out duration-300'
            >
              {item.title}
            </Link>
            <p className='text-sm'>{item.tag}</p>
          </div>
          <div>
            <div className='flex items-center gap-4 mt-2'>
              <div className='item flex items-center gap-2'>
                <span>
                  <FaBook className='text-[#F16126]' />
                </span>
                <span className='text-[#77838F] text-sm'>
                  {item.lessons} Lessons
                </span>
              </div>
              <div className='item flex items-center gap-2'>
                <span>
                  <FaGlobeAmericas className='text-[#F16126]' />
                </span>
                <span className='text-[#77838F] text-sm'>Online Class</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCourseGrid;
