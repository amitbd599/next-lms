import React from "react";
import { FaArrowRight } from "react-icons/fa";
import categoriesData from "../../Database/categoriesData";

const TrendingCategories = () => {
  return (
    <div className='trendingCategories pt-[100px]'>
      {/* Heading Text */}
      <div className='container mx-auto'>
        <div className='grid grid-cols-12 gap-5'>
          <div className='col-span-6'>
            <div>
              <div>
                <h2 className='text-[40px] relative font-semibold text-[#333] inline z-10'>
                  Trending Categories
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
                <span className='text-white'>All Categories</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Courses Info */}
      <div className='container mx-auto mt-14'>
        <div className='grid grid-cols-12 gap-5'>
          {categoriesData.slice(0, 4).map((item, index) => (
            <div key={index} className='col-span-3'>
              <div className='itemContainer relative flex justify-center'>
                <div className=' px-4 py-4 shadow-lg hover:shadow-xl rounded-lg ease-in-out duration-300'>
                  <div className='img__file overflow-hidden rounded-md  relative'>
                    <img src={item.thumbnail} alt='' />
                  </div>
                  <div className='text__file mt-5'>
                    <div className='text-center'>
                      <h2 className='text-[18px] font-semibold'>
                        {item.categories}
                      </h2>
                      <p className='text-sm'>Over {item.item} Courses</p>
                      <button className='bg-[#F1F1F1] hover:bg-[#F16126] hover:text-white ease-in-out duration-300  px-4 py-3 rounded-lg mt-3'>
                        View Course
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingCategories;
