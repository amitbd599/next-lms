import React from "react";
import categoriesData from "../../Database/categoriesData";
import Categories from "../ChildComponents/Elements/Categories";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import IntroSection from "../Common/IntroSection";
import NewsLetter from "../Common/NewsLetter";

const CategoryComponent = () => {
  return (
    <section>
      {/* ============ Header Section ============*/}
      <Header />
      {/* ============ Intro Section ============*/}
      <IntroSection title={"Categories"} />

      {/* ============ Trending Categories ============ */}
      <div className="trendingCategories bg-[#F1F1F1] py-[80px]">
        {/* Courses Info */}
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-5">
            {categoriesData.map((item, index) => (
              <div key={index} className="col-span-3 mb-4">
                <Categories item={item} />
              </div>
            ))}
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

export default CategoryComponent;
