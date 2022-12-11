import React from "react";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { Fade } from "react-reveal";

const NewsLetter = () => {
  return (
    <div className="newsLetter w-full bg-[#002147]  py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 lg:col-span-6">
            <Fade left>
              <div>
                <div>
                  <span>
                    <FaEnvelopeOpenText className="text-[55px] text-[#F16126]" />
                  </span>
                </div>
                <div className="mt-0">
                  <h2 className="text-[48px] font-semibold text-white">
                    Newsletter
                  </h2>
                  <p className="text-sm leading-relaxed text-white">
                    There’s certainly still a place for those, too, but in
                    2022-2023 we saw the return of the newsletter. With so much
                    content and news on the web, people are willing to subscribe
                    – and even pay – for someone else to cut through.
                  </p>
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <Fade right>
              <div className="mt-2 flex h-full w-full items-center lg:mt-0 lg:pl-16">
                <div className="relative w-full overflow-hidden">
                  <input
                    className="h-[55px] w-full rounded-md px-4"
                    type="text"
                    placeholder="Email :"
                  />
                  <button className="absolute bottom-0 right-0 rounded-md bg-[#F16126] py-[16px] px-[25px] text-white">
                    Subscribe
                  </button>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
