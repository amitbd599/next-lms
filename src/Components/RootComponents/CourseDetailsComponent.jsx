import React, { useState } from "react";
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
import { BsPlayCircleFill, BsUnlock } from "react-icons/bs";
import ModalVideo from "react-modal-video";
import "react-tabs/style/react-tabs.css";
import courseContentData from "../../Database/courseContentData";
import { Link } from "react-router-dom";
const CourseDetailsComponent = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <section>
      {/* ============ Header Section ============*/}
      <Header />
      {/* ============ Intro Section ============*/}
      <IntroSection title={"Courses Details"} />
      {/* ============ Grid Courses Section ============ */}
      <div className='coursesDetails gridCourses py-[80px]'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-12 gap-6'>
            <div className='col-span-8 '>
              {/* Intro Advisor */}
              <div className='bg-[#002147] px-10 py-8 rounded-md shadow-lg'>
                <div>
                  <h2 className='text-[35px] text-white font-semibold'>
                    All You Need To Know About MERN Stack
                  </h2>
                </div>
                <div className='flex gap-4 mt-6'>
                  <div>
                    <img
                      className='w-[80px] rounded-full '
                      src='/Assets/Images/advisors/Advisor_1.png'
                      alt=''
                    />
                  </div>
                  <div>
                    <h3 className='text-white text-lg'>By Alex Norton</h3>
                    <p className='text-white text-sm'>JavaScript Programmer</p>
                    <div className='flex gap-3 items-center'>
                      <div>
                        <div className='flex '>
                          <span>
                            <FaStar className='text-[#F7B519]' />
                          </span>
                          <span>
                            <FaStar className='text-[#F7B519]' />
                          </span>
                          <span>
                            <FaStar className='text-[#F7B519]' />
                          </span>
                          <span>
                            <FaStar className='text-[#F7B519]' />
                          </span>
                          <span>
                            <FaStar className='text-[#F7B519]' />
                          </span>
                        </div>
                      </div>
                      <div>
                        <span className='text-sm text-white'>(720 Rating)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Item Overview */}
              <div className='itemOverview mt-14'>
                <div>
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
                      <div className='mb-10'>
                        <div>
                          <h2 className='text-[25px] font-medium'>
                            MERN Stack Full Form
                          </h2>
                          <p className='mt-3 leading-relaxed text-sm'>
                            MERN stack is a collection of technologies that
                            enables faster application development. It is used
                            by developers worldwide. The main purpose of using
                            MERN stack is to develop apps using JavaScript only.
                            This is because the four technologies that make up
                            the technology stack are all JS-based. Thus, if one
                            knows JavaScript (and JSON), the backend, frontend,
                            and database can be operated easily.
                          </p>
                        </div>
                        <div className='mt-6'>
                          <h2 className='text-[25px] font-medium'>
                            MERN Stack Components
                          </h2>
                          <div className='mt-3'>
                            <ul className='list-disc pl-8'>
                              <li className='leading-relaxed text-sm'>
                                The first component is MongoDB, which is a NoSQL
                                database management system.
                              </li>
                              <li className='leading-relaxed text-sm'>
                                The second MERN stack component is ExpressJS. It
                                is a backend web application framework for
                                NodeJS.
                              </li>
                              <li className='leading-relaxed text-sm'>
                                The third component is ReactJS, a JavaScript
                                library for developing UIs based on UI
                                components.
                              </li>
                              <li className='leading-relaxed text-sm'>
                                The final component of the MERN stack is NodeJS.
                                It is a JS runtime environment, i.e., it enables
                                running JavaScript code outside the browser.
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className='mt-6'>
                          <h2 className='text-[25px] font-medium'>MongoDB</h2>
                          <p className='mt-3 leading-relaxed text-sm'>
                            MongoDB is a NoSQL DBMS where data is stored in the
                            form of documents having key-value pairs similar to
                            JSON objects. MongoDB enables users to create
                            databases, schemas, and tables. It offers the Mongo
                            shell that provides a JS interface for deleting,
                            querying, and updating the records.
                          </p>
                        </div>
                        <div className='mt-6'>
                          <h2 className='text-[25px] font-medium'>ExpressJS</h2>
                          <p className='mt-3 leading-relaxed text-sm'>
                            MongoDB is a NoSQL DBMS where data is stored in the
                            form of documents having key-value pairs similar to
                            JSON objects. MongoDB enables users to create
                            databases, schemas, and tables. It offers the Mongo
                            shell that provides a JS interface for deleting,
                            querying, and updating the records.
                          </p>
                        </div>
                        <div className='mt-6'>
                          <h2 className='text-[25px] font-medium'>ReactJS</h2>
                          <p className='mt-3 leading-relaxed text-sm'>
                            ReactJS is a JS library that allows the development
                            of user interfaces for mobile apps and SPAs. It
                            allows you to code JavaScript and develop UI
                            components. The JS library uses virtual DOM for
                            doing everything.
                          </p>
                        </div>
                        <div className='mt-6'>
                          <h2 className='text-[25px] font-medium'>NodeJS</h2>
                          <p className='mt-3 leading-relaxed text-sm'>
                            NodeJS is an open-source JavaScript runtime
                            environment that allows users to run code on the
                            server. It comes with the node package manager or
                            npm, enabling users to select from a wide selection
                            of node modules or packages. Being developed on the
                            Chrome JavaScript Engine enables Node to execute
                            code faster.
                          </p>
                        </div>
                      </div>
                    </TabPanel>
                    {/* TabPanel Curriculum */}
                    <TabPanel>
                      <div>
                        <div>
                          <h2 className='text-[25px] font-medium'>
                            Getting Started with MERN Stack Development
                          </h2>
                          <p className='mt-3 leading-relaxed text-sm'>
                            MERN stack is a collection of technologies that
                            enables faster application development. It is used
                            by developers worldwide. The main purpose of using
                            MERN stack is to develop apps using JavaScript only.
                            This is because the four technologies that make up
                            the technology stack are all JS-based. Thus, if one
                            knows JavaScript (and JSON), the backend, frontend,
                            and database can be operated easily.
                          </p>
                        </div>
                        <div className='mt-5'>
                          <div>
                            <h2 className='text-[25px] font-medium'>
                              Course Content
                            </h2>
                          </div>
                          <div className='mt-5'>
                            <div className='flex gap-2'>
                              <span className='text-[14px]'>30 sections </span>
                              <span className='text-[14px]'>120 lectures </span>
                            </div>
                          </div>
                          {/* Course Accordion */}
                          <div className='mt-2'>
                            <div>
                              <Accordion allowZeroExpanded>
                                {courseContentData.map((item, index) => (
                                  <AccordionItem key={index}>
                                    <AccordionItemHeading>
                                      <AccordionItemButton>
                                        <div className='flex justify-between items-center w-full pl-8  '>
                                          <span className='text-sm'>
                                            {item.title}
                                          </span>
                                          <span className='text-xs bg-[#F16126] rounded-full px-2 py-0.5'>
                                            6 Lecture - 96 Min
                                          </span>
                                        </div>
                                      </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                      {item?.content.map(
                                        (childItem, childIndex) => (
                                          <div key={childIndex}>
                                            <ModalVideo
                                              channel='youtube'
                                              autoplay
                                              isOpen={isOpen}
                                              videoId='tujhGdn1EMI'
                                              onClose={() => setOpen(false)}
                                            />
                                            <button
                                              className='block w-full'
                                              onClick={() => setOpen(true)}
                                            >
                                              <div className='flex justify-between items-center'>
                                                <div className='flex gap-4 items-center  my-2 py-1 text-[#77838F] hover:text-[#F16126] ease-in-out duration-300'>
                                                  <span>
                                                    <BsPlayCircleFill className=' text-[25px]' />
                                                  </span>
                                                  <span className='text-sm font-medium'>
                                                    {childItem.title}
                                                  </span>
                                                </div>
                                                <div className='flex items-center gap-3'>
                                                  <span className='text-sm'>
                                                    04.54
                                                  </span>
                                                  <span>
                                                    <BsUnlock />
                                                  </span>
                                                </div>
                                              </div>
                                            </button>
                                          </div>
                                        )
                                      )}
                                    </AccordionItemPanel>
                                  </AccordionItem>
                                ))}
                              </Accordion>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    {/* TabPanel Instructor */}
                    <TabPanel>
                      <div>
                        <div className='flex gap-6 w-full'>
                          <div className='img__file w-4/12'>
                            <img
                              className='rounded-lg'
                              src='/Assets/Images/advisors/Advisor_1.png'
                              alt=''
                            />
                          </div>
                          <div className='text__file w-8/12'>
                            <div>
                              <p className='text-sm mt-3'>
                                A self-motivated, self-taught and an inspired
                                team player, who is looking for opportunities
                                intrigued and inclined towards areas of
                                "Software Engineer".
                              </p>
                              <div className='mt-3'>
                                <p className='text-base font-medium'>
                                  Web and Desktop development:
                                </p>
                                <ul className='list-disc pl-6'>
                                  <li className='text-sm'>
                                    Front-end /UI/UX Animation with Library.
                                  </li>
                                  <li className='text-sm'>MVC framework,.</li>
                                  <li className='text-sm'>
                                    Node Js/MongoDb using ExpressJS framework.
                                  </li>
                                  <li className='text-sm'>ReactJS.</li>
                                  <li className='text-sm'>NodeJS.</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    {/* TabPanel Reviews */}
                    <TabPanel>
                      <div>
                        <div>
                          <h2 className='text-[26px] font-medium'>
                            Student Feedback
                          </h2>
                        </div>
                        <div className='w-full flex gap-5'>
                          <div className='w-3/12 h-[200px] bg-[#f1f5f9]  px-6 py-6 rounded-md flex justify-center items-center mt-6'>
                            <div className='text-center'>
                              <h2 className='text-[52px] font-bold text-[#F16126]'>
                                4.9
                              </h2>
                              <div>
                                <div className='flex mt-[-5px]'>
                                  <span>
                                    <FaStar className='text-[#F7B519]' />
                                  </span>
                                  <span>
                                    <FaStar className='text-[#F7B519]' />
                                  </span>
                                  <span>
                                    <FaStar className='text-[#F7B519]' />
                                  </span>
                                  <span>
                                    <FaStar className='text-[#F7B519]' />
                                  </span>
                                  <span>
                                    <FaStar className='text-[#F7B519]' />
                                  </span>
                                </div>
                                <div className='mt-1'>
                                  <p>Rising Star</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className='w-9/12 bg-[#f1f5f9] px-6 py-6 rounded-md mt-6'>
                            <div className='flex items-center justify-between w-full mb-1.5'>
                              <div className='block w-9/12'>
                                <Progress
                                  className='block h-[8px]'
                                  value={80}
                                />
                              </div>
                              <div className='flex gap-2 items-center justify-end w-3/12'>
                                <div className='flex gap-0.5 justify-end'>
                                  <span>
                                    <FaStar className='text-[#F7B519]' />{" "}
                                  </span>
                                  <span>
                                    <FaStar className='text-[#F7B519]' />
                                  </span>
                                  <span>
                                    <FaStar className='text-[#F7B519]' />
                                  </span>
                                  <span>
                                    <FaStar className='text-[#F7B519]' />
                                  </span>
                                  <span>
                                    <FaStar className='text-[#F7B519]' />
                                  </span>
                                </div>
                                <div>
                                  <span className='text-sm'>80%</span>
                                </div>
                              </div>
                            </div>
                            <div className='flex items-center justify-between w-full mb-1.5'>
                              <div className='block w-9/12'>
                                <Progress
                                  className='block h-[8px]'
                                  value={60}
                                />
                              </div>
                              <div className='flex gap-2 items-center justify-end w-3/12'>
                                <div className='flex gap-0.5 justify-end'>
                                  <span>
                                    <FaStar className='text-[#F7B519]' />{" "}
                                  </span>
                                  <span>
                                    <FaStar className='text-[#F7B519]' />
                                  </span>
                                  <span>
                                    <FaStar className='text-[#F7B519]' />
                                  </span>
                                  <span>
                                    <FaStar className='text-[#F7B519]' />
                                  </span>
                                  <span>
                                    <FaRegStar className='text-[#F7B519]' />
                                  </span>
                                </div>
                                <div>
                                  <span className='text-sm'>60%</span>
                                </div>
                              </div>
                            </div>
                            <div className='flex items-center justify-between w-full mb-1.5'>
                              <div className='block w-9/12'>
                                <Progress
                                  className='block h-[8px]'
                                  value={35}
                                />
                              </div>
                              <div className='flex gap-2 items-center justify-end w-3/12'>
                                <div className='flex gap-0.5 justify-end'>
                                  <span>
                                    <FaStar className='text-[#F7B519]' />{" "}
                                  </span>
                                  <span>
                                    <FaStar className='text-[#F7B519]' />
                                  </span>
                                  <span>
                                    <FaStar className='text-[#F7B519]' />
                                  </span>
                                  <span>
                                    <FaRegStar className='text-[#F7B519]' />
                                  </span>
                                  <span>
                                    <FaRegStar className='text-[#F7B519]' />
                                  </span>
                                </div>
                                <div>
                                  <span className='text-sm'>35%</span>
                                </div>
                              </div>
                            </div>
                            <div className='flex items-center justify-between w-full mb-1.5'>
                              <div className='block w-9/12'>
                                <Progress
                                  className='block h-[8px]'
                                  value={20}
                                />
                              </div>
                              <div className='flex gap-2 items-center justify-end w-3/12'>
                                <div className='flex gap-0.5 justify-end'>
                                  <span>
                                    <FaStar className='text-[#F7B519]' />{" "}
                                  </span>
                                  <span>
                                    <FaStar className='text-[#F7B519]' />
                                  </span>
                                  <span>
                                    <FaRegStar className='text-[#F7B519]' />
                                  </span>
                                  <span>
                                    <FaRegStar className='text-[#F7B519]' />
                                  </span>
                                  <span>
                                    <FaRegStar className='text-[#F7B519]' />
                                  </span>
                                </div>
                                <div>
                                  <span className='text-sm'>20%</span>
                                </div>
                              </div>
                            </div>
                            <div className='flex items-center justify-between w-full mb-1.5'>
                              <div className='block w-9/12'>
                                <Progress
                                  className='block h-[8px]'
                                  value={10}
                                />
                              </div>
                              <div className='flex gap-2 items-center justify-end w-3/12'>
                                <div className='flex gap-0.5 justify-end'>
                                  <span>
                                    <FaStar className='text-[#F7B519]' />{" "}
                                  </span>
                                  <span>
                                    <FaRegStar className='text-[#F7B519]' />
                                  </span>
                                  <span>
                                    <FaRegStar className='text-[#F7B519]' />
                                  </span>
                                  <span>
                                    <FaRegStar className='text-[#F7B519]' />
                                  </span>
                                  <span>
                                    <FaRegStar className='text-[#F7B519]' />
                                  </span>
                                </div>
                                <div>
                                  <span className='text-sm'>10%</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='mt-10'>
                          <div>
                            <h2 className='text-[20px] font-medium'>Reviews</h2>
                          </div>
                          <div className='mt-5 pb-10 mb-8 border-b '>
                            <div className='flex gap-6'>
                              <div>
                                <span className='bg-[#002147] w-[70px] h-[70px] rounded-full flex items-center justify-center'>
                                  <FaUserAlt className=' text-[25px] text-white' />
                                </span>
                              </div>
                              <div>
                                <div className='flex gap-2 items-center'>
                                  <h3 className='text-[18px] font-medium'>
                                    Anik Biswas
                                  </h3>
                                  <span className='text-sm'>(4 Days ago)</span>
                                </div>
                                <div>
                                  <h3 className='text-base'>
                                    Compare the best business software with
                                    comprehensive reviews.
                                  </h3>
                                  <p className='text-sm mt-2'>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Consectetur laudantium
                                    explicabo cumque quod iste deleniti
                                    asperiores ad eius soluta perspiciatis rerum
                                    maiores dolor quaerat, dicta nobis
                                    doloribus! Voluptatum optio animi.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='mt-5 pb-10 mb-8 border-b '>
                            <div className='flex gap-6'>
                              <div>
                                <span className='bg-[#002147] w-[70px] h-[70px] rounded-full flex items-center justify-center'>
                                  <FaUserAlt className=' text-[25px] text-white' />
                                </span>
                              </div>
                              <div>
                                <div className='flex gap-2 items-center'>
                                  <h3 className='text-[18px] font-medium'>
                                    Alex W Ellais
                                  </h3>
                                  <span className='text-sm'>(8 Days ago)</span>
                                </div>
                                <div>
                                  <h3 className='text-base'>
                                    Compare the best business software with
                                    comprehensive reviews.
                                  </h3>
                                  <p className='text-sm mt-2'>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Consectetur laudantium
                                    explicabo cumque quod iste deleniti
                                    asperiores ad eius soluta perspiciatis rerum
                                    maiores dolor quaerat, dicta nobis
                                    doloribus! Voluptatum optio animi.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className='flex items-center justify-between'>
                            <h2 className='text-[20px] font-medium'>
                              Write a Review
                            </h2>
                            <div>
                              <div className='flex gap-0.5 justify-center'>
                                <span>
                                  <FaStar className='text-[#F7B519]' />{" "}
                                </span>
                                <span>
                                  <FaStar className='text-[#F7B519]' />
                                </span>
                                <span>
                                  <FaStar className='text-[#F7B519]' />
                                </span>
                                <span>
                                  <FaStar className='text-[#F7B519]' />
                                </span>
                                <span>
                                  <FaRegStar className='text-[#F7B519]' />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className='mt-5'>
                            <label className='block text-sm' htmlFor='review'>
                              Enter Your Review
                            </label>
                            <input
                              className='block text-sm border px-3 py-3 rounded-md w-full mt-1.5'
                              type='text'
                              placeholder='Text...'
                            />
                          </div>
                          <div className='mt-3'>
                            <label className='block text-sm' htmlFor='review'>
                              Content
                            </label>
                            <textarea
                              className='block text-sm border px-3 py-3 rounded-md w-full mt-1.5'
                              id='w3review'
                              name='w3review'
                              rows='6'
                              cols='50'
                              placeholder='Content...'
                            ></textarea>
                          </div>
                        </div>
                        <div className='mt-5'>
                          <button className='bg-[#F16126] text-white px-5 py-3 rounded-md'>
                            Submit Review
                          </button>
                        </div>
                      </div>
                    </TabPanel>
                  </Tabs>
                </div>
              </div>
            </div>
            <div className='col-span-4 pl-4'>
              <div className='bg-white shadow-lg px-3 py-3 rounded-md'>
                <Link to={"/"}>
                  <div className='relative'>
                    <img src='Assets/Images/courses/courses_1.png' alt='' />
                    <span className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]'>
                      <img src='Assets/Images/shape/shape_10.png' alt='' />
                    </span>
                  </div>
                </Link>

                <div className='mt-4 pb-3'>
                  <ul>
                    <li className='flex justify-between px-3 border-b pb-4 pt-4'>
                      <div className='flex items-center gap-2'>
                        <span>
                          <FaTags className='text-sm' />
                        </span>
                        <span className='text-sm'>Price</span>
                      </div>
                      <div className='flex items-center gap-1'>
                        <span>
                          <FaDollarSign className='text-[#333] text-[20px]' />
                        </span>
                        <span className='text-lg font-semibold text-[#333] text-[26px]'>
                          170
                        </span>
                      </div>
                    </li>
                    <li className='flex justify-between px-3 border-b pb-4 pt-3'>
                      <div className='flex items-center gap-2'>
                        <span>
                          <FaUserAlt className='text-sm' />
                        </span>
                        <span className='text-sm'>Instructor</span>
                      </div>
                      <div className='flex items-center gap-1'>
                        <span className='font-medium text-[#333] text-base'>
                          Alex Norton
                        </span>
                      </div>
                    </li>
                    <li className='flex justify-between px-3 border-b pb-4 pt-3'>
                      <div className='flex items-center gap-2'>
                        <span>
                          <FaHistory className='text-sm' />
                        </span>
                        <span className='text-sm'>Duration</span>
                      </div>
                      <div className='flex items-center gap-1'>
                        <span className='font-medium text-[#333] text-base'>
                          3 Month
                        </span>
                      </div>
                    </li>
                    <li className='flex justify-between px-3 border-b pb-4 pt-3'>
                      <div className='flex items-center gap-2'>
                        <span>
                          <FaBookReader className='text-sm' />
                        </span>
                        <span className='text-sm'>Lessons</span>
                      </div>
                      <div className='flex items-center gap-1'>
                        <span className='font-medium text-[#333] text-base'>
                          12
                        </span>
                      </div>
                    </li>
                    <li className='flex justify-between px-3 border-b pb-4 pt-3'>
                      <div className='flex items-center gap-2'>
                        <span>
                          <FaUserGraduate className='text-sm' />
                        </span>
                        <span className='text-sm'>Enrolled</span>
                      </div>
                      <div className='flex items-center gap-1'>
                        <span className='font-medium text-[#333] text-base'>
                          923 Students
                        </span>
                      </div>
                    </li>
                    <li className='flex justify-between px-3 border-b pb-4 pt-3'>
                      <div className='flex items-center gap-2'>
                        <span>
                          <FaGlobe className='text-sm' />
                        </span>
                        <span className='text-sm'>Language</span>
                      </div>
                      <div className='flex items-center gap-1'>
                        <span className='font-medium text-[#333] text-base'>
                          English
                        </span>
                      </div>
                    </li>
                    <li className='flex justify-between px-2 pb-3 pt-3'>
                      <div className='flex items-center gap-2'>
                        <span>
                          <FaBookReader className='text-sm' />
                        </span>
                        <span className='text-sm'>Certificate</span>
                      </div>
                      <div className='flex items-center gap-1'>
                        <span className='font-medium text-[#333] text-base'>
                          Yes
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className='pb-5 px-3  mt-2 w-full block'>
                  <button className='bg-[#F16126] text-white px-6 py-3 rounded-md w-full block'>
                    Enroll Now
                  </button>
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