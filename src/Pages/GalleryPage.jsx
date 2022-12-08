import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import GalleryComponent from "../Components/RootComponents/GalleryComponent";
const GalleryPage = () => {
  return (
    <Fragment>
      <Suspense fallback={""}>
        <Helmet>
          <title>Gallery || NetGrid - React Portfolio Template</title>
          <meta
            name="description"
            content="NetGrid - React Portfolio Template"
          />
        </Helmet>
        <GalleryComponent />
      </Suspense>
    </Fragment>
  );
};

export default GalleryPage;
