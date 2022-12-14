import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Loader from "../Components/Common/Loader";
const CourseAdvisorComponent = React.lazy(() =>
  import("../Components/RootComponents/CourseAdvisorComponent")
);
const CourseAdvisorPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Loader />}>
        <Helmet>
          <title>
            Course Advisor || Next LMS - Professional LMS Online Education
            Course React Template
          </title>
          <meta
            name="description"
            content="Next LMS - Professional LMS Online Education Course
            React Template"
          />
        </Helmet>
        <CourseAdvisorComponent />
      </Suspense>
    </Fragment>
  );
};

export default CourseAdvisorPage;
