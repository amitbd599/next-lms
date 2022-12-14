import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Loader from "../Components/Common/Loader";
const FAQComponent = React.lazy(() =>
  import("../Components/RootComponents/FAQComponent")
);
const FAQPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Loader />}>
        <Helmet>
          <title>
            Event || Next LMS - Professional LMS Online Education Course React
            Template
          </title>
          <meta
            name="description"
            content="Next LMS - Professional LMS Online Education Course
            React Template"
          />
        </Helmet>
        <FAQComponent />
      </Suspense>
    </Fragment>
  );
};

export default FAQPage;
