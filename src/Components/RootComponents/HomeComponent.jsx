import React from "react";
import FeatureCourses from "../ChildComponents/FeatureCourses";
import HeroSection from "../ChildComponents/HeroSection";
import Map from "../ChildComponents/Map";
import TrendingCategories from "../ChildComponents/TrendingCategories";
import Header from "../Common/Header/Header";

const HomeComponent = () => {
  return (
    <section>
      <Header />
      <HeroSection />
      <FeatureCourses />
      <TrendingCategories />
      <Map />
    </section>
  );
};

export default HomeComponent;
