import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import BlogDetailsComponent from "../Components/RootComponents/BlogDetailsComponent";
const BlogDetailsPage = () => {
  return (
    <Fragment>
      <Suspense fallback={""}>
        <Helmet>
          <title>Blog Details || NetGrid - React Portfolio Template</title>
          <meta
            name='description'
            content='NetGrid - React Portfolio Template'
          />
        </Helmet>
        <BlogDetailsComponent />
      </Suspense>
    </Fragment>
  );
};

export default BlogDetailsPage;
