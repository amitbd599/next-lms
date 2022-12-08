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
      <div className="aboutDetails  py-[80px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-7 pr-14">
              <div>
                <h2 className="mb-10 inline border-b-4 border-[#333] pb-1 text-[35px] font-semibold">
                  Contact Details
                </h2>
                <p className="mt-8 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur. Adipiscing tellus
                  lectus aliquam integer gravida tincidunt adipiscing libero
                  nulla. Porttitor consectetur facilisis magna convallis aliquet
                  risus nunc. Non tristique pellentesque vulputate ligula
                  ultrices. Pharetra non vulputate sem amet integer sed.
                </p>
              </div>
              <div className="mt-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center rounded-full bg-[#F16126] px-4 py-4">
                    <FaMapMarkedAlt className="text-[22px] text-white" />
                  </div>
                  <div>
                    <span>
                      4080 Berkshire Circle Knoxville, <br /> TN 37917, New York
                    </span>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-4">
                  <div className="flex items-center justify-center rounded-full bg-[#F16126] px-4 py-4">
                    <FaEnvelopeOpenText className="text-[22px] text-white" />
                  </div>
                  <div>
                    <span className="block">nextinfo@demo.com</span>
                    <span className="block">admin@nextinfo.com</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-4">
                  <div className="flex items-center justify-center rounded-full bg-[#F16126] px-4 py-4">
                    <FaPhoneAlt className="text-[22px] text-white" />
                  </div>
                  <div>
                    <span className="block">270-618-6680</span>
                    <span className="block">362-856-3652</span>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <LoadScript googleMapsApiKey="AIzaSyD8_8cWPDYP1LKn-NN-wW21HUju1fLa_GM">
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                  ></GoogleMap>
                </LoadScript>
              </div>
            </div>
            <div className="col-span-5 ">
              <div>
                <h2 className="mb-10 inline border-b-4 border-[#333] pb-1 text-[35px] font-semibold">
                  Send Us Message Anytime
                </h2>
              </div>
              <div className="mt-8 ">
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full rounded-md border border-[#E9ECEF] px-4 py-3 text-sm"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full rounded-md border border-[#E9ECEF] px-4 py-3 text-sm"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full rounded-md border border-[#E9ECEF] px-4 py-3 text-sm"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full rounded-md border border-[#E9ECEF] px-4 py-3 text-sm"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    id="txtid"
                    name="txtname"
                    rows="10"
                    cols="50"
                    maxlength="200"
                    placeholder="Massage"
                    className="w-full rounded-md border border-[#E9ECEF] px-4 py-3 text-sm"
                  ></textarea>
                </div>
                <div className="mb-4">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" name="" id="trams" />
                    <label htmlFor="trams" className="cursor-pointer text-sm">
                      I agree to the Terms & conditions
                    </label>
                  </div>
                  <div className="mt-5">
                    <button className="flex items-center gap-2 rounded-md bg-[#F16126] px-5 py-4">
                      <span className="text-white">
                        <FaEnvelope />
                      </span>
                      <span className="text-white">Send Message</span>
                    </button>
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
