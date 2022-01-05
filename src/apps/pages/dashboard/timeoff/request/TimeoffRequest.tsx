import React from "react";
import PageHelmet from "../../../../layouts/PageHelmet";
import TimeoffRequestRenderer from "./components/TimeoffRequestRenderer";

const TimeoffRequest: React.FC = (): JSX.Element => {
  return (
    <>
      <PageHelmet pageTitle="Timeoff Request" />
      <TimeoffRequestRenderer />
    </>
  );
};

export default TimeoffRequest;
