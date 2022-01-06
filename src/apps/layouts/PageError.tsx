import React from "react";

interface IPageError {
  errorCode: number;
  errorMessage: string;
}

const PageError: React.FC<IPageError> = ({ errorCode, errorMessage }) => {
  return (
    <>
      <div>
        <h1>{errorCode}</h1>
        <h2>{errorMessage}</h2>
      </div>
    </>
  );
};

export default PageError;
