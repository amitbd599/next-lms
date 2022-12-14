import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Loader from "../Components/Common/Loader";
const CourseDetailsComponent = React.lazy(() =>
  import("../Components/RootComponents/CourseDetailsComponent")
);
const CourseDetailsPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Loader />}>
        <Helmet>
          <title>
            Course Details || Next LMS - Professional LMS Online Education
            Course React Template
          </title>
          <meta
            name="description"
            content="Next LMS - Professional LMS Online Education Course
            React Template"
          />
        </Helmet>
        <CourseDetailsComponent />
      </Suspense>
    </Fragment>
  );
};

export default CourseDetailsPage;
