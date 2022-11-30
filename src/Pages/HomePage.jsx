import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import HomeComponent from "../Components/RootComponents/HomeComponent";

const HomePage = () => {
  return (
    <Fragment>
      <Suspense fallback={""}>
        <Helmet>
          <title>Home || NetGrid - React Portfolio Template</title>
          <meta
            name='description'
            content='NetGrid - React Portfolio Template'
          />
        </Helmet>
        <HomeComponent />
      </Suspense>
    </Fragment>
  );
};

export default HomePage;
