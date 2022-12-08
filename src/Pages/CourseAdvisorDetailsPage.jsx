import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import CourseAdvisorDetailsComponent from "../Components/RootComponents/CourseAdvisorDetailsComponent";
const CourseAdvisorDetailsPage = () => {
  return (
    <Fragment>
      <Suspense fallback={""}>
        <Helmet>
          <title>Advisor Details || NetGrid - React Portfolio Template</title>
          <meta
            name='description'
            content='NetGrid - React Portfolio Template'
          />
        </Helmet>
        <CourseAdvisorDetailsComponent />
      </Suspense>
    </Fragment>
  );
};

export default CourseAdvisorDetailsPage;
