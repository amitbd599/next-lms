import React from "react";
import {
  FaEnvelope,
  FaFacebookSquare,
  FaFax,
  FaHistory,
  FaInstagramSquare,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitterSquare,
} from "react-icons/fa";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer w-full bg-[#000000] pt-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-5 md:gap-10">
          <div className="col-span-12 mb-5 md:col-span-6 lg:col-span-4 lg:mb-0">
            <Fade bottom>
              <div className="img__file">
                <img
                  className="w-[200px]"
                  src="Assets/Images/logo_white.png"
                  alt="Next LMS"
                />
              </div>
            </Fade>

            <div className="mt-4">
              <Fade bottom>
                <p className="text-sm leading-relaxed text-white">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Deserunt fuga commodi, ea ullam illo soluta inventore!
                  Praesentium doloribus laboriosam, ad soluta excepturi.
                </p>
              </Fade>
            </div>
            <div className="mt-4">
              <Fade bottom>
                <div className="flex gap-2">
                  <a href="#" className="p-0.5">
                    <FaFacebookSquare className="text-[25px] text-white duration-300 ease-in-out hover:text-[#F16126]" />
                  </a>
                  <a href="#" className="p-0.5">
                    <FaTwitterSquare className="text-[25px] text-white duration-300 ease-in-out hover:text-[#F16126]" />
                  </a>
                  <a href="#" className="p-0.5">
                    <FaLinkedin className="text-[25px] text-white duration-300 ease-in-out hover:text-[#F16126]" />
                  </a>
                  <a href="#" className="p-0.5">
                    <FaInstagramSquare className="text-[25px] text-white duration-300 ease-in-out hover:text-[#F16126]" />
                  </a>
                </div>
              </Fade>
            </div>
          </div>
          <div className="col-span-12 mb-5 md:col-span-6 lg:col-span-2 lg:mb-0">
            <div className="mb-3">
              <Fade bottom>
                <h3 className="text-[22px] font-medium text-white">
                  Categories
                </h3>
              </Fade>
            </div>
            <div>
              <Fade bottom>
                <ul>
                  <li>
                    <Link
                      className="block py-1 text-sm text-white duration-300 ease-in-out hover:text-[#F16126]"
                      to={"/"}
                    >
                      All Courses
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block py-1 text-sm text-white duration-300 ease-in-out hover:text-[#F16126]"
                      to={"/"}
                    >
                      Data Structure{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block py-1 text-sm text-white duration-300 ease-in-out hover:text-[#F16126]"
                      to={"/"}
                    >
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block py-1 text-sm text-white duration-300 ease-in-out hover:text-[#F16126]"
                      to={"/"}
                    >
                      Electrical Machines
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block py-1 text-sm text-white duration-300 ease-in-out hover:text-[#F16126]"
                      to={"/"}
                    >
                      Software{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block py-1 text-sm text-white duration-300 ease-in-out hover:text-[#F16126]"
                      to={"/"}
                    >
                      Digital Marketing
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block py-1 text-sm text-white duration-300 ease-in-out hover:text-[#F16126]"
                      to={"/"}
                    >
                      Affiliates Marketing
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block py-1 text-sm text-white duration-300 ease-in-out hover:text-[#F16126]"
                      to={"/"}
                    >
                      Graphic Design
                    </Link>
                  </li>
                </ul>
              </Fade>
            </div>
          </div>

          <div className="col-span-12 mb-5 md:col-span-6 lg:col-span-3 lg:mb-0">
            <div className="mb-3">
              <Fade bottom>
                <h3 className="text-[22px] font-medium text-white">Gallery</h3>
              </Fade>
            </div>
            <div>
              <Fade bottom>
                <div className="grid grid-cols-3 gap-2">
                  <span>
                    <img
                      className="w-[100px]"
                      src="/Assets/Images/blogs/Blog_1.png"
                      alt="Next LMS"
                    />
                  </span>
                  <span>
                    <img
                      className="w-[100px]"
                      src="/Assets/Images/blogs/Blog_2.png"
                      alt="Next LMS"
                    />
                  </span>
                  <span>
                    <img
                      className="w-[100px]"
                      src="/Assets/Images/blogs/Blog_3.png"
                      alt="Next LMS"
                    />
                  </span>
                  <span>
                    <img
                      className="w-[100px]"
                      src="/Assets/Images/blogs/Blog_4.png"
                      alt="Next LMS"
                    />
                  </span>
                  <span>
                    <img
                      className="w-[100px]"
                      src="/Assets/Images/blogs/Blog_5.png"
                      alt="Next LMS"
                    />
                  </span>
                  <span>
                    <img
                      className="w-24"
                      src="/Assets/Images/blogs/Blog_6.png"
                      alt="Next LMS"
                    />
                  </span>
                </div>
              </Fade>
            </div>
          </div>
          <div className="col-span-12 mb-5 md:col-span-6 lg:col-span-3 lg:mb-0">
            <div className="mb-3">
              <Fade bottom>
                <h3 className="text-[22px] font-medium text-white">
                  Contact Us
                </h3>
              </Fade>
            </div>
            <div>
              <Fade bottom>
                <ul>
                  <li className="mb-2 flex items-start gap-2 py-1 text-sm text-white">
                    <span>
                      <FaPhoneAlt className="text-[18px] text-[#F16126]" />
                    </span>
                    <span>545 - 123 - 467</span>
                  </li>
                  <li className="mb-2 flex items-start gap-2 py-1 text-sm text-white">
                    <span>
                      <FaEnvelope className="text-[18px] text-[#F16126]" />
                    </span>
                    <span>info@nextlms.com</span>
                  </li>
                  <li className="mb-2 flex items-start gap-2 py-1 text-sm text-white">
                    <span>
                      <FaMapMarkerAlt className="text-[18px] text-[#F16126]" />
                    </span>
                    <span>New South London, UK</span>
                  </li>
                  <li className="mb-2 flex items-start gap-2 py-1 text-sm text-white">
                    <span>
                      <FaFax className="text-[18px] text-[#F16126]" />
                    </span>
                    <span>864-223-0252</span>
                  </li>
                  <li className="mb-2 flex items-start gap-2 py-1 text-sm text-white">
                    <span>
                      <FaHistory className="text-[18px] text-[#F16126]" />
                    </span>
                    <span> Sun - Fri 10:00AM - 9:30PM Sunday - CLOSED</span>
                  </li>
                </ul>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-12 border-t border-t-[#E9ECEF] py-5">
        <div className=" text-center">
          <div>
            <Fade bottom>
              <p className="text-xs text-white">
                © Copyrights 2022 NextLMS Designed By Amit Biswas. All rights
                reserved.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
