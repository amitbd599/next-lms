import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import CourseAdvisorComponent from "../Components/RootComponents/CourseAdvisorComponent";
const CourseAdvisorPage = () => {
  return (
    <Fragment>
      <Suspense fallback={""}>
        <Helmet>
          <title>Course Advisor || NetGrid - React Portfolio Template</title>
          <meta
            name='description'
            content='NetGrid - React Portfolio Template'
          />
        </Helmet>
        <CourseAdvisorComponent />
      </Suspense>
    </Fragment>
  );
};

export default CourseAdvisorPage;
