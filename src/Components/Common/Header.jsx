import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import {
  FaFolderOpen,
  FaUserTie,
  FaPhoneAlt,
  FaEdit,
  FaUserEdit,
} from "react-icons/fa";
import { Fade } from "react-reveal";
const Header = () => {
  const [show, setShow] = useState(false);
  const [stickyNav, setStickyNav] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset < 300) {
        setStickyNav(false);
      } else if (window.pageYOffset > 300) {
        setStickyNav(true);
      }
      return () => (window.onscroll = null);
    };
  }, []);
  const MenuControl = () => {
    setShow(!show);
  };

  let items = document.querySelectorAll(".root__dropdown > a");
  for (let i in items) {
    if (items.hasOwnProperty(i)) {
      items[i].onclick = function () {
        this.parentElement.querySelector(".subMenu").classList.toggle("active");
        this.classList.toggle("open");
      };
    }
  }
  return (
    <header>
      {/* Top Header Section*/}
      <div className="top__header hidden h-[35px] w-full bg-[#002147] xl:block">
        <div className="container mx-auto   flex h-full items-center justify-between">
          <div className="flex h-full items-center gap-4">
            <div className="flex items-center gap-4">
              <Fade>
                <div className="flex items-center gap-2">
                  <span>
                    <FaFolderOpen className="text-sm text-white" />
                  </span>
                  <span className="text-xs font-light text-white">
                    Total Course: 23400
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-slate-400 mb-[-1px] text-[14px]">
                    |
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span>
                    <FaUserTie className="text-sm text-white" />
                  </span>
                  <span className="text-xs font-light text-white">
                    Total Teacher: 320
                  </span>
                </div>

                <div className="flex items-center">
                  <span className="text-slate-400 mb-[-1px] text-[14px]">
                    |
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span>
                    <FaPhoneAlt className="text-sm text-white" />
                  </span>
                  <span className="text-xs font-light text-white">
                    Hot Line : +88 0181 234567
                  </span>
                </div>
              </Fade>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Fade>
              <div>
                <Link
                  to={"/registration"}
                  className="flex items-center gap-1.5  rounded-md px-3 py-2 text-white duration-200 ease-in-out hover:text-[#F16126]"
                >
                  <span>
                    <FaEdit />
                  </span>
                  <span className="text-xs ">Register</span>
                </Link>
              </div>
              <div>
                <Link
                  to={"/login"}
                  className="flex items-center gap-1.5  rounded-md px-3 py-2 text-white duration-200 ease-in-out hover:text-[#F16126]"
                >
                  <span>
                    <FaUserEdit />
                  </span>
                  <span className="text-xs">Login</span>
                </Link>
              </div>
            </Fade>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <div className={stickyNav ? "h-[80px] " : null}></div>
      <div className={stickyNav ? "my__sticky__nav shadow-lg " : null}>
        <div className={show ? " menu-open " : null}>
          <div className="navbar sticky top-0 z-[9999] h-[80px] w-full bg-white">
            <div className="container mx-auto flex h-[80px] w-full items-center">
              <div className="flex w-full items-center justify-between">
                <div className="header__left">
                  <div className="logo__section">
                    <Link to={"/"}>
                      <img
                        className="w-[230px]"
                        src="/Assets/Images/logo.png"
                        alt="Next LMS"
                      />
                    </Link>
                  </div>
                </div>

                <div className="header__right">
                  <nav className="lg:block">
                    <ul className="menu">
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li className="root__dropdown">
                        <Link to="#course">Course</Link>
                        <ul className="subMenu">
                          <li>
                            <Link to="/course-grid-page">Course Grid</Link>
                          </li>
                          <li>
                            <Link to="/course-list-page">Course List</Link>
                          </li>
                          <li>
                            <Link to="/course-details">Course Details</Link>
                          </li>
                        </ul>
                      </li>

                      <li className="root__dropdown">
                        <Link to="#pages">Pages</Link>
                        <ul className="subMenu">
                          <li>
                            <Link to="/course-advisor">Course Advisor</Link>
                          </li>
                          <li>
                            <Link to="/course-advisor-details">
                              Course Advisor Details
                            </Link>
                          </li>
                          <li>
                            <Link to="/event">Event</Link>
                          </li>
                          <li>
                            <Link to="/event-details">Event Details</Link>
                          </li>
                          <li>
                            <Link to="/faq">Faq</Link>
                          </li>
                          <li>
                            <Link to="/gallery">Gallery</Link>
                          </li>
                          <li>
                            <Link to="/category">Category</Link>
                          </li>
                          <li>
                            <Link to="/login">Login</Link>
                          </li>
                          <li>
                            <Link to="/registration">Registration</Link>
                          </li>
                          <li>
                            <Link to="/error">404 Page</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="root__dropdown">
                        <Link to="#blog">Blog</Link>
                        <ul className="subMenu">
                          <li>
                            <Link to="/blog">Blog</Link>
                          </li>
                          <li>
                            <Link to="/blog-details">Blog Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/about">About</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                  </nav>
                  {/* Start Humbugger Menu  */}
                  <button className="HumbuggerMenu block xl:hidden">
                    <span
                      onClick={MenuControl}
                      className="menuOpenTrigger text-white"
                    >
                      <FiMenu />
                    </span>
                  </button>
                  <button className="close-menu block xl:hidden">
                    <span onClick={MenuControl} className="MenuCloseTrigger">
                      <FiX />
                    </span>
                  </button>
                  {/* End Humbugger Menu  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
