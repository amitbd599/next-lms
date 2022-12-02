import React from "react";
import CountUp from "react-countup";
import TrackVisibility from "react-on-screen";
const Map = () => {
  const countData = [
    {
      count: 4350,
      tag: "Total Courses",
    },
    {
      count: 36300,
      tag: "Total Students",
    },
    {
      count: 126,
      tag: "Total Teacher",
    },
    {
      count: 165,
      tag: "Total Awarded",
    },
  ];
  return (
    <div className='map mt-[100px]'>
      <div className='container mx-auto relative'>
        <div className='grid grid-cols-12 gap-5'>
          {countData.map((item, index) => (
            <div key={index} className='col-span-3'>
              <div className='flex justify-center items-center'>
                <div className='text-center'>
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <h2 className='text-[60px] text-white font-semibold'>
                          <CountUp delay={0} start={0} end={item.count} />
                        </h2>
                      )
                    }
                  </TrackVisibility>

                  <p className='text-white'>{item.tag}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Map;
