import React from "react";
import { FaSearch } from "react-icons/fa";
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
      <div className="errorSection gridCourses h-[calc(100%-910px)] py-[80px]">
        {/* Error Info */}
        <div className="container mx-auto mt-10">
          <div className="flex items-center justify-center">
            <div className="px-[300px]">
              <div className="text-center">
                <h2 className=" text-[40px] font-semibold leading-[50px]">
                  Opps! Things you are looking for doesn’t exists!
                </h2>
                <p className="mt-4 text-sm">
                  The page you are looking for was moved, removed, renamed or
                  might never existed.
                </p>
                <div className="searchBox mt-5">
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
                </div>
                <Link
                  to={"/"}
                  className="mt-5 inline-block rounded-lg bg-[#F16126] px-4 py-3 text-white"
                >
                  Back To Home
                </Link>
              </div>
              <div className="mt-5 flex justify-center">
                <img
                  className="object-cover"
                  src="/Assets/Images/shape/shape_13.png"
                  alt="Next LMS"
                />
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
