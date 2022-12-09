import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import RegistrationComponent from "../Components/RootComponents/RegistrationComponent";
const RegistrationPage = () => {
  return (
    <Fragment>
      <Suspense fallback={""}>
        <Helmet>
          <title>Registration || NetGrid - React Portfolio Template</title>
          <meta
            name="description"
            content="NetGrid - React Portfolio Template"
          />
        </Helmet>
        <RegistrationComponent />
      </Suspense>
    </Fragment>
  );
};

export default RegistrationPage;
