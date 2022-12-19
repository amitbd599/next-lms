import React from "react";
import {
  FaEnvelope,
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaPhoneAlt,
  FaSkype,
  FaStar,
  FaTwitterSquare,
} from "react-icons/fa";
import courseAdvisorAllCourse from "../../Database/courseAdvisorAllCourse";
import FeatureCourseGrid from "../ChildComponents/Elements/FeatureCourseGrid";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import IntroSection from "../Common/IntroSection";
import NewsLetter from "../Common/NewsLetter";
import { MdOutlineLanguage } from "react-icons/md";
import { Fade } from "react-reveal";
const CourseAdvisorDetailsComponent = () => {
  return (
    <section>
      {/* ============ Header Section ============*/}
      <Header />
      {/* ============ Intro Section ============*/}
      <IntroSection title={"Advisor Details"} />
      {/* ============ Advisor Details Section ============ */}
      <div className="advisorDetails gridCourses py-[50px] md:py-[60px] lg:py-[70px] xl:py-[80px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-3 lg:gap-6">
            <div className="col-span-12 mt-14 pr-16 lg:col-span-4">
              <div>
                <div className='img__file relative z-10 after:absolute after:top-[-20px] after:left-[20px] after:z-[-10] after:h-full after:w-full after:rounded-md after:bg-[#F16126] after:content-[""]'>
                  <Fade>
                    <img
                      className="w-full rounded-md object-cover"
                      src="/Assets/Images/advisors/Advisor_5.png"
                      alt="Next LMS"
                    />
                  </Fade>
                  <Fade>
                    <span className="shape absolute top-[-54px] right-[-60px] z-[-10]">
                      <img
                        src="/Assets/Images/shape/shape_12.png"
                        alt="Next LMS"
                      />
                    </span>
                  </Fade>
                </div>

                <div>
                  <div className="mt-8">
                    <Fade bottom>
                      <h2 className="mb-2 border-b border-[#E9ECEF] text-lg font-semibold">
                        Personal Info :
                      </h2>
                    </Fade>

                    <div>
                      <ul>
                        <Fade bottom>
                          <li className="mb-1 text-sm font-medium">
                            <span className="font-medium text-[#333]">
                              Name :
                            </span>{" "}
                            Alex Jhona
                          </li>
                        </Fade>
                        <Fade bottom>
                          <li className="mb-1 text-sm">
                            <span className="font-medium text-[#333]">
                              Profession :
                            </span>{" "}
                            Associate Professor
                          </li>
                        </Fade>
                        <Fade bottom>
                          <li className="mb-1 text-sm">
                            <span className="font-medium text-[#333]">
                              Total courses :
                            </span>{" "}
                            165
                          </li>
                        </Fade>
                        <Fade bottom>
                          <li className="mb-1 text-sm">
                            <span className="font-medium text-[#333]">
                              Language :
                            </span>{" "}
                            English, France
                          </li>
                        </Fade>
                        <Fade bottom>
                          <li className="mb-1 text-sm">
                            <span className="font-medium text-[#333]">
                              Category :
                            </span>{" "}
                            Science, Programming
                          </li>
                        </Fade>
                        <Fade bottom>
                          <li className="mb-1 flex items-center gap-1 text-sm">
                            <span className="font-medium text-[#333]">
                              Reviews :
                            </span>{" "}
                            <div className="flex gap-0.5">
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
                            <div>
                              <span>(15K)</span>
                            </div>
                          </li>
                        </Fade>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Fade bottom>
                      <h2 className="mb-2 border-b border-[#E9ECEF] text-lg font-semibold">
                        Author bio :
                      </h2>
                    </Fade>

                    <div>
                      <Fade bottom>
                        <p className="text-sm leading-relaxed">
                          I had a volunteer coordinator at ANAS and interned as
                          a .Net Developer at Gadimlie Studio. I have about 3
                          years of experience in managing a small private
                          business. In addition, I participated in ATESH
                          insurance pieces training.
                        </p>
                      </Fade>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Fade bottom>
                      <h2 className="mb-2 border-b border-[#E9ECEF] text-lg font-semibold">
                        Qualifications :
                      </h2>
                    </Fade>

                    <div>
                      <ul>
                        <Fade bottom>
                          <li className="mb-1 text-sm ">BSC in CSE</li>
                        </Fade>
                        <Fade bottom>
                          <li className="mb-1 text-sm ">
                            United International University
                          </li>
                        </Fade>
                        <Fade bottom>
                          <li className="mb-1 text-sm ">BSC in CSE</li>
                        </Fade>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Fade bottom>
                      <h2 className="mb-2 border-b border-[#E9ECEF] text-lg font-semibold">
                        Experience :
                      </h2>
                    </Fade>

                    <div>
                      <ul>
                        <Fade bottom>
                          <li className="mb-1 text-sm ">
                            Criptio IT Company (4 years)
                          </li>
                        </Fade>
                        <Fade bottom>
                          <li className="mb-1 text-sm ">
                            IBM 89 USA (2 years)
                          </li>
                        </Fade>
                        <Fade bottom>
                          <li className="mb-1 text-sm ">
                            Matrix Solo (6 years)
                          </li>
                        </Fade>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Fade bottom>
                      <h2 className="mb-2 border-b border-[#E9ECEF] text-lg font-semibold">
                        Contact Info :
                      </h2>
                    </Fade>

                    <div>
                      <ul>
                        <Fade bottom>
                          <li className="mb-1 flex items-center gap-2 text-sm">
                            <span>
                              <FaEnvelope />
                            </span>
                            <span>info@demo.com</span>
                          </li>
                        </Fade>

                        <Fade bottom>
                          <li className="mb-1 flex items-center gap-2 text-sm">
                            <span>
                              <FaPhoneAlt />
                            </span>
                            <span>info@demo.com</span>
                          </li>
                        </Fade>

                        <Fade bottom>
                          <li className="mb-1 flex items-center gap-2 text-sm">
                            <span>
                              <FaSkype />
                            </span>
                            <span>alex-web</span>
                          </li>
                        </Fade>

                        <Fade bottom>
                          <li className="mb-1 flex items-center gap-2 text-sm">
                            <span>
                              <MdOutlineLanguage />
                            </span>
                            <span>https://alexweb.com</span>
                          </li>
                        </Fade>

                        <Fade bottom>
                          <li className="mb-1 mt-2">
                            <div className="flex gap-1">
                              <a href="#" className="p-0.5">
                                <FaFacebookSquare className="text-[25px] text-[#77838F] duration-300 ease-in-out hover:text-[#F16126]" />
                              </a>
                              <a href="#" className="p-0.5">
                                <FaTwitterSquare className="text-[25px] text-[#77838F] duration-300 ease-in-out hover:text-[#F16126]" />
                              </a>
                              <a href="#" className="p-0.5">
                                <FaLinkedin className="text-[25px] text-[#77838F] duration-300 ease-in-out hover:text-[#F16126]" />
                              </a>
                              <a href="#" className="p-0.5">
                                <FaInstagramSquare className="text-[25px] text-[#77838F] duration-300 ease-in-out hover:text-[#F16126]" />
                              </a>
                            </div>
                          </li>
                        </Fade>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 pl-4 lg:col-span-8">
              <div className="grid grid-cols-12 gap-4">
                {courseAdvisorAllCourse.map((item, index) => (
                  <div key={index} className="col-span-12 md:col-span-6">
                    <FeatureCourseGrid item={item} />
                  </div>
                ))}
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

export default CourseAdvisorDetailsComponent;
