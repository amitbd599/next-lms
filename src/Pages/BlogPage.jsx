import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Loader from "../Components/Common/Loader";
const BlogComponents = React.lazy(() =>
  import("../Components/RootComponents/BlogComponents")
);
const BlogPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Loader />}>
        <Helmet>
          <title>
            Blog || Next LMS - Professional LMS Online Education Course React
            Template
          </title>
          <meta
            name="description"
            content="Next LMS - Professional LMS Online Education
            Course React Template"
          />
        </Helmet>
        <BlogComponents />
      </Suspense>
    </Fragment>
  );
};

export default BlogPage;
