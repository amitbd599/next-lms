import React from "react";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import IntroSection from "../Common/IntroSection";
import NewsLetter from "../Common/NewsLetter";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { useState } from "react";
import { BiFullscreen } from "react-icons/bi";
import { Fade } from "react-reveal";
const GalleryComponent = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const images = [
    {
      bigImage: "/Assets/Images/gallery/gallery_1.png",
    },
    {
      bigImage: "/Assets/Images/gallery/gallery_2.png",
    },
    {
      bigImage: "/Assets/Images/gallery/gallery_3.png",
    },
    {
      bigImage: "/Assets/Images/gallery/gallery_4.png",
    },
    {
      bigImage: "/Assets/Images/gallery/gallery_10.png",
    },
    {
      bigImage: "/Assets/Images/gallery/gallery_6.png",
    },
    {
      bigImage: "/Assets/Images/gallery/gallery_7.png",
    },
    {
      bigImage: "/Assets/Images/gallery/gallery_8.png",
    },
    {
      bigImage: "/Assets/Images/gallery/gallery_9.png",
    },
    {
      bigImage: "/Assets/Images/gallery/gallery_5.png",
    },
    {
      bigImage: "/Assets/Images/gallery/gallery_11.png",
    },
    {
      bigImage: "/Assets/Images/gallery/gallery_12.png",
    },
  ];
  return (
    <section>
      {/* ============ Header Section ============*/}
      <Header />
      {/* ============ Intro Section ============*/}
      <IntroSection title={"Gallery"} />

      {/* ============  Gallery Info ============ */}
      <div className="gallery  py-[50px] md:py-[60px] lg:py-[70px] xl:py-[80px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <div className="py-6 dark:bg-gray-800 dark:text-gray-50">
                <div className="img__file">
                  <Fade>
                    {images.map((item, index) => (
                      <div className="single__img relative" key={index}>
                        {isOpen && (
                          <Lightbox
                            mainSrc={images[photoIndex].bigImage}
                            nextSrc={images[(photoIndex + 1) % images.length]}
                            prevSrc={
                              images[
                                (photoIndex + images.length - 1) % images.length
                              ]
                            }
                            onCloseRequest={() => {
                              setIsOpen(false);
                            }}
                            onMovePrevRequest={() =>
                              setPhotoIndex(
                                (photoIndex + images.length - 1) % images.length
                              )
                            }
                            onMoveNextRequest={() =>
                              setPhotoIndex((photoIndex + 1) % images.length)
                            }
                          />
                        )}

                        <img
                          className="z-20 mb-4 w-full cursor-pointer rounded-lg object-cover"
                          src={item.bigImage}
                          alt="Next LMS"
                        />
                        <div
                          onClick={() => {
                            setIsOpen(true);
                          }}
                          className="shape absolute top-0 left-0 z-10"
                        >
                          <BiFullscreen className="text-[50px] md:text-[80px]" />
                        </div>
                      </div>
                    ))}
                  </Fade>
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

export default GalleryComponent;
