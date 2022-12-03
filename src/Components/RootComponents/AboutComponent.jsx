import React from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
import Marquee from "react-fast-marquee";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import IntroSection from "../Common/IntroSection";
import NewsLetter from "../Common/NewsLetter";
import { FaArrowRight, FaBuffer } from "react-icons/fa";
import courseAdvisorData from "../../Database/courseAdvisorData";
import CourseAdvisor from "../ChildComponents/Elements/CourseAdvisor";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import studentsSaysData from "../../Database/studentsSaysData";
import StudentsSays from "../ChildComponents/Elements/StudentsSays";
const AboutComponent = () => {
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
      {/* ============ Intro Section ============*/}
      <IntroSection title={"About US"} />

      {/* ============ About Details  ============*/}
      <div className='aboutDetails py-[80px] mt-[60px]'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-12 gap-5'>
            <div className='col-span-6'>
              <div>
                <div className='img__section relative'>
                  <div className='relative w-[420px] after:absolute after:content-[""] after:bg-[#F16126] after:left-[20px] after:top-[20px] after:rounded-md after:w-full after:h-full after:z-[-99]'>
                    <img
                      className='w-[420px] rounded-md'
                      src='/Assets/Images/aboutInfo.png'
                      alt=''
                    />
                  </div>
                  <div className='shape_1'>
                    <img
                      className='w-[120px] object-cover'
                      src='/Assets/Images/shape/shape_8.png'
                      alt=''
                    />
                  </div>
                  <div className='shape_2'>
                    <img
                      className='w-[220px] object-cover'
                      src='/Assets/Images/shape/shape_9.png'
                      alt=''
                    />
                  </div>
                  <div className='text_shape'>
                    <TrackVisibility once>
                      {({ isVisible }) =>
                        isVisible && (
                          <p className='text-white text-[40px] font-bold'>
                            <span className='w-[68px] inline-block'>
                              <CountUp delay={0} start={0} end={190} />
                            </span>
                            +
                          </p>
                        )
                      }
                    </TrackVisibility>
                    <p className='text-white mt-[-10px] leading-5'>
                      Services <br /> We Provide
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-span-6'>
              <div>
                <div>
                  <h2 className='text-[24px] font-semibold text-[#F16126] tracking-[6px]'>
                    ABOUT OUR NEXT LMS
                  </h2>
                  <h3 className='text-[40px] font-semibold leading-[45px] mt-4'>
                    Education system consists of excellent education and ideals.
                  </h3>
                  <p className='mt-4 leading-relaxed'>
                    An education system refers to the economic and social
                    factors that typically make up public schools at the
                    federal, state or community levels. Such factors include
                    public funding, school facilities, staffing.
                  </p>
                  <div>
                    <ul className='list-disc pl-8 mt-4'>
                      <li>
                        The term education system generally refers to public
                        schooling.
                      </li>
                      <li>
                        A successful system clearly defines, in measurable
                        terms.
                      </li>
                      <li>Those who get an education have higher incomes.</li>
                      <li>
                        The government should provide more funding to the
                        education sector.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============  Popular Courses ============ */}
      <div className='aboutDetails bg-[#F1F1F1] py-[80px] mt-[60px]'>
        {/* Heading Text */}
        <div className='container mx-auto '>
          <div className='grid grid-cols-12 gap-5'>
            <div className='col-span-6'>
              <div>
                <div>
                  <h2 className='text-[40px] relative font-semibold text-[#333] inline z-10'>
                    Our Popular Courses
                    <span>
                      <img
                        className='w-[140px]  absolute top-[4px] right-0 z-[-10]'
                        src='/Assets/Images/shape/shape_6.png'
                        alt=''
                      />
                    </span>
                  </h2>

                  <p className='text-[#77838F] mt-1'>
                    Education shapes the skills, attitudes, and beliefs of the
                    individual and plays a role in shaping the norms and values
                    of a particular society.
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
                  <span className='text-white'>View All Courses</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='container mx-auto mt-20'>
          <div className='grid grid-cols-12 gap-6'>
            <div className='col-span-4 '>
              <div className='flex justify-center bg-white shadow-xl rounded-lg px-5 py-10'>
                <div>
                  <div className='flex justify-center'>
                    <FaBuffer className='text-[50px] text-[#F16126]' />
                  </div>
                  <div className='text-center'>
                    <h2 className='text-[35px] font-semibold'>JavaScript</h2>
                    <p className='leading-relaxed mt-1'>
                      People misled by false beliefs do more harm than good to
                      society. Education helps us question, gives us an
                      analytical mind and helps us reject superstitions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-span-4 '>
              <div className='flex justify-center bg-[#002147] shadow-xl rounded-lg px-5 py-10 mt-[-20px]'>
                <div>
                  <div className='flex justify-center'>
                    <FaBuffer className='text-[50px] text-[#fff]' />
                  </div>
                  <div className='text-center'>
                    <h2 className='text-[35px] font-semibold text-[#fff]'>
                      PHP
                    </h2>
                    <p className='leading-relaxed mt-1 text-[#fff]'>
                      People misled by false beliefs do more harm than good to
                      society. Education helps us question, gives us an
                      analytical mind and helps us reject superstitions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-span-4 '>
              <div className='flex justify-center bg-white shadow-xl rounded-lg px-5 py-10'>
                <div>
                  <div className='flex justify-center'>
                    <FaBuffer className='text-[50px] text-[#F16126]' />
                  </div>
                  <div className='text-center'>
                    <h2 className='text-[35px] font-semibold'>Python</h2>
                    <p className='leading-relaxed mt-1'>
                      People misled by false beliefs do more harm than good to
                      society. Education helps us question, gives us an
                      analytical mind and helps us reject superstitions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ============ Course Advisor ============ */}
      <div className='courseAdvisor py-[80px]'>
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
      {/* ============ Students Says ============ */}
      <div className='studentsSays bg-[#F1F1F1]  py-[80px]'>
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
      {/* ============ Our Partner ============ */}
      <div className='ourPartner  py-[80px]'>
        {/* Heading Text */}
        <div className='container mx-auto'>
          <div className='grid grid-cols-12 gap-5'>
            <div className='col-span-6'>
              <div>
                <div>
                  <h2 className='text-[40px] relative font-semibold text-[#333] inline z-10'>
                    Our Partner
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
        {/* Partner Info */}
        <div className=' mx-auto mt-14'>
          <div className=''>
            <Marquee gradientColor={[241, 241, 241]}>
              <div className='mx-10'>
                <img src='Assets/Images/partner/partner_1.png' alt='' />
              </div>
              <div className='mx-10'>
                <img src='Assets/Images/partner/partner_2.png' alt='' />
              </div>
              <div className='mx-10'>
                <img src='Assets/Images/partner/partner_3.png' alt='' />
              </div>
              <div className='mx-10'>
                <img src='Assets/Images/partner/partner_4.png' alt='' />
              </div>
              <div className='mx-10'>
                <img src='Assets/Images/partner/partner_5.png' alt='' />
              </div>
              <div className='mx-10'>
                <img src='Assets/Images/partner/partner_6.png' alt='' />
              </div>
              <div className='mx-10'>
                <img src='Assets/Images/partner/partner_7.png' alt='' />
              </div>
            </Marquee>
          </div>
        </div>
      </div>

      {/* ============ NewsLetter ============ */}
      <div>
        <NewsLetter />
      </div>
      {/* ============ Footer Section ============ */}
      <div>
        <Footer />
      </div>
    </section>
  );
};

export default AboutComponent;
