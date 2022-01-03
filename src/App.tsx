import React from "react";
import { Route, Routes } from "react-router-dom";
import "./app.css";
import LandingPage from "./apps/pages/LandingPage";

const App: React.FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
};

export default App;
