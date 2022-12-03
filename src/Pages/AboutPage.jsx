import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import AboutComponent from "../Components/RootComponents/AboutComponent";
const AboutPage = () => {
  return (
    <Fragment>
      <Suspense fallback={""}>
        <Helmet>
          <title>About || NetGrid - React Portfolio Template</title>
          <meta
            name='description'
            content='NetGrid - React Portfolio Template'
          />
        </Helmet>
        <AboutComponent />
      </Suspense>
    </Fragment>
  );
};

export default AboutPage;
