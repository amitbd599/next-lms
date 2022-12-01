import React from "react";
import { FaArrowRight, FaBook, FaGlobeAmericas, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import coursesData from "../../Database/coursesData";

const FeatureCourses = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className='featureCourses pt-[100px]'>
      {/* Heading Text */}
      <div className='container mx-auto'>
        <div className='grid grid-cols-12 gap-5'>
          <div className='col-span-6'>
            <div>
              <div>
                <h2 className='text-[40px] relative font-semibold text-[#333] inline z-10'>
                  Featured Courses
                  <span>
                    <img
                      className='w-[140px]  absolute top-[4px] right-0 z-[-10]'
                      src='/Assets/Images/shape/shape_6.png'
                      alt=''
                    />
                  </span>
                </h2>

                <p className='text-[#77838F] mt-1'>
                  Discover Your Perfect Program In Our Courses.
                </p>
              </div>
            </div>
          </div>
          <div className='col-span-6'>
            <div className='flex justify-end mt-5'>
              <button className='bg-[#F16126] flex gap-2 items-center px-4 py-4 rounded-md'>
                <span className='text-white'>
                  <FaArrowRight />
                </span>
                <span className='text-white'>All Courses</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Courses Info */}
      <div className='container mx-auto mt-14'>
        <div className='slider'>
          <Slider {...settings}>
            {coursesData.map((item, index) => (
              <div key={index} className='slider__inner'>
                <div className='itemContainer relative flex justify-center'>
                  <div className=' px-4 py-4 shadow-lg hover:shadow-xl rounded-lg ease-in-out duration-300'>
                    <div className='img__file overflow-hidden rounded-md  relative'>
                      <img className='rounded-md' src={item.thumbnail} alt='' />
                    </div>
                    <div className='w-[80px] h-[80px] rounded-full flex items-center justify-center bg-[#F16126] absolute z-20 right-[35px] bottom-[195px]'>
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
                          <h4 className='text-[20px] font-medium'>
                            {item.author}
                          </h4>
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
                            <p className='text-[#77838F] text-sm'>
                              {item.authorPosition}
                            </p>
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
                            <span className='text-[#77838F] text-sm'>
                              Online Class
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default FeatureCourses;
