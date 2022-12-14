import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Loader from "../Components/Common/Loader";
const GalleryComponent = React.lazy(() =>
  import("../Components/RootComponents/GalleryComponent")
);
const GalleryPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Loader />}>
        <Helmet>
          <title>
            Gallery || Next LMS - Professional LMS Online Education Course React
            Template
          </title>
          <meta
            name="description"
            content="Next LMS - Professional LMS Online Education Course React
            Template"
          />
        </Helmet>
        <GalleryComponent />
      </Suspense>
    </Fragment>
  );
};

export default GalleryPage;
