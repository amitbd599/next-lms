import React from "react";
import { FaSearch } from "react-icons/fa";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import IntroSection from "../Common/IntroSection";
const ErrorComponent = () => {
  return (
    <section>
      {/* ============ Header Section ============*/}
      <Header />
      {/* ============ Intro Section ============*/}
      <IntroSection title={"Error 404"} />
      {/* ============ Error Section ============ */}
      <div className="errorSection gridCourses h-[calc(100%-910px)] py-[50px] md:py-[60px] lg:py-[70px] xl:py-[80px]">
        {/* Error Info */}
        <div className="container mx-auto ">
          <div className="flex items-center justify-center">
            <div className=" md:px-[50px] lg:px-[150px] xl:px-[250px]">
              <div className="text-center">
                <Fade bottom>
                  <h2 className="text-[25px] font-semibold leading-[30px] sm:text-[30px] sm:leading-[35px]">
                    Opps! Things you are looking for doesn’t exists!
                  </h2>
                </Fade>
                <Fade bottom>
                  <p className="mt-4 text-sm">
                    The page you are looking for was moved, removed, renamed or
                    might never existed.
                  </p>
                </Fade>

                <div className="searchBox mt-5">
                  <Fade bottom>
                    <div className="relative overflow-hidden rounded-md">
                      <input
                        type="text"
                        className="w-full border border-[#E9ECEF] px-5  py-4"
                        placeholder="Search..."
                      />
                      <button className="absolute top-0 bottom-0 right-0 bg-[#F16126] px-[25px] py-[5px] text-white">
                        <FaSearch />
                      </button>
                    </div>
                  </Fade>
                </div>
                <Fade bottom>
                  <Link
                    to={"/"}
                    className="mt-5 inline-block rounded-lg bg-[#F16126] px-4 py-3 text-white"
                  >
                    Back To Home
                  </Link>
                </Fade>
              </div>
              <div className="mt-5 flex justify-center">
                <Fade>
                  <img
                    className="object-cover"
                    src="/Assets/Images/shape/shape_13.png"
                    alt="Next LMS"
                  />
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ============ Footer Section ============ */}
      <Footer />
    </section>
  );
};

export default ErrorComponent;
