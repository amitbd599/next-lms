import React from "react";
import { FaHistory, FaMapMarkerAlt } from "react-icons/fa";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
const Event = ({ item }) => {
  return (
    <div className="itemContainer relative flex justify-center">
      <div className=" rounded-lg px-4 py-4 shadow-lg duration-300 ease-in-out hover:shadow-xl">
        <div className="img__file relative overflow-hidden  rounded-md">
          <img
            className="w-full object-cover"
            src={item.thumbnail}
            alt="Next LMS"
          />
          <Fade bottom>
            <span className="absolute bottom-2 right-2 z-10 rounded-full bg-[#F16126] px-3 py-1 text-sm text-white">
              21 Jan, 2023
            </span>
          </Fade>
        </div>
        <div className="text__file mt-5">
          <div className="px-4 text-left">
            <Fade bottom>
              <Link
                to={"/event-details"}
                className="text-[18px] font-semibold leading-7 text-[#333] duration-300 ease-in-out hover:text-[#F16126] xl:text-[22px]"
              >
                {item.title}
              </Link>
            </Fade>
            <Fade bottom>
              <p className="mt-2 text-sm">Over {item.des} Courses</p>
            </Fade>

            <div className="mt-3 mb-3">
              <Fade bottom>
                <div className="flex items-center gap-2">
                  <span className="text-[#F16126]">
                    <FaHistory />
                  </span>
                  <span className="text-sm">{item.time}</span>
                </div>
              </Fade>
              <Fade bottom>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-[#F16126]">
                    <FaMapMarkerAlt />
                  </span>
                  <span className="text-sm">{item.location}</span>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
