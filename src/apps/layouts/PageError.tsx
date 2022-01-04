import React from "react";

interface IPageError {
  pageTitle: string;
  pageDescription?: string;
  errorCode: number;
  errorMessage: string;
}

const PageError: React.FC<IPageError> = ({
  errorCode,
  errorMessage,
  pageDescription,
  pageTitle,
}) => {
  return <>
  <</>;
};

export default PageError;
