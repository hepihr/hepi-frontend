import React from "react";
import { Helmet } from "react-helmet-async";

interface IPageHelmet {
  title: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const PageHelmet: React.FC<IPageHelmet> = ({
  title,
  description,
  image,
  keywords,
  url,
}): JSX.Element => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
    </Helmet>
  );
};

export default PageHelmet;
