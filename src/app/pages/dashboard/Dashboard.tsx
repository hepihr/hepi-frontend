import React from "react";
import ApplicationsDashboard from "../../layouts/applications-dashboard/ApplicationsDashboard";
import PageHelmet from "../../layouts/PageHelmet";

const Dashboard: React.FC = (): JSX.Element => {
  return (
    <>
      <PageHelmet title="Dashboard" />
      <>
        <ApplicationsDashboard>
          <h1>Dashboarxxxd</h1>
        </ApplicationsDashboard>
      </>
    </>
  );
};

export default Dashboard;
