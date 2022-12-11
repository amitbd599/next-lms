import React from "react";
import { FaFacebook, FaGitAlt, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Fade } from "react-reveal";

const CourseAdvisor = ({ item }) => {
  return (
    <div className="itemContainer relative flex justify-center">
      <div className=" rounded-lg px-4 py-4 shadow-lg duration-300 ease-in-out hover:shadow-xl">
        <div className="img__file relative overflow-hidden  rounded-md">
          <Fade>
            <img src={item.thumbnail} alt="Next LMS" />
          </Fade>

          <div className="icons absolute">
            <div className="icon__body">
              <span>
                <a href="#">
                  <FaFacebook />
                </a>
              </span>
              <span>
                <a href="#">
                  <FaTwitter />
                </a>
              </span>
              <span>
                {" "}
                <a href="#">
                  <FaLinkedin />
                </a>
              </span>
              <span>
                {" "}
                <a href="#">
                  <FaGitAlt />
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="text__file mt-5 mb-3">
          <div className="text-center">
            <Fade bottom>
              <h3 className="text-[18px] font-semibold xl:text-[22px]">
                {item.name}
              </h3>
              <p className="text-sm">{item.position}</p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseAdvisor;
