import React from "react";
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
import { Fade } from "react-reveal";
const AboutComponent = () => {
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
      {/* ============ Intro Section ============*/}
      <IntroSection title={"About US"} />

      {/* ============ About Details  ============*/}
      <div className="aboutDetails mt-[40px] overflow-hidden pt-[80px]  md:py-[60px] lg:py-[70px] xl:py-[80px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 md:pr-[120px] lg:col-span-6">
              <div>
                <Fade>
                  <div className="img__section relative flex justify-center lg:block">
                    <div className='relative w-full after:absolute after:left-[20px] after:top-[20px] after:z-[-99] after:h-full after:w-full after:rounded-md after:bg-[#F16126] after:content-[""] '>
                      <img
                        className="w-full rounded-md object-cover"
                        src="/Assets/Images/aboutInfo.png"
                        alt=""
                      />
                    </div>
                    <div className="shape_1 hidden sm:block">
                      <img
                        className="w-[120px] object-cover"
                        src="/Assets/Images/shape/shape_8.png"
                        alt=""
                      />
                    </div>
                    <div className="shape_2">
                      <img
                        className="w-[220px] object-cover"
                        src="/Assets/Images/shape/shape_9.png"
                        alt=""
                      />
                    </div>
                    <div className="text_shape">
                      <p className="text-[40px] font-bold text-white">
                        <span className="inline-block w-[68px]">
                          <CountUp delay={0} start={0} end={190} />
                        </span>
                        +
                      </p>
                      <p className="mt-[-10px] leading-5 text-white">
                        Services <br /> We Provide
                      </p>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <div className="mt-[40px] md:mt-[40px] lg:mt-0">
                <h2 className="text-[24px] font-semibold tracking-[6px] text-[#F16126]">
                  <Fade bottom>ABOUT OUR NEXT LMS</Fade>
                </h2>
                <h3 className="mt-4 text-[30px]  font-semibold leading-[35px] md:text-[40px] md:leading-[45px]">
                  <Fade bottom>
                    Education system consists of excellent education and ideals.
                  </Fade>
                </h3>
                <Fade bottom>
                  <p className="mt-4 leading-relaxed">
                    An education system refers to the economic and social
                    factors that typically make up public schools at the
                    federal, state or community levels. Such factors include
                    public funding, school facilities, staffing.
                  </p>
                </Fade>
                <div>
                  <Fade bottom>
                    <ul className="mt-4 list-disc pl-8">
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
                      <li>
                        Repellendus recusandae aut delectus nostrum reiciendis.
                      </li>
                    </ul>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============  Popular Courses ============ */}
      <div className="aboutDetails mt-[60px] bg-[#F1F1F1] py-[50px] md:py-[60px] lg:py-[70px] xl:py-[80px]">
        {/* Heading Text */}
        <div className="container mx-auto ">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 lg:col-span-6">
              <div>
                <h2 className="relative z-10 flex gap-3 text-[32px] font-semibold text-[#333] md:text-[40px]">
                  <Fade bottom>
                    <span>Popular</span>
                    <span className="text-[#F16126]">Courses</span>{" "}
                  </Fade>
                </h2>
                <Fade bottom>
                  <p className="mt-1 text-base text-[#77838F]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Amet doloribus ipsam vero eaque, repellendus recusandae aut
                    delectus nostrum reiciendis vel!
                  </p>
                </Fade>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <div className="mt-2 flex justify-start lg:mt-5 lg:justify-end">
                <Fade bottom>
                  <Link
                    to={"/course-grid-page"}
                    className="flex items-center gap-2 rounded-md bg-[#F16126] px-4 py-4"
                  >
                    <span className="text-white">
                      <FaArrowRight />
                    </span>
                    <span className="text-white">View All Courses</span>
                  </Link>
                </Fade>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-10 lg:mt-20">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-4">
              <Fade bottom>
                <div className="flex justify-center rounded-lg bg-white px-5 py-10 shadow-xl">
                  <div>
                    <div className="flex justify-center">
                      <FaBuffer className="text-[50px] text-[#F16126]" />
                    </div>
                    <div className="text-center">
                      <h2 className="text-[35px] font-semibold">JavaScript</h2>
                      <p className="mt-1 leading-relaxed">
                        People misled by false beliefs do more harm than good to
                        society. Education helps us question, gives us an
                        analytical mind and helps us reject superstitions.
                      </p>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-4">
              <Fade bottom>
                <div className="flex justify-center rounded-lg bg-[#002147] px-5 py-10 shadow-xl lg:mt-[-20px]">
                  <div>
                    <div className="flex justify-center">
                      <FaBuffer className="text-[50px] text-[#fff]" />
                    </div>
                    <div className="text-center">
                      <h2 className="text-[35px] font-semibold text-[#fff]">
                        PHP
                      </h2>
                      <p className="mt-1 leading-relaxed text-[#fff]">
                        People misled by false beliefs do more harm than good to
                        society. Education helps us question, gives us an
                        analytical mind and helps us reject superstitions.
                      </p>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-4">
              <Fade bottom>
                <div className="flex justify-center rounded-lg bg-white px-5 py-10 shadow-xl">
                  <div>
                    <div className="flex justify-center">
                      <FaBuffer className="text-[50px] text-[#F16126]" />
                    </div>
                    <div className="text-center">
                      <h2 className="text-[35px] font-semibold">Python</h2>
                      <p className="mt-1 leading-relaxed">
                        People misled by false beliefs do more harm than good to
                        society. Education helps us question, gives us an
                        analytical mind and helps us reject superstitions.
                      </p>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      {/* ============ Course Advisor ============ */}
      <div className="courseAdvisor py-[50px] md:py-[60px] lg:py-[70px] xl:py-[80px]">
        {/* Heading Text */}
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 lg:col-span-6">
              <div>
                <h2 className="relative z-10 flex gap-3 text-[32px] font-semibold text-[#333] md:text-[40px]">
                  <Fade bottom>
                    <span>Course</span>
                    <span className="text-[#F16126]">Advisor</span>{" "}
                  </Fade>
                </h2>
                <Fade bottom>
                  <p className="mt-1 text-base text-[#77838F]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Amet doloribus ipsam vero eaque, repellendus recusandae aut
                    delectus nostrum reiciendis vel!
                  </p>
                </Fade>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <div className="mt-2 flex justify-start lg:mt-5 lg:justify-end">
                <Fade bottom>
                  <Link
                    to={"/course-advisor"}
                    className="flex items-center gap-2 rounded-md bg-[#F16126] px-4 py-4"
                  >
                    <span className="text-white">
                      <FaArrowRight />
                    </span>
                    <span className="text-white">All Advisor</span>
                  </Link>
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
        {/* Become An Advisor */}
        <div className="container mx-auto mt-12 lg:mt-14">
          <div className="flex justify-center">
            <div className="px-2 text-center md:px-[50px] lg:px-[150px]">
              <h2 className="text-[28px] font-semibold sm:text-[35px] lg:text-[48px]">
                <Fade bottom>Become An Advisor</Fade>
              </h2>
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
                    <span className="text">Apply for An Advisor</span>
                    <span className="bottom-key-1"></span>
                    <span className="bottom-key-2"></span>
                  </Link>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ============ Students Says ============ */}
      <div className="studentsSays bg-[#F1F1F1]  py-[50px] md:py-[60px] lg:py-[70px] xl:py-[80px]">
        {/* Heading Text */}
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 lg:col-span-6">
              <div>
                <h2 className="relative z-10 flex gap-3 text-[32px] font-semibold text-[#333] md:text-[40px]">
                  <Fade bottom>
                    <span>Students</span>
                    <span className="text-[#F16126]">Says</span>{" "}
                  </Fade>
                </h2>
                <Fade bottom>
                  <p className="mt-1 text-base text-[#77838F]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Amet doloribus ipsam vero eaque, repellendus recusandae aut
                    delectus nostrum reiciendis vel!
                  </p>
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
      {/* ============ Our Partner ============ */}
      <div className="ourPartner  py-[50px] md:py-[60px] lg:py-[70px] xl:py-[80px]">
        {/* Heading Text */}
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 lg:col-span-6">
              <div>
                <h2 className="relative z-10 flex gap-3 text-[32px] font-semibold text-[#333] md:text-[40px]">
                  <Fade bottom>
                    <span>Our</span>
                    <span className="text-[#F16126]">Partner</span>{" "}
                  </Fade>
                </h2>
                <Fade bottom>
                  <p className="mt-1 text-base text-[#77838F]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Amet doloribus ipsam vero eaque, repellendus recusandae aut
                    delectus nostrum reiciendis vel!
                  </p>
                </Fade>
              </div>
            </div>
          </div>
        </div>
        {/* Partner Info */}
        <div className=" mx-auto mt-14">
          <div>
            <Fade>
              <Marquee gradientColor={[255, 255, 255]}>
                <div className="mx-10">
                  <img src="Assets/Images/partner/partner_1.png" alt="" />
                </div>
                <div className="mx-10">
                  <img src="Assets/Images/partner/partner_2.png" alt="" />
                </div>
                <div className="mx-10">
                  <img src="Assets/Images/partner/partner_3.png" alt="" />
                </div>
                <div className="mx-10">
                  <img src="Assets/Images/partner/partner_4.png" alt="" />
                </div>
                <div className="mx-10">
                  <img src="Assets/Images/partner/partner_5.png" alt="" />
                </div>
                <div className="mx-10">
                  <img src="Assets/Images/partner/partner_6.png" alt="" />
                </div>
                <div className="mx-10">
                  <img src="Assets/Images/partner/partner_7.png" alt="" />
                </div>
                <div className="mx-10">
                  <img src="Assets/Images/partner/partner_1.png" alt="" />
                </div>
                <div className="mx-10">
                  <img src="Assets/Images/partner/partner_2.png" alt="" />
                </div>
                <div className="mx-10">
                  <img src="Assets/Images/partner/partner_3.png" alt="" />
                </div>
                <div className="mx-10">
                  <img src="Assets/Images/partner/partner_4.png" alt="" />
                </div>
                <div className="mx-10">
                  <img src="Assets/Images/partner/partner_5.png" alt="" />
                </div>
                <div className="mx-10">
                  <img src="Assets/Images/partner/partner_6.png" alt="" />
                </div>
                <div className="mx-10">
                  <img src="Assets/Images/partner/partner_7.png" alt="" />
                </div>
              </Marquee>
            </Fade>
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
