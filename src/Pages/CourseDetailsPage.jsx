import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import CourseDetailsComponent from "../Components/RootComponents/CourseDetailsComponent";
const CourseDetailsPage = () => {
  return (
    <Fragment>
      <Suspense fallback={""}>
        <Helmet>
          <title>Course Details || NetGrid - React Portfolio Template</title>
          <meta
            name='description'
            content='NetGrid - React Portfolio Template'
          />
        </Helmet>
        <CourseDetailsComponent />
      </Suspense>
    </Fragment>
  );
};

export default CourseDetailsPage;
