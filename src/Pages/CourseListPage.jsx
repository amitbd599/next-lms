import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Loader from "../Components/Common/Loader";
const CourseListComponent = React.lazy(() =>
  import("../Components/RootComponents/CourseListComponent")
);
const CourseListPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Loader />}>
        <Helmet>
          <title>
            Course List || Next LMS - Professional LMS Online Education Course
            React Template
          </title>
          <meta
            name="description"
            content="Next LMS - Professional LMS Online Education Course
            React Template"
          />
        </Helmet>
        <CourseListComponent />
      </Suspense>
    </Fragment>
  );
};

export default CourseListPage;
