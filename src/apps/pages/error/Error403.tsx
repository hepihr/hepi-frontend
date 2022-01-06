import React from "react";
import PageError from "../../layouts/PageError";

interface IError403 {
  errorMessage: string;
}

const Error403: React.FC<IError403> = ({ errorMessage }) => {
  return <PageError errorCode={403} errorMessage={errorMessage} />;
};

export default Error403;
