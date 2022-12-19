import React from "react";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import IntroSection from "../Common/IntroSection";

const LoginComponent = () => {
  return (
    <section>
      {/* ============ Header Section ============*/}
      <Header />
      {/* ============ Intro Section ============*/}
      <IntroSection title={"Login"} />

      {/* ============ Login Section ============ */}
      <div className="loginSection py-[50px] md:py-[60px] lg:py-[70px] xl:py-[80px]">
        {/* Courses Info */}
        <div className="container mx-auto">
          <div className=" md:mx-[100px] lg:mx-[180px]  xl:mx-[300px]">
            <div className="rounded-lg bg-white px-6 py-10 shadow-xl md:px-10	">
              <Fade bottom>
                <h2 className="text-[25px] font-semibold leading-[30px] sm:text-[30px] sm:leading-[35px]">
                  Login with Email or Username
                </h2>
              </Fade>
              <Fade bottom>
                <p className="mt-2 text-sm">
                  To login enter the email address associated with your account,
                  and the password.
                </p>
              </Fade>

              <div className="mt-5">
                <Fade bottom>
                  <label className="text-sm" htmlFor="userName">
                    Username or Email Address:
                  </label>
                  <input
                    id="userName"
                    type="text"
                    className="mt-2 w-full rounded-md bg-[#F2F0EF] px-4 py-3"
                  />
                </Fade>
              </div>
              <div className="mt-3">
                <Fade bottom>
                  <label className="text-sm" htmlFor="password">
                    Password:
                  </label>
                  <input
                    id="password"
                    type="text"
                    className="mt-2 w-full rounded-md bg-[#F2F0EF] px-4 py-3"
                  />
                </Fade>
              </div>
              <div className="mt-3 items-center justify-between gap-2 sm:flex">
                <div className="flex items-center gap-2">
                  <Fade bottom>
                    <input type="checkbox" name="" id="Remember" />
                    <label
                      className="cursor-pointer text-sm"
                      htmlFor="Remember"
                    >
                      Remember Me
                    </label>
                  </Fade>
                </div>
                <div>
                  <Fade bottom>
                    <Link
                      className="text-sm duration-200 ease-in-out hover:text-[#F16126]"
                      to={"/"}
                    >
                      Forgot password?
                    </Link>
                  </Fade>
                </div>
              </div>
              <div className="mt-5 flex w-full items-center gap-2">
                <Fade bottom>
                  <button className="block w-full rounded-md bg-[#F16126] px-6 py-3 text-white">
                    Log In
                  </button>
                </Fade>
              </div>
              <div className="mt-5 flex justify-center">
                <Fade bottom>
                  <span> ---------- OR ----------</span>
                </Fade>
              </div>
              <div className="mt-5 flex justify-center gap-2 px-2">
                <div>
                  <Fade bottom>
                    <button className="flex items-center gap-1.5 rounded-md bg-[#3B5998] px-2 py-2 text-sm text-white sm:py-3 sm:px-4">
                      <span className="hidden md:block">
                        <FaFacebookF />
                      </span>
                      <span>Facebook</span>
                    </button>
                  </Fade>
                </div>
                <div>
                  <Fade bottom>
                    <button className="flex items-center gap-1.5 rounded-md bg-[#D85040] px-2 py-2 text-sm text-white sm:py-3 sm:px-4">
                      <span className="hidden md:block">
                        <FaGoogle />
                      </span>
                      <span>Google</span>
                    </button>
                  </Fade>
                </div>
                <div>
                  <Fade bottom>
                    <button className="flex items-center gap-1.5 rounded-md bg-[#24292F] px-2 py-2 text-sm text-white sm:py-3 sm:px-4">
                      <span className="hidden md:block">
                        <FaGithub />
                      </span>
                      <span>Github</span>
                    </button>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ============ Footer Section ============ */}
      <div>
        <Footer />
      </div>
    </section>
  );
};

export default LoginComponent;
