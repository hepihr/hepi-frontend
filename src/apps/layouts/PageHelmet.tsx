import React from "react";
import { Helmet } from "react-helmet-async";

interface IPageHelmet {
  pageTitle: string;
  pageDescription: string;
}

const PageHelmet: React.FC<IPageHelmet> = ({
  pageDescription,
  pageTitle,
}): JSX.Element => {
  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
    </Helmet>
  );
};

export default PageHelmet;
