import { Center } from "@mantine/core";
import React from "react";

interface IFormWrapper {
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const FormWrapper: React.FC<IFormWrapper> = () => {
  return (
    <Center className="w-full">
      <h1>Halo</h1>
    </Center>
  );
};

export default FormWrapper;
