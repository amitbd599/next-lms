import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Loader from "../Components/Common/Loader";
const HomeComponent = React.lazy(() =>
  import("../Components/RootComponents/HomeComponent")
);
const HomePage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Loader />}>
        <Helmet>
          <title>
            Home || Next LMS - Professional LMS Online Education Course React
            Template
          </title>
          <meta
            name="description"
            content="Next LMS - Professional LMS Online Education Course React Template"
          />
        </Helmet>
        <HomeComponent />
      </Suspense>
    </Fragment>
  );
};

export default HomePage;
