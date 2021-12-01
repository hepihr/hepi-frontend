import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import Employees from "./dashboard/employees/Employees";
import TimeOff from "./dashboard/timeoff/TimeOff";
import PageNotFound from "./PageNotFound";

const Router: React.FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="dashboard">
        <Route index element={<Dashboard />} />
        <Route path="employees" element={<Employees />} />
        <Route path="timeoff" element={<TimeOff />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export default Router;
