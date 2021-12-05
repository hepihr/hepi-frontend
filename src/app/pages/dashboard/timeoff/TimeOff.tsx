import React from "react";
import ApplicationsDashboard from "../../../layouts/applications-dashboard/ApplicationsDashboard";
import PageHelmet from "../../../layouts/PageHelmet";

const TimeOff: React.FC = (): JSX.Element => {
  return (
    <>
      <PageHelmet title="Dashboard - Time Off" />
      <ApplicationsDashboard applicationsHeader="Dashboard - TimeOff">
        <h1>Time Off</h1>
      </ApplicationsDashboard>
    </>
  );
};

export default TimeOff;
