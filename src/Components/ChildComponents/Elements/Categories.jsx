import React from "react";

const Categories = ({ item }) => {
  return (
    <div className='itemContainer relative flex justify-center'>
      <div className=' px-4 py-4 shadow-lg hover:shadow-xl rounded-lg ease-in-out duration-300'>
        <div className='img__file overflow-hidden rounded-md  relative'>
          <img src={item.thumbnail} alt='' />
        </div>
        <div className='text__file mt-5 mb-3'>
          <div className='text-center'>
            <h2 className='text-[18px] font-semibold'>{item.categories}</h2>
            <p className='text-sm'>Over {item.item} Courses</p>
            <button className='bg-[#F1F1F1] hover:bg-[#F16126] hover:text-white ease-in-out duration-300  px-4 py-3 rounded-lg mt-3'>
              View Course
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
