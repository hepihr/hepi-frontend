import React from "react";
import { Helmet } from "react-helmet-async";

interface IPageHelmet {
  title: string;
}

const PageHelmet: React.FC<IPageHelmet> = ({ title }): JSX.Element => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default PageHelmet;
