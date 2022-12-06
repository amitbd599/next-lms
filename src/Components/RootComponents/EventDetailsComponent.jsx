import React from "react";
import {
  FaFacebookSquare,
  FaHistory,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import IntroSection from "../Common/IntroSection";
import NewsLetter from "../Common/NewsLetter";
import Sidebar from "../Common/Sidebar";

const EventDetailsComponent = () => {
  return (
    <section>
      {/* ============ Header Section ============*/}
      <Header />
      {/* ============ Intro Section ============*/}
      <IntroSection title={"Event Details"} />
      {/* ============ Course Advisor ============ */}
      <div className='eventSection gridCourses py-[80px]'>
        {/* Courses Info */}
        <div className='container mx-auto mt-10'>
          <div className='grid grid-cols-12 gap-5'>
            <div className='col-span-8 mb-4 '>
              {/* Thumbnail Image*/}
              <div>
                <img
                  className='rounded-md'
                  src='Assets/Images/events/event_13.png'
                  alt=''
                />
              </div>
              {/* Event Details */}
              <div className='mt-5'>
                <div>
                  <h2 className='text-[40px] font-semibold'>Overview</h2>
                </div>
                <div>
                  <p className='text-sm leading-relaxed'>
                    An affordable, mobile-friendly, all-in-one event management
                    platform. Whova is widely used by 30,000+ in-person and
                    virtual/hybrid events in the US/Canada, UK/Europe,
                    Australia, Asia, and more. With the highest ratings in app
                    stores and software review sites among all event apps, Whova
                    offers customers a variety of time-saving tools.
                  </p>
                  <br />
                  <p className='text-sm leading-relaxed'>
                    Rather than juggling multiple specialized event software
                    platforms, Whova is built to help you manage your events
                    from beginning to end with one system. Key features of
                    Whova's event planning software include:
                  </p>
                  <div>
                    <ul className='list-disc pl-7 mt-2'>
                      <li>
                        Mobile/desktop event app - with engagement and
                        networking
                      </li>
                      <li>Event registration / ticketing</li>
                      <li>Event website generation, event marketing</li>
                      <li>Name badge creation, attendee check-in, surveys</li>
                      <li>Sponsor and exhibitor showcase features</li>
                    </ul>
                  </div>
                  <p className='text-sm leading-relaxed mt-4'>
                    Summary: If you're holding a research heavy academic
                    conference and want a reliable tool for abstract management,
                    ConfTool is worth looking into. However, it isn't currently
                    accessible on mobile, and is designed to support only
                    limited aspects of the event, rather than function as a
                    comprehensive event management software.
                  </p>
                </div>
              </div>

              {/* Special Guest */}
              <div className='mt-16'>
                <div>
                  <h2 className='text-[40px] font-semibold'>Special Guest</h2>
                </div>
                <div className='flex gap-5 mt-8 w-full border-b border-[#E9ECEF] pb-5'>
                  <div className='w-2/12'>
                    <img
                      className='rounded-md w-full object-cover'
                      src='Assets/Images/advisors/Advisor_2.png'
                      alt=''
                    />
                  </div>
                  <div className='w-9/12'>
                    <h2 className='text-[20px] font-semibold'>Alex Johan</h2>
                    <div>
                      <span className='block text-sm'>
                        JavaScript Programmer
                      </span>
                      <span className='block text-sm'>
                        Software Development And Design
                      </span>
                      <span className='block text-sm'>
                        alexjohan@infolef.com
                      </span>
                    </div>
                    <div>
                      <div className='mt-2'>
                        <div className='flex gap-1'>
                          <a href='#'>
                            <FaFacebookSquare className='text-[25px] text-[#77838F] hover:text-[#F16126] ease-in-out duration-300' />
                          </a>
                          <a href='#'>
                            <FaTwitterSquare className='text-[25px] text-[#77838F] hover:text-[#F16126] ease-in-out duration-300' />
                          </a>
                          <a href='#'>
                            <FaLinkedin className='text-[25px] text-[#77838F] hover:text-[#F16126] ease-in-out duration-300' />
                          </a>
                          <a href='#'>
                            <FaInstagramSquare className='text-[25px] text-[#77838F] hover:text-[#F16126] ease-in-out duration-300' />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex gap-5 mt-4 w-full'>
                  <div className='w-2/12'>
                    <img
                      className='rounded-md w-full object-cover'
                      src='Assets/Images/advisors/Advisor_6.png'
                      alt=''
                    />
                  </div>
                  <div className='w-9/12'>
                    <h2 className='text-[20px] font-semibold'>Monisa Das</h2>
                    <div>
                      <span className='block text-sm'>Database Expert</span>
                      <span className='block text-sm'>
                        Sponsor and exhibitor
                      </span>
                      <span className='block text-sm'>
                        alexjohan@infolef.com
                      </span>
                    </div>
                    <div>
                      <div className='mt-2'>
                        <div className='flex gap-1'>
                          <a href='#'>
                            <FaFacebookSquare className='text-[25px] text-[#77838F] hover:text-[#F16126] ease-in-out duration-300' />
                          </a>
                          <a href='#'>
                            <FaTwitterSquare className='text-[25px] text-[#77838F] hover:text-[#F16126] ease-in-out duration-300' />
                          </a>
                          <a href='#'>
                            <FaLinkedin className='text-[25px] text-[#77838F] hover:text-[#F16126] ease-in-out duration-300' />
                          </a>
                          <a href='#'>
                            <FaInstagramSquare className='text-[25px] text-[#77838F] hover:text-[#F16126] ease-in-out duration-300' />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* VENUE */}
              <div className='venue mt-20 bg-[#002147] rounded-md '>
                <div className='flex gap-10 justify-between px-8 py-8 w-full'>
                  <div className='w-3/5'>
                    <h2 className='text-[#fff] text-[30px] font-semibold'>
                      EVENT DETAILS
                    </h2>
                    <div className='mt-3'>
                      <div className='flex gap-1.5 items-center'>
                        <span>
                          <FaHistory className='text-[#F16126]' />
                        </span>
                        <span className='text-white text-sm'>
                          Start: Jan 20 @ 7:30 am
                        </span>
                      </div>
                      <div className='flex gap-1.5 items-center mt-1'>
                        <span>
                          <FaHistory className='text-[#F16126]' />
                        </span>
                        <span className='text-white text-sm'>
                          End: Jan 30 @ 6:00 pm
                        </span>
                      </div>
                      <div>
                        <p className='text-sm text-white mt-3 leading-relaxed'>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Facilis, saepe enim atque dolorum cumque vero
                          autem quasi ducimus voluptate quas.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='w-2/5 flex justify-end'>
                    <div>
                      <h2 className='text-[#fff] text-[30px] font-semibold'>
                        VENUE
                      </h2>
                      <div className='mt-3'>
                        <div className='flex gap-1.5 items-center'>
                          <span className='text-white text-sm'>
                            362 Hood AvenueSan Diego, CA 92101, New York
                          </span>
                        </div>
                        <div className='mt-3 relative'>
                          <img
                            className='w-[250px]'
                            src='/Assets/Images/shape/shape_11.png'
                            alt=''
                          />
                          <div className='text__file absolute top-[4px] left-[55px]'>
                            <p className='text-white'>
                              <span className='text-[30px] font-semibold'>
                                20
                              </span>{" "}
                              Jan 2022
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-span-4 mb-4 pl-5'>
              <Sidebar />
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

export default EventDetailsComponent;
