import React from "react";

const Loader = () => {
  return (
    <div className="loader">
      <div className="loaderBody ">
        <div className="loaderBody-inner">
          <div className="loader-line"></div>
          <div className="loader-line"></div>
          <div className="loader-line"></div>

          <div className="spinner-circle">&#9679;</div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
