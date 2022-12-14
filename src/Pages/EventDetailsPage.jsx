import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Loader from "../Components/Common/Loader";
const EventDetailsComponent = React.lazy(() =>
  import("../Components/RootComponents/EventDetailsComponent")
);
const EventDetailsPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Loader />}>
        <Helmet>
          <title>
            Event Details || Next LMS - Professional LMS Online Education Course
            React Template
          </title>
          <meta
            name="description"
            content="Next LMS - Professional LMS Online Education Course React
            Template"
          />
        </Helmet>
        <EventDetailsComponent />
      </Suspense>
    </Fragment>
  );
};

export default EventDetailsPage;
