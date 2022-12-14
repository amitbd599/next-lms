import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Loader from "../Components/Common/Loader";
const ContactComponent = React.lazy(() =>
  import("../Components/RootComponents/ContactComponent")
);
const ContactPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Loader />}>
        <Helmet>
          <title>
            Contact || Next LMS - Professional LMS Online Education Course React
            Template
          </title>
          <meta
            name="description"
            content="Next LMS - Professional LMS Online Education
            Course React Template"
          />
        </Helmet>
        <ContactComponent />
      </Suspense>
    </Fragment>
  );
};

export default ContactPage;
