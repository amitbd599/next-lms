import React from "react";
import { FaEnvelopeOpenText } from "react-icons/fa";

const NewsLetter = () => {
  return (
    <div className='newsLetter bg-[#002147] w-full  py-16'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-12 gap-5'>
          <div className='col-span-6'>
            <div>
              <div>
                <span>
                  <FaEnvelopeOpenText className='text-[55px] text-[#F16126]' />
                </span>
              </div>
              <div className='mt-0'>
                <h2 className='text-[48px] text-white font-semibold'>
                  Newsletter
                </h2>
                <p className='text-sm leading-relaxed text-white'>
                  There’s certainly still a place for those, too, but in
                  2022-2023 we saw the return of the newsletter. With so much
                  content and news on the web, people are willing to subscribe –
                  and even pay – for someone else to cut through.
                </p>
              </div>
            </div>
          </div>
          <div className='col-span-6'>
            <div className='pl-16 h-full w-full flex items-center'>
              <div className='w-full relative overflow-hidden'>
                <input
                  className='w-full h-[55px] px-4 rounded-md'
                  type='text'
                  placeholder='Email :'
                />
                <button className='bg-[#F16126] absolute py-[16px] px-[25px] bottom-0 right-0 rounded-md text-white'>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
