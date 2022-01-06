import React, { FormEventHandler } from "react";

interface IFormWrapper {
  formSubmit: React.FormEvent<FormEventHandler>;
  formLoading: boolean;
  formIsError: boolean;
  formError: any;
}

const FormWrapper: React.FC<IFormWrapper> = ({
  formError,
  formIsError,
  formLoading,
  formSubmit,
}): JSX.Element => {
  return (
    <>
      <h1>Halo</h1>
    </>
  );
};

export default FormWrapper;
