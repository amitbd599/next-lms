import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import {
  FaFolderOpen,
  FaUserTie,
  FaPhoneAlt,
  FaEdit,
  FaUserEdit,
} from "react-icons/fa";
const Menu = () => {
  const [show, setShow] = useState(false);
  console.log(show);

  const MenuControl = () => {
    setShow(!show);
  };

  var elements = document.querySelectorAll(".has-droupdown > a");
  for (var i in elements) {
    if (elements.hasOwnProperty(i)) {
      elements[i].onclick = function () {
        this.parentElement.querySelector(".submenu").classList.toggle("active");
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
      <div
        className={
          show
            ? "navbar menu-open h-[80px] w-full bg-white "
            : "navbar h-[80px] w-full bg-white "
        }
      >
        <div className='container h-[80px] w-full mx-auto flex items-center'>
          <div className='flex w-full justify-between items-center'>
            <div className='logo__section'>
              <img className='w-[230px]' src='/Assets/Images/logo.png' alt='' />
            </div>
            <div className='header-right'>
              <nav className='lg:block'>
                <ul className='menu'>
                  <li className='has-droupdown'>
                    <Link to='#'>Home</Link>
                    <ul className='submenu'>
                      <li>
                        <Link to='/main-demo'>Main Demo</Link>
                      </li>
                      <li>
                        <Link to='/dark-main-demo'>Main Demo Dark</Link>
                      </li>
                      <li>
                        <Link to='/personal-portfolio'>Personal Portfolio</Link>
                      </li>
                      <li>
                        <Link to='/interior-landing'>Interior Landing</Link>
                      </li>
                      <li>
                        <Link to='/dark-portfolio-landing'>
                          Portfolio One Page 02
                        </Link>
                      </li>
                      <li>
                        <Link to='/portfolio-home'>Minimal Portfolio</Link>
                      </li>
                      <li>
                        <Link to='/digital-agency'>Digital Agency</Link>
                      </li>
                      <li>
                        <Link to='/creative-agency'>Creative Agency</Link>
                      </li>
                      <li>
                        <Link to='/corporate-business'>Corporate Business</Link>
                      </li>
                      <li>
                        <Link to='/portfolio-landing'>Portfolio One Page</Link>
                      </li>
                      <li>
                        <Link to='/creative-landing'>
                          Creative Agency Landing
                        </Link>
                      </li>
                      <li>
                        <Link to='/business'>Business</Link>
                      </li>
                      <li>
                        <Link to='/designer-portfolio'>Designer Portfolio</Link>
                      </li>
                      <li>
                        <Link to='/home-particles'>Home Particles</Link>
                      </li>
                      <li>
                        <Link to='/studio-agency'>Studio Agency</Link>
                      </li>
                      <li>
                        <Link to='/startup'>Startup</Link>
                      </li>
                      <li>
                        <Link to='/creative-portfolio'>Creative Portfolio</Link>
                      </li>
                    </ul>
                  </li>
                  <li className='has-droupdown'>
                    <Link to='/service'>Service</Link>
                    <ul className='submenu'>
                      <li>
                        <Link to='/service'>Service</Link>
                      </li>
                      <li>
                        <Link to='/service-details'>Service Details</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to='/about'>About</Link>
                  </li>

                  <li className='has-droupdown'>
                    <Link to='#pages'>Pages</Link>
                    <ul className='submenu'>
                      <li>
                        <Link to='/blog'>Blog List</Link>
                      </li>
                      <li>
                        <Link to='/blog-details'>Blog Details</Link>
                      </li>
                      <li>
                        <Link to='/service'>Service</Link>
                      </li>
                      <li>
                        <Link to='/service-details'>Service Details</Link>
                      </li>
                      <li>
                        <Link to='/portfolio'>Portfolio</Link>
                      </li>
                      <li>
                        <Link to='/portfolio-details'>Portfolio Details</Link>
                      </li>
                      <li>
                        <Link to='/404'>404</Link>
                      </li>
                    </ul>
                  </li>
                  <li className='has-droupdown'>
                    <Link to='#'>Blocks</Link>
                    <ul className='submenu'>
                      <li>
                        <Link to='/button'>Button</Link>
                      </li>
                      <li>
                        <Link to='/portfolio'>Portfolio</Link>
                      </li>
                      <li>
                        <Link to='/team'>Team</Link>
                      </li>
                      <li>
                        <Link to='/service'>Service</Link>
                      </li>
                      <li>
                        <Link to='/video-popup'>Video Popup</Link>
                      </li>
                      <li>
                        <Link to='/progressbar'>Progressbar</Link>
                      </li>
                      <li>
                        <Link to='/gallery'>Gallery</Link>
                      </li>
                      <li>
                        <Link to='/counters'>Counters</Link>
                      </li>
                      <li>
                        <Link to='/blog'>Blog List</Link>
                      </li>
                      <li>
                        <Link to='/clint-logo'>Clint Logo</Link>
                      </li>
                      <li>
                        <Link to='/contact-form'>Contact Form</Link>
                      </li>
                      <li>
                        <Link to='/google-map'>Google Map</Link>
                      </li>
                      <li>
                        <Link to='/columns'>Columns</Link>
                      </li>
                      <li>
                        <Link to='/pricing-table'>Pricing Table</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to='/contact'>Contact</Link>
                  </li>
                </ul>
              </nav>
              {/* Start Humberger Menu  */}
              <div className='humberger-menu block lg:hidden'>
                <span onClick={MenuControl} className='menutrigger text-white'>
                  <FiMenu />
                </span>
              </div>
              {/* End Humberger Menu  */}
              <div className='close-menu block lg:hidden'>
                <span onClick={MenuControl} className='closeTrigger'>
                  <FiX />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Menu;
