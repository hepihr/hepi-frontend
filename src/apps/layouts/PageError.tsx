import React from "react";
import PageHelmet from "./PageHelmet";

interface IPageError {
  pageTitle: string;
  pageDescription: string;
  errorCode: number;
  errorMessage: string;
}

const PageError: React.FC<IPageError> = ({
  errorCode,
  errorMessage,
  pageTitle,
}) => {
  return (
    <>
      <PageHelmet pageTitle={pageTitle || ""} />
      <div>
        <h1>{errorCode}</h1>
        <h2>{errorMessage}</h2>
      </div>
    </>
  );
};

export default PageError;
