import React from "react";
import { FaCalendarCheck, FaSearch } from "react-icons/fa";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import blogData from "../../Database/blogData";
const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Search Box */}
      <div className="searchBox">
        <div className="relative overflow-hidden rounded-md">
          <Fade bottom>
            <div>
              <input
                type="text"
                className="w-full border border-[#E9ECEF] px-3  py-4"
              />
              <button className="absolute top-0 bottom-0 right-0 bg-[#F16126] px-[25px] py-[5px] text-white">
                <FaSearch />
              </button>
            </div>
          </Fade>
        </div>
      </div>
      {/* Categories */}
      <div className="categories mt-6 rounded-lg border px-6 py-5">
        <div>
          <div>
            <Fade bottom>
              <h2 className='relative inline-block text-[30px] font-semibold after:absolute after:bottom-[-4px] after:left-0 after:h-[4px] after:w-full after:rounded-lg after:bg-[#F16126] after:content-[""]'>
                Categories
              </h2>
            </Fade>
          </div>
          <div className="mt-6">
            <ul>
              <Fade bottom>
                <li className="mb-3 border-b pb-1">
                  <Link
                    className="block py-1 duration-200 ease-in-out hover:text-[#F16126]"
                    to={"/"}
                  >
                    Business Studies (3)
                  </Link>
                </li>
              </Fade>
              <Fade bottom>
                <li className="mb-3 border-b pb-1">
                  <Link
                    className="block py-1 duration-200 ease-in-out hover:text-[#F16126]"
                    to={"/"}
                  >
                    Computer Engineering (3)
                  </Link>
                </li>
              </Fade>
              <Fade bottom>
                <li className="mb-3 border-b pb-1">
                  <Link
                    className="block py-1 duration-200 ease-in-out hover:text-[#F16126]"
                    to={"/"}
                  >
                    Medical & Health (3)
                  </Link>
                </li>
              </Fade>
              <Fade bottom>
                <li className="mb-3 border-b pb-1">
                  <Link
                    className="block py-1 duration-200 ease-in-out hover:text-[#F16126]"
                    to={"/"}
                  >
                    Software (3)
                  </Link>
                </li>
              </Fade>
              <Fade bottom>
                <li className="mb-3 border-b pb-1">
                  <Link
                    className="block py-1 duration-200 ease-in-out hover:text-[#F16126]"
                    to={"/"}
                  >
                    Web Development (3)
                  </Link>
                </li>
              </Fade>
              <Fade bottom>
                <li>
                  <Link
                    className="block py-1 duration-200 ease-in-out hover:text-[#F16126]"
                    to={"/"}
                  >
                    Uncategorized (3)
                  </Link>
                </li>
              </Fade>
            </ul>
          </div>
        </div>
      </div>
      {/* Latest Post*/}
      <div className="categories mt-6 rounded-lg border px-6 py-5">
        <div>
          <div>
            <Fade bottom>
              <h2 className='relative inline-block text-[30px] font-semibold after:absolute after:bottom-[-4px] after:left-0 after:h-[4px] after:w-full after:rounded-lg after:bg-[#F16126] after:content-[""]'>
                Latest Post
              </h2>
            </Fade>
          </div>
          <div className="mt-8">
            <ul>
              {blogData.slice(0, 5).map((item, index) => (
                <li key={index} className="mb-6">
                  <div className="flex w-full gap-3">
                    <div className="w-auto lg:w-4/12">
                      <Fade bottom>
                        <img
                          className="w-[120px] rounded-lg"
                          src={item.thumbnail}
                          alt=""
                        />
                      </Fade>
                    </div>
                    <div className="w-8/12">
                      <Fade bottom>
                        <Link
                          to={"/"}
                          className="text-[16px] font-medium leading-[20px] text-[#333] duration-300 ease-in-out hover:text-[#F16126]"
                        >
                          {item.title}
                        </Link>
                      </Fade>

                      <div className="mt-1 flex items-center gap-2">
                        <Fade bottom>
                          <span>
                            <FaCalendarCheck />
                          </span>
                        </Fade>
                        <Fade bottom>
                          <span className="text-sm font-normal">
                            {item.date}
                          </span>
                        </Fade>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Tag */}
      <div className="categories mt-6 rounded-lg border px-6 py-5">
        <div>
          <div>
            <Fade bottom>
              <h2 className='relative inline-block text-[30px] font-semibold after:absolute after:bottom-[-4px] after:left-0 after:h-[4px] after:w-full after:rounded-lg after:bg-[#F16126] after:content-[""]'>
                Tag
              </h2>
            </Fade>
          </div>
          <div className="mt-8">
            <div className="">
              <ul>
                <Fade bottom>
                  <li className="mb-7 mr-2 inline-block">
                    <Link
                      className="rounded-md border border-[#E9ECEF] px-3 py-2 text-[15px] duration-300 ease-in-out hover:border-[#F16126] hover:bg-[#F16126] hover:text-white"
                      to={"/"}
                    >
                      JavaScript
                    </Link>
                  </li>
                </Fade>
                <Fade bottom>
                  <li className="mb-7 mr-2 inline-block">
                    <Link
                      className="rounded-md border border-[#E9ECEF] px-3 py-2 text-[15px] duration-300 ease-in-out hover:border-[#F16126] hover:bg-[#F16126] hover:text-white"
                      to={"/"}
                    >
                      PHP
                    </Link>
                  </li>
                </Fade>
                <Fade bottom>
                  <li className="mb-7 mr-2 inline-block">
                    <Link
                      className="rounded-md border border-[#E9ECEF] px-3 py-2 text-[15px] duration-300 ease-in-out hover:border-[#F16126] hover:bg-[#F16126] hover:text-white"
                      to={"/"}
                    >
                      Java
                    </Link>
                  </li>
                </Fade>
                <Fade bottom>
                  <li className="mb-7 mr-2 inline-block">
                    <Link
                      className="rounded-md border border-[#E9ECEF] px-3 py-2 text-[15px] duration-300 ease-in-out hover:border-[#F16126] hover:bg-[#F16126] hover:text-white"
                      to={"/"}
                    >
                      TypeScript
                    </Link>
                  </li>
                </Fade>
                <Fade bottom>
                  <li className="mb-7 mr-2 inline-block">
                    <Link
                      className="rounded-md border border-[#E9ECEF] px-3 py-2 text-[15px] duration-300 ease-in-out hover:border-[#F16126] hover:bg-[#F16126] hover:text-white"
                      to={"/"}
                    >
                      Marketing
                    </Link>
                  </li>
                </Fade>
                <Fade bottom>
                  <li className="mb-7 mr-2 inline-block">
                    <Link
                      className="rounded-md border border-[#E9ECEF] px-3 py-2 text-[15px] duration-300 ease-in-out hover:border-[#F16126] hover:bg-[#F16126] hover:text-white"
                      to={"/"}
                    >
                      Graphic Design
                    </Link>
                  </li>
                </Fade>
                <Fade bottom>
                  <li className="mb-7 mr-2 inline-block">
                    <Link
                      className="rounded-md border border-[#E9ECEF] px-3 py-2 text-[15px] duration-300 ease-in-out hover:border-[#F16126] hover:bg-[#F16126] hover:text-white"
                      to={"/"}
                    >
                      Agency
                    </Link>
                  </li>
                </Fade>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
