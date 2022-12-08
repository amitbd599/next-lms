import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import ContactComponent from "../Components/RootComponents/ContactComponent";
const ContactPage = () => {
  return (
    <Fragment>
      <Suspense fallback={""}>
        <Helmet>
          <title>Contact || NetGrid - React Portfolio Template</title>
          <meta
            name="description"
            content="NetGrid - React Portfolio Template"
          />
        </Helmet>
        <ContactComponent />
      </Suspense>
    </Fragment>
  );
};

export default ContactPage;
