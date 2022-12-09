import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import LoginComponent from "../Components/RootComponents/LoginComponent";
const LoginPage = () => {
  return (
    <Fragment>
      <Suspense fallback={""}>
        <Helmet>
          <title>Login || NetGrid - React Portfolio Template</title>
          <meta
            name="description"
            content="NetGrid - React Portfolio Template"
          />
        </Helmet>
        <LoginComponent />
      </Suspense>
    </Fragment>
  );
};

export default LoginPage;
