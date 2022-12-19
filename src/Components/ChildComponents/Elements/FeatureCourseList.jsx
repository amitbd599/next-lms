import React from "react";
import { FaBook, FaGlobeAmericas, FaStar } from "react-icons/fa";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";

const FeatureCourseList = ({ item }) => {
  return (
    <div className="itemContainer relative flex justify-center bg-white">
      <div className=" w-full rounded-lg px-5 py-5 shadow-lg duration-300 ease-in-out hover:shadow-xl">
        <div className="block gap-10 xl:flex">
          <div className="img__file relative overflow-hidden  rounded-md">
            <img
              className="w-full rounded-md object-cover"
              src={item.thumbnail}
              alt=""
            />
          </div>
          <div className="text__file mt-4 md:mt-0 lg:py-2">
            <div>
              <Fade bottom>
                <Link
                  to={"/course-details"}
                  className="text-[22px] font-semibold text-[#333] duration-300 ease-in-out hover:text-[#F16126]"
                >
                  {item.title}
                </Link>
              </Fade>
              <Fade bottom>
                <p>{item.tag}</p>
              </Fade>
            </div>
            <div>
              <Fade bottom>
                <div>
                  <span className=" text-[40px] font-semibold">
                    ${item.price}
                  </span>
                </div>
              </Fade>
              <div className="mt-0 flex items-center gap-4">
                <div className="item flex items-center gap-2">
                  <Fade bottom>
                    <span>
                      <FaBook className="text-[#F16126]" />
                    </span>
                  </Fade>
                  <Fade bottom>
                    <span className="text-sm text-[#77838F]">
                      {item.lessons} Lessons
                    </span>
                  </Fade>
                </div>
                <div className="item flex items-center gap-2">
                  <Fade bottom>
                    <span>
                      <FaGlobeAmericas className="text-[#F16126]" />
                    </span>
                  </Fade>
                  <Fade bottom>
                    <span className="text-sm text-[#77838F]">Online Class</span>
                  </Fade>
                </div>
              </div>
            </div>
            <div className="intro__section mt-4 px-2">
              <div className="flex gap-4">
                <Fade bottom>
                  <img
                    className="h-[60px] w-[60px] rounded-full border-2 border-[#F16126]"
                    src={item.authorImg}
                    alt=""
                  />
                </Fade>

                <div className="">
                  <Fade bottom>
                    <h4 className="text-[20px] font-medium">{item.author}</h4>
                  </Fade>

                  <div className="flex items-center gap-2">
                    <Fade bottom>
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
                    </Fade>

                    <div>
                      <Fade bottom>
                        <p className="text-[#77838F]">
                          {item.rate}({item.totalRate})
                        </p>
                      </Fade>
                    </div>
                  </div>
                  <div>
                    <Fade bottom>
                      <p className="text-sm text-[#77838F]">
                        {item.authorPosition}
                      </p>
                    </Fade>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCourseList;
