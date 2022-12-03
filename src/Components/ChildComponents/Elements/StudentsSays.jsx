import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const StudentsSays = ({ item }) => {
  return (
    <div className='itemContainer relative flex justify-center mt-16 mx-4'>
      <div className='relative px-4 py-4 shadow-lg rounded-lg ease-in-out duration-300  w-full bg-[#fff] mb-[35px]'>
        <div className='mt-8'>
          <div className='px-10 py-2'>
            <div className='img__file flex justify-center absolute top-[-50px] left-[50%] translate-x-[-50%]'>
              <img className='rounded-full' src={item.thumbnail} alt='' />
            </div>
            <p className='mt-10 text-sm text-justify font-light leading-relaxed text-[#77838F]'>
              {item.des}
            </p>
            <h3 className='mt-4 text-lg  text-[#77838F]'>{item.name}</h3>
            <p className='text-sm font-light leading-relaxed text-[#77838F]'>
              {item.position}
            </p>
          </div>
        </div>
        <div>
          <FaQuoteLeft className='absolute top-[28px] text-[60px] text-[#F16126]' />
        </div>
      </div>
    </div>
  );
};

export default StudentsSays;
