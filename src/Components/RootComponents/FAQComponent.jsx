import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { Fade } from "react-reveal";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import courseContentData from "../../Database/courseContentData";
import faqData from "../../Database/faqData";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import IntroSection from "../Common/IntroSection";
import NewsLetter from "../Common/NewsLetter";

const FAQComponent = () => {
  return (
    <section>
      {/* ============ Header Section ============*/}
      <Header />
      {/* ============ Intro Section ============*/}
      <IntroSection title={"FAQ"} />
      {/* ============ FAQ ============ */}
      <div className='faqSection gridCourses py-[80px]'>
        {/* Heading text */}
        <div className='container mx-auto mt-10'>
          <div className='grid grid-cols-12 gap-5'>
            <div className='col-span-12 mb-4'>
              <div className='flex justify-center text-center px-40'>
                <div>
                  <h2 className='text-[35px] font-semibold'>
                    We Are Always Ready To Help You
                  </h2>
                  <p className='text-sm mt-2'>
                    If there is any query then you can get all the information
                    from here. We will always try to provide all information
                    accurately. Below is all the information and description.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Info */}
        <div className='container mx-auto mt-10'>
          <div className='grid grid-cols-12 gap-5'>
            <div className='col-span-12 mb-4'>
              <div className='itemOverview mt-4'>
                <div className='px-[100px]'>
                  <Tabs>
                    <div className='flex justify-center'>
                      <TabList>
                        {/* Tab Header STUDENTS */}
                        <Tab>STUDENTS</Tab>
                        {/* Tab Header TEACHERS */}
                        <Tab>TEACHERS</Tab>
                        {/* Tab Header FUTURE STUDENTS */}
                        <Tab>FUTURE STUDENTS</Tab>
                        {/* Tab Header INTERNATIONAL */}
                        <Tab>INTERNATIONAL</Tab>
                        {/* Tab Header TEAM */}
                        <Tab>TEAM</Tab>
                      </TabList>
                    </div>

                    {/* TabPanel STUDENTS */}
                    <TabPanel>
                      <div>
                        <div className='mt-5'>
                          {/* Course Accordion */}
                          <div className='mt-2'>
                            <div>
                              <Fade>
                                <Accordion allowZeroExpanded>
                                  {faqData.STUDENTS.map((item, index) => (
                                    <AccordionItem key={index}>
                                      <AccordionItemHeading>
                                        <AccordionItemButton>
                                          <div className='flex justify-between items-center w-full pl-8  '>
                                            <span className='text-sm font-medium'>
                                              {item.qus}
                                            </span>
                                          </div>
                                        </AccordionItemButton>
                                      </AccordionItemHeading>
                                      <AccordionItemPanel>
                                        <p className='text-sm leading-relaxed'>
                                          {item.ans}
                                        </p>
                                      </AccordionItemPanel>
                                    </AccordionItem>
                                  ))}
                                </Accordion>{" "}
                              </Fade>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    {/* TabPanel TEACHERS */}
                    <TabPanel>
                      <div>
                        <div className='mt-5'>
                          {/* Course Accordion */}
                          <div className='mt-2'>
                            <div>
                              <Fade>
                                <Accordion allowZeroExpanded>
                                  {faqData.TEACHERS.map((item, index) => (
                                    <AccordionItem key={index}>
                                      <AccordionItemHeading>
                                        <AccordionItemButton>
                                          <div className='flex justify-between items-center w-full pl-8  '>
                                            <span className='text-sm font-medium'>
                                              {item.qus}
                                            </span>
                                          </div>
                                        </AccordionItemButton>
                                      </AccordionItemHeading>
                                      <AccordionItemPanel>
                                        <p className='text-sm leading-relaxed'>
                                          {item.ans}
                                        </p>
                                      </AccordionItemPanel>
                                    </AccordionItem>
                                  ))}
                                </Accordion>{" "}
                              </Fade>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    {/* FUTURE STUDENTS */}
                    <TabPanel>
                      <div>
                        <div className='mt-5'>
                          {/* Course Accordion */}
                          <div className='mt-2'>
                            <div>
                              <Fade>
                                <Accordion allowZeroExpanded>
                                  {faqData.FUTURE_STUDENTS.map(
                                    (item, index) => (
                                      <AccordionItem key={index}>
                                        <AccordionItemHeading>
                                          <AccordionItemButton>
                                            <div className='flex justify-between items-center w-full pl-8  '>
                                              <span className='text-sm font-medium'>
                                                {item.qus}
                                              </span>
                                            </div>
                                          </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                          <p className='text-sm leading-relaxed'>
                                            {item.ans}
                                          </p>
                                        </AccordionItemPanel>
                                      </AccordionItem>
                                    )
                                  )}
                                </Accordion>{" "}
                              </Fade>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    {/* FUTURE INTERNATIONAL */}
                    <TabPanel>
                      <div>
                        <div className='mt-5'>
                          {/* Course Accordion */}
                          <div className='mt-2'>
                            <div>
                              <Fade>
                                <Accordion allowZeroExpanded>
                                  {faqData.INTERNATIONAL.map((item, index) => (
                                    <AccordionItem key={index}>
                                      <AccordionItemHeading>
                                        <AccordionItemButton>
                                          <div className='flex justify-between items-center w-full pl-8  '>
                                            <span className='text-sm font-medium'>
                                              {item.qus}
                                            </span>
                                          </div>
                                        </AccordionItemButton>
                                      </AccordionItemHeading>
                                      <AccordionItemPanel>
                                        <p className='text-sm leading-relaxed'>
                                          {item.ans}
                                        </p>
                                      </AccordionItemPanel>
                                    </AccordionItem>
                                  ))}
                                </Accordion>{" "}
                              </Fade>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    {/* FUTURE TEAM */}
                    <TabPanel>
                      <div>
                        <div className='mt-5'>
                          {/* Course Accordion */}
                          <div className='mt-2'>
                            <div>
                              <Fade>
                                <Accordion allowZeroExpanded>
                                  {faqData.TEAM.map((item, index) => (
                                    <AccordionItem key={index}>
                                      <AccordionItemHeading>
                                        <AccordionItemButton>
                                          <div className='flex justify-between items-center w-full pl-8  '>
                                            <span className='text-sm font-medium'>
                                              {item.qus}
                                            </span>
                                          </div>
                                        </AccordionItemButton>
                                      </AccordionItemHeading>
                                      <AccordionItemPanel>
                                        <p className='text-sm leading-relaxed'>
                                          {item.ans}
                                        </p>
                                      </AccordionItemPanel>
                                    </AccordionItem>
                                  ))}
                                </Accordion>{" "}
                              </Fade>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                  </Tabs>
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

export default FAQComponent;
