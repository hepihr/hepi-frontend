import React from "react";
import PageError from "../../layouts/PageError";

interface IError403 {
  errorMessage: string;
}

const Error403: React.FC<IError403> = ({ errorMessage }) => {
  return (
    <PageError
      errorCode={403}
      errorMessage={errorMessage}
      pageDescription="403 Forbidden"
      pageTitle="403 Forbidden"
    />
  );
};

export default Error403;
