import { Option, Select } from "@material-tailwind/react";
import React from "react";
import { BsListTask, BsUiChecksGrid } from "react-icons/bs";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import coursesData from "../../Database/coursesData";
import FeatureCourseList from "../ChildComponents/Elements/FeatureCourseList";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import IntroSection from "../Common/IntroSection";
import NewsLetter from "../Common/NewsLetter";
import Sidebar from "../Common/Sidebar";

const CourseListComponent = () => {
  return (
    <section>
      {/* ============ Header Section ============*/}
      <Header />
      {/* ============ Intro Section ============*/}
      <IntroSection title={"Courses List"} />
      {/* ============ List Courses Section ============ */}
      <div className="featureCourses listCourses py-[50px] md:py-[60px] lg:py-[70px] xl:py-[80px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 lg:col-span-3 xl:col-span-5">
              <div>
                <Fade bottom>
                  <div className="flex gap-3">
                    <Link
                      to={"/course-grid-page"}
                      className=" rounded-md border border-[#E9ECEF] bg-[#fff] px-2 py-1.5"
                    >
                      <BsUiChecksGrid className="text-[25px] " />
                    </Link>
                    <Link
                      to={"/course-list-page"}
                      className="rounded-md  bg-[#F16126] px-2 py-1.5"
                    >
                      <BsListTask className="text-[25px] text-white" />
                    </Link>
                  </div>
                </Fade>
              </div>
            </div>
            <div className="col-span-12 md:mt-4 lg:col-span-9 lg:mt-0 xl:col-span-7">
              <div className="hidden gap-4 md:flex">
                <Fade bottom>
                  <div className="z-[99] mb-4 md:mb-0">
                    <Select
                      size="lg"
                      variant="outlined"
                      label="All Courses"
                      color="orange"
                      className="z-[999]"
                    >
                      <Option>Python</Option>
                      <Option>Java</Option>
                      <Option>C and C++</Option>
                      <Option>C#</Option>
                      <Option>JavaScript</Option>
                      <Option>SQL</Option>
                      <Option>PHP</Option>
                      <Option>Kotlin</Option>
                      <Option>Ruby</Option>
                    </Select>
                  </div>
                </Fade>
                <Fade bottom>
                  <div className="z-[99] mb-4 md:mb-0">
                    <Select
                      size="lg"
                      variant="outlined"
                      label="All Category"
                      color="orange"
                    >
                      <Option>Data Structure & Algorithm</Option>
                      <Option>Web Development</Option>
                      <Option>Electrical Machines</Option>
                      <Option>Discrete Mathematics</Option>
                      <Option>Software Development</Option>
                      <Option>Digital Marketing</Option>
                      <Option>Affiliates Marketing</Option>
                      <Option>Graphic Design</Option>
                    </Select>
                  </div>
                </Fade>
                <Fade bottom>
                  <div className="z-[99] mb-4 md:mb-0">
                    <Select
                      size="lg"
                      variant="outlined"
                      label="Select Sort"
                      color="orange"
                    >
                      <Option>High To Low</Option>
                      <Option>Low To High</Option>
                      <Option>Sort By Time</Option>
                      <Option>Sort By Price</Option>
                    </Select>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
        {/* Courses Info */}
        <div className="container mx-auto mt-2 md:mt-14">
          <div className="grid grid-cols-12 md:gap-8">
            <div className="col-span-12 mb-4 md:col-span-6 lg:col-span-7 xl:col-span-8">
              {coursesData.map((item, index) => (
                <div key={index} className="mb-6">
                  <FeatureCourseList item={item} />
                </div>
              ))}
            </div>
            <div className="col-span-12 mb-4 md:col-span-6 md:pl-5 lg:col-span-5 xl:col-span-4">
              <Sidebar />
            </div>
          </div>
        </div>
        {/* Pagination Section */}
        <div className="container mx-auto mt-14">
          <div aria-label="Page navigation">
            <div className="flex justify-center">
              <ul className="inline-flex space-x-2">
                <li>
                  <button className="focus:shadow-outline flex h-10 w-10 items-center justify-center rounded-full text-[#F16126] transition-colors duration-150 hover:bg-[#f0612657]">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </li>
                <li>
                  <button className="focus:shadow-outline h-10 w-10 rounded-full text-[#F16126] transition-colors duration-150 hover:bg-[#f0612657]">
                    1
                  </button>
                </li>
                <li>
                  <button className="focus:shadow-outline h-10 w-10 rounded-full text-[#F16126] transition-colors duration-150 hover:bg-[#f0612657]">
                    2
                  </button>
                </li>
                <li>
                  <button className="focus:shadow-outline h-10 w-10 rounded-full border border-r-0 border-[#F16126] bg-[#F16126] text-white transition-colors duration-150">
                    3
                  </button>
                </li>
                <li>
                  <button className="focus:shadow-outline flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#F16126] transition-colors duration-150 hover:bg-[#f0612657]">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* ============ NewsLetter ============ */}
      <NewsLetter />
      {/* ============ Footer Section ============ */}
      <Footer />
    </section>
  );
};

export default CourseListComponent;
