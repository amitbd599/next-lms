import React from "react";
import { FaFacebook, FaGitAlt, FaLinkedin, FaTwitter } from "react-icons/fa";

const CourseAdvisor = ({ item }) => {
  return (
    <div className='itemContainer relative flex justify-center'>
      <div className=' px-4 py-4 shadow-lg hover:shadow-xl rounded-lg ease-in-out duration-300'>
        <div className='img__file overflow-hidden rounded-md  relative'>
          <img src={item.thumbnail} alt='' />
          <div className='icons absolute'>
            <div className='icon__body'>
              <span>
                <a href='#'>
                  <FaFacebook />
                </a>
              </span>
              <span>
                <a href='#'>
                  <FaTwitter />
                </a>
              </span>
              <span>
                {" "}
                <a href='#'>
                  <FaLinkedin />
                </a>
              </span>
              <span>
                {" "}
                <a href='#'>
                  <FaGitAlt />
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className='text__file mt-5 mb-3'>
          <div className='text-center'>
            <h3 className='text-[22px] font-semibold'>{item.name}</h3>
            <p className='text-sm'>{item.position}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseAdvisor;
