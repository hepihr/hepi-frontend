import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import Error404 from "./Error404";
import Home from "./home/pages/Home";

const ApplicationsRouter: React.FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route element={<Error404 />} />
    </Routes>
  );
};

export default ApplicationsRouter;
