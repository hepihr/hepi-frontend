import React from "react";
import PageHelmet from "../../../layouts/PageHelmet";
import EmployeeDetailRenderer from "./components/EmployeeDetailRenderer";

const EmployeeDetail: React.FC = (): JSX.Element => {
  return (
    <>
      <PageHelmet pageTitle="Employee's Detail" />
      <EmployeeDetailRenderer />
    </>
  );
};

export default EmployeeDetail;
