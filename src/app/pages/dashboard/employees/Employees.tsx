import React from "react";
import ApplicationsDashboard from "../../../layouts/applications-dashboard/ApplicationsDashboard";
import PageHelmet from "../../../layouts/PageHelmet";

const Employees: React.FC = (): JSX.Element => {
  return (
    <>
      <PageHelmet title="Dashboard Employees" />
      <ApplicationsDashboard applicationsHeader="Dashboard - Employees">
        <h1>Employees</h1>
      </ApplicationsDashboard>
    </>
  );
};

export default Employees;
