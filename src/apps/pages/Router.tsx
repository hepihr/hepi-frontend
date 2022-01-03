import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";

const Router: React.FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={LandingPage} />
    </Routes>
  );
};

export default Router;
