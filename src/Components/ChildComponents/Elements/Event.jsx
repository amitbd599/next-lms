import React from "react";
import { FaHistory, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const Event = ({ item }) => {
  return (
    <div className='itemContainer relative flex justify-center'>
      <div className=' px-4 py-4 shadow-lg hover:shadow-xl rounded-lg ease-in-out duration-300'>
        <div className='img__file overflow-hidden rounded-md  relative'>
          <img className='w-full object-cover' src={item.thumbnail} alt='' />
          <span className='bg-[#F16126] text-white text-sm px-3 py-1 rounded-full absolute z-10 bottom-2 right-2'>
            21 Jan, 2023
          </span>
        </div>
        <div className='text__file mt-5'>
          <div className='text-left px-4'>
            <Link
              to={"/"}
              className='text-[#333] text-[22px] font-semibold hover:text-[#F16126] ease-in-out duration-300 leading-7'
            >
              {item.title}
            </Link>
            <p className='text-sm mt-2'>Over {item.des} Courses</p>
            <div className='mt-3 mb-3'>
              <div className='flex gap-2 items-center'>
                <span className='text-[#F16126]'>
                  <FaHistory />
                </span>
                <span className='text-sm'>{item.time}</span>
              </div>
              <div className='flex gap-2 items-center mt-1'>
                <span className='text-[#F16126]'>
                  <FaMapMarkerAlt />
                </span>
                <span className='text-sm'>{item.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
