import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import EventComponent from "../Components/RootComponents/EventComponent";
const EventPage = () => {
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
        <EventComponent />
      </Suspense>
    </Fragment>
  );
};

export default EventPage;
