import React from "react";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { Fade } from "react-reveal";

const NewsLetter = () => {
  return (
    <div className="newsLetter relative z-0  w-full bg-[#002147] py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 lg:col-span-6">
            <div>
              <div>
                <span>
                  <FaEnvelopeOpenText className="text-[55px] text-[#F16126]" />
                </span>
              </div>
              <div className="mt-0">
                <h2 className="text-[48px] font-semibold text-white">
                  <Fade bottom>Newsletter</Fade>
                </h2>
                <Fade bottom>
                  <p className="text-sm leading-relaxed text-white">
                    There’s certainly still a place for those, too, but in
                    2022-2023 we saw the return of the newsletter. With so much
                    content and news on the web, people are willing to subscribe
                    – and even pay – for someone else to cut through.
                  </p>
                </Fade>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="mt-2 flex h-full w-full items-center lg:mt-0 lg:pl-16">
              <Fade bottom>
                <div className="relative w-full overflow-hidden">
                  <input
                    className="h-[55px] w-full rounded-md px-4"
                    type="text"
                    placeholder="Email :"
                  />
                  <span className="mt-3 flex md:mt-0 md:block">
                    <button className=" bottom-0 right-0 rounded-md bg-[#F16126] py-[16px] px-[25px] text-white md:absolute">
                      Subscribe
                    </button>
                  </span>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
