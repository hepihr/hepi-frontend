import React from "react";
import PageError from "./PageError";
import PageLoading from "./PageLoading";

interface IQueryWrapper {
  isLoading: boolean;
  isError: boolean;
  error: any;
}

const QueryWrapper: React.FC<IQueryWrapper> = ({
  error,
  isError,
  isLoading,
  children,
}): JSX.Element => {
  return (
    <>
      {isLoading ? (
        <PageLoading />
      ) : isError ? (
        <PageError errorCode={error.code} errorMessage={error.message} />
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default QueryWrapper;
