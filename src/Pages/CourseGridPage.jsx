import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Loader from "../Components/Common/Loader";
const CourseGirdComponent = React.lazy(() =>
  import("../Components/RootComponents/CourseGirdComponent")
);
const CourseGridPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Loader />}>
        <Helmet>
          <title>
            Course Gird || Next LMS - Professional LMS Online Education Course
            React Template
          </title>
          <meta
            name="description"
            content="Next LMS - Professional LMS Online Education Course
            React Template"
          />
        </Helmet>
        <CourseGirdComponent />
      </Suspense>
    </Fragment>
  );
};

export default CourseGridPage;
