import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import CourseGirdComponent from "../Components/RootComponents/CourseGirdComponent";
const CourseGridPage = () => {
  return (
    <Fragment>
      <Suspense fallback={""}>
        <Helmet>
          <title>Course Gird || NetGrid - React Portfolio Template</title>
          <meta
            name='description'
            content='NetGrid - React Portfolio Template'
          />
        </Helmet>
        <CourseGirdComponent />
      </Suspense>
    </Fragment>
  );
};

export default CourseGridPage;
