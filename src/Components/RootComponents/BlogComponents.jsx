import React from "react";
import { Fade } from "react-reveal";
import blogData from "../../Database/blogData";
import Blog from "../ChildComponents/Elements/Blog";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import IntroSection from "../Common/IntroSection";
import NewsLetter from "../Common/NewsLetter";

const BlogComponents = () => {
  return (
    <section>
      {/* ============ Header Section ============*/}
      <Header />
      {/* ============ Intro Section ============*/}
      <IntroSection title={"Blog"} />
      {/* ============ Blog Section ============*/}
      <div className="blogSection  py-[50px] md:py-[60px] lg:py-[70px] xl:py-[80px]">
        <div className="container mx-auto ">
          <div className="grid grid-cols-12 gap-5">
            {blogData.map((item, index) => (
              <div
                key={index}
                className="col-span-12 mb-32 sm:mb-20 md:col-span-6 md:mb-20 lg:col-span-4 lg:mb-28 xl:mb-20"
              >
                <Blog item={item} />
              </div>
            ))}
          </div>
        </div>
        {/* Pagination Section */}
        <div className="container mx-auto mt-5 md:mt-14">
          <div aria-label="Page navigation">
            <Fade bottom>
              <div className="flex justify-center">
                <ul className="inline-flex space-x-2">
                  <li>
                    <button className="focus:shadow-outline flex h-10 w-10 items-center justify-center rounded-full text-[#F16126] transition-colors duration-150 hover:bg-[#f0612657]">
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                        <path
                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clipRule="evenodd"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </li>
                  <li>
                    <button className="focus:shadow-outline h-10 w-10 rounded-full text-[#F16126] transition-colors duration-150 hover:bg-[#f0612657]">
                      1
                    </button>
                  </li>
                  <li>
                    <button className="focus:shadow-outline h-10 w-10 rounded-full text-[#F16126] transition-colors duration-150 hover:bg-[#f0612657]">
                      2
                    </button>
                  </li>
                  <li>
                    <button className="focus:shadow-outline h-10 w-10 rounded-full border border-r-0 border-[#F16126] bg-[#F16126] text-white transition-colors duration-150">
                      3
                    </button>
                  </li>
                  <li>
                    <button className="focus:shadow-outline flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#F16126] transition-colors duration-150 hover:bg-[#f0612657]">
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                        <path
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </li>
                </ul>
              </div>
            </Fade>
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

export default BlogComponents;
