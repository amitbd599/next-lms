import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Loader from "../Components/Common/Loader";
const EventComponent = React.lazy(() =>
  import("../Components/RootComponents/EventComponent")
);
const EventPage = () => {
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
            content="Next LMS - Professional LMS Online Education
            Course React Template"
          />
        </Helmet>
        <EventComponent />
      </Suspense>
    </Fragment>
  );
};

export default EventPage;
