import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Loader from "../Components/Common/Loader";
const CourseAdvisorDetailsComponent = React.lazy(() =>
  import("../Components/RootComponents/CourseAdvisorDetailsComponent")
);
const CourseAdvisorDetailsPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Loader />}>
        <Helmet>
          <title>
            Advisor Details || Next LMS - Professional LMS Online Education
            Course React Template
          </title>
          <meta
            name="description"
            content="Next LMS - Professional LMS Online Education Course React
            Template"
          />
        </Helmet>
        <CourseAdvisorDetailsComponent />
      </Suspense>
    </Fragment>
  );
};

export default CourseAdvisorDetailsPage;
