import React from "react";
import {
  FaBuffer,
  FaGraduationCap,
  FaSearch,
  FaSquareRootAlt,
} from "react-icons/fa";
import CountUp from "react-countup";
import { Fade } from "react-reveal";

const HeroSection = () => {
  return (
    <div className='hero__section'>
      <div className='container mx-auto relative'>
        <div className='grid grid-cols-12 gap-4'>
          <div className='col-span-6'>
            <div className='leftSide'>
              <Fade>
                <div className='flex gap-8'>
                  <div className='item flex items-center gap-2'>
                    <span>
                      <FaGraduationCap className='text-primary text-[20px]' />
                    </span>
                    <span className='text-white text-[14px]'>Transmission</span>
                  </div>
                  <div className='item flex items-center gap-2'>
                    <span>
                      <FaBuffer className='text-primary text-[20px]' />
                    </span>
                    <span className='text-white text-[14px]'>Equivalent</span>
                  </div>
                  <div className='item flex items-center gap-2'>
                    <span>
                      <FaSquareRootAlt className='text-primary text-[20px]' />
                    </span>
                    <span className='text-white text-[14px]'>Education</span>
                  </div>
                </div>
              </Fade>
              <Fade>
                <div className='mt-5 relative '>
                  <h2 className='text-[60px] text-white font-bold leading-[80px] relative z-10'>
                    Growth You Career With Complete Courses
                  </h2>
                  <span className='absolute top-[20px] right-[50px] z-[-0]'>
                    <img src='/Assets/Images/shape/shape_6.png' alt='' />
                  </span>
                </div>
              </Fade>
              <Fade>
                <div className='relative flex mt-5'>
                  <div className='item'>
                    <img
                      className='w-[80px] h-[80px] relative top-0 left-0 border-4 border-[#F16126] rounded-full'
                      src='Assets/Images/profile/Ellipse_1.png'
                      alt=''
                    />
                  </div>
                  <div className='item'>
                    <img
                      className='w-[80px] h-[80px] relative top-0 left-[-30px] border-4 border-[#F16126] rounded-full'
                      src='Assets/Images/profile/Ellipse_2.png'
                      alt=''
                    />
                  </div>
                  <div className='item'>
                    <img
                      className='w-[80px] h-[80px] relative top-0 left-[-60px] border-4 border-[#F16126] rounded-full'
                      src='Assets/Images/profile/Ellipse_3.png'
                      alt=''
                    />
                  </div>
                  <div className='item'>
                    <img
                      className='w-[80px] h-[80px] relative top-0 left-[-90px] border-4 border-[#F16126] rounded-full'
                      src='Assets/Images/profile/Ellipse_4.png'
                      alt=''
                    />
                  </div>
                  <div className='item'>
                    <img
                      className='w-[80px] h-[80px] relative top-0 left-[-120px] border-4 border-[#F16126] rounded-full'
                      src='Assets/Images/profile/Ellipse_5.png'
                      alt=''
                    />
                  </div>
                  <div className='item'>
                    <img
                      className='w-[80px] h-[80px] relative top-0 left-[-150px] border-4 border-[#F16126] rounded-full'
                      src='Assets/Images/profile/Ellipse_6.png'
                      alt=''
                    />
                  </div>
                </div>
              </Fade>
            </div>
          </div>
          <div className='col-span-6 ml-8'>
            <div className='rightSide relative'>
              <div className=' shape mt-10'>
                <Fade>
                  <div className='  h-[80px] flex justify-center'>
                    <div className='item w-[80px] h-[80px] '>
                      <img
                        className=' border-4 border-[#F16126] rounded-full'
                        src='Assets/Images/shape/shape_1.png'
                        alt=''
                      />
                    </div>
                    <div className='item w-[80px] h-[80px]   ml-[-20px]'>
                      <img
                        className=' border-4 border-[#F16126] rounded-full'
                        src='Assets/Images/shape/shape_2.png'
                        alt=''
                      />
                    </div>
                    <div className='item w-[80px] h-[80px]  ml-[-20px]'>
                      <img
                        className=' border-4 border-[#F16126] rounded-full'
                        src='Assets/Images/shape/shape_3.png'
                        alt=''
                      />
                    </div>
                    <div className='item w-[80px] h-[80px]  ml-[-20px]'>
                      <img
                        className=' border-4 border-[#F16126] rounded-full'
                        src='Assets/Images/shape/shape_4.png'
                        alt=''
                      />
                    </div>
                    <div className='item w-[80px] h-[80px]  ml-[-20px]'>
                      <img
                        className=' border-4 border-[#fff] rounded-full'
                        src='Assets/Images/shape/shape_5.png'
                        alt=''
                      />
                    </div>
                  </div>
                </Fade>
              </div>
              <Fade>
                <div className='flex justify-center gap-4 mt-6'>
                  <div className='item'>
                    <div className='text-right'>
                      <h2 className='text-white text-[40px] font-semibold'>
                        <CountUp delay={0} start={21} end={2617} />
                      </h2>
                      <span className='text-white text-sm'>
                        Enrolled Students
                      </span>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='text-right'>
                      <h2 className='text-white text-[40px] font-semibold'>
                        <CountUp delay={0} start={21} end={902} />
                      </h2>
                      <span className='text-white text-sm'>Online Course</span>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='text-right'>
                      <h2 className='text-white text-[40px] font-semibold'>
                        <CountUp delay={0} start={21} end={630} />K
                      </h2>
                      <span className='text-white text-sm'>
                        Platform Followers
                      </span>
                    </div>
                  </div>
                </div>
              </Fade>

              <div className='mt-6'>
                <Fade>
                  <div className='input__search flex justify-center relative'>
                    <input
                      className='h-[64px] px-6 py-4 w-[430px] rounded-md border-2 border-white bg-transparent text-white'
                      type='text'
                      placeholder='Enter Course Name'
                    />
                    <button className='absolute top-[7px] right-[53px] rounded-md bg-[#F16126] h-[50px] flex gap-2 text-white items-center px-4 py-2'>
                      <span>
                        <FaSearch />
                      </span>
                      <span>Search</span>
                    </button>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
