import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";

const DashboardRouter: React.FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};

export default DashboardRouter;
