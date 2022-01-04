import React from "react";
import PageError from "../../layouts/PageError";

interface IError401 {
  errorMessage: string;
}

const Error401: React.FC<IError401> = ({ errorMessage }) => {
  return (
    <PageError
      errorCode={401}
      errorMessage={errorMessage}
      pageDescription="401 Unauthorized"
      pageTitle="401 Unauthorized"
    />
  );
};

export default Error401;
