import React from "react";
import {
  FaArrowRight,
  FaEnvelope,
  FaEnvelopeOpenText,
  FaMapMarkedAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import IntroSection from "../Common/IntroSection";
import NewsLetter from "../Common/NewsLetter";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { Fade } from "react-reveal";

const ContactComponent = () => {
  const containerStyle = {
    width: "100%",
    height: "300px",
  };

  const center = {
    lat: -3.745,
    lng: -38.523,
  };

  return (
    <section>
      {/* ============ Header Section ============*/}
      <Header />
      {/* ============ Intro Section ============*/}
      <IntroSection title={"Contact"} />

      {/* ============  Contact Info ============ */}
      <div className="aboutDetails  py-[50px] md:py-[60px] lg:py-[70px] xl:py-[80px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 pr-5 lg:col-span-7  xl:pr-14">
              <div>
                <Fade bottom>
                  <h2 className="mb-10 inline border-b-4 border-[#333] pb-1 text-[28px] font-semibold md:text-[35px]">
                    Contact Details
                  </h2>
                </Fade>
                <Fade bottom>
                  <p className="mt-8 text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur. Adipiscing tellus
                    lectus aliquam integer gravida tincidunt adipiscing libero
                    nulla. Porttitor consectetur facilisis magna convallis
                    aliquet risus nunc. Non tristique pellentesque vulputate
                    ligula ultrices. Pharetra non vulputate sem amet integer
                    sed.
                  </p>
                </Fade>
              </div>
              <div className="mt-4">
                <Fade bottom>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center rounded-full bg-[#F16126] px-4 py-4">
                      <FaMapMarkedAlt className="text-[22px] text-white" />
                    </div>
                    <div>
                      <span>
                        4080 Berkshire Circle Knoxville, <br /> TN 37917, New
                        York
                      </span>
                    </div>
                  </div>
                </Fade>
                <Fade bottom>
                  <div className="mt-4 flex items-center gap-4">
                    <div className="flex items-center justify-center rounded-full bg-[#F16126] px-4 py-4">
                      <FaEnvelopeOpenText className="text-[22px] text-white" />
                    </div>
                    <div>
                      <span className="block">nextinfo@demo.com</span>
                      <span className="block">admin@nextinfo.com</span>
                    </div>
                  </div>
                </Fade>
                <Fade bottom>
                  <div className="mt-4 flex items-center gap-4">
                    <div className="flex items-center justify-center rounded-full bg-[#F16126] px-4 py-4">
                      <FaPhoneAlt className="text-[22px] text-white" />
                    </div>
                    <div>
                      <span className="block">270-618-6680</span>
                      <span className="block">362-856-3652</span>
                    </div>
                  </div>
                </Fade>
              </div>
              <div className="mt-6">
                <Fade>
                  <LoadScript googleMapsApiKey="AIzaSyD8_8cWPDYP1LKn-NN-wW21HUju1fLa_GM">
                    <GoogleMap
                      mapContainerStyle={containerStyle}
                      center={center}
                      zoom={10}
                    ></GoogleMap>
                  </LoadScript>
                </Fade>
              </div>
            </div>
            <div className="col-span-12 mt-8 lg:col-span-5 lg:mt-0">
              <div>
                <Fade bottom>
                  <h2 className="mb-10 inline border-b-4 border-[#333] pb-1 text-[22px] font-semibold sm:text-[28px] md:text-[35px]">
                    Send Us Message Anytime
                  </h2>
                </Fade>
              </div>
              <div className="mt-8 ">
                <Fade bottom>
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full rounded-md border border-[#E9ECEF] px-4 py-3 text-sm"
                    />
                  </div>
                </Fade>
                <Fade bottom>
                  <div className="mb-4">
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full rounded-md border border-[#E9ECEF] px-4 py-3 text-sm"
                    />
                  </div>
                </Fade>
                <Fade bottom>
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="w-full rounded-md border border-[#E9ECEF] px-4 py-3 text-sm"
                    />
                  </div>
                </Fade>
                <Fade bottom>
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full rounded-md border border-[#E9ECEF] px-4 py-3 text-sm"
                    />
                  </div>
                </Fade>
                <Fade bottom>
                  <div className="mb-4">
                    <textarea
                      id="txtid"
                      name="txtname"
                      rows="10"
                      cols="50"
                      maxLength="200"
                      placeholder="Massage"
                      className="w-full rounded-md border border-[#E9ECEF] px-4 py-3 text-sm"
                    ></textarea>
                  </div>
                </Fade>

                <div className="mb-4">
                  <Fade bottom>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" name="" id="trams" />
                      <label htmlFor="trams" className="cursor-pointer text-sm">
                        I agree to the Terms & conditions
                      </label>
                    </div>
                  </Fade>

                  <div className="mt-5">
                    <Fade bottom>
                      <button className="flex items-center gap-2 rounded-md bg-[#F16126] px-5 py-4">
                        <span className="text-white">
                          <FaEnvelope />
                        </span>
                        <span className="text-white">Send Message</span>
                      </button>
                    </Fade>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============ NewsLetter ============ */}
      <div>
        <NewsLetter />
      </div>
      {/* ============ Footer Section ============ */}
      <div>
        <Footer />
      </div>
    </section>
  );
};

export default ContactComponent;
