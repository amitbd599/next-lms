import React from "react";
import courseAdvisorData from "../../Database/courseAdvisorData";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import IntroSection from "../Common/IntroSection";
import NewsLetter from "../Common/NewsLetter";
import CourseAdvisor from "../ChildComponents/Elements/CourseAdvisor";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
const CourseAdvisorComponent = () => {
  return (
    <section>
      {/* ============ Header Section ============*/}
      <Header />
      {/* ============ Intro Section ============*/}
      <IntroSection title={"Course Advisor"} />
      {/* ============ Course Advisor ============ */}
      <div className="courseAdvisor gridCourses py-[50px] md:py-[60px] lg:py-[70px] xl:py-[80px]">
        {/* Courses Info */}
        <div className="container mx-auto lg:mt-14">
          <div className="grid grid-cols-12 gap-5">
            {courseAdvisorData.map((item, index) => (
              <div
                key={index}
                className="col-span-12 mb-4 md:col-span-6 lg:col-span-4"
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
      {/* ============ NewsLetter ============ */}
      <NewsLetter />
      {/* ============ Footer Section ============ */}
      <Footer />
    </section>
  );
};

export default CourseAdvisorComponent;
