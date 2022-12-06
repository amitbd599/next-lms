import React from "react";
import courseAdvisorData from "../../Database/courseAdvisorData";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import IntroSection from "../Common/IntroSection";
import NewsLetter from "../Common/NewsLetter";
import CourseAdvisor from "../ChildComponents/Elements/CourseAdvisor";
import { Link } from "react-router-dom";
const CourseAdvisorComponent = () => {
  return (
    <section>
      {/* ============ Header Section ============*/}
      <Header />
      {/* ============ Intro Section ============*/}
      <IntroSection title={"Course Advisor"} />
      {/* ============ Course Advisor ============ */}
      <div className='courseAdvisor gridCourses py-[80px]'>
        {/* Courses Info */}
        <div className='container mx-auto mt-14'>
          <div className='grid grid-cols-12 gap-5'>
            {courseAdvisorData.map((item, index) => (
              <div key={index} className='col-span-4 mb-4'>
                <CourseAdvisor item={item} />
              </div>
            ))}
          </div>
        </div>
        {/* Become An Instructor */}

        <div className='container mx-auto mt-14 pb-5'>
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
      {/* ============ NewsLetter ============ */}
      <NewsLetter />
      {/* ============ Footer Section ============ */}
      <Footer />
    </section>
  );
};

export default CourseAdvisorComponent;
