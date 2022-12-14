import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Loader from "../Components/Common/Loader";
const LoginComponent = React.lazy(() =>
  import("../Components/RootComponents/LoginComponent")
);
const LoginPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Loader />}>
        <Helmet>
          <title>
            Login || Next LMS - Professional LMS Online Education Course React
            Template
          </title>
          <meta
            name="description"
            content="Next LMS - Professional LMS Online Education Course
            React Template"
          />
        </Helmet>
        <LoginComponent />
      </Suspense>
    </Fragment>
  );
};

export default LoginPage;
