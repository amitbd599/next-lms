import React from "react";
import { FaArrowRight, FaCalendarCheck, FaUserTie } from "react-icons/fa";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";

const Blog = ({ item }) => {
  return (
    <div className="itemContainer relative flex justify-center ">
      <div className=" w-full rounded-lg  px-4 py-4 duration-300 ease-in-out">
        <div className="img__file  relative w-full  rounded-md">
          <Fade>
            <div>
              <img src={item.thumbnail} alt="Next LMS" />
            </div>
          </Fade>

          <div className="text__file absolute  top-[50%] left-[50%] h-auto w-[calc(100%-25px)] translate-x-[-50%] rounded-lg bg-white  shadow-lg">
            <div className="py-6 px-5">
              <div className="flex justify-between  ">
                <Fade bottom>
                  <div className="flex items-baseline gap-1.5">
                    <span>
                      <FaUserTie className="text-base text-[#F16126]" />
                    </span>
                    <span className="text-sm">Admin</span>
                  </div>
                </Fade>
                <Fade bottom>
                  <div className="flex items-baseline gap-1.5">
                    <span>
                      <FaCalendarCheck className="text-base text-[#F16126]" />
                    </span>
                    <span className="text-sm">{item.date}</span>
                  </div>
                </Fade>
              </div>
              <div className="mt-4 ">
                <Fade bottom>
                  <h2 className="text-[18px] font-semibold leading-6 text-[#333] xl:text-[22px] xl:leading-7">
                    {item.title}
                  </h2>
                </Fade>
                <Fade bottom>
                  <p className="des mt-2 text-sm">
                    {item.des.slice(0, 55)} ...
                  </p>
                </Fade>
                <Fade bottom>
                  <div className="relative  mt-2 inline-block after:absolute after:left-0 after:bottom-[-5px] after:h-[3px] after:w-0 after:rounded-lg after:bg-[#F16126] after:duration-300 after:ease-in-out after:content-[''] after:hover:w-full">
                    <Link
                      to={"/blog-details"}
                      className="my__btn_2 relative flex items-center gap-2 text-base  font-semibold hover:text-[#F16126]"
                    >
                      Read More <FaArrowRight />
                    </Link>
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

export default Blog;
