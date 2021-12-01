import React from "react";
import { Helmet } from "react-helmet-async";

const PageNotFound: React.FC = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <title>Page Not Found</title>
      </Helmet>
      <>
        <h1>Page Not Found</h1>
      </>
    </>
  );
};

export default PageNotFound;
