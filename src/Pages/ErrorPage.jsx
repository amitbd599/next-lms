import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Loader from "../Components/Common/Loader";
const ErrorComponent = React.lazy(() =>
  import("../Components/RootComponents/ErrorComponent")
);
const ErrorPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Loader />}>
        <Helmet>
          <title>
            Error || Next LMS - Professional LMS Online Education Course React
            Template
          </title>
          <meta
            name="description"
            content="Next LMS - Professional LMS Online Education Course React
            Template"
          />
        </Helmet>
        <ErrorComponent />
      </Suspense>
    </Fragment>
  );
};

export default ErrorPage;
