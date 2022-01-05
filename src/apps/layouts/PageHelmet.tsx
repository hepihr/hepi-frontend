import React from "react";
import { Helmet } from "react-helmet-async";

interface IPageHelmet {
  pageTitle: string;
}

const PageHelmet: React.FC<IPageHelmet> = ({ pageTitle }): JSX.Element => {
  return (
    <Helmet>
      <title>{pageTitle}</title>
    </Helmet>
  );
};

export default PageHelmet;
