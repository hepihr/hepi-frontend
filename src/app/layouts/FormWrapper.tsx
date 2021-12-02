import React from "react";

interface IFormWrapper {
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const FormWrapper: React.FC<IFormWrapper> = () => {
  return <div></div>;
};

export default FormWrapper;
