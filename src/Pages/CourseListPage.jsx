import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import CourseListComponent from "../Components/RootComponents/CourseListComponent";
const CourseListPage = () => {
  return (
    <Fragment>
      <Suspense fallback={""}>
        <Helmet>
          <title>Course List || NetGrid - React Portfolio Template</title>
          <meta
            name='description'
            content='NetGrid - React Portfolio Template'
          />
        </Helmet>
        <CourseListComponent />
      </Suspense>
    </Fragment>
  );
};

export default CourseListPage;
