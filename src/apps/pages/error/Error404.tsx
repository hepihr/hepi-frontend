import React from "react";
import PageError from "../../layouts/PageError";

interface IError404 {
  errorMessage: string;
}

const Error404: React.FC<IError404> = ({ errorMessage }) => {
  return (
    <PageError
      errorCode={404}
      errorMessage={errorMessage}
      pageDescription="404 Not Found"
      pageTitle="404 Not Found"
    />
  );
};

export default Error404;
