import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import FAQComponent from "../Components/RootComponents/FAQComponent";
const FAQPage = () => {
  return (
    <Fragment>
      <Suspense fallback={""}>
        <Helmet>
          <title>Event || NetGrid - React Portfolio Template</title>
          <meta
            name='description'
            content='NetGrid - React Portfolio Template'
          />
        </Helmet>
        <FAQComponent />
      </Suspense>
    </Fragment>
  );
};

export default FAQPage;
