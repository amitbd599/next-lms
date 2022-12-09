import React from "react";

const Categories = ({ item }) => {
  return (
    <div className="itemContainer relative flex justify-center">
      <div className=" rounded-lg px-4 py-4 shadow-lg duration-300 ease-in-out hover:shadow-xl">
        <div className="img__file relative overflow-hidden  rounded-md">
          <img src={item.thumbnail} alt="" />
        </div>
        <div className="text__file mt-5 mb-3">
          <div className="text-center">
            <h2 className="text-[18px] font-semibold">{item.categories}</h2>
            <p className="text-sm">Over {item.item} Courses</p>
            <button className="mt-3 rounded-lg bg-[#e5e7eb] px-4 py-3  duration-300 ease-in-out hover:bg-[#F16126] hover:text-white">
              View Course
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
