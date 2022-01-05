import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import Login from "./login/Login";

const Router: React.FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={LandingPage} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
};

export default Router;
