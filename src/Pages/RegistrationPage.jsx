import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Loader from "../Components/Common/Loader";
const RegistrationComponent = React.lazy(() =>
  import("../Components/RootComponents/RegistrationComponent")
);
const RegistrationPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Loader />}>
        <Helmet>
          <title>
            Registration || Next LMS - Professional LMS Online Education Course
            React Template
          </title>
          <meta
            name="description"
            content="Next LMS - Professional LMS Online Education Course React
            Template"
          />
        </Helmet>
        <RegistrationComponent />
      </Suspense>
    </Fragment>
  );
};

export default RegistrationPage;
