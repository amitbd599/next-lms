import React from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";

const IntroSection = (item) => {
  return (
    <div className="introSection h-full w-full">
      <div className="container mx-auto">
        <div className="relative ">
          <div className="flex items-center justify-center">
            <div>
              <div>
                <Fade>
                  <h2 className="text-[36px] font-semibold text-white sm:text-[48px]">
                    {item.title}
                  </h2>
                </Fade>
              </div>
              <Fade>
                <div className="text-center">
                  <Link
                    className="text-white duration-200 ease-in-out hover:text-[#F16126]"
                    to={"/"}
                  >
                    Home
                  </Link>
                  <span className="text-white"> / </span>{" "}
                  <span className="text-white">{item.title}</span>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
