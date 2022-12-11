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
import { useEffect } from "react";

const HomeComponent = () => {
  useEffect(() => {}, [HomeComponent]);
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
  const settings = {
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
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <section>
      {/* ============ Header Section ============*/}
      <Header />
      {/* ============ Hero Section ============ */}
      <div className="heroSection relative overflow-hidden">
        <div className="container relative z-[99] mx-auto">
          <div className="grid-cols-12 gap-4 lg:grid">
            <div className="col-span-12 lg:col-span-6">
              <div className="leftSide">
                <Fade left cascade>
                  <div className="flex justify-center gap-8 px-2 md:px-0 lg:justify-start">
                    <div className="item flex items-center gap-2">
                      <span>
                        <FaGraduationCap className="text-primary text-[20px]" />
                      </span>
                      <span className="text-[14px] text-white">
                        Transmission
                      </span>
                    </div>
                    <div className="item flex items-center gap-2">
                      <span>
                        <FaBuffer className="text-primary text-[20px]" />
                      </span>
                      <span className="text-[14px] text-white">Equivalent</span>
                    </div>
                    <div className="item flex items-center gap-2">
                      <span>
                        <FaSquareRootAlt className="text-primary text-[20px]" />
                      </span>
                      <span className="text-[14px] text-white">Education</span>
                    </div>
                  </div>
                </Fade>
                <Fade left cascade>
                  <div className="shape relative mt-5  md:flex md:justify-center lg:block lg:justify-start">
                    <h2 className="relative z-10 text-center text-[40px] font-bold leading-[45px] text-white md:leading-[70px] lg:text-start lg:text-[50px] xl:text-[60px]">
                      Growth You Career With Complete Courses
                    </h2>
                    <span className="absolute top-[-5px] right-[10px] z-[-0]">
                      <img
                        className="w-[250px]"
                        src="/Assets/Images/shape/shape_26.png"
                        alt="Next LMS"
                      />
                    </span>
                  </div>
                </Fade>
                <Fade left cascade>
                  <div className="hidden lg:block">
                    <div className="relative mt-5 flex">
                      <div className="item relative top-0 ml-[0] h-[80px] w-[80px]">
                        <img
                          className=" rounded-full border-4 border-[#F16126]"
                          src="Assets/Images/profile/Ellipse_1.png"
                          alt="Next LMS"
                        />
                      </div>
                      <div className="item relative top-0 ml-[-25px]  h-[80px] w-[80px]">
                        <img
                          className=" rounded-full border-4 border-[#F16126]"
                          src="Assets/Images/profile/Ellipse_2.png"
                          alt="Next LMS"
                        />
                      </div>
                      <div className="item relative top-0 ml-[-25px]  h-[80px] w-[80px]">
                        <img
                          className=" rounded-full border-4 border-[#F16126]"
                          src="Assets/Images/profile/Ellipse_3.png"
                          alt="Next LMS"
                        />
                      </div>
                      <div className="item relative top-0 ml-[-25px]  h-[80px] w-[80px]">
                        <img
                          className=" rounded-full border-4 border-[#F16126]"
                          src="Assets/Images/profile/Ellipse_4.png"
                          alt="Next LMS"
                        />
                      </div>
                      <div className="item relative top-0 ml-[-25px]  h-[80px] w-[80px]">
                        <img
                          className=" rounded-full border-4 border-[#F16126]"
                          src="Assets/Images/profile/Ellipse_5.png"
                          alt="Next LMS"
                        />
                      </div>
                      <div className="item relative top-0 ml-[-25px]  h-[80px] w-[80px]">
                        <img
                          className=" rounded-full border-4 border-[#F16126]"
                          src="Assets/Images/profile/Ellipse_6.png"
                          alt="Next LMS"
                        />
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
            <div className="col-span-12 md:ml-8 lg:col-span-6">
              <div className="rightSide relative">
                <div className=" shape mt-10 flex justify-center">
                  <Fade right cascade>
                    <div className="relative mt-5 flex">
                      <div className="item relative top-0 ml-[0] h-[80px] w-[80px]">
                        <img
                          className=" rounded-full border-4 border-[#F16126]"
                          src="/Assets/Images/shape/shape_1.png"
                          alt="Next LMS"
                        />
                      </div>
                      <div className="item relative top-0 ml-[-32px] h-[80px] w-[80px] md:ml-[-25px]">
                        <img
                          className=" rounded-full border-4 border-[#F16126]"
                          src="/Assets/Images/shape/shape_2.png"
                          alt="Next LMS"
                        />
                      </div>
                      <div className="item relative top-0 ml-[-32px] h-[80px] w-[80px] md:ml-[-25px]">
                        <img
                          className=" rounded-full border-4 border-[#F16126]"
                          src="/Assets/Images/shape/shape_3.png"
                          alt="Next LMS"
                        />
                      </div>
                      <div className="item relative top-0 ml-[-32px] h-[80px] w-[80px] md:ml-[-25px]">
                        <img
                          className=" rounded-full border-4 border-[#F16126]"
                          src="/Assets/Images/shape/shape_4.png"
                          alt="Next LMS"
                        />
                      </div>
                      <div className="item relative top-0 ml-[-32px] h-[80px] w-[80px] md:ml-[-25px]">
                        <img
                          className=" rounded-full border-4 border-[#F16126]"
                          src="/Assets/Images/shape/shape_5.png"
                          alt="Next LMS"
                        />
                      </div>
                      <div className="item relative top-0 ml-[-32px] h-[80px] w-[80px] md:ml-[-25px]">
                        <img
                          className=" rounded-full border-4 border-[#F16126]"
                          src="/Assets/Images/shape/shape_6.png"
                          alt="Next LMS"
                        />
                      </div>
                      <div className="item relative top-0 ml-[-32px] h-[80px] w-[80px] md:ml-[-25px]">
                        <img
                          className=" rounded-full border-4 border-[#F16126]"
                          src="/Assets/Images/shape/shape_30.png"
                          alt="Next LMS"
                        />
                      </div>
                    </div>
                  </Fade>
                </div>
                <Fade right cascade>
                  <div className="mt-6 flex justify-center gap-4">
                    <div className="item">
                      <div className="text-right">
                        <h2 className="text-[40px] font-semibold text-white">
                          <CountUp delay={0} start={21} end={2617} />
                        </h2>
                        <span className="text-sm text-white">
                          Enrolled Students
                        </span>
                      </div>
                    </div>
                    <div className="item">
                      <div className="text-right">
                        <h2 className="text-[40px] font-semibold text-white">
                          <CountUp delay={0} start={21} end={902} />
                        </h2>
                        <span className="text-sm text-white">
                          Online Course
                        </span>
                      </div>
                    </div>
                    <div className="item">
                      <div className="text-right">
                        <h2 className="text-[40px] font-semibold text-white">
                          <CountUp delay={0} start={21} end={630} />K
                        </h2>
                        <span className="text-sm text-white">
                          Platform Followers
                        </span>
                      </div>
                    </div>
                  </div>
                </Fade>

                <div className="mt-14 md:mt-6">
                  <Fade right cascade>
                    <div className="input__search relative flex justify-center">
                      <input
                        className="h-[64px] w-[430px] rounded-md border-2 border-white bg-transparent px-6 py-4 text-white"
                        type="text"
                        placeholder="Enter Course Name"
                      />
                      <button className="absolute top-[7px] right-[8px] flex h-[50px] items-center gap-2 rounded-md bg-[#F16126] px-4 py-2 text-white md:right-[128px] lg:right-[7px] xl:right-[53px]">
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
        <div className="shapeImg">
          <Fade>
            <div className="absolute top-[-40px] right-[-25px] z-[-0]">
              <img
                className="animation__style__1 w-[160px]"
                src="/Assets/Images/shape/shape_20.png"
                alt="Next LMS"
              />
            </div>
            <div className="absolute bottom-3 left-[50%] z-[-0] translate-x-[-50%] opacity-80">
              <img
                className="animation__style__2 w-[30px]"
                src="/Assets/Images/shape/shape_27.png"
                alt="Next LMS"
              />
            </div>
          </Fade>
        </div>
      </div>
      {/* ============ Featured Courses ============ */}
      <div className="featureCourses py-[50px] md:py-[60px] lg:py-[70px] xl:py-[80px]">
        {/* Heading Text */}
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 lg:col-span-6">
              <div>
                <Fade>
                  <h2 className="relative z-10 flex gap-3 text-[40px] font-semibold text-[#333]">
                    <Fade left>
                      <span>Featured</span>
                    </Fade>
                    <Fade right>
                      <span className="text-[#F16126]">Courses</span>{" "}
                    </Fade>
                  </h2>
                  <Fade bottom cascade>
                    <p className="mt-1 text-base text-[#77838F]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Amet doloribus ipsam vero eaque, repellendus recusandae
                      aut delectus nostrum reiciendis vel!
                    </p>
                  </Fade>
                </Fade>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <div className=" mt-2 flex justify-start lg:mt-5 lg:justify-end">
                <Fade right>
                  <button className="flex items-center gap-2 rounded-md bg-[#F16126] px-4 py-4">
                    <span className="text-white">
                      <FaArrowRight />
                    </span>
                    <span className="text-white">All Courses</span>
                  </button>
                </Fade>
              </div>
            </div>
          </div>
        </div>
        {/* Courses Info */}
        <div className="container mx-auto mt-8 lg:mt-14">
          <div className="grid grid-cols-12 gap-5">
            {coursesData.slice(0, 6).map((item, index) => (
              <div
                key={index}
                className="col-span-12 mb-4 md:col-span-6  lg:col-span-4"
              >
                <FeatureCourse item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* ============ Trending Categories ============ */}
      <div className="trendingCategories bg-[#F1F1F1] py-[50px] md:py-[60px] lg:py-[70px] xl:py-[80px]">
        {/* Heading Text */}
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 lg:col-span-6">
              <div>
                <Fade>
                  <h2 className="relative z-10 flex gap-3 text-[40px] font-semibold text-[#333]">
                    <Fade left>
                      <span>Trending</span>
                    </Fade>
                    <Fade right>
                      <span className="text-[#F16126]">Categories</span>{" "}
                    </Fade>
                  </h2>
                  <Fade bottom cascade>
                    <p className="mt-1 text-base text-[#77838F]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Amet doloribus ipsam vero eaque, repellendus recusandae
                      aut delectus nostrum reiciendis vel!
                    </p>
                  </Fade>
                </Fade>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <div className="mt-2 flex justify-start lg:mt-5 lg:justify-end">
                <Fade right>
                  <button className="flex items-center gap-2 rounded-md bg-[#F16126] px-4 py-4">
                    <span className="text-white">
                      <FaArrowRight />
                    </span>
                    <span className="text-white">All Categories</span>
                  </button>
                </Fade>
              </div>
            </div>
          </div>
        </div>

        {/* Courses Info */}
        <div className="container mx-auto mt-8 lg:mt-14">
          <div className="grid grid-cols-12 gap-5">
            {categoriesData.slice(0, 4).map((item, index) => (
              <div
                key={index}
                className="col-span-12  md:col-span-6  lg:col-span-3"
              >
                <Categories item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* ============ Map Section ============ */}
      <div className="map py-[50px] md:py-[60px] lg:py-[70px] xl:py-[80px]">
        <div className="container relative mx-auto">
          <div className="grid grid-cols-12 gap-5">
            {countData.map((item, index) => (
              <div key={index} className="col-span-6 md:col-span-3">
                <div className="flex items-center justify-center">
                  <Fade>
                    <div className="text-center">
                      <TrackVisibility once>
                        {({ isVisible }) =>
                          isVisible && (
                            <h2 className="text-[50px] font-semibold text-white xl:text-[60px]">
                              <CountUp delay={0} start={0} end={item.count} />
                            </h2>
                          )
                        }
                      </TrackVisibility>

                      <p className="text-white">{item.tag}</p>
                    </div>
                  </Fade>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* ============ Event Section ============ */}
      <div className="eventSection  py-[50px] md:py-[60px] lg:py-[70px] xl:py-[80px]">
        {/* Heading Text */}
        <div className="container mx-auto ">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 lg:col-span-6">
              <div>
                <Fade>
                  <h2 className="relative z-10 flex gap-3 text-[40px] font-semibold text-[#333]">
                    <Fade left>
                      <span>Upcoming</span>
                    </Fade>
                    <Fade right>
                      <span className="text-[#F16126]">Events</span>{" "}
                    </Fade>
                  </h2>
                  <Fade bottom cascade>
                    <p className="mt-1 text-base text-[#77838F]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Amet doloribus ipsam vero eaque, repellendus recusandae
                      aut delectus nostrum reiciendis vel!
                    </p>
                  </Fade>
                </Fade>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <div className="mt-2 flex justify-start lg:mt-5 lg:justify-end">
                <Fade right>
                  <button className="flex items-center gap-2 rounded-md bg-[#F16126] px-4 py-4">
                    <span className="text-white">
                      <FaArrowRight />
                    </span>
                    <span className="text-white">All Events</span>
                  </button>
                </Fade>
              </div>
            </div>
          </div>
        </div>

        {/* Event Info */}
        <div className="container mx-auto mt-8 lg:mt-14">
          <div className="grid grid-cols-12 gap-5">
            {eventData.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className="col-span-12  md:col-span-6  lg:col-span-4"
              >
                <Event item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* ============ Course Advisor ============ */}
      <div className="courseAdvisor bg-[#F1F1F1] py-[50px] md:py-[60px] lg:py-[70px] xl:py-[80px]">
        {/* Heading Text */}
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 lg:col-span-6">
              <div>
                <Fade>
                  <h2 className="relative z-10 flex gap-3 text-[40px] font-semibold text-[#333]">
                    <Fade left>
                      <span>Course</span>
                    </Fade>
                    <Fade right>
                      <span className="text-[#F16126]">Advisor</span>{" "}
                    </Fade>
                  </h2>
                  <Fade bottom cascade>
                    <p className="mt-1 text-sm text-[#77838F]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Amet doloribus ipsam vero eaque, repellendus recusandae
                      aut delectus nostrum reiciendis vel!
                    </p>
                  </Fade>
                </Fade>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <div className="mt-2 flex justify-start lg:mt-5 lg:justify-end">
                <Fade right>
                  <button className="flex items-center gap-2 rounded-md bg-[#F16126] px-4 py-4">
                    <span className="text-white">
                      <FaArrowRight />
                    </span>
                    <span className="text-white">All Advisor</span>
                  </button>
                </Fade>
              </div>
            </div>
          </div>
        </div>

        {/* Course Advisor Info */}
        <div className="container mx-auto mt-8 lg:mt-14">
          <div className="grid grid-cols-12 gap-5">
            {courseAdvisorData.slice(0, 4).map((item, index) => (
              <div
                key={index}
                className="col-span-12  md:col-span-6  lg:col-span-3"
              >
                <CourseAdvisor item={item} />
              </div>
            ))}
          </div>
        </div>
        {/* Become An Instructor */}

        <div className="container mx-auto mt-12 lg:mt-14">
          <div className="flex justify-center">
            <div className="px-2 text-center md:px-[50px] lg:px-[150px]">
              <Fade bottom>
                <h2 className="text-[35px] font-semibold lg:text-[48px]">
                  Become An Instructor
                </h2>
              </Fade>
              <Fade bottom>
                <p>
                  At Thriving Skills, you can become an instructor at zero cost
                  and earn up to 50% of the revenue share. And we will promote
                  your course on other platforms.
                </p>
              </Fade>

              <div className="mt-6 flex justify-center">
                <Fade bottom>
                  <Link className="my__btn" to={"/"}>
                    <span className="top-key"></span>
                    <span className="text">Appiy for An Instructor</span>
                    <span className="bottom-key-1"></span>
                    <span className="bottom-key-2"></span>
                  </Link>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ============ Register Option ============ */}
      <div className="registerOption  py-[50px] md:py-[60px] lg:py-[70px] xl:py-[80px]">
        {/* Heading Text */}
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 lg:col-span-6">
              <div>
                <Fade left cascade>
                  <div>
                    <h2 className=" text-[35px] font-semibold leading-[40px] xl:text-[40px] xl:leading-[50px]">
                      Get Awesome 80s of online Courses For Free!
                    </h2>
                    <p className="mt-5 text-base leading-relaxed">
                      Software is a set of instructions, data or programs used
                      to operate computers and execute specific tasks.
                    </p>
                    <p className="mt-2 text-base leading-relaxed">
                      We’re living in strange and unpredictable times. Just when
                      we thought things were getting better, another development
                      happens, and it can feel like we’re taking one step
                      forward and three steps back. But hey, enough of that
                      negative talk. Let’s look at the positives as we head into
                      the new year!
                    </p>
                    <div className="relative mt-14 hidden  lg:mt-5 lg:flex ">
                      <div className="item relative top-0 ml-[0] h-[80px] w-[80px]">
                        <img
                          className=" rounded-full border-4 border-[#F16126]"
                          src="Assets/Images/profile/Ellipse_1.png"
                          alt="Next LMS"
                        />
                      </div>
                      <div className="item relative top-0 ml-[-25px] h-[80px] w-[80px]">
                        <img
                          className=" rounded-full border-4 border-[#F16126]"
                          src="Assets/Images/profile/Ellipse_2.png"
                          alt="Next LMS"
                        />
                      </div>
                      <div className="item relative top-0 ml-[-25px] h-[80px] w-[80px]">
                        <img
                          className=" rounded-full border-4 border-[#F16126]"
                          src="Assets/Images/profile/Ellipse_3.png"
                          alt="Next LMS"
                        />
                      </div>
                      <div className="item relative top-0 ml-[-25px] h-[80px] w-[80px]">
                        <img
                          className=" rounded-full border-4 border-[#F16126]"
                          src="Assets/Images/profile/Ellipse_4.png"
                          alt="Next LMS"
                        />
                      </div>
                      <div className="item relative top-0 ml-[-25px] h-[80px] w-[80px]">
                        <img
                          className=" rounded-full border-4 border-[#F16126]"
                          src="Assets/Images/profile/Ellipse_5.png"
                          alt="Next LMS"
                        />
                      </div>
                      <div className="item relative top-0 ml-[-25px] h-[80px] w-[80px]">
                        <img
                          className=" rounded-full border-4 border-[#F16126]"
                          src="Assets/Images/profile/Ellipse_6.png"
                          alt="Next LMS"
                        />
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 lg:pl-10">
              <div className="h-full px-5 py-5 shadow-lg md:px-10 md:py-10">
                <Fade right cascade>
                  <div className="flex h-full items-center">
                    <div>
                      <div className="mb-4">
                        <input
                          className="text-slate-400 w-full rounded-lg border-2 border-[#E9ECEF] px-3 py-3"
                          type="text"
                          placeholder="Email :"
                        />
                      </div>
                      <div className="mb-4 gap-3 lg:flex">
                        <div className="mb-4 lg:mb-0">
                          <input
                            className="text-slate-400 w-full rounded-lg border-2 border-[#E9ECEF] px-3 py-3"
                            type="text"
                            placeholder="First Name :"
                          />
                        </div>
                        <div>
                          <input
                            className="text-slate-400 w-full rounded-lg border-2 border-[#E9ECEF] px-3 py-3"
                            type="text"
                            placeholder="Last Name :"
                          />
                        </div>
                      </div>
                      <div className="mb-4">
                        <input
                          className="text-slate-400 w-full rounded-lg border-2 border-[#E9ECEF] px-3 py-3"
                          type="text"
                          placeholder="Subject :"
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          className="text-slate-400 w-full rounded-lg border-2 border-[#E9ECEF] px-3 py-3"
                          type="text"
                          placeholder="Phone :"
                        />
                      </div>
                      <div>
                        <button className="flex items-center gap-2 rounded-md bg-[#F16126] px-4 py-4">
                          <span className="text-white">
                            <FaArrowRight />
                          </span>
                          <span className="text-white">Register Now</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ============ Blog Posts ============ */}
      <div className="blogSection bg-[#F1F1F1] py-[50px] md:py-[60px] lg:py-[70px] xl:py-[80px]">
        {/* Heading Text */}
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 lg:col-span-6">
              <div>
                <Fade>
                  <h2 className="relative z-10 flex gap-3 text-[40px] font-semibold text-[#333]">
                    <Fade left>
                      <span>Blog</span>
                    </Fade>
                    <Fade right>
                      <span className="text-[#F16126]">Posts</span>{" "}
                    </Fade>
                  </h2>
                  <Fade bottom cascade>
                    <p className="mt-1 text-base text-[#77838F]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Amet doloribus ipsam vero eaque, repellendus recusandae
                      aut delectus nostrum reiciendis vel!
                    </p>
                  </Fade>
                </Fade>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <div className="mt-2 flex justify-start lg:mt-5 lg:justify-end">
                <Fade right>
                  <button className="flex items-center gap-2 rounded-md bg-[#F16126] px-4 py-4">
                    <span className="text-white">
                      <FaArrowRight />
                    </span>
                    <span className="text-white">All Blog Post</span>
                  </button>
                </Fade>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Data */}
        <div className="container mx-auto mt-12 lg:mt-14">
          <div className="grid grid-cols-12 lg:gap-2 xl:gap-5">
            {blogData.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className="col-span-12  mb-20  md:col-span-6 lg:col-span-4"
              >
                <Blog item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* ============ Students Says ============ */}
      <div className="studentsSays  py-[50px] md:py-[60px] lg:py-[70px] xl:py-[80px]">
        {/* Heading Text */}
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 lg:col-span-6">
              <div>
                <Fade>
                  <h2 className="relative z-10 flex gap-3 text-[40px] font-semibold text-[#333]">
                    <Fade left>
                      <span>Students</span>
                    </Fade>
                    <Fade right>
                      <span className="text-[#F16126]">Says</span>{" "}
                    </Fade>
                  </h2>
                  <Fade bottom cascade>
                    <p className="mt-1 text-base text-[#77838F]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Amet doloribus ipsam vero eaque, repellendus recusandae
                      aut delectus nostrum reiciendis vel!
                    </p>
                  </Fade>
                </Fade>
              </div>
            </div>
          </div>
        </div>

        {/* Students Data */}
        <div className="container mx-auto mt-10">
          <div className="gap-5">
            <Slider {...settings}>
              {studentsSaysData.map((item, index) => (
                <div key={index}>
                  <Fade>
                    <StudentsSays item={item} />
                  </Fade>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      {/* ============ NewsLetter ============ */}
      <div className="mt-[30px]">
        <NewsLetter />
      </div>
      {/* ============ Footer Section ============ */}
      <Footer />
    </section>
  );
};

export default HomeComponent;
