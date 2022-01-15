import React from "react";
import { Helmet } from "react-helmet-async";

interface IPageWrapper {
  pageTitle: string;
}

const PageWrapper: React.FC<IPageWrapper> = ({
  children,
  pageTitle,
}): JSX.Element => {
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <>{children}</>
    </>
  );
};

export default PageWrapper;
