import React from "react";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import IntroSection from "../Common/IntroSection";
import NewsLetter from "../Common/NewsLetter";
import eventData from "../../Database/eventData";
import Event from "../ChildComponents/Elements/Event";
const EventComponent = () => {
  return (
    <section>
      {/* ============ Header Section ============*/}
      <Header />
      {/* ============ Intro Section ============*/}
      <IntroSection title={"Event"} />
      {/* ============ Course Advisor ============ */}
      <div className='eventSection gridCourses py-[80px]'>
        {/* Courses Info */}
        <div className='container mx-auto mt-10'>
          <div className='grid grid-cols-12 gap-5'>
            {eventData.map((item, index) => (
              <div key={index} className='col-span-4 mb-4'>
                <Event item={item} />
              </div>
            ))}
          </div>
        </div>
        {/* Pagination Section */}
        <div className='container mx-auto mt-14'>
          <div aria-label='Page navigation'>
            <div className='flex justify-center'>
              <ul class='inline-flex space-x-2'>
                <li>
                  <button class='flex items-center justify-center w-10 h-10 text-[#F16126] transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-[#f0612657]'>
                    <svg class='w-4 h-4 fill-current' viewBox='0 0 20 20'>
                      <path
                        d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                        clip-rule='evenodd'
                        fill-rule='evenodd'
                      ></path>
                    </svg>
                  </button>
                </li>
                <li>
                  <button class='w-10 h-10 text-[#F16126] transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-[#f0612657]'>
                    1
                  </button>
                </li>
                <li>
                  <button class='w-10 h-10 text-[#F16126] transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-[#f0612657]'>
                    2
                  </button>
                </li>
                <li>
                  <button class='w-10 h-10 text-white transition-colors duration-150 bg-[#F16126] border border-r-0 border-[#F16126] rounded-full focus:shadow-outline'>
                    3
                  </button>
                </li>
                <li>
                  <button class='flex items-center justify-center w-10 h-10 text-[#F16126] transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-[#f0612657]'>
                    <svg class='w-4 h-4 fill-current' viewBox='0 0 20 20'>
                      <path
                        d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                        clip-rule='evenodd'
                        fill-rule='evenodd'
                      ></path>
                    </svg>
                  </button>
                </li>
              </ul>
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

export default EventComponent;
