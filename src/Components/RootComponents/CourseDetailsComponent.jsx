import React from "react";
import {
  FaBookReader,
  FaDollarSign,
  FaGlobe,
  FaHistory,
  FaRegStar,
  FaStar,
  FaTags,
  FaUserAlt,
  FaUserGraduate,
} from "react-icons/fa";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import IntroSection from "../Common/IntroSection";
import NewsLetter from "../Common/NewsLetter";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Progress } from "@material-tailwind/react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "react-tabs/style/react-tabs.css";
import courseContentData from "../../Database/courseContentData";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
import VideoModal from "../ChildComponents/Elements/VideoModal";
const CourseDetailsComponent = () => {
  return (
    <section>
      {/* ============ Header Section ============*/}
      <Header />
      {/* ============ Intro Section ============*/}
      <IntroSection title={"Courses Details"} />
      {/* ============ Grid Courses Section ============ */}
      <div className="coursesDetails gridCourses py-[50px] md:py-[60px] lg:py-[70px] xl:py-[80px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-3 xl:gap-6">
            <div className="relative  col-span-12 lg:col-span-8">
              {/* Intro Advisor */}
              <div className="rounded-md bg-[#002147] px-3 py-8 shadow-lg sm:px-5 md:px-10">
                <div>
                  <Fade bottom>
                    <h2 className="text-[25px] font-semibold text-white md:text-[35px]">
                      All You Need To Know About MERN Stack
                    </h2>
                  </Fade>
                </div>
                <div className="mt-4 flex gap-2 sm:gap-4 md:mt-6">
                  <div>
                    <Fade bottom>
                      <img
                        className="w-[60px] rounded-full sm:w-[80px] "
                        src="/Assets/Images/advisors/Advisor_1.png"
                        alt="Next LMS"
                      />
                    </Fade>
                  </div>
                  <div>
                    <Fade bottom>
                      <h3 className="text-lg text-white">By Alex Norton</h3>
                    </Fade>
                    <Fade bottom>
                      <p className="text-sm text-white">
                        JavaScript Programmer
                      </p>
                    </Fade>
                    <Fade bottom>
                      <div className="flex items-center gap-3">
                        <div>
                          <div className="flex ">
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
                        </div>
                        <div>
                          <span className="text-sm text-white">
                            (720 Rating)
                          </span>
                        </div>
                      </div>
                    </Fade>
                  </div>
                </div>
              </div>
              {/* Item Overview */}
              <div className="itemOverview mt-8 lg:mt-10 xl:mt-14">
                <div>
                  <>
                    <Tabs>
                      <TabList>
                        {/* Tab Header Overview */}
                        <Tab>Overview</Tab>
                        {/* Tab Header Curriculum */}
                        <Tab>Curriculum</Tab>
                        {/* Tab Header Instructor */}
                        <Tab>Instructor</Tab>
                        {/* Tab Header Reviews */}
                        <Tab>Reviews</Tab>
                      </TabList>
                      {/* TabPanel Overview */}
                      <TabPanel>
                        <Fade>
                          <div className="mb-10">
                            <div>
                              <h2 className="text-[25px] font-medium">
                                MERN Stack Full Form
                              </h2>
                              <p className="mt-3 text-sm leading-relaxed">
                                MERN stack is a collection of technologies that
                                enables faster application development. It is
                                used by developers worldwide. The main purpose
                                of using MERN stack is to develop apps using
                                JavaScript only. This is because the four
                                technologies that make up the technology stack
                                are all JS-based. Thus, if one knows JavaScript
                                (and JSON), the backend, frontend, and database
                                can be operated easily.
                              </p>
                            </div>
                            <div className="mt-6">
                              <h2 className="text-[25px] font-medium">
                                MERN Stack Components
                              </h2>
                              <div className="mt-3">
                                <ul className="list-disc pl-8">
                                  <li className="text-sm leading-relaxed">
                                    The first component is MongoDB, which is a
                                    NoSQL database management system.
                                  </li>
                                  <li className="text-sm leading-relaxed">
                                    The second MERN stack component is
                                    ExpressJS. It is a backend web application
                                    framework for NodeJS.
                                  </li>
                                  <li className="text-sm leading-relaxed">
                                    The third component is ReactJS, a JavaScript
                                    library for developing UIs based on UI
                                    components.
                                  </li>
                                  <li className="text-sm leading-relaxed">
                                    The final component of the MERN stack is
                                    NodeJS. It is a JS runtime environment,
                                    i.e., it enables running JavaScript code
                                    outside the browser.
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="mt-6">
                              <h2 className="text-[25px] font-medium">
                                MongoDB
                              </h2>
                              <p className="mt-3 text-sm leading-relaxed">
                                MongoDB is a NoSQL DBMS where data is stored in
                                the form of documents having key-value pairs
                                similar to JSON objects. MongoDB enables users
                                to create databases, schemas, and tables. It
                                offers the Mongo shell that provides a JS
                                interface for deleting, querying, and updating
                                the records.
                              </p>
                            </div>
                            <div className="mt-6">
                              <h2 className="text-[25px] font-medium">
                                ExpressJS
                              </h2>
                              <p className="mt-3 text-sm leading-relaxed">
                                MongoDB is a NoSQL DBMS where data is stored in
                                the form of documents having key-value pairs
                                similar to JSON objects. MongoDB enables users
                                to create databases, schemas, and tables. It
                                offers the Mongo shell that provides a JS
                                interface for deleting, querying, and updating
                                the records.
                              </p>
                            </div>
                            <div className="mt-6">
                              <h2 className="text-[25px] font-medium">
                                ReactJS
                              </h2>
                              <p className="mt-3 text-sm leading-relaxed">
                                ReactJS is a JS library that allows the
                                development of user interfaces for mobile apps
                                and SPAs. It allows you to code JavaScript and
                                develop UI components. The JS library uses
                                virtual DOM for doing everything.
                              </p>
                            </div>
                            <div className="mt-6">
                              <h2 className="text-[25px] font-medium">
                                NodeJS
                              </h2>
                              <p className="mt-3 text-sm leading-relaxed">
                                NodeJS is an open-source JavaScript runtime
                                environment that allows users to run code on the
                                server. It comes with the node package manager
                                or npm, enabling users to select from a wide
                                selection of node modules or packages. Being
                                developed on the Chrome JavaScript Engine
                                enables Node to execute code faster.
                              </p>
                            </div>
                          </div>
                        </Fade>
                      </TabPanel>
                      {/* TabPanel Curriculum */}
                      <TabPanel>
                        <div>
                          <Fade>
                            <div>
                              <h2 className="text-[20px] font-medium sm:text-[25px]">
                                Getting Started with MERN Stack Development
                              </h2>
                              <p className="mt-3 text-sm leading-relaxed">
                                MERN stack is a collection of technologies that
                                enables faster application development. It is
                                used by developers worldwide. The main purpose
                                of using MERN stack is to develop apps using
                                JavaScript only. This is because the four
                                technologies that make up the technology stack
                                are all JS-based. Thus, if one knows JavaScript
                                (and JSON), the backend, frontend, and database
                                can be operated easily.
                              </p>
                            </div>
                          </Fade>

                          <div className="mt-5">
                            <Fade>
                              <div>
                                <h2 className="text-[25px] font-medium">
                                  Course Content
                                </h2>
                              </div>
                            </Fade>
                            <Fade>
                              <div className="mt-5">
                                <div className="flex gap-2">
                                  <span className="text-[14px]">
                                    30 sections{" "}
                                  </span>
                                  <span className="text-[14px]">
                                    120 lectures{" "}
                                  </span>
                                </div>
                              </div>
                            </Fade>

                            {/* Course Accordion */}
                            <div className="mt-2">
                              <>
                                <div>
                                  <Accordion allowZeroExpanded>
                                    {courseContentData.map((item, index) => (
                                      <AccordionItem key={index}>
                                        <AccordionItemHeading>
                                          <AccordionItemButton>
                                            <div className="w-full items-center justify-between pl-8 sm:flex  ">
                                              <span className="inline-block text-sm">
                                                {item.title}
                                              </span>
                                              <span className="inline-block rounded-full bg-[#F16126] px-2 py-0.5 text-xs">
                                                6 Lecture - 96 Min
                                              </span>
                                            </div>
                                          </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                          {item?.content.map(
                                            (childItem, childIndex) => (
                                              <div key={childIndex}>
                                                <VideoModal item={childItem} />
                                              </div>
                                            )
                                          )}
                                        </AccordionItemPanel>
                                      </AccordionItem>
                                    ))}
                                  </Accordion>
                                </div>
                              </>
                            </div>
                          </div>
                        </div>
                      </TabPanel>
                      {/* TabPanel Instructor */}
                      <TabPanel>
                        <div>
                          <div className="block w-full gap-6 px-2 md:flex md:px-0">
                            <Fade>
                              <div className="img__file w-full md:w-4/12">
                                <img
                                  className="rounded-lg"
                                  src="/Assets/Images/advisors/Advisor_1.png"
                                  alt="Next LMS"
                                />
                              </div>
                            </Fade>

                            <div className="text__file mt-8 w-full md:mt-0 md:w-8/12">
                              <div>
                                <Fade>
                                  <p className="mt-3 text-sm">
                                    A self-motivated, self-taught and an
                                    inspired team player, who is looking for
                                    opportunities intrigued and inclined towards
                                    areas of "Software Engineer".
                                  </p>
                                </Fade>
                                <Fade>
                                  <div className="mt-3">
                                    <p className="text-base font-medium">
                                      Web and Desktop development:
                                    </p>
                                    <ul className="list-disc pl-6">
                                      <li className="text-sm">
                                        Front-end /UI/UX Animation with Library.
                                      </li>
                                      <li className="text-sm">
                                        MVC framework,.
                                      </li>
                                      <li className="text-sm">
                                        Node Js/MongoDb using ExpressJS
                                        framework.
                                      </li>
                                      <li className="text-sm">ReactJS.</li>
                                      <li className="text-sm">NodeJS.</li>
                                    </ul>
                                  </div>
                                </Fade>
                              </div>
                            </div>
                          </div>
                        </div>
                      </TabPanel>
                      {/* TabPanel Reviews */}
                      <TabPanel>
                        <div className="px-2 md:px-0">
                          <div>
                            <Fade>
                              <h2 className="text-[26px] font-medium">
                                Student Feedback
                              </h2>
                            </Fade>
                          </div>
                          <div className="block w-full gap-5 md:flex">
                            <div className="mt-6 flex h-[200px] w-full items-center justify-center rounded-md bg-[#f1f5f9] px-6 py-6 md:w-3/12">
                              <div className="text-center">
                                <h2 className="text-[52px] font-bold text-[#F16126]">
                                  4.9
                                </h2>
                                <div>
                                  <Fade>
                                    <div className="mt-[-5px] flex">
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
                                  </Fade>

                                  <div className="mt-1">
                                    <Fade>
                                      <p>Rising Star</p>
                                    </Fade>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="mt-6 w-full rounded-md bg-[#f1f5f9] px-6 py-6 md:w-9/12">
                              <Fade>
                                <div className="mb-1.5 flex w-full items-center justify-between">
                                  <div className="block w-9/12">
                                    <Progress
                                      className="block h-[8px]"
                                      value={80}
                                    />
                                  </div>
                                  <div className="flex w-3/12 items-center justify-end gap-2">
                                    <div className="flex justify-end gap-0.5">
                                      <span>
                                        <FaStar className="text-[#F7B519]" />{" "}
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
                                      <span className="text-sm">80%</span>
                                    </div>
                                  </div>
                                </div>

                                <div className="mb-1.5 flex w-full items-center justify-between">
                                  <div className="block w-9/12">
                                    <Progress
                                      className="block h-[8px]"
                                      value={60}
                                    />
                                  </div>
                                  <div className="flex w-3/12 items-center justify-end gap-2">
                                    <div className="flex justify-end gap-0.5">
                                      <span>
                                        <FaStar className="text-[#F7B519]" />{" "}
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
                                        <FaRegStar className="text-[#F7B519]" />
                                      </span>
                                    </div>
                                    <div>
                                      <span className="text-sm">60%</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="mb-1.5 flex w-full items-center justify-between">
                                  <div className="block w-9/12">
                                    <Progress
                                      className="block h-[8px]"
                                      value={35}
                                    />
                                  </div>
                                  <div className="flex w-3/12 items-center justify-end gap-2">
                                    <div className="flex justify-end gap-0.5">
                                      <span>
                                        <FaStar className="text-[#F7B519]" />{" "}
                                      </span>
                                      <span>
                                        <FaStar className="text-[#F7B519]" />
                                      </span>
                                      <span>
                                        <FaStar className="text-[#F7B519]" />
                                      </span>
                                      <span>
                                        <FaRegStar className="text-[#F7B519]" />
                                      </span>
                                      <span>
                                        <FaRegStar className="text-[#F7B519]" />
                                      </span>
                                    </div>
                                    <div>
                                      <span className="text-sm">35%</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="mb-1.5 flex w-full items-center justify-between">
                                  <div className="block w-9/12">
                                    <Progress
                                      className="block h-[8px]"
                                      value={20}
                                    />
                                  </div>
                                  <div className="flex w-3/12 items-center justify-end gap-2">
                                    <div className="flex justify-end gap-0.5">
                                      <span>
                                        <FaStar className="text-[#F7B519]" />{" "}
                                      </span>
                                      <span>
                                        <FaStar className="text-[#F7B519]" />
                                      </span>
                                      <span>
                                        <FaRegStar className="text-[#F7B519]" />
                                      </span>
                                      <span>
                                        <FaRegStar className="text-[#F7B519]" />
                                      </span>
                                      <span>
                                        <FaRegStar className="text-[#F7B519]" />
                                      </span>
                                    </div>
                                    <div>
                                      <span className="text-sm">20%</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="mb-1.5 flex w-full items-center justify-between">
                                  <div className="block w-9/12">
                                    <Progress
                                      className="block h-[8px]"
                                      value={10}
                                    />
                                  </div>
                                  <div className="flex w-3/12 items-center justify-end gap-2">
                                    <div className="flex justify-end gap-0.5">
                                      <span>
                                        <FaStar className="text-[#F7B519]" />{" "}
                                      </span>
                                      <span>
                                        <FaRegStar className="text-[#F7B519]" />
                                      </span>
                                      <span>
                                        <FaRegStar className="text-[#F7B519]" />
                                      </span>
                                      <span>
                                        <FaRegStar className="text-[#F7B519]" />
                                      </span>
                                      <span>
                                        <FaRegStar className="text-[#F7B519]" />
                                      </span>
                                    </div>
                                    <div>
                                      <span className="text-sm">10%</span>
                                    </div>
                                  </div>
                                </div>
                              </Fade>
                            </div>
                          </div>
                          <div className="mt-10">
                            <div>
                              <Fade>
                                <h2 className="text-[20px] font-medium">
                                  Reviews
                                </h2>
                              </Fade>
                            </div>
                            <div className="mt-5 mb-8 border-b pb-10 ">
                              <Fade>
                                <div className="flex gap-6">
                                  <div>
                                    <span className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[#002147]">
                                      <FaUserAlt className=" text-[25px] text-white" />
                                    </span>
                                  </div>
                                  <div>
                                    <div className="flex items-center gap-2">
                                      <h3 className="text-[18px] font-medium">
                                        Anik Biswas
                                      </h3>
                                      <span className="text-sm">
                                        (4 Days ago)
                                      </span>
                                    </div>
                                    <div>
                                      <h3 className="text-base">
                                        Compare the best business software with
                                        comprehensive reviews.
                                      </h3>
                                      <p className="mt-2 text-sm">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Consectetur laudantium
                                        explicabo cumque quod iste deleniti
                                        asperiores ad eius soluta perspiciatis
                                        rerum maiores dolor quaerat, dicta nobis
                                        doloribus! Voluptatum optio animi.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </Fade>
                            </div>
                            <div className="mt-5 mb-8 border-b pb-10 ">
                              <Fade>
                                <div className="flex gap-6">
                                  <div>
                                    <span className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[#002147]">
                                      <FaUserAlt className=" text-[25px] text-white" />
                                    </span>
                                  </div>
                                  <div>
                                    <div className="flex items-center gap-2">
                                      <h3 className="text-[18px] font-medium">
                                        Alex W Ellais
                                      </h3>
                                      <span className="text-sm">
                                        (8 Days ago)
                                      </span>
                                    </div>
                                    <div>
                                      <h3 className="text-base">
                                        Compare the best business software with
                                        comprehensive reviews.
                                      </h3>
                                      <p className="mt-2 text-sm">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Consectetur laudantium
                                        explicabo cumque quod iste deleniti
                                        asperiores ad eius soluta perspiciatis
                                        rerum maiores dolor quaerat, dicta nobis
                                        doloribus! Voluptatum optio animi.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </Fade>
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center justify-between">
                              <Fade>
                                <h2 className="text-[20px] font-medium">
                                  Write a Review
                                </h2>
                              </Fade>

                              <div>
                                <Fade>
                                  <div className="flex justify-center gap-0.5">
                                    <span>
                                      <FaStar className="text-[#F7B519]" />{" "}
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
                                      <FaRegStar className="text-[#F7B519]" />
                                    </span>
                                  </div>
                                </Fade>
                              </div>
                            </div>
                            <div className="mt-5">
                              <Fade>
                                <label
                                  className="block text-sm"
                                  htmlFor="review"
                                >
                                  Enter Your Review
                                </label>
                                <input
                                  className="mt-1.5 block w-full rounded-md border px-3 py-3 text-sm"
                                  type="text"
                                  placeholder="Text..."
                                />
                              </Fade>
                            </div>
                            <div className="mt-3">
                              <Fade>
                                <label
                                  className="block text-sm"
                                  htmlFor="review"
                                >
                                  Content
                                </label>
                                <textarea
                                  className="mt-1.5 block w-full rounded-md border px-3 py-3 text-sm"
                                  id="w3review"
                                  name="w3review"
                                  rows="6"
                                  cols="50"
                                  placeholder="Content..."
                                ></textarea>
                              </Fade>
                            </div>
                          </div>
                          <div className="mt-5">
                            <Fade>
                              <button className="rounded-md bg-[#F16126] px-5 py-3 text-white">
                                Submit Review
                              </button>
                            </Fade>
                          </div>
                        </div>
                      </TabPanel>
                    </Tabs>
                  </>
                </div>
              </div>
            </div>
            <div className="relative  col-span-12 mt-8 lg:col-span-4 lg:mt-0 lg:pl-4">
              <div className="rounded-md bg-white px-3 py-3 shadow-lg">
                <Fade>
                  <Link to={"/"}>
                    <div className="relative flex justify-center">
                      <img
                        src="Assets/Images/courses/courses_1.png"
                        alt="Next LMS"
                      />
                      <span className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
                        <img
                          src="Assets/Images/shape/shape_10.png"
                          alt="Next LMS"
                        />
                      </span>
                    </div>
                  </Link>
                </Fade>

                <div className="mt-4 pb-3">
                  <ul>
                    <Fade>
                      <li className="flex justify-between border-b px-3 pb-4 pt-4">
                        <div className="flex items-center gap-2">
                          <span>
                            <FaTags className="text-sm" />
                          </span>
                          <span className="text-sm">Price</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span>
                            <FaDollarSign className="text-[20px] text-[#333]" />
                          </span>
                          <span className="text-lg text-[26px] font-semibold text-[#333]">
                            170
                          </span>
                        </div>
                      </li>
                    </Fade>
                    <Fade>
                      <li className="flex justify-between border-b px-3 pb-4 pt-3">
                        <div className="flex items-center gap-2">
                          <span>
                            <FaUserAlt className="text-sm" />
                          </span>
                          <span className="text-sm">Instructor</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-base font-medium text-[#333]">
                            Alex Norton
                          </span>
                        </div>
                      </li>
                    </Fade>
                    <Fade>
                      <li className="flex justify-between border-b px-3 pb-4 pt-3">
                        <div className="flex items-center gap-2">
                          <span>
                            <FaHistory className="text-sm" />
                          </span>
                          <span className="text-sm">Duration</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-base font-medium text-[#333]">
                            3 Month
                          </span>
                        </div>
                      </li>
                    </Fade>
                    <Fade>
                      <li className="flex justify-between border-b px-3 pb-4 pt-3">
                        <div className="flex items-center gap-2">
                          <span>
                            <FaBookReader className="text-sm" />
                          </span>
                          <span className="text-sm">Lessons</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-base font-medium text-[#333]">
                            12
                          </span>
                        </div>
                      </li>
                    </Fade>
                    <Fade>
                      <li className="flex justify-between border-b px-3 pb-4 pt-3">
                        <div className="flex items-center gap-2">
                          <span>
                            <FaUserGraduate className="text-sm" />
                          </span>
                          <span className="text-sm">Enrolled</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-base font-medium text-[#333]">
                            923 Students
                          </span>
                        </div>
                      </li>
                    </Fade>
                    <Fade>
                      <li className="flex justify-between border-b px-3 pb-4 pt-3">
                        <div className="flex items-center gap-2">
                          <span>
                            <FaGlobe className="text-sm" />
                          </span>
                          <span className="text-sm">Language</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-base font-medium text-[#333]">
                            English
                          </span>
                        </div>
                      </li>
                    </Fade>
                    <Fade>
                      <li className="flex justify-between px-2 pb-3 pt-3">
                        <div className="flex items-center gap-2">
                          <span>
                            <FaBookReader className="text-sm" />
                          </span>
                          <span className="text-sm">Certificate</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-base font-medium text-[#333]">
                            Yes
                          </span>
                        </div>
                      </li>
                    </Fade>
                  </ul>
                </div>
                <div className="mt-2 block  w-full px-3 pb-5">
                  <Fade>
                    <button className="block w-full rounded-md bg-[#F16126] px-6 py-3 text-white">
                      Enroll Now
                    </button>
                  </Fade>
                </div>
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

export default CourseDetailsComponent;
