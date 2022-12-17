import React from "react";
import {
  FaFacebookSquare,
  FaHistory,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";
import { Fade } from "react-reveal";
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
      <div className="eventSection gridCourses py-[50px] md:py-[60px] lg:py-[70px] xl:py-[80px]">
        {/* Courses Info */}
        <div className="container mx-auto ">
          <div className="grid grid-cols-12 gap-3 xl:gap-5">
            <div className="col-span-12 mb-4 lg:col-span-8 ">
              {/* Thumbnail Image*/}
              <div>
                <Fade>
                  <img
                    className="rounded-md"
                    src="Assets/Images/events/event_13.png"
                    alt=""
                  />
                </Fade>
              </div>
              {/* Event Details */}
              <div className="mx-3 mt-5 ">
                <div>
                  <Fade>
                    <h2 className="text-[40px] font-semibold">Overview</h2>
                  </Fade>
                </div>
                <div>
                  <Fade>
                    <p className="text-sm leading-relaxed">
                      An affordable, mobile-friendly, all-in-one event
                      management platform. Whova is widely used by 30,000+
                      in-person and virtual/hybrid events in the US/Canada,
                      UK/Europe, Australia, Asia, and more. With the highest
                      ratings in app stores and software review sites among all
                      event apps, Whova offers customers a variety of
                      time-saving tools.
                    </p>
                    <br />
                    <p className="text-sm leading-relaxed">
                      Rather than juggling multiple specialized event software
                      platforms, Whova is built to help you manage your events
                      from beginning to end with one system. Key features of
                      Whova's event planning software include:
                    </p>
                    <div>
                      <ul className="mt-2 list-disc pl-7">
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
                    <p className="mt-4 text-sm leading-relaxed">
                      Summary: If you're holding a research heavy academic
                      conference and want a reliable tool for abstract
                      management, ConfTool is worth looking into. However, it
                      isn't currently accessible on mobile, and is designed to
                      support only limited aspects of the event, rather than
                      function as a comprehensive event management software.
                    </p>
                  </Fade>
                </div>
              </div>

              {/* Special Guest */}
              <div className="mt-16">
                <div>
                  <Fade>
                    <h2 className="text-[40px] font-semibold">Special Guest</h2>
                  </Fade>
                </div>
                <div className="mt-8 flex w-full gap-5 border-b border-[#E9ECEF] pb-5">
                  <div className="w-2/12">
                    <Fade>
                      <img
                        className="w-full rounded-md object-cover"
                        src="Assets/Images/advisors/Advisor_2.png"
                        alt=""
                      />
                    </Fade>
                  </div>
                  <div className="w-9/12">
                    <Fade>
                      <h2 className="text-[20px] font-semibold">Alex Johan</h2>
                    </Fade>

                    <div>
                      <Fade>
                        <span className="block text-sm">
                          JavaScript Programmer
                        </span>
                        <span className="block text-sm">
                          Software Development And Design
                        </span>
                        <span className="block text-sm">
                          alexjohan@infolef.com
                        </span>
                      </Fade>
                    </div>
                    <div>
                      <div className="mt-2">
                        <Fade>
                          <div className="flex gap-1">
                            <a href="#">
                              <FaFacebookSquare className="text-[25px] text-[#77838F] duration-300 ease-in-out hover:text-[#F16126]" />
                            </a>
                            <a href="#">
                              <FaTwitterSquare className="text-[25px] text-[#77838F] duration-300 ease-in-out hover:text-[#F16126]" />
                            </a>
                            <a href="#">
                              <FaLinkedin className="text-[25px] text-[#77838F] duration-300 ease-in-out hover:text-[#F16126]" />
                            </a>
                            <a href="#">
                              <FaInstagramSquare className="text-[25px] text-[#77838F] duration-300 ease-in-out hover:text-[#F16126]" />
                            </a>
                          </div>
                        </Fade>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex w-full gap-5">
                  <div className="w-2/12">
                    <Fade>
                      <img
                        className="w-full rounded-md object-cover"
                        src="Assets/Images/advisors/Advisor_6.png"
                        alt=""
                      />
                    </Fade>
                  </div>
                  <div className="w-9/12">
                    <Fade>
                      <h2 className="text-[20px] font-semibold">Monisa Das</h2>
                    </Fade>

                    <div>
                      <Fade>
                        <span className="block text-sm">Database Expert</span>
                        <span className="block text-sm">
                          Sponsor and exhibitor
                        </span>
                        <span className="block text-sm">
                          alexjohan@infolef.com
                        </span>
                      </Fade>
                    </div>
                    <div>
                      <div className="mt-2">
                        <Fade>
                          <div className="flex gap-1">
                            <a href="#">
                              <FaFacebookSquare className="text-[25px] text-[#77838F] duration-300 ease-in-out hover:text-[#F16126]" />
                            </a>
                            <a href="#">
                              <FaTwitterSquare className="text-[25px] text-[#77838F] duration-300 ease-in-out hover:text-[#F16126]" />
                            </a>
                            <a href="#">
                              <FaLinkedin className="text-[25px] text-[#77838F] duration-300 ease-in-out hover:text-[#F16126]" />
                            </a>
                            <a href="#">
                              <FaInstagramSquare className="text-[25px] text-[#77838F] duration-300 ease-in-out hover:text-[#F16126]" />
                            </a>
                          </div>
                        </Fade>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* VENUE */}
              <div className="venue mt-20 rounded-md bg-[#002147] ">
                <div className="block w-full justify-between gap-10 px-8 py-8 md:flex">
                  <div className="w-auto md:w-3/5">
                    <Fade>
                      <h2 className="text-[30px] font-semibold text-[#fff]">
                        EVENT DETAILS
                      </h2>
                    </Fade>

                    <div className="mt-3">
                      <Fade>
                        <div className="flex items-center gap-1.5">
                          <span>
                            <FaHistory className="text-[#F16126]" />
                          </span>
                          <span className="text-sm text-white">
                            Start: Jan 20 @ 7:30 am
                          </span>
                        </div>
                      </Fade>
                      <Fade>
                        <div className="mt-1 flex items-center gap-1.5">
                          <span>
                            <FaHistory className="text-[#F16126]" />
                          </span>
                          <span className="text-sm text-white">
                            End: Jan 30 @ 6:00 pm
                          </span>
                        </div>
                      </Fade>

                      <div>
                        <Fade>
                          <p className="mt-3 text-sm leading-relaxed text-white">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Facilis, saepe enim atque dolorum cumque vero
                            autem quasi ducimus voluptate quas.
                          </p>
                        </Fade>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 flex w-auto justify-end md:mt-0 md:w-2/5">
                    <div>
                      <Fade>
                        <h2 className="text-[30px] font-semibold text-[#fff]">
                          VENUE
                        </h2>
                      </Fade>

                      <div className="mt-3">
                        <div className="flex items-center gap-1.5">
                          <Fade>
                            <span className="text-sm text-white">
                              362 Hood AvenueSan Diego, CA 92101, New York
                            </span>
                          </Fade>
                        </div>
                        <div className="relative mt-3">
                          <Fade>
                            <img
                              className="w-[200px]"
                              src="/Assets/Images/shape/shape_26.png"
                              alt=""
                            />
                          </Fade>

                          <div className="text__file absolute top-[15px] left-[35px]">
                            <Fade>
                              <p className="text-white">
                                <span className="text-[30px] font-semibold">
                                  20
                                </span>{" "}
                                Jan 2022
                              </p>
                            </Fade>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 mt-8 mb-4 md:mt-0 lg:col-span-4 lg:pl-5">
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
