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
            <div className="img__file">
              <Fade bottom>
                <img
                  className="w-[200px]"
                  src="Assets/Images/logo_white.png"
                  alt="Next LMS"
                />
              </Fade>
            </div>

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
              <h3 className="text-[22px] font-medium text-white">
                <Fade bottom>Categories</Fade>
              </h3>
            </div>
            <div>
              <ul>
                <li>
                  <Fade bottom>
                    <Link
                      className="block py-1 text-sm text-white duration-300 ease-in-out hover:text-[#F16126]"
                      to={"/"}
                    >
                      All Courses
                    </Link>
                  </Fade>
                </li>
                <li>
                  <Fade bottom>
                    <Link
                      className="block py-1 text-sm text-white duration-300 ease-in-out hover:text-[#F16126]"
                      to={"/"}
                    >
                      Data Structure
                    </Link>
                  </Fade>
                </li>
                <li>
                  <Fade bottom>
                    <Link
                      className="block py-1 text-sm text-white duration-300 ease-in-out hover:text-[#F16126]"
                      to={"/"}
                    >
                      Web Development
                    </Link>
                  </Fade>
                </li>
                <li>
                  <Fade bottom>
                    <Link
                      className="block py-1 text-sm text-white duration-300 ease-in-out hover:text-[#F16126]"
                      to={"/"}
                    >
                      Electrical Machines
                    </Link>
                  </Fade>
                </li>
                <li>
                  <Fade bottom>
                    <Link
                      className="block py-1 text-sm text-white duration-300 ease-in-out hover:text-[#F16126]"
                      to={"/"}
                    >
                      Software
                    </Link>
                  </Fade>
                </li>
                <li>
                  <Fade bottom>
                    <Link
                      className="block py-1 text-sm text-white duration-300 ease-in-out hover:text-[#F16126]"
                      to={"/"}
                    >
                      Digital Marketing
                    </Link>
                  </Fade>
                </li>
                <li>
                  <Fade bottom>
                    <Link
                      className="block py-1 text-sm text-white duration-300 ease-in-out hover:text-[#F16126]"
                      to={"/"}
                    >
                      Affiliates Marketing
                    </Link>
                  </Fade>
                </li>
                <li>
                  <Fade bottom>
                    <Link
                      className="block py-1 text-sm text-white duration-300 ease-in-out hover:text-[#F16126]"
                      to={"/"}
                    >
                      Graphic Design
                    </Link>
                  </Fade>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-span-12 mb-5 md:col-span-6 lg:col-span-3 lg:mb-0">
            <div className="mb-3">
              <h3 className="text-[22px] font-medium text-white">
                <Fade bottom>Gallery</Fade>
              </h3>
            </div>
            <div>
              <div className="grid grid-cols-3 gap-2">
                <Fade bottom>
                  <span>
                    <img
                      className="w-full object-cover"
                      src="/Assets/Images/blogs/Blog_1.png"
                      alt="Next LMS"
                    />
                  </span>
                </Fade>
                <Fade bottom>
                  <span>
                    <img
                      className="w-full object-cover"
                      src="/Assets/Images/blogs/Blog_2.png"
                      alt="Next LMS"
                    />
                  </span>
                </Fade>
                <Fade bottom>
                  <span>
                    <img
                      className="w-full object-cover"
                      src="/Assets/Images/blogs/Blog_3.png"
                      alt="Next LMS"
                    />
                  </span>
                </Fade>
                <Fade bottom>
                  <span>
                    <img
                      className="w-full object-cover"
                      src="/Assets/Images/blogs/Blog_4.png"
                      alt="Next LMS"
                    />
                  </span>
                </Fade>
                <Fade bottom>
                  <span>
                    <img
                      className="w-full object-cover"
                      src="/Assets/Images/blogs/Blog_5.png"
                      alt="Next LMS"
                    />
                  </span>
                </Fade>
                <Fade bottom>
                  <span>
                    <img
                      className="w-full object-cover"
                      src="/Assets/Images/blogs/Blog_6.png"
                      alt="Next LMS"
                    />
                  </span>
                </Fade>
              </div>
            </div>
          </div>
          <div className="col-span-12 mb-5 md:col-span-6 lg:col-span-3 lg:mb-0">
            <div className="mb-3">
              <h3 className="text-[22px] font-medium text-white">
                <Fade bottom>Contact Us</Fade>
              </h3>
            </div>
            <div>
              <ul>
                <Fade bottom>
                  <li className="mb-2 flex items-start gap-2 py-1 text-sm text-white">
                    <span>
                      <FaPhoneAlt className="text-[18px] text-[#F16126]" />
                    </span>
                    <span>545 - 123 - 467</span>
                  </li>
                </Fade>
                <Fade bottom>
                  <li className="mb-2 flex items-start gap-2 py-1 text-sm text-white">
                    <span>
                      <FaEnvelope className="text-[18px] text-[#F16126]" />
                    </span>
                    <span>info@nextlms.com</span>
                  </li>
                </Fade>
                <Fade bottom>
                  <li className="mb-2 flex items-start gap-2 py-1 text-sm text-white">
                    <span>
                      <FaMapMarkerAlt className="text-[18px] text-[#F16126]" />
                    </span>
                    <span>New South London, UK</span>
                  </li>
                </Fade>
                <Fade bottom>
                  <li className="mb-2 flex items-start gap-2 py-1 text-sm text-white">
                    <span>
                      <FaFax className="text-[18px] text-[#F16126]" />
                    </span>
                    <span>864-223-0252</span>
                  </li>
                </Fade>
                <Fade bottom>
                  <li className="mb-2 flex items-start gap-2 py-1 text-sm text-white">
                    <span>
                      <FaHistory className="text-[18px] text-[#F16126]" />
                    </span>
                    <span> Sun - Fri 10:00AM - 9:30PM Sunday - CLOSED</span>
                  </li>
                </Fade>
              </ul>
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
