import React from "react";
import {
  FaArrowRight,
  FaBuffer,
  FaGraduationCap,
  FaSearch,
  FaSquareRootAlt,
} from "react-icons/fa";
import CountUp from "react-countup";
import TrackVisibility from "react-on-screen";
import { Fade } from "react-reveal";
import Slider from "react-slick";
import coursesData from "../../Database/coursesData";
import FeatureCourse from "../ChildComponents/Elements/FeatureCourseGrid";
import categoriesData from "../../Database/categoriesData";
import Categories from "../ChildComponents/Elements/Categories";
import Event from "../ChildComponents/Elements/Event";
import eventData from "../../Database/eventData";
import CourseAdvisor from "../ChildComponents/Elements/CourseAdvisor";
import courseAdvisorData from "../../Database/courseAdvisorData";
import { Link } from "react-router-dom";
import Blog from "../ChildComponents/Elements/Blog";
import blogData from "../../Database/blogData";
import studentsSaysData from "../../Database/studentsSaysData";
import StudentsSays from "../ChildComponents/Elements/StudentsSays";
import NewsLetter from "../Common/NewsLetter";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

const HomeComponent = () => {
  const countData = [
    {
      count: 4350,
      tag: "Total Courses",
    },
    {
      count: 36300,
      tag: "Total Students",
    },
    {
      count: 126,
      tag: "Total Teacher",
    },
    {
      count: 165,
      tag: "Total Awarded",
    },
  ];
  var settings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section>
      {/* ============ Header Section ============*/}
      <Header />
      {/* ============ Hero Section ============ */}
      <div className='heroSection'>
        <div className='container mx-auto relative'>
          <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-6'>
              <div className='leftSide'>
                <Fade>
                  <div className='flex gap-8'>
                    <div className='item flex items-center gap-2'>
                      <span>
                        <FaGraduationCap className='text-primary text-[20px]' />
                      </span>
                      <span className='text-white text-[14px]'>
                        Transmission
                      </span>
                    </div>
                    <div className='item flex items-center gap-2'>
                      <span>
                        <FaBuffer className='text-primary text-[20px]' />
                      </span>
                      <span className='text-white text-[14px]'>Equivalent</span>
                    </div>
                    <div className='item flex items-center gap-2'>
                      <span>
                        <FaSquareRootAlt className='text-primary text-[20px]' />
                      </span>
                      <span className='text-white text-[14px]'>Education</span>
                    </div>
                  </div>
                </Fade>
                <Fade>
                  <div className='mt-5 relative '>
                    <h2 className='text-[60px] text-white font-bold leading-[80px] relative z-10'>
                      Growth You Career With Complete Courses
                    </h2>
                    <span className='absolute top-[20px] right-[50px] z-[-0]'>
                      <img src='/Assets/Images/shape/shape_6.png' alt='' />
                    </span>
                  </div>
                </Fade>
                <Fade>
                  <div className='relative flex mt-5'>
                    <div className='item'>
                      <img
                        className='w-[80px] h-[80px] relative top-0 left-0 border-4 border-[#F16126] rounded-full'
                        src='Assets/Images/profile/Ellipse_1.png'
                        alt=''
                      />
                    </div>
                    <div className='item'>
                      <img
                        className='w-[80px] h-[80px] relative top-0 left-[-30px] border-4 border-[#F16126] rounded-full'
                        src='Assets/Images/profile/Ellipse_2.png'
                        alt=''
                      />
                    </div>
                    <div className='item'>
                      <img
                        className='w-[80px] h-[80px] relative top-0 left-[-60px] border-4 border-[#F16126] rounded-full'
                        src='Assets/Images/profile/Ellipse_3.png'
                        alt=''
                      />
                    </div>
                    <div className='item'>
                      <img
                        className='w-[80px] h-[80px] relative top-0 left-[-90px] border-4 border-[#F16126] rounded-full'
                        src='Assets/Images/profile/Ellipse_4.png'
                        alt=''
                      />
                    </div>
                    <div className='item'>
                      <img
                        className='w-[80px] h-[80px] relative top-0 left-[-120px] border-4 border-[#F16126] rounded-full'
                        src='Assets/Images/profile/Ellipse_5.png'
                        alt=''
                      />
                    </div>
                    <div className='item'>
                      <img
                        className='w-[80px] h-[80px] relative top-0 left-[-150px] border-4 border-[#F16126] rounded-full'
                        src='Assets/Images/profile/Ellipse_6.png'
                        alt=''
                      />
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
            <div className='col-span-6 ml-8'>
              <div className='rightSide relative'>
                <div className=' shape mt-10'>
                  <Fade>
                    <div className='  h-[80px] flex justify-center'>
                      <div className='item w-[80px] h-[80px] '>
                        <img
                          className=' border-4 border-[#F16126] rounded-full'
                          src='Assets/Images/shape/shape_1.png'
                          alt=''
                        />
                      </div>
                      <div className='item w-[80px] h-[80px]   ml-[-20px]'>
                        <img
                          className=' border-4 border-[#F16126] rounded-full'
                          src='Assets/Images/shape/shape_2.png'
                          alt=''
                        />
                      </div>
                      <div className='item w-[80px] h-[80px]  ml-[-20px]'>
                        <img
                          className=' border-4 border-[#F16126] rounded-full'
                          src='Assets/Images/shape/shape_3.png'
                          alt=''
                        />
                      </div>
                      <div className='item w-[80px] h-[80px]  ml-[-20px]'>
                        <img
                          className=' border-4 border-[#F16126] rounded-full'
                          src='Assets/Images/shape/shape_4.png'
                          alt=''
                        />
                      </div>
                      <div className='item w-[80px] h-[80px]  ml-[-20px]'>
                        <img
                          className=' border-4 border-[#fff] rounded-full'
                          src='Assets/Images/shape/shape_5.png'
                          alt=''
                        />
                      </div>
                    </div>
                  </Fade>
                </div>
                <Fade>
                  <div className='flex justify-center gap-4 mt-6'>
                    <div className='item'>
                      <div className='text-right'>
                        <h2 className='text-white text-[40px] font-semibold'>
                          <CountUp delay={0} start={21} end={2617} />
                        </h2>
                        <span className='text-white text-sm'>
                          Enrolled Students
                        </span>
                      </div>
                    </div>
                    <div className='item'>
                      <div className='text-right'>
                        <h2 className='text-white text-[40px] font-semibold'>
                          <CountUp delay={0} start={21} end={902} />
                        </h2>
                        <span className='text-white text-sm'>
                          Online Course
                        </span>
                      </div>
                    </div>
                    <div className='item'>
                      <div className='text-right'>
                        <h2 className='text-white text-[40px] font-semibold'>
                          <CountUp delay={0} start={21} end={630} />K
                        </h2>
                        <span className='text-white text-sm'>
                          Platform Followers
                        </span>
                      </div>
                    </div>
                  </div>
                </Fade>

                <div className='mt-6'>
                  <Fade>
                    <div className='input__search flex justify-center relative'>
                      <input
                        className='h-[64px] px-6 py-4 w-[430px] rounded-md border-2 border-white bg-transparent text-white'
                        type='text'
                        placeholder='Enter Course Name'
                      />
                      <button className='absolute top-[7px] right-[53px] rounded-md bg-[#F16126] h-[50px] flex gap-2 text-white items-center px-4 py-2'>
                        <span>
                          <FaSearch />
                        </span>
                        <span>Search</span>
                      </button>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ============ Featured Courses ============ */}
      <div className='featureCourses py-[80px]'>
        {/* Heading Text */}
        <div className='container mx-auto'>
          <div className='grid grid-cols-12 gap-5'>
            <div className='col-span-6'>
              <div>
                <div>
                  <h2 className='text-[40px] relative font-semibold text-[#333] inline z-10'>
                    Featured Courses
                    <span>
                      <img
                        className='w-[140px]  absolute top-[4px] right-0 z-[-10]'
                        src='/Assets/Images/shape/shape_6.png'
                        alt=''
                      />
                    </span>
                  </h2>

                  <p className='text-[#77838F] mt-1'>
                    Discover Your Perfect Program In Our Courses.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-span-6'>
              <div className='flex justify-end mt-5'>
                <button className='bg-[#F16126] flex gap-2 items-center px-4 py-4 rounded-md'>
                  <span className='text-white'>
                    <FaArrowRight />
                  </span>
                  <span className='text-white'>All Courses</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Courses Info */}
        <div className='container mx-auto mt-14'>
          <div className='grid grid-cols-12 gap-5'>
            {coursesData.slice(0, 6).map((item, index) => (
              <div key={index} className='col-span-4 mb-4'>
                <FeatureCourse item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* ============ Trending Categories ============ */}
      <div className='trendingCategories bg-[#F1F1F1] py-[80px]'>
        {/* Heading Text */}
        <div className='container mx-auto'>
          <div className='grid grid-cols-12 gap-5'>
            <div className='col-span-6'>
              <div>
                <div>
                  <h2 className='text-[40px] relative font-semibold text-[#333] inline z-10'>
                    Trending Categories
                    <span>
                      <img
                        className='w-[140px]  absolute top-[4px] right-0 z-[-10]'
                        src='/Assets/Images/shape/shape_6.png'
                        alt=''
                      />
                    </span>
                  </h2>

                  <p className='text-[#77838F] mt-1'>
                    Discover Your Perfect Program In Our Courses.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-span-6'>
              <div className='flex justify-end mt-5'>
                <button className='bg-[#F16126] flex gap-2 items-center px-4 py-4 rounded-md'>
                  <span className='text-white'>
                    <FaArrowRight />
                  </span>
                  <span className='text-white'>All Categories</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Courses Info */}
        <div className='container mx-auto mt-14'>
          <div className='grid grid-cols-12 gap-5'>
            {categoriesData.slice(0, 4).map((item, index) => (
              <div key={index} className='col-span-3'>
                <Categories item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* ============ Map Section ============ */}
      <div className='map py-[80px]'>
        <div className='container mx-auto relative'>
          <div className='grid grid-cols-12 gap-5'>
            {countData.map((item, index) => (
              <div key={index} className='col-span-3'>
                <div className='flex justify-center items-center'>
                  <div className='text-center'>
                    <TrackVisibility once>
                      {({ isVisible }) =>
                        isVisible && (
                          <h2 className='text-[60px] text-white font-semibold'>
                            <CountUp delay={0} start={0} end={item.count} />
                          </h2>
                        )
                      }
                    </TrackVisibility>

                    <p className='text-white'>{item.tag}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* ============ Event Section ============ */}
      <div className='eventSection  py-[80px]'>
        {/* Heading Text */}
        <div className='container mx-auto '>
          <div className='grid grid-cols-12 gap-5'>
            <div className='col-span-6'>
              <div>
                <div>
                  <h2 className='text-[40px] relative font-semibold text-[#333] inline z-10'>
                    Upcoming Events
                    <span>
                      <img
                        className='w-[140px]  absolute top-[4px] right-0 z-[-10]'
                        src='/Assets/Images/shape/shape_6.png'
                        alt=''
                      />
                    </span>
                  </h2>

                  <p className='text-[#77838F] mt-1'>
                    Trending topics often evolve around popular cultural
                    occurrences such as current events.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-span-6'>
              <div className='flex justify-end mt-5'>
                <button className='bg-[#F16126] flex gap-2 items-center px-4 py-4 rounded-md'>
                  <span className='text-white'>
                    <FaArrowRight />
                  </span>
                  <span className='text-white'>All Events</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Event Info */}
        <div className='container mx-auto mt-14'>
          <div className='grid grid-cols-12 gap-5'>
            {eventData.slice(0, 3).map((item, index) => (
              <div key={index} className='col-span-4'>
                <Event item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* ============ Course Advisor ============ */}
      <div className='courseAdvisor bg-[#F1F1F1] py-[80px]'>
        {/* Heading Text */}
        <div className='container mx-auto'>
          <div className='grid grid-cols-12 gap-5'>
            <div className='col-span-6'>
              <div>
                <div>
                  <h2 className='text-[40px] relative font-semibold text-[#333] inline z-10'>
                    Course Advisor
                    <span>
                      <img
                        className='w-[140px]  absolute top-[4px] right-0 z-[-10]'
                        src='/Assets/Images/shape/shape_6.png'
                        alt=''
                      />
                    </span>
                  </h2>
                  <p className='text-[#77838F] mt-1'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-span-6'>
              <div className='flex justify-end mt-5'>
                <button className='bg-[#F16126] flex gap-2 items-center px-4 py-4 rounded-md'>
                  <span className='text-white'>
                    <FaArrowRight />
                  </span>
                  <span className='text-white'>All Advisor</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Courses Info */}
        <div className='container mx-auto mt-14'>
          <div className='grid grid-cols-12 gap-5'>
            {courseAdvisorData.slice(0, 4).map((item, index) => (
              <div key={index} className='col-span-3'>
                <CourseAdvisor item={item} />
              </div>
            ))}
          </div>
        </div>
        {/* Become An Instructor */}

        <div className='container mx-auto mt-14'>
          <div className='flex justify-center'>
            <div className='text-center px-[150px]'>
              <h2 className='text-[48px] font-semibold'>
                Become An Instructor
              </h2>
              <p>
                At Thriving Skills, you can become an instructor at zero cost
                and earn up to 50% of the revenue share. And we will promote
                your course on other platforms.
              </p>
              <div className='flex justify-center mt-6'>
                <Link className='my__btn' to={"/"}>
                  <span className='top-key'></span>
                  <span className='text'>Appiy for An Instructor</span>
                  <span className='bottom-key-1'></span>
                  <span className='bottom-key-2'></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ============ Register Option ============ */}
      <div className='registerOption  py-[80px]'>
        {/* Heading Text */}
        <div className='container mx-auto'>
          <div className='grid grid-cols-12 gap-5'>
            <div className='col-span-6'>
              <div>
                <div>
                  <h2 className='text-[40px] font-semibold leading-[50px]'>
                    Get Awesome 80s of online Courses For Free!
                  </h2>
                  <p className='text-base mt-5 leading-relaxed'>
                    Software is a set of instructions, data or programs used to
                    operate computers and execute specific tasks.
                  </p>
                  <p className='text-base mt-2 leading-relaxed'>
                    We’re living in strange and unpredictable times. Just when
                    we thought things were getting better, another development
                    happens, and it can feel like we’re taking one step forward
                    and three steps back. But hey, enough of that negative talk.
                    Let’s look at the positives as we head into the new year!
                  </p>
                  <div className='relative flex mt-5'>
                    <div className='item'>
                      <img
                        className='w-[80px] h-[80px] relative top-0 left-0 border-4 border-[#F16126] rounded-full'
                        src='Assets/Images/profile/Ellipse_1.png'
                        alt=''
                      />
                    </div>
                    <div className='item'>
                      <img
                        className='w-[80px] h-[80px] relative top-0 left-[-30px] border-4 border-[#F16126] rounded-full'
                        src='Assets/Images/profile/Ellipse_2.png'
                        alt=''
                      />
                    </div>
                    <div className='item'>
                      <img
                        className='w-[80px] h-[80px] relative top-0 left-[-60px] border-4 border-[#F16126] rounded-full'
                        src='Assets/Images/profile/Ellipse_3.png'
                        alt=''
                      />
                    </div>
                    <div className='item'>
                      <img
                        className='w-[80px] h-[80px] relative top-0 left-[-90px] border-4 border-[#F16126] rounded-full'
                        src='Assets/Images/profile/Ellipse_4.png'
                        alt=''
                      />
                    </div>
                    <div className='item'>
                      <img
                        className='w-[80px] h-[80px] relative top-0 left-[-120px] border-4 border-[#F16126] rounded-full'
                        src='Assets/Images/profile/Ellipse_5.png'
                        alt=''
                      />
                    </div>
                    <div className='item'>
                      <img
                        className='w-[80px] h-[80px] relative top-0 left-[-150px] border-4 border-[#F16126] rounded-full'
                        src='Assets/Images/profile/Ellipse_6.png'
                        alt=''
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-span-6 pl-10'>
              <div className='shadow-lg px-10 py-10 h-full'>
                <div className='flex items-center h-full'>
                  <div>
                    <div className='mb-4'>
                      <input
                        className='text-slate-400 border-2 border-[#E9ECEF] px-3 py-3 rounded-lg w-full'
                        type='text'
                        placeholder='Email :'
                      />
                    </div>
                    <div className='mb-4 flex gap-3'>
                      <div>
                        <input
                          className='text-slate-400 border-2 border-[#E9ECEF] px-3 py-3 rounded-lg w-full'
                          type='text'
                          placeholder='First Name :'
                        />
                      </div>
                      <div>
                        <input
                          className='text-slate-400 border-2 border-[#E9ECEF] px-3 py-3 rounded-lg w-full'
                          type='text'
                          placeholder='Last Name :'
                        />
                      </div>
                    </div>
                    <div className='mb-4'>
                      <input
                        className='text-slate-400 border-2 border-[#E9ECEF] px-3 py-3 rounded-lg w-full'
                        type='text'
                        placeholder='Subject :'
                      />
                    </div>
                    <div className='mb-4'>
                      <input
                        className='text-slate-400 border-2 border-[#E9ECEF] px-3 py-3 rounded-lg w-full'
                        type='text'
                        placeholder='Phone :'
                      />
                    </div>
                    <div>
                      <button className='bg-[#F16126] flex gap-2 items-center px-4 py-4 rounded-md'>
                        <span className='text-white'>
                          <FaArrowRight />
                        </span>
                        <span className='text-white'>Register Now</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ============ Blog Posts ============ */}
      <div className='blogSection bg-[#F1F1F1] py-[80px]'>
        {/* Heading Text */}
        <div className='container mx-auto'>
          <div className='grid grid-cols-12 gap-5'>
            <div className='col-span-6'>
              <div>
                <div>
                  <h2 className='text-[40px] relative font-semibold text-[#333] inline z-10'>
                    Our Blog Posts
                    <span>
                      <img
                        className='w-[140px]  absolute top-[4px] right-0 z-[-10]'
                        src='/Assets/Images/shape/shape_6.png'
                        alt=''
                      />
                    </span>
                  </h2>
                  <p className='text-[#77838F] mt-1'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-span-6'>
              <div className='flex justify-end mt-5'>
                <button className='bg-[#F16126] flex gap-2 items-center px-4 py-4 rounded-md'>
                  <span className='text-white'>
                    <FaArrowRight />
                  </span>
                  <span className='text-white'>All Blog Post</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Data */}
        <div className='container mx-auto mt-14'>
          <div className='grid grid-cols-12 gap-5'>
            {blogData.slice(0, 3).map((item, index) => (
              <div key={index} className='col-span-4 mb-20'>
                <Blog item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* ============ Students Says ============ */}
      <div className='studentsSays  py-[80px]'>
        {/* Heading Text */}
        <div className='container mx-auto'>
          <div className='grid grid-cols-12 gap-5'>
            <div className='col-span-6'>
              <div>
                <div>
                  <h2 className='text-[40px] relative font-semibold text-[#333] inline z-10'>
                    Students Says
                    <span>
                      <img
                        className='w-[140px]  absolute top-[4px] right-0 z-[-10]'
                        src='/Assets/Images/shape/shape_6.png'
                        alt=''
                      />
                    </span>
                  </h2>
                  <p className='text-[#77838F] mt-1'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-span-6'></div>
          </div>
        </div>

        {/* Students Data */}
        <div className='container mx-auto mt-10'>
          <div className='gap-5'>
            <Slider {...settings}>
              {studentsSaysData.map((item, index) => (
                <div key={index}>
                  <StudentsSays item={item} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      {/* ============ NewsLetter ============ */}
      <div className='mt-[40px]'>
        <NewsLetter />
      </div>
      {/* ============ Footer Section ============ */}
      <Footer />
    </section>
  );
};

export default HomeComponent;
