import React from "react";
import { FaBook, FaGlobeAmericas, FaStar } from "react-icons/fa";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";

const FeatureCourseGrid = ({ item }) => {
  return (
    <div className="itemContainer relative flex justify-center">
      <div className=" w-full rounded-lg px-4 py-4 shadow-lg duration-300 ease-in-out hover:shadow-xl">
        <div className="img__file relative overflow-hidden  rounded-md">
          <img
            className="w-full rounded-md object-cover"
            src={item.thumbnail}
            alt="Next LMS"
          />
        </div>
        <Fade>
          <div className="absolute right-[24px] bottom-[200px] z-20 flex h-[80px] w-[80px] items-center justify-center rounded-full bg-[#F16126]">
            <span className="text-[22px] font-semibold text-white">
              ${item.price}
            </span>
          </div>
        </Fade>

        <div className="intro__section mt-8 px-2">
          <div className="flex gap-4">
            <Fade bottom>
              <img
                className="h-[60px] w-[60px] rounded-full border-2 border-[#F16126]"
                src={item.authorImg}
                alt="Next LMS"
              />
            </Fade>

            <div>
              <Fade bottom>
                <h4 className="text-[16px] font-medium xl:text-[20px]">
                  {item.author}
                </h4>
              </Fade>
              <Fade bottom>
                <div className="flex items-center gap-2">
                  <div className="flex ">
                    <span>
                      <FaStar className="text-[#F7B519]" />
                    </span>
                    <span>
                      <FaStar className="text-[#F7B519]" />
                    </span>
                    <span>
                      <FaStar className="text-[#F7B519]" />
                    </span>
                    <span>
                      <FaStar className="text-[#F7B519]" />
                    </span>
                    <span>
                      <FaStar className="text-[#F7B519]" />
                    </span>
                  </div>
                  <div>
                    <p className="text-[#77838F]">
                      {item.rate} ({item.totalRate})
                    </p>
                  </div>
                </div>
              </Fade>

              <div>
                <Fade bottom>
                  <p className="text-sm text-[#77838F] lg:text-xs xl:text-sm">
                    {item.authorPosition}
                  </p>
                </Fade>
              </div>
            </div>
          </div>
        </div>

        <div className="details mt-3 mb-3 px-2">
          <div>
            <Fade bottom>
              <Link
                to={"/course-details"}
                className="text-[18px] font-semibold text-[#333] duration-300 ease-in-out hover:text-[#F16126] xl:text-[22px]"
              >
                {item.title}
              </Link>
            </Fade>
            <Fade bottom>
              <p className="text-sm">{item.tag}</p>
            </Fade>
          </div>
          <div>
            <div className="mt-2 flex items-center gap-4">
              <Fade bottom>
                <div className="item flex items-center gap-2">
                  <span>
                    <FaBook className="text-[#F16126]" />
                  </span>
                  <span className="text-sm text-[#77838F]">
                    {item.lessons} Lessons
                  </span>
                </div>
              </Fade>
              <Fade bottom>
                <div className="item flex items-center gap-2">
                  <span>
                    <FaGlobeAmericas className="text-[#F16126]" />
                  </span>
                  <span className="text-sm text-[#77838F]">Online Class</span>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCourseGrid;
