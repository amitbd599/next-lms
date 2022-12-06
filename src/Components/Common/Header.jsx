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
  for (var i in items) {
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
      <div className='top__header hidden lg:block w-full h-[40px] bg-[#002147]'>
        <div className='container mx-auto   h-full flex justify-between items-center'>
          <div className='flex items-center h-full gap-4'>
            <div className='flex items-center gap-4'>
              <div className='flex gap-2 items-center'>
                <span>
                  <FaFolderOpen className='text-[18px] text-primary' />
                </span>
                <span className='text-white text-[14px] font-normal'>
                  Total Course: 23400
                </span>
              </div>
              <div className='flex items-center'>
                <span className='text-slate-400 text-[14px] mb-0.5'>|</span>
              </div>
              <div className='flex gap-2 items-center'>
                <span>
                  <FaUserTie className='text-[18px] text-primary' />
                </span>
                <span className='text-white text-[14px] font-normal'>
                  Total Teacher: 320
                </span>
              </div>
              <div className='flex items-center'>
                <span className='text-slate-400 text-[14px] mb-0.5'>|</span>
              </div>
              <div className='flex gap-2 items-center'>
                <span>
                  <FaPhoneAlt className='text-[18px] text-primary' />
                </span>
                <span className='text-white text-[14px] font-normal'>
                  Hot Line : +88 0181 234567
                </span>
              </div>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <div>
              <button className='flex items-center gap-1.5  ease-in-out duration-200 px-3 py-2 rounded-md'>
                <span>
                  <FaEdit className='text-white ' />
                </span>
                <span className='text-white text-sm font-medium'>Register</span>
              </button>
            </div>
            <div>
              <button className='flex items-center gap-2 px-3 py-2 rounded-md'>
                <span>
                  <FaUserEdit className='text-white' />
                </span>
                <span className='text-white text-sm font-medium'>Login</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <div className={stickyNav ? "h-[80px] " : null}></div>
      <div className={stickyNav ? "my__sticky__nav shadow-lg " : null}>
        <div className={show ? " menu-open " : null}>
          <div className='navbar h-[80px] w-full bg-white sticky top-0 z-[9999]'>
            <div className='container h-[80px] w-full mx-auto flex items-center'>
              <div className='flex w-full justify-between items-center'>
                <div className='header__left'>
                  <div className='logo__section'>
                    <img
                      className='w-[230px]'
                      src='/Assets/Images/logo.png'
                      alt=''
                    />
                  </div>
                </div>

                <div className='header__right'>
                  <nav className='lg:block'>
                    <ul className='menu'>
                      <li className='root__dropdown'>
                        <Link to='/'>Home</Link>
                      </li>
                      <li className='root__dropdown'>
                        <Link to='/course'>Course</Link>
                        <ul className='subMenu'>
                          <li>
                            <Link to='/course-grid-page'>Course Grid</Link>
                          </li>
                          <li>
                            <Link to='/course-list-page'>Course List</Link>
                          </li>
                          <li>
                            <Link to='/course-details'>Course Details</Link>
                          </li>
                        </ul>
                      </li>

                      <li className='root__dropdown'>
                        <Link to='#pages'>Pages</Link>
                        <ul className='subMenu'>
                          <li>
                            <Link to='/course-advisor'>Course Advisor</Link>
                          </li>
                          <li>
                            <Link to='/course-advisor-details'>
                              Course Advisor Details
                            </Link>
                          </li>
                          <li>
                            <Link to='/event'>Event</Link>
                          </li>
                          <li>
                            <Link to='/event-details'>Event Details</Link>
                          </li>
                          <li>
                            <Link to='/faq'>Faq</Link>
                          </li>
                          <li>
                            <Link to='/gallery'>Gallery</Link>
                          </li>
                          <li>
                            <Link to='/category'>Category</Link>
                          </li>
                          <li>
                            <Link to='/login'>Login</Link>
                          </li>
                          <li>
                            <Link to='/registration'>Registration</Link>
                          </li>
                        </ul>
                      </li>
                      <li className='root__dropdown'>
                        <Link to='#'>Blog</Link>
                        <ul className='subMenu'>
                          <li>
                            <Link to='/blog'>Blog</Link>
                          </li>
                          <li>
                            <Link to='/blog-details'>Blog Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to='/about'>About</Link>
                      </li>
                      <li>
                        <Link to='/contact'>Contact</Link>
                      </li>
                    </ul>
                  </nav>
                  {/* Start Humbugger Menu  */}
                  <button className='HumbuggerMenu block lg:hidden'>
                    <span
                      onClick={MenuControl}
                      className='menuOpenTrigger text-white'
                    >
                      <FiMenu />
                    </span>
                  </button>
                  <button className='close-menu block lg:hidden'>
                    <span onClick={MenuControl} className='MenuCloseTrigger'>
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
