import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const StudentsSays = ({ item }) => {
  return (
    <div className="itemContainer relative mx-4 mt-16 flex justify-center">
      <div className="relative mb-[35px] w-full rounded-lg bg-[#fff] px-4 py-4  shadow-lg duration-300 ease-in-out">
        <div className="mt-8">
          <div className="px-4 py-2 sm:px-10">
            <div className="img__file absolute top-[-50px] left-[50%] flex translate-x-[-50%] justify-center">
              <img className="rounded-full" src={item.thumbnail} alt="" />
            </div>
            <p className="mt-10 text-justify text-sm font-light leading-relaxed text-[#77838F]">
              {item.des}
            </p>
            <h3 className="mt-4 text-lg  text-[#77838F]">{item.name}</h3>
            <p className="text-sm font-light leading-relaxed text-[#77838F]">
              {item.position}
            </p>
          </div>
        </div>
        <div>
          <FaQuoteLeft className="absolute top-[28px] text-[60px] text-[#F16126]" />
        </div>
      </div>
    </div>
  );
};

export default StudentsSays;
