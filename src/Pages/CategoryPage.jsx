import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import CategoryComponent from "../Components/RootComponents/CategoryComponent";
const CategoryPage = () => {
  return (
    <Fragment>
      <Suspense fallback={""}>
        <Helmet>
          <title>Category || NetGrid - React Portfolio Template</title>
          <meta
            name="description"
            content="NetGrid - React Portfolio Template"
          />
        </Helmet>
        <CategoryComponent />
      </Suspense>
    </Fragment>
  );
};

export default CategoryPage;
