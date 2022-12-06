import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import BlogComponents from "../Components/RootComponents/BlogComponents";
const BlogPage = () => {
  return (
    <Fragment>
      <Suspense fallback={""}>
        <Helmet>
          <title>Blog || NetGrid - React Portfolio Template</title>
          <meta
            name='description'
            content='NetGrid - React Portfolio Template'
          />
        </Helmet>
        <BlogComponents />
      </Suspense>
    </Fragment>
  );
};

export default BlogPage;
