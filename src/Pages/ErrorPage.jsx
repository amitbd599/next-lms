import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import ErrorComponent from "../Components/RootComponents/ErrorComponent";
const ErrorPage = () => {
  return (
    <Fragment>
      <Suspense fallback={""}>
        <Helmet>
          <title>Error || NetGrid - React Portfolio Template</title>
          <meta
            name="description"
            content="NetGrid - React Portfolio Template"
          />
        </Helmet>
        <ErrorComponent />
      </Suspense>
    </Fragment>
  );
};

export default ErrorPage;
