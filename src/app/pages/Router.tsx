import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import Employees from "./dashboard/employees/Employees";
import TimeOff from "./dashboard/timeoff/TimeOff";
import PageNotFound from "./PageNotFound";
import LandingPage from "./root/LandingPage";

const Router: React.FC = (): JSX.Element => {
  return (
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path="dashboard">
        <Route index element={<Dashboard />} />
        <Route path="employees" element={<Employees />} />
        <Route path="timeoff" element={<TimeOff />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Router;
