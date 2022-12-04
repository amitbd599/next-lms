import React from "react";
import { Link } from "react-router-dom";
import { Select, Option } from "@material-tailwind/react";
import { BsListTask, BsUiChecksGrid } from "react-icons/bs";
import NewsLetter from "../Common/NewsLetter";
import coursesData from "../../Database/coursesData";
import FeatureCourse from "../ChildComponents/Elements/FeatureCourseGrid";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import IntroSection from "../Common/IntroSection";
const CourseGirdComponent = () => {
  return (
    <section>
      {/* ============ Header Section ============*/}
      <Header />
      {/* ============ Intro Section ============*/}
      <IntroSection title={"Courses Grid"} />
      {/* ============ Grid Courses Section ============ */}
      <div className='featureCourses gridCourses py-[80px]'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-12 gap-5'>
            <div className='col-span-5'>
              <div>
                <div className='flex gap-3'>
                  <Link
                    to={"/course-grid-page"}
                    className='bg-[#F16126] px-2 py-1.5 rounded-md'
                  >
                    <BsUiChecksGrid className='text-[25px] text-white' />
                  </Link>
                  <Link
                    to={"/course-list-page"}
                    className='bg-[#fff] border border-[#E9ECEF] px-2 py-1.5 rounded-md'
                  >
                    <BsListTask className='text-[25px] ' />
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-span-7'>
              <div className='flex gap-4'>
                <div>
                  <Select
                    size='lg'
                    variant='outlined'
                    label='All Courses '
                    color='orange'
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
                <div>
                  <Select
                    size='lg'
                    variant='outlined'
                    label='All Category '
                    color='orange'
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
                <div>
                  <Select
                    size='lg'
                    variant='outlined'
                    label='Select Sort '
                    color='orange'
                  >
                    <Option>High To Low</Option>
                    <Option>Low To High</Option>
                    <Option>Sort By Time</Option>
                    <Option>Sort By Price</Option>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Courses Info */}
        <div className='container mx-auto mt-14'>
          <div className='grid grid-cols-12 gap-5'>
            {coursesData.map((item, index) => (
              <div key={index} className='col-span-4 mb-4'>
                <FeatureCourse item={item} />
              </div>
            ))}
          </div>
        </div>
        {/* Pagination Section */}
        <div className='container mx-auto mt-14'>
          <div aria-label='Page navigation'>
            <div className='flex justify-center'>
              <ul class='inline-flex space-x-2'>
                <li>
                  <button class='flex items-center justify-center w-10 h-10 text-[#F16126] transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-[#f0612657]'>
                    <svg class='w-4 h-4 fill-current' viewBox='0 0 20 20'>
                      <path
                        d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                        clip-rule='evenodd'
                        fill-rule='evenodd'
                      ></path>
                    </svg>
                  </button>
                </li>
                <li>
                  <button class='w-10 h-10 text-[#F16126] transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-[#f0612657]'>
                    1
                  </button>
                </li>
                <li>
                  <button class='w-10 h-10 text-[#F16126] transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-[#f0612657]'>
                    2
                  </button>
                </li>
                <li>
                  <button class='w-10 h-10 text-white transition-colors duration-150 bg-[#F16126] border border-r-0 border-[#F16126] rounded-full focus:shadow-outline'>
                    3
                  </button>
                </li>
                <li>
                  <button class='flex items-center justify-center w-10 h-10 text-[#F16126] transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-[#f0612657]'>
                    <svg class='w-4 h-4 fill-current' viewBox='0 0 20 20'>
                      <path
                        d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                        clip-rule='evenodd'
                        fill-rule='evenodd'
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

export default CourseGirdComponent;
