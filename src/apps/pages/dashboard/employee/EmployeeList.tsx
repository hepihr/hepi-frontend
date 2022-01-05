import React from "react";
import PageHelmet from "../../../layouts/PageHelmet";
import EmployeeListRenderer from "./components/EmployeeListRenderer";

const EmployeeList: React.FC = (): JSX.Element => {
  return (
    <>
      <PageHelmet pageTitle="Employee's List" />
      <EmployeeListRenderer />
    </>
  );
};

export default EmployeeList;
