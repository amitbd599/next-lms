import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import EventDetailsComponent from "../Components/RootComponents/EventDetailsComponent";
const EventDetailsPage = () => {
  return (
    <Fragment>
      <Suspense fallback={""}>
        <Helmet>
          <title>Event Details || NetGrid - React Portfolio Template</title>
          <meta
            name='description'
            content='NetGrid - React Portfolio Template'
          />
        </Helmet>
        <EventDetailsComponent />
      </Suspense>
    </Fragment>
  );
};

export default EventDetailsPage;
