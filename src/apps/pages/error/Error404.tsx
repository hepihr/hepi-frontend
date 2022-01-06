import React from "react";
import PageError from "../../layouts/PageError";

interface IError404 {
  errorMessage: string;
}

const Error404: React.FC<IError404> = ({ errorMessage }) => {
  return <PageError errorCode={404} errorMessage={errorMessage} />;
};

export default Error404;
