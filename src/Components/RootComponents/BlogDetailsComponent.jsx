import React from "react";
import {
  FaFacebookF,
  FaFacebookSquare,
  FaHistory,
  FaInstagramSquare,
  FaLinkedinIn,
  FaRegEye,
  FaReply,
  FaTwitter,
  FaUserAlt,
} from "react-icons/fa";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import IntroSection from "../Common/IntroSection";
import NewsLetter from "../Common/NewsLetter";
import Sidebar from "../Common/Sidebar";

const BlogDetailsComponent = () => {
  return (
    <section>
      {/* ============ Header Section ============*/}
      <Header />
      {/* ============ Intro Section ============*/}
      <IntroSection title={"Blog"} />
      {/* Single Blog Section */}
      <div className='blogDetails py-[80px]'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-12 gap-5'>
            <div className='col-span-8'>
              <div>
                {/* Title Section */}
                <div>
                  <h2 className='text-[40px] font-semibold leading-[52px]'>
                    When is it (if ever) a good idea to use JavaScript instead
                    of TypeScript?
                  </h2>
                </div>
                {/* Date Intro */}
                <div className='flex gap-3 mt-2'>
                  <div className='flex gap-2 items-center border-r-2 pr-3'>
                    <span>
                      <FaUserAlt className='text-sm text-[#F16126]' />
                    </span>
                    <span className='text-sm'>Admin</span>
                  </div>
                  <div className='flex gap-2 items-center border-r-2 pr-3'>
                    <span>
                      <FaHistory className='text-sm text-[#F16126]' />
                    </span>
                    <span className='text-sm'>Jan 10, 2022 </span>
                  </div>
                  <div className='flex gap-2 items-center pr-3'>
                    <span>
                      <FaRegEye className='text-sm text-[#F16126]' />
                    </span>
                    <span className='text-sm'>Jan 10, 2022 </span>
                  </div>
                </div>
                {/* Blog Image */}
                <div className='flex justify-center'>
                  <div className='mt-6'>
                    <img
                      className='rounded-md'
                      src='Assets/Images/blogs/Blog_10.png'
                      alt=''
                    />
                  </div>
                </div>
                {/* Blog Description */}
                <div className='description mt-8'>
                  <div className='text-sm leading-relaxed'>
                    <h2 className='text-[30px] font-semibold'>
                      What is TypeScript?
                    </h2>
                    <p>
                      TypeScript is helpful when you have a large codebase which
                      is going to be updated many times by many collaborators.
                      When you are not in that use case, the advantages of
                      TypeScript are much less obvious, besides it is possible
                      to be too orthodox with TypeScript and prevent behaviors
                      which are acceptable. It’s also possible (easy, even) to
                      feel that your TypeScript implementation prevents
                      behaviors which it actually allows. So let’s all agree
                      that TypeScript is no silver bullet.
                    </p>
                    <br />
                    <p>
                      So TypeScript doesn’t always makes things better, but
                      sometimes it makes them worse. There are situations when
                      transpiling TS to JS is just not an option. Also,
                      transpiling with types will always make the resulting JS
                      file larger, when sometimes you have to specifically
                      optimize to have the smallest code file.
                    </p>
                    <br />
                    <p className='font-medium text-base'>
                      Though I see the pros, here’s why I’m not a big fan after
                      using it on a few big projects:
                    </p>

                    <div>
                      <ul className='list-disc pl-6 pt-2'>
                        <li>
                          Not worth the overhead. I find I spend more time
                          trying to make TS happy than I do building. It feels
                          restrictive in a dynamic language like JS.
                        </li>
                        <li>
                          Defining interfaces for dynamic objects just doesn’t
                          work and you end up with lots of “any”.
                        </li>
                        <li>It’s a pain for external libs.</li>
                        <li>
                          I like loose typing (yes you heard that right). I
                          think a language should be smart enough to understand
                          a type and have the flexibility to allow you to change
                          it. I look at this like driving an automatic compared
                          to a manual. Do you really want to be changing gears
                          every time or only when you need to?
                        </li>
                        <li>
                          I like sticking to mainstream tech that won’t
                          disappear in a few years. I’ve seen it before with
                          coffescript, backbone, knockout. All great, all stale.
                          Don’t like playing the cat and mouse game of rewriting
                          my code every time a new tool comes along. Angular to
                          react, react to vue. Devs waste too much time on this.
                          Learn to be excellent at the tools you have instead of
                          expecting the tool to do the work.I find this to be
                          the main issue, most people writing JS shouldn’t be
                          writing JS, and having types won’t fix crappy code.
                        </li>
                        <li>
                          The majority of devs that love TS are C#/[name that
                          language] devs that want to feel at home writing JS. I
                          don’t agree with this. JS is not perfect but it is
                          great. They mocked it for years, now it’s a first
                          class citizen with first support in everything. Learn
                          to work with it instead of trying to make it work the
                          way you are used to and you will come to love it.
                        </li>
                        <li>Debugging in browser is cumbersome with TS.</li>
                        <li>Complicates build process.</li>
                        <li>
                          More difficult for new devs or juniors to learn.
                        </li>
                      </ul>
                    </div>
                    <br />
                    <p>
                      A great solution for adding types to your code without
                      using typescript is to use the TS functionality already
                      build into VScode. You can do this with JSdoc comments. VS
                      code will actually do the type checking like it does with
                      TS.
                    </p>
                    <br />
                    <h2 className='text-[28px] font-semibold'>
                      TypeScript is a superset of JavaScript
                    </h2>
                    <p>
                      As you might know TypeScript is a superset of JavaScript.
                      Therefor you are using JavaScript even if it’s
                      “TypeScript”. But to answer your question in the context
                      they are different. You can use JS instead of TS :
                    </p>
                    <br />
                    <p>
                      1. You are prototyping and don’t know what data types you
                      are going to work with, this will save you sometime.2. For
                      some reason you don’t want to transpile to JavaScript and
                      just want to write directly in JavaScript! (Because
                      TypeScript gets transpiled into JS at the end anyways).3.
                      Small single/couple of functions file/package. Mind you
                      all these points can be debatable, at the end of the day,
                      you make the choice based on your experience and needs.
                    </p>
                    <br />
                    <br />
                    <div className='flex gap-8'>
                      <span>
                        <img src='/Assets/Images/blogs/Blog_3.png' alt='' />
                      </span>
                      <span>
                        <img src='/Assets/Images/blogs/Blog_2.png' alt='' />
                      </span>
                    </div>
                    <br />
                    <p>
                      Even if I was on a project that didn't explicitly use
                      TypeScript, I would use Microsoft VS Code for working on
                      it because it has TypeScript running behind the scenes,
                      helping you keep track of the types of your variables as
                      they flow through your application. TypeScript is like a
                      warm blanket that offers protection from, well, yourself.
                      But whenever there is more than one developer on the
                      project and you are not intimately familiar with the
                      entire code base, TypeScript will save you from having to
                      hunt down declarations and manually tracking function
                      calls in your head to keep track of everything.
                    </p>
                    <br />
                    <p>
                      I've done a couple of these “pre-TypeScript” projects, and
                      the amount of things you need to keep track of is
                      untenable. Let TypeScript help. It does it really well.
                      It's extremely difficult to work with any non-trivial code
                      base in Javascript unless you have some help.
                    </p>
                  </div>
                </div>
                {/* Tag and Search Box */}
                <div className='flex items-center justify-between mt-8 border-[#E9ECEF] border-b pb-10'>
                  <div className='tag '>
                    <div className='flex gap-4 items-center'>
                      <span className='text-lg font-semibold text-[#333]'>
                        Tags :
                      </span>
                      <button className='border border-[#E9ECEF] px-4 py-2 hover:bg-[#F16126] hover:text-white hover:border-[#F16126] ease-in-out duration-200 rounded-md'>
                        JavaScript
                      </button>
                      <button className='border border-[#E9ECEF] px-4 py-2 hover:bg-[#F16126] hover:text-white hover:border-[#F16126] ease-in-out duration-200 rounded-md'>
                        PHP
                      </button>
                      <button className='border border-[#E9ECEF] px-4 py-2 hover:bg-[#F16126] hover:text-white hover:border-[#F16126] ease-in-out duration-200 rounded-md'>
                        Java
                      </button>
                    </div>
                  </div>
                  <div className='share'>
                    <div className='flex gap-2 items-center'>
                      <span className='text-lg font-semibold text-[#333]'>
                        Share on:
                      </span>
                      <a
                        href='#'
                        className='text-[20px] hover:text-[#F16126] p-1 ml-2 ease-in-out duration-200'
                      >
                        <FaFacebookF />
                      </a>
                      <a
                        href='#'
                        className='text-[20px] hover:text-[#F16126] p-[1px]  ease-in-out duration-200'
                      >
                        <FaTwitter />
                      </a>
                      <a
                        href='#'
                        className='text-[20px] hover:text-[#F16126] p-[1px] ease-in-out duration-200'
                      >
                        <FaLinkedinIn />
                      </a>
                      <a
                        href='#'
                        className='text-[20px] hover:text-[#F16126] p-[1px] ease-in-out duration-200'
                      >
                        <FaInstagramSquare />
                      </a>
                    </div>
                  </div>
                </div>
                {/* Comment Section */}
                <div className='commentSection mt-8'>
                  <div>
                    <h2 className='text-[22px] font-semibold'>3 Comments</h2>
                  </div>
                  <div className='mainContent border-b border-[#E9ECEF] pb-4'>
                    <div className='main mt-8 flex w-full '>
                      <div className='w-2/12 flex justify-center'>
                        <div>
                          <img
                            className='w-[80px] rounded-full'
                            src='/Assets/Images/students/Students_1.png'
                            alt=''
                          />
                        </div>
                      </div>
                      <div className='w-10/12 border-b border-[#E9ECEF] pb-4'>
                        <h2 className='text-lg font-semibold'>Alex Amit</h2>
                        <p className='text-sm mt-[-2px]'>Jan 20, 2022</p>
                        <p className='mt-1 text-sm leading-relaxed'>
                          Typescript is the millennial “team manager” of
                          languages. Everyone gets a prize and no one fails. It
                          turns great javascript coders into mediocre typescript
                          coders and great C# or Java coders into mediocre
                          typescript coders.
                        </p>
                        <div className='mt-2 ml-2'>
                          <button className='font-semibold text-[#333] flex gap-2 items-center'>
                            <span>Reply</span>
                            <span>
                              <FaReply />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className='child mt-8 flex w-full pl-16'>
                      <div className='w-2/12 flex justify-center'>
                        <div>
                          <img
                            className='w-[80px] rounded-full'
                            src='/Assets/Images/students/Students_2.png'
                            alt=''
                          />
                        </div>
                      </div>
                      <div className='w-10/12 '>
                        <h2 className='text-lg font-semibold'>Admin</h2>
                        <p className='text-sm mt-[-2px]'>Jan 26, 2022</p>
                        <p className='mt-1 text-sm leading-relaxed'>
                          Typescript is the millennial “team manager” of
                          languages. Everyone gets a prize and no one fails. It
                          turns great javascript coders into mediocre typescript
                          coders.
                        </p>
                        <div className='mt-2 ml-2'>
                          <button className='font-semibold text-[#333] flex gap-2 items-center'>
                            <span>Reply</span>
                            <span>
                              <FaReply />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='mainContent  pb-4'>
                    <div className='main mt-8 flex w-full '>
                      <div className='w-2/12 flex justify-center'>
                        <div>
                          <img
                            className='w-[80px] rounded-full'
                            src='/Assets/Images/students/Students_3.png'
                            alt=''
                          />
                        </div>
                      </div>
                      <div className='w-10/12 border-b border-[#E9ECEF] pb-4'>
                        <h2 className='text-lg font-semibold'>Raj Roy</h2>
                        <p className='text-sm mt-[-2px]'>Jan 27, 2022</p>
                        <p className='mt-1 text-sm leading-relaxed'>
                          Typescript is the millennial “team manager” of
                          languages. Everyone gets a prize and no one fails. It
                          turns great javascript coders into mediocre typescript
                          coders and great C# or Java coders into mediocre
                          typescript coders.
                        </p>
                        <div className='mt-2 ml-2'>
                          <button className='font-semibold text-[#333] flex gap-2 items-center'>
                            <span>Reply</span>
                            <span>
                              <FaReply />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className='child mt-8 flex w-full pl-16'>
                      <div className='w-2/12 flex justify-center'>
                        <div>
                          <img
                            className='w-[80px] rounded-full'
                            src='/Assets/Images/students/Students_2.png'
                            alt=''
                          />
                        </div>
                      </div>
                      <div className='w-10/12 '>
                        <h2 className='text-lg font-semibold'>Admin</h2>
                        <p className='text-sm mt-[-2px]'>Jan 29, 2022</p>
                        <p className='mt-1 text-sm leading-relaxed'>
                          Typescript is the millennial “team manager” of
                          languages. Everyone gets a prize and no one fails. It
                          turns great javascript coders into mediocre typescript
                          coders.
                        </p>
                        <div className='mt-2 ml-2'>
                          <button className='font-semibold text-[#333] flex gap-2 items-center'>
                            <span>Reply</span>
                            <span>
                              <FaReply />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='commentInput mt-14'>
                  <div>
                    <h2 className='text-[22px] font-semibold'>
                      Leave Your Comment Here
                    </h2>
                  </div>
                  <div className='mt-5'>
                    <div className='flex gap-3'>
                      <div className='w-full'>
                        <input
                          className='text-slate-400 border border-[#E9ECEF] px-3 py-3 rounded-lg w-full text-sm'
                          type='text'
                          placeholder='Your Name*'
                        />
                      </div>
                      <div className='w-full'>
                        <input
                          className='text-slate-400 border border-[#E9ECEF] px-3 py-3 rounded-lg w-full text-sm'
                          type='text'
                          placeholder='Your Email*'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='mt-5'>
                    <textarea
                      className='text-slate-400 border border-[#E9ECEF] px-3 py-3 rounded-lg w-full text-sm'
                      id='txtid'
                      name='txtname'
                      rows='6'
                      cols='50'
                      maxlength='200'
                      placeholder='Leave A Comment ...'
                    ></textarea>
                  </div>
                  <div className='flex gap-2 items-center mt-3'>
                    <input type='checkbox' name='' id='comment' />
                    <label htmlFor='comment' className='text-sm'>
                      Save my name, email, and website in this browser for the
                      next time I comment.
                    </label>
                  </div>
                  <div>
                    <button className='bg-[#F16126] px-8 py-3 rounded-md text-white mt-4'>
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-span-4 pl-6'>
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
      {/* ============ NewsLetter ============ */}
      <NewsLetter />
      {/* ============ Footer Section ============ */}
      <Footer />
    </section>
  );
};

export default BlogDetailsComponent;
