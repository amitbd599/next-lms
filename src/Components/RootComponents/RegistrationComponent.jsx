import React from "react";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import IntroSection from "../Common/IntroSection";

const RegistrationComponent = () => {
  return (
    <section>
      {/* ============ Header Section ============*/}
      <Header />
      {/* ============ Intro Section ============*/}
      <IntroSection title={"Registration"} />

      {/* ============ Login Section ============ */}
      <div className="registrationSection  py-[80px]">
        {/* Courses Info */}
        <div className="container mx-auto">
          <div className="mx-[300px]">
            <div className="rounded-lg bg-white px-10 py-10 shadow-xl	">
              <h2 className="text-[30px] font-semibold">Create New Account</h2>
              <p className="mt-2 text-sm">
                To Registration enter the email address associated with your
                account, and the password.
              </p>
              <div className="mt-5">
                <label className="text-sm" htmlFor="userName">
                  Username:
                </label>
                <input
                  id="userName"
                  type="text"
                  className="mt-2 w-full rounded-md bg-[#F2F0EF] px-4 py-3"
                />
              </div>
              <div className="mt-3">
                <label className="text-sm" htmlFor="password">
                  Password:
                </label>
                <input
                  id="password"
                  type="text"
                  className="mt-2 w-full rounded-md bg-[#F2F0EF] px-4 py-3"
                />
              </div>
              <div className="mt-3">
                <label className="text-sm" htmlFor="email">
                  Email address:
                </label>
                <input
                  id="email"
                  type="text"
                  className="mt-2 w-full rounded-md bg-[#F2F0EF] px-4 py-3"
                />
              </div>
              <div className="mt-3">
                <label className="text-sm" htmlFor="emailAgain">
                  Email (again):
                </label>
                <input
                  id="emailAgain"
                  type="text"
                  className="mt-2 w-full rounded-md bg-[#F2F0EF] px-4 py-3"
                />
              </div>
              <div className="mt-3">
                <label className="text-sm" htmlFor="fastName">
                  First name:
                </label>
                <input
                  id="fastName"
                  type="text"
                  className="mt-2 w-full rounded-md bg-[#F2F0EF] px-4 py-3"
                />
              </div>
              <div className="mt-3">
                <label className="text-sm" htmlFor="lastName">
                  Last name:
                </label>
                <input
                  id="lastName"
                  type="text"
                  className="mt-2 w-full rounded-md bg-[#F2F0EF] px-4 py-3"
                />
              </div>
              <div className="mt-3">
                <label className="text-sm" htmlFor="city">
                  City:
                </label>
                <input
                  id="city"
                  type="text"
                  className="mt-2 w-full rounded-md bg-[#F2F0EF] px-4 py-3"
                />
              </div>
              <div className="mt-4 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="" id="Remember" />
                  <label className="cursor-pointer text-sm" htmlFor="Remember">
                    I agree to terms & Policy.
                  </label>
                </div>
              </div>
              <div className="mt-5 flex w-full items-center gap-2">
                <button className="block w-full rounded-md bg-[#F16126] px-6 py-3 text-white">
                  Create New Account
                </button>
              </div>
              <div className="mt-5 flex justify-center">
                <span> --------------- OR ---------------</span>
              </div>
              <div className="mt-5 flex justify-center gap-3">
                <div>
                  <button className="flex items-center gap-1.5 rounded-md bg-[#3B5998] px-4 py-3 text-white">
                    <span>
                      <FaFacebookF />
                    </span>
                    <span>Facebook</span>
                  </button>
                </div>
                <div>
                  <button className="flex items-center gap-1.5 rounded-md bg-[#D85040] px-4 py-3 text-white">
                    <span>
                      <FaGoogle />
                    </span>
                    <span>Google</span>
                  </button>
                </div>
                <div>
                  <button className="flex items-center gap-1.5 rounded-md bg-[#24292F] px-4 py-3 text-white">
                    <span>
                      <FaGithub />
                    </span>
                    <span>Github</span>
                  </button>
                </div>
              </div>
              <div className="mt-6 flex justify-center">
                <div>
                  <p>
                    Already have an account?{" "}
                    <Link
                      to={"/login"}
                      className="font-semibold duration-300 ease-in-out hover:text-[#F16126]"
                    >
                      Login Here!
                    </Link>{" "}
                  </p>
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

export default RegistrationComponent;
