import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import Login from "./login/Login";

const Router: React.FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="login" element={<Login />} />

      <Route path="dashboard" />

      <Route path="dashboard/employees" />
      <Route path="dashboard/employees/{id}" />

      <Route path="dashboard/timeoff/calendar" />
      <Route path="dashboard/timeoff/calendar/{id}" />

      <Route path="dashboard/timeoff/history" />
      <Route path="dashboard/timeoff/history/{id}" />

      <Route path="dashboard/timeoff/request" />
      <Route path="dashboard/timeoff/request/{id}" />
    </Routes>
  );
};

export default Router;
