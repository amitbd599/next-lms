import React from "react";
import { Link } from "react-router-dom";

const IntroSection = (item) => {
  return (
    <div className='introSection w-full h-full'>
      <div className='container mx-auto'>
        <div className='relative '>
          <div className='flex items-center justify-center'>
            <div>
              <div>
                <h2 className='text-white font-semibold text-[48px]'>
                  {item.title}
                </h2>
              </div>
              <div className='text-center'>
                <Link
                  className='text-white hover:text-[#F16126] ease-in-out duration-200'
                  to={"/"}
                >
                  Home
                </Link>
                <span className='text-white'> / </span>{" "}
                <span className='text-white'>{item.title}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
