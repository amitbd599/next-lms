import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Loader from "../Components/Common/Loader";
const BlogDetailsComponent = React.lazy(() =>
  import("../Components/RootComponents/BlogDetailsComponent")
);
const BlogDetailsPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Loader />}>
        <Helmet>
          <title>
            Blog Details || Next LMS - Professional LMS Online Education Course
            React Template
          </title>
          <meta
            name="description"
            content="Next LMS - Professional LMS Online Education Course React
            Template"
          />
        </Helmet>
        <BlogDetailsComponent />
      </Suspense>
    </Fragment>
  );
};

export default BlogDetailsPage;
