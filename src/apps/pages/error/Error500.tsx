import React from "react";
import PageError from "../../layouts/PageError";

interface IError500 {
  errorMessage: string;
}

const Error500: React.FC<IError500> = ({ errorMessage }) => {
  return <PageError errorCode={500} errorMessage={errorMessage} />;
};

export default Error500;
